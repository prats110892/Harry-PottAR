package me.pratik_shah.harrypottar.model;

import android.location.Location;

import com.google.gson.annotations.SerializedName;

import org.parceler.Parcel;

/**
 *
 * Created by batman on 12/3/16.
 */

@Parcel
public class DirectionLocation {
    @SerializedName("lat")
    public double mLatitude;
    @SerializedName("lng")
    public double mLongitude;

    public Location getLocationObject() {
        Location location = new Location("GOOGLE_MAPS");
        location.setLatitude(mLatitude);
        location.setLongitude(mLongitude);
        return location;
    }
}
