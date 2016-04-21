package me.pratik_shah.harrypottar.model;

import com.google.gson.annotations.SerializedName;

import org.parceler.Parcel;

import java.util.ArrayList;

/**
 * Created by batman on 12/3/16.
 */

@Parcel
public class Route {
    @SerializedName("summary")
    public String mSummary;
    @SerializedName("legs")
    public ArrayList<Leg> mLegs = new ArrayList<>();
    @SerializedName("waypoint_order")
    public ArrayList<Integer> mWaypointOrder = new ArrayList<>();
    @SerializedName("overview_polyline")
    public Polyline mOverviewPolyline;
    @SerializedName("bounds")
    public Bounds mBounds;
    @SerializedName("copyrights")
    public String mCopyright;
    @SerializedName("warnings")
    public ArrayList<Object> mWarnings = new ArrayList<>();
}