package me.pratik_shah.harrypottar.model;

import com.google.gson.annotations.SerializedName;

import org.parceler.Parcel;

import java.util.ArrayList;

/**
 * Created by batman on 12/3/16.
 */
@Parcel
public class DirectionResponse {
    @SerializedName("status")
    public String mStatus;
    @SerializedName("geocoded_waypoints")
    public ArrayList<GeocodedWaypoint> mGeocodedWaypoints = new ArrayList<>();
    @SerializedName("routes")
    public ArrayList<Route> mRoutes = new ArrayList<>();
}
