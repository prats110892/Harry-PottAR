package me.pratik_shah.harrypottar.model;

import com.google.gson.annotations.SerializedName;

import org.parceler.Parcel;

import java.lang.reflect.Array;
import java.util.ArrayList;

/**
 * Created by batman on 12/3/16.
 */

@Parcel
public class GeocodedWaypoint {
    public static final String TAG = GeocodedWaypoint.class.getSimpleName();
    @SerializedName("geocoder_status")
    public String mStatus;
    @SerializedName("place_id")
    public String mPlaceID;
    @SerializedName("types")
    public ArrayList<String> mTypes = new ArrayList<>();

}
