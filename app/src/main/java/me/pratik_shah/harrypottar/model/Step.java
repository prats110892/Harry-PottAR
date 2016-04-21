package me.pratik_shah.harrypottar.model;

import com.google.gson.annotations.SerializedName;

import org.parceler.Parcel;

/**
 * Created by batman on 12/3/16.
 */
@Parcel
public class Step {
    @SerializedName("travel_mode")
    public String mTravelMode;
    @SerializedName("start_location")
    public DirectionLocation mStartLocation;
    @SerializedName("end_location")
    public DirectionLocation mEndLocation;
    @SerializedName("polyline")
    public Polyline mPolyline;
    @SerializedName("duration")
    public Duration mDuration;
    @SerializedName("html_instructions")
    public String mHTMLInstructions;
    @SerializedName("distance")
    public Distance mDistance;
}
