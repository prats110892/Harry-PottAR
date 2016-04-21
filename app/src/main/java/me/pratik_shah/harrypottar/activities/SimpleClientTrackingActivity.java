package me.pratik_shah.harrypottar.activities;

import android.app.Activity;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.TextView;

import com.wikitude.WikitudeSDK;
import com.wikitude.WikitudeSDKStartupConfiguration;
import com.wikitude.common.camera.CameraSettings;
import com.wikitude.common.rendering.RenderExtension;
import com.wikitude.common.tracking.RecognizedTarget;
import com.wikitude.common.tracking.Rectangle;
import com.wikitude.rendering.ExternalRendering;
import com.wikitude.tracker.ClientTracker;
import com.wikitude.tracker.ClientTrackerEventListener;
import com.wikitude.tracker.Tracker;

import me.pratik_shah.harrypottar.R;
import me.pratik_shah.harrypottar.WikitudeSDKConstants;
import me.pratik_shah.harrypottar.rendering.external.CustomSurfaceView;
import me.pratik_shah.harrypottar.rendering.external.Driver;
import me.pratik_shah.harrypottar.rendering.external.GLRenderer;

/**
 * Simple Client Tracker
 *
 */
public class SimpleClientTrackingActivity extends Activity implements ClientTrackerEventListener,
        ExternalRendering {

    private static final String TAG = SimpleClientTrackingActivity.class.getSimpleName();
    private static final int SHOW = 1;
    private static final int HIDE = 0;

    private WikitudeSDK mWikitudeSDK;
    private CustomSurfaceView mView;
    private Driver mDriver;
    private GLRenderer mGLRenderer;

    private Rectangle mOverlayRectangle;

    private FrameLayout mCustomSurface;
    private TextView mTrolleyText;
    private ImageView mOverlayImage;

    private Handler mHandler = new Handler(new Handler.Callback() {
        @Override
        public boolean handleMessage(Message msg) {
            switch (msg.what) {
                case SHOW:
                    mTrolleyText.setVisibility(View.VISIBLE);
                    mOverlayImage.setVisibility(View.VISIBLE);
//                    mOverlayImage.setLeft(mOverlayRectangle.getOrigin().getX());
//                    mOverlayImage.setTop(mOverlayRectangle.getOrigin().getY());
//                    mOverlayImage.setMinimumWidth(mOverlayRectangle.getSize().getWidth());
//                    mOverlayImage.setMinimumHeight(mOverlayRectangle.getSize().getHeight());
                    return true;
                case HIDE:
                    mTrolleyText.setVisibility(View.GONE);
                    mOverlayImage.setVisibility(View.GONE);
                    return true;
                default:
                    Log.d(TAG, "How the hell did we get here?");
                    return false;
            }
        }
    });


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tracking);

        mCustomSurface = (FrameLayout) findViewById(R.id.id_custom_surface);
        mTrolleyText = (TextView) findViewById(R.id.id_trolley);
        mOverlayImage = (ImageView) findViewById(R.id.overlay_image);

        mWikitudeSDK = new WikitudeSDK(this);
        WikitudeSDKStartupConfiguration startupConfiguration = new
                WikitudeSDKStartupConfiguration(WikitudeSDKConstants.WIKITUDE_SDK_KEY,
                CameraSettings.CameraPosition.BACK, CameraSettings.CameraFocusMode.CONTINUOUS);
        mWikitudeSDK.onCreate(getApplicationContext(), startupConfiguration);
        ClientTracker tracker = mWikitudeSDK.getTrackerManager().
                create2dClientTracker("file:///android_asset/tracker.wtc");
        tracker.registerTrackerEventListener(this);
    }

    @Override
    protected void onResume() {
        super.onResume();
        mWikitudeSDK.onResume();
        mView.onResume();
        mDriver.start();
    }

    @Override
    protected void onPause() {
        super.onPause();
        mWikitudeSDK.onPause();
        mView.onPause();
        mDriver.stop();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mWikitudeSDK.onDestroy();
    }

    @Override
    public void onRenderExtensionCreated(final RenderExtension renderExtension_) {
        mGLRenderer = new GLRenderer(renderExtension_);
        mView = new CustomSurfaceView(getApplicationContext(), mGLRenderer);
        mDriver = new Driver(mView, 30);
        mCustomSurface.addView(mView);
    }

    @Override
    public void onErrorLoading(final ClientTracker clientTracker_, final String errorMessage_) {
        Log.v(TAG, "onErrorLoading: " + errorMessage_);
    }

    @Override
    public void onTrackerFinishedLoading(final ClientTracker clientTracker_,
                                         final String trackerFilePath_) {

    }

    @Override
    public void onTargetRecognized(final Tracker tracker_, final String targetName_) {

    }

    @Override
    public void onTracking(final Tracker tracker_, final RecognizedTarget recognizedTarget_) {
        mGLRenderer.setCurrentlyRecognizedTarget(recognizedTarget_);
//        mOverlayRectangle = recognizedTarget_.getTargetPositionInCameraFrame();
        mHandler.sendEmptyMessageDelayed(SHOW, 300);
    }

    @Override
    public void onTargetLost(final Tracker tracker_, final String targetName_) {
        mGLRenderer.setCurrentlyRecognizedTarget(null);
        mHandler.sendEmptyMessageDelayed(HIDE, 300);
    }

    @Override
    public void onExtendedTrackingQualityUpdate(final Tracker tracker_, final String targetName_,
                                                final int oldTrackingQuality_,
                                                final int newTrackingQuality_) {

    }
}