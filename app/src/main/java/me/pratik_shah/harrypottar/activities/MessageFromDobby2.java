package me.pratik_shah.harrypottar.activities;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ValueAnimator;
import android.app.Activity;
import android.graphics.PixelFormat;
import android.graphics.PointF;
import android.graphics.SurfaceTexture;
import android.media.MediaPlayer;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.util.Log;
import android.view.SurfaceView;
import android.view.View;
import android.view.WindowManager;
import android.view.animation.LinearInterpolator;
import android.widget.FrameLayout;
import android.widget.VideoView;

import com.dlazaro66.qrcodereaderview.QRCodeReaderView;
import com.google.android.gms.vision.Frame;
import com.sprylab.android.widget.TextureVideoView;

import java.util.Timer;
import java.util.TimerTask;

import me.pratik_shah.harrypottar.Camera2BasicFragment;
import me.pratik_shah.harrypottar.R;
import me.pratik_shah.harrypottar.view.CameraView;

/**
 * Created by batman on 3/4/16.
 */
public class MessageFromDobby2 extends Activity implements QRCodeReaderView.OnQRCodeReadListener {
    public static final int SHOW = 0x01;
    public static final int HIDE = 0x02;

    private TextureVideoView mVideoView;
    private FrameLayout mOverlayPane;
    private QRCodeReaderView mDecoderView;

    private Handler mShowHideHandler = new Handler(Looper.getMainLooper()) {
        @Override
        public void handleMessage(Message msg) {
            super.handleMessage(msg);
            if (msg.what == SHOW) {
                showOverlay();
            } else if (msg.what == HIDE) {
                stopOverlay();
            }
        }
    };
    private boolean mDetected = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        getWindow().setFormat(PixelFormat.TRANSLUCENT);

        // Fullscreen is not necessary... it's up to you.
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN);

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_message_from_dobby);
        mVideoView = (TextureVideoView) findViewById(R.id.video_view);
        mOverlayPane = (FrameLayout) findViewById(R.id.overlay_layer);
        mDecoderView = (QRCodeReaderView) findViewById(R.id.qrdecoderview);
        mDecoderView.setOnQRCodeReadListener(this);
        initVideoView();
    }

    private void initVideoView() {
        String uriPath = "android.resource://" + getPackageName() + "/" + R.raw.dobby_video;
        Uri uri = Uri.parse(uriPath);
        mVideoView.setVideoURI(uri);
        mVideoView.setOnCompletionListener(new MediaPlayer.OnCompletionListener() {
            @Override
            public void onCompletion(MediaPlayer mp) {
                stopOverlay();
            }
        });
    }

    @Override
    protected void onResume() {
        super.onResume();
        mDecoderView.getCameraManager().startPreview();
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mDetected) {
            stopOverlay();
            mDetected = false;
        }
        mDecoderView.getCameraManager().stopPreview();
    }

    public Message getMessage(boolean show) {
        if (show) {
            return mShowHideHandler.obtainMessage(SHOW);
        } else {
            return mShowHideHandler.obtainMessage(HIDE);
        }
    }

    public void showOverlay() {
        mOverlayPane.setVisibility(View.VISIBLE);
        ValueAnimator scaleAnimator = ValueAnimator.ofFloat(0f, 1f);
        scaleAnimator.setInterpolator(new LinearInterpolator());
        scaleAnimator.setDuration(500);
        mVideoView.setVisibility(View.VISIBLE);
        scaleAnimator.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() {
            @Override
            public void onAnimationUpdate(ValueAnimator animation) {
                float update = (float) animation.getAnimatedValue();
                mVideoView.setScaleX(update);
                mVideoView.setScaleY(update);
            }
        });

        scaleAnimator.addListener(new AnimatorListenerAdapter() {
            @Override
            public void onAnimationEnd(Animator animation) {
                super.onAnimationEnd(animation);
                mVideoView.start();
            }
        });

        scaleAnimator.start();
    }

    public void stopOverlay() {
        mVideoView.stopPlayback();
        ValueAnimator scaleAnimator = ValueAnimator.ofFloat(1f, 0f);
        scaleAnimator.setInterpolator(new LinearInterpolator());
        scaleAnimator.setDuration(500);
        mVideoView.setVisibility(View.VISIBLE);
        scaleAnimator.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() {
            @Override
            public void onAnimationUpdate(ValueAnimator animation) {
                float update = (float) animation.getAnimatedValue();
                mVideoView.setScaleX(update);
                mVideoView.setScaleY(update);
            }
        });

        scaleAnimator.addListener(new AnimatorListenerAdapter() {
            @Override
            public void onAnimationEnd(Animator animation) {
                super.onAnimationEnd(animation);
                mVideoView.setVisibility(View.GONE);
                mOverlayPane.setVisibility(View.GONE);
            }
        });

        scaleAnimator.start();
    }

    @Override
    public void onQRCodeRead(String text, PointF[] points) {
        if (text.equalsIgnoreCase(getString(R.string.qr_code)) && !mDetected) {
            getMessage(true).sendToTarget();
            mDetected = true;
        }
    }

    @Override
    public void cameraNotFound() {

    }

    @Override
    public void QRCodeNotFoundOnCamImage() {
//        if (mDetected) {
//            getMessage(false).sendToTarget();
//            mDetected = false;
//        }
    }
}
