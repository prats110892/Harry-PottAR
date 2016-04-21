package me.pratik_shah.harrypottar;

import android.Manifest;
import android.content.Context;
import android.content.pm.PackageManager;
import android.hardware.GeomagneticField;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.location.Address;
import android.location.Geocoder;
import android.location.Location;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v4.app.ActivityCompat;
import android.util.Log;

import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.location.LocationServices;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import me.pratik_shah.harrypottar.activities.FollowActivity;
import me.pratik_shah.harrypottar.model.DirectionResponse;
import me.pratik_shah.harrypottar.model.Leg;
import me.pratik_shah.harrypottar.model.Step;
import me.pratik_shah.harrypottar.services.TurnByTurnService;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * Util for navigation.
 * Created by batman on 13/3/16.
 */

public class NavigationUtil implements GoogleApiClient.ConnectionCallbacks,
        GoogleApiClient.OnConnectionFailedListener {

    private static final String TAG = NavigationUtil.class.getSimpleName();
    private static final float SmoothFactorCompass = 0.5f;
    private static final float SmoothThresholdCompass = 30.0f;

    private static NavigationUtil mNavigationUtil = null;

    private float[] mGravity;
    private float[] mGeomagnetic;
    private float mOldCompass = 0.0f;

    private SensorManager mSensorManager;
    private SensorEventListener mSensorEventListener = new SensorEventListener() {
        @Override
        public void onSensorChanged(SensorEvent event) {
            float azimuth = 0;
            if (event.sensor.getType() == Sensor.TYPE_ACCELEROMETER)
                mGravity = event.values;
            if (event.sensor.getType() == Sensor.TYPE_MAGNETIC_FIELD)
                mGeomagnetic = event.values;
            if (mGravity != null && mGeomagnetic != null) {
                float R[] = new float[9];
                float I[] = new float[9];
                boolean success = SensorManager.getRotationMatrix(R, I, mGravity, mGeomagnetic);
                if (success) {
                    float orientation[] = new float[3];
                    SensorManager.getOrientation(R, orientation);
                    azimuth = orientation[0]; // orientation contains: azimut, pitch and roll
                }
            }
            //Discard 0.0-values
            if (azimuth == 0.0) {
                return;
            }
            //Convert the sensor value to degrees
            azimuth = (float) Math.toDegrees(azimuth); //same as azimuth = -azimuth*360/(2*3.14159f);
            //Smooth the sensor-output
            azimuth = smoothValues(azimuth);
            updateGlobalValues(azimuth);
        }

        @Override
        public void onAccuracyChanged(Sensor sensor, int accuracy) {

        }
    };

    private GoogleApiClient mGoogleApiClient;
    private Context mContext;

    private ArrayList<Location> mStepByStepLocations = new ArrayList<>();
    private ArrayList<Location> mDoneSteps = new ArrayList<>();

    private NavigationUtil(Context context) {
        mContext = context;
        if (mGoogleApiClient == null) {
            mGoogleApiClient = new GoogleApiClient.Builder(mContext)
                    .addConnectionCallbacks(this)
                    .addOnConnectionFailedListener(this)
                    .addApi(LocationServices.API)
                    .build();
        }
    }

    public static NavigationUtil getInstance(Context context) {
        if (mNavigationUtil == null) {
            mNavigationUtil = new NavigationUtil(context);
        }
        return mNavigationUtil;
    }

    public static TurnByTurnService getTurnByTurnService() {
        Retrofit retrofit = new Retrofit.Builder().addConverterFactory(GsonConverterFactory.create())
                .baseUrl(TurnByTurnService.API_HOST).build();
        return retrofit.create(TurnByTurnService.class);
    }

    public void connect() {
        mGoogleApiClient.connect();
    }

    public void disconnect() {
        mGoogleApiClient.disconnect();
    }

    public void registerSensors() {
        mSensorManager = (SensorManager) mContext.getSystemService(Context.SENSOR_SERVICE);
        mSensorManager.registerListener(mSensorEventListener, mSensorManager.
                getDefaultSensor(Sensor.TYPE_ACCELEROMETER), SensorManager.SENSOR_DELAY_UI);
        mSensorManager.registerListener(mSensorEventListener, mSensorManager.
                getDefaultSensor(Sensor.TYPE_MAGNETIC_FIELD), SensorManager.SENSOR_DELAY_UI);
    }

    public void unregisterSensors() {
        mSensorManager.unregisterListener(mSensorEventListener);
    }


    public void getDirections(String address) {
        Geocoder geoCoder = new Geocoder(mContext, Locale.getDefault());
        Location currentLocation = getLastKnownLocation();
        try {
            List<Address> addresses = geoCoder.getFromLocationName(address, 1);
            if (addresses.size() > 0) {
                Log.d(TAG, addresses.get(0).getLatitude() + "," + addresses.get(0).getLongitude());
                Log.d(TAG, currentLocation.getLatitude() + "," + currentLocation.getLongitude());
                String origin = currentLocation.getLatitude() + "," + currentLocation.getLongitude();
                String destination = addresses.get(0).getLatitude() + "," + addresses.get(0).getLongitude();
                String mode = "walking";
                String key = mContext.getString(R.string.google_directions_key);
                Call<DirectionResponse> directionResponseCall = NavigationUtil.getTurnByTurnService().
                        getTurnByTurnDirections(origin, destination, mode, key);
                directionResponseCall.enqueue(new Callback<DirectionResponse>() {
                    @Override
                    public void onResponse(Call<DirectionResponse> call, Response<DirectionResponse> response) {
                        populateSteps(response.body());
                        ((FollowActivity) mContext).startNavigationUIUpdate();
                    }

                    @Override
                    public void onFailure(Call<DirectionResponse> call, Throwable t) {
                        Log.e(TAG, t.toString());
                    }
                });

            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    public void populateSteps(DirectionResponse directionResponse) {
        mStepByStepLocations.clear();
        mDoneSteps.clear();
        for (Leg leg : directionResponse.mRoutes.get(0).mLegs) {
            for (Step step : leg.mSteps) {
                mStepByStepLocations.add(step.mStartLocation.getLocationObject());
                mStepByStepLocations.add(step.mEndLocation.getLocationObject());
            }
        }
        //First location will be current location
        mStepByStepLocations.remove(0);
        Log.d(TAG, "Number of Steps Received: " + mStepByStepLocations.size());
    }


    public void resetSteps() {
        mStepByStepLocations.clear();
        mDoneSteps.clear();
    }

    public void updateGlobalValues(float heading) {
        if (mStepByStepLocations.isEmpty()) {
            return;
        }

        Location currentLocation = getLastKnownLocation();

        if (currentLocation.distanceTo(mStepByStepLocations.get(0)) <= 9.14) {
            mDoneSteps.add(mStepByStepLocations.get(0));
            mStepByStepLocations.remove(0);
            ((FollowActivity) mContext).updateSteps(mStepByStepLocations.size());
            if (mStepByStepLocations.isEmpty()) {
                ((FollowActivity) mContext).stopNavigationUIUpdate();
                resetSteps();
                return;
            }
        }

        //heading with declination
        heading = (heading + new GeomagneticField(
                Double.valueOf(currentLocation.getLatitude()).floatValue(),
                Double.valueOf(currentLocation.getLongitude()).floatValue(),
                Double.valueOf(currentLocation.getAltitude()).floatValue(),
                System.currentTimeMillis()
        ).getDeclination());

        //bearing
        float bearing = currentLocation.bearingTo(mStepByStepLocations.get(0));
        heading = ((bearing - heading) * -1);

        //normalize to 360
        heading = ((heading + 360) % 360);
        ((FollowActivity) mContext).updateDirection(heading);
    }

    public Location getLastKnownLocation() {
        if (ActivityCompat.checkSelfPermission(mContext, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(mContext, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
            return null;
        }
        return LocationServices.FusedLocationApi.getLastLocation(mGoogleApiClient);
    }

    private float smoothValues(float newCompass) {
        if (Math.abs(newCompass - mOldCompass) < 180) {
            if (Math.abs(newCompass - mOldCompass) > SmoothThresholdCompass) {
                mOldCompass = newCompass;
            } else {
                mOldCompass = mOldCompass + SmoothFactorCompass * (newCompass - mOldCompass);
            }
        } else {
            if (360.0 - Math.abs(newCompass - mOldCompass) > SmoothThresholdCompass) {
                mOldCompass = newCompass;
            } else {
                if (mOldCompass > newCompass) {
                    mOldCompass = (mOldCompass + SmoothFactorCompass * ((360 + newCompass - mOldCompass) % 360) + 360) % 360;
                } else {
                    mOldCompass = (mOldCompass - SmoothFactorCompass * ((360 - newCompass + mOldCompass) % 360) + 360) % 360;
                }
            }
        }
        return mOldCompass;
    }

    @Override
    public void onConnected(Bundle bundle) {

    }

    @Override
    public void onConnectionSuspended(int i) {

    }

    @Override
    public void onConnectionFailed(@NonNull ConnectionResult connectionResult) {

    }
}
