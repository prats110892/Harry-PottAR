package me.pratik_shah.harrypottar.activities;

import android.app.Activity;
import android.content.Context;
import android.graphics.Matrix;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.Toast;

import com.wikitude.WikitudeSDK;
import com.wikitude.WikitudeSDKStartupConfiguration;
import com.wikitude.common.camera.CameraSettings;
import com.wikitude.common.rendering.RenderExtension;
import com.wikitude.rendering.ExternalRendering;

import me.pratik_shah.harrypottar.NavigationUtil;
import me.pratik_shah.harrypottar.R;
import me.pratik_shah.harrypottar.WikitudeSDKConstants;
import me.pratik_shah.harrypottar.rendering.external.CustomSurfaceView;
import me.pratik_shah.harrypottar.rendering.external.Driver;
import me.pratik_shah.harrypottar.rendering.external.GLRenderer;

/**
 * An activity that creates a follow path via the camera and wand directions
 * Created by batman on 13/3/16.
 */

public class FollowActivity extends Activity implements ExternalRendering {
    public static final String TAG = FollowActivity.class.getSimpleName();

    private EditText mAddressInput;
    private FrameLayout mCustomSurface;
    private ImageView mWand;

    private WikitudeSDK mWikitudeSDK;
    private CustomSurfaceView mView;
    private Driver mDriver;
    private GLRenderer mGLRenderer;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_follow);
        mCustomSurface = (FrameLayout) findViewById(R.id.id_custom_surface);
        mWand = (ImageView) findViewById(R.id.id_wand);
        mAddressInput = (EditText) findViewById(R.id.id_destination_address);
        Button goButton = (Button) findViewById(R.id.id_go_button);
        goButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String address = mAddressInput.getText().toString();
                ((InputMethodManager) (FollowActivity.this.
                        getSystemService(Context.INPUT_METHOD_SERVICE))).
                        hideSoftInputFromInputMethod(getCurrentFocus().getWindowToken(),
                                InputMethodManager.HIDE_NOT_ALWAYS);
                NavigationUtil.getInstance(FollowActivity.this).getDirections(address);
            }
        });

        mWikitudeSDK = new WikitudeSDK(this);
        WikitudeSDKStartupConfiguration startupConfiguration = new
                WikitudeSDKStartupConfiguration(WikitudeSDKConstants.WIKITUDE_SDK_KEY,
                CameraSettings.CameraPosition.BACK, CameraSettings.CameraFocusMode.CONTINUOUS);
        mWikitudeSDK.onCreate(getApplicationContext(), startupConfiguration);
    }

    @Override
    protected void onStart() {
        super.onStart();
        NavigationUtil.getInstance(this).connect();
    }

    @Override
    protected void onStop() {
        NavigationUtil.getInstance(this).disconnect();
        super.onStop();
    }

    @Override
    protected void onResume() {
        super.onResume();
        NavigationUtil.getInstance(this).registerSensors();
        mWikitudeSDK.onResume();
        mView.onResume();
        mDriver.start();
    }

    @Override
    protected void onPause() {
        NavigationUtil.getInstance(this).unregisterSensors();
        mWikitudeSDK.onPause();
        mView.onPause();
        mDriver.stop();
        super.onPause();
    }

    @Override
    protected void onDestroy() {
        mWikitudeSDK.onDestroy();
        super.onDestroy();
    }

    @Override
    public void onRenderExtensionCreated(final RenderExtension renderExtension_) {
        mGLRenderer = new GLRenderer(renderExtension_);
        mView = new CustomSurfaceView(getApplicationContext(), mGLRenderer);
        mDriver = new Driver(mView, 30);
        mCustomSurface.addView(mView);
    }

    public void startNavigationUIUpdate() {
        mWand.setVisibility(View.VISIBLE);
    }

    public void updateDirection(float newAngle) {
        Log.d(TAG, "Updating Direction to new Angle: " + newAngle);
        mWand.setRotation(newAngle);
    }

    public void stopNavigationUIUpdate() {
        Toast.makeText(this, "You have reached", Toast.LENGTH_LONG).show();
        mWand.setVisibility(View.GONE);
    }

    public void updateSteps(int stepsLeft) {
        Toast.makeText(this, "Steps Left: " + stepsLeft, Toast.LENGTH_LONG).show();
    }
}
