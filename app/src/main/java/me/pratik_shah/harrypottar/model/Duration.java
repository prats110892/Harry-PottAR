package me.pratik_shah.harrypottar.model;

import com.google.gson.annotations.SerializedName;

import org.parceler.Parcel;

/**
 * Created by batman on 12/3/16.
 */
@Parcel
public class Duration {
    @SerializedName("value")
    public int mValue;
    @SerializedName("text")
    public String mText;
}
