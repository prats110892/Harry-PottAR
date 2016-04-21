package me.pratik_shah.harrypottar.services;

import me.pratik_shah.harrypottar.model.DirectionResponse;
import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.GET;
import retrofit2.http.Query;

/**
 * A Retrofit service that wraps a REST API for turn by turn directions into Java Code.
 * Created by batman on 13/3/16.
 */
public interface TurnByTurnService {
    public static final String API_HOST = "https://maps.googleapis.com";

    @GET("maps/api/directions/json")
    Call<DirectionResponse> getTurnByTurnDirections(@Query("origin") String origin,
                                                    @Query("destination") String destination,
                                                    @Query("mode") String travelMode,
                                                    @Query("key") String api_key);
}
