package me.pratik_shah.harrypottar.activities;

import android.app.Activity;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.PixelFormat;
import android.hardware.Camera;
import android.media.MediaPlayer;
import android.opengl.GLSurfaceView;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.util.Log;
import android.view.SurfaceView;
import android.view.View;
import android.view.WindowManager;
import android.widget.FrameLayout;

import com.google.android.gms.vision.Frame;

import java.util.Timer;
import java.util.TimerTask;

import me.pratik_shah.harrypottar.GLEngine;
import me.pratik_shah.harrypottar.R;
import me.pratik_shah.harrypottar.view.CameraView;

public class MessageFromDobby extends Activity {

    public static final int SHOW = 0x01;
    public static final int HIDE = 0x02;

    private static MessageFromDobby mMaster = null;

    private GLSurfaceView mGLView;
    private CameraView mCameraView;

    private TimerTask mTask = new TimerTask() {
        @Override
        public void run() {
            mCameraView.takePicture();
        }
    };

    private Timer mPollTimer = new Timer();

    private Handler mShowHideHandler = new Handler(Looper.getMainLooper()) {
        @Override
        public void handleMessage(Message msg) {
            super.handleMessage(msg);
            if (msg.what == SHOW) {
                showOverlay(true);
            } else if (msg.what == HIDE) {
                showOverlay(false);
            }
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setFormat(PixelFormat.TRANSLUCENT);

        // Fullscreen is not necessary... it's up to you.
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN);

        setContentView(R.layout.augmented_activity);
        mGLView = (GLSurfaceView) findViewById(R.id.glsurfaceview);
        try {
            mCameraView = new CameraView(this,
                    (SurfaceView) findViewById(R.id.surface_camera), null);
        } catch (Exception e) {
            e.printStackTrace();
        }
        // Translucent window 8888 pixel format and depth buffer
        initializeModel();
    }


    @Override
    protected void onResume() {
        super.onResume();
        mGLView.onResume();
        mPollTimer.scheduleAtFixedRate(mTask, 3000, 5000);
    }

    @Override
    protected void onPause() {
        super.onPause();
        mGLView.onPause();
        mPollTimer.cancel();
        mPollTimer = new Timer();
    }


    private void initializeModel() {
        GLEngine glEngine = GLEngine.getInstance(this);
        if (mMaster != null) {
            glEngine.copy(mMaster);
        }
        mGLView.setEGLConfigChooser(8, 8, 8, 8, 16, 0);
        GLEngine.MyRenderer renderer = glEngine.getRendererInstance();
        mGLView.setRenderer(renderer);
        mGLView.getHolder().setFormat(PixelFormat.TRANSLUCENT);
        glEngine.loadModel();
    }

    public Message getMessage(boolean show) {
        if (show) {
            return mShowHideHandler.obtainMessage(SHOW);
        } else {
            return mShowHideHandler.obtainMessage(HIDE);
        }
    }

    public void showOverlay(boolean show) {
        Log.d("MessageFromDobby", "Showing Overlay: " + show);
        GLEngine.getInstance(this).show(show);
        final MediaPlayer mediaPlayer = MediaPlayer.create(this, R.raw.dobby2);
        mShowHideHandler.postDelayed(new Runnable() {
            @Override
            public void run() {
                mediaPlayer.start();
            }
        }, 2300);

    }
}

/*
if (null == savedInstanceState) {
            getFragmentManager().beginTransaction()
                    .replace(R.id.container, Camera2BasicFragment.newInstance())
                    .commit();
        }
 */