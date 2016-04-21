package me.pratik_shah.harrypottar.model;

import com.google.gson.annotations.SerializedName;

import org.parceler.Parcel;

import java.util.ArrayList;

/**
 * Created by batman on 12/3/16.
 */
@Parcel
public class Leg {
    @SerializedName("steps")
    public ArrayList<Step> mSteps = new ArrayList<>();
    @SerializedName("duration")
    public Duration mDuration;
    @SerializedName("distance")
    public Distance mDistance;
    @SerializedName("start_location")
    public DirectionLocation mStartLocation;
    @SerializedName("end_location")
    public DirectionLocation mEndLocation;
    @SerializedName("start_address")
    public String mStartAddress;
    @SerializedName("end_address")
    public String mEndAddress;

}
