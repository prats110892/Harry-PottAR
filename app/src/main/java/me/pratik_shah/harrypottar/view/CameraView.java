package me.pratik_shah.harrypottar.view;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.hardware.Camera;
import android.view.SurfaceHolder;
import android.view.SurfaceView;

import com.google.android.gms.vision.Frame;
import com.threed.jpct.Logger;

import java.io.IOException;
import java.util.List;

import me.pratik_shah.harrypottar.BarcodeUtil;

public class CameraView extends SurfaceView implements SurfaceHolder.Callback {
    private Camera camera;
    private SurfaceHolder previewHolder;
    private boolean previewRunning;
    private ImageCaptureCallback imageCaptureCallback;

    private Context mContext;
    private boolean mSafeToTakePicture = false;

    /**
     * Create the cameraView and
     *
     * @param context
     * @param surfaceView
     */
    public CameraView(Context context, SurfaceView surfaceView,
                      ImageCaptureCallback imageCaptureCallback) {
        super(context);
        mContext = context;
        // Install a SurfaceHolder.Callback so we get notified when the
        // underlying surface is created and destroyed.
        previewHolder = surfaceView.getHolder();
        previewHolder.addCallback(this);
        previewHolder.setType(SurfaceHolder.SURFACE_TYPE_PUSH_BUFFERS);
        //previewHolder.setType(SurfaceHolder.SURFACE_TYPE_NORMAL);


        // Hold the reference of the caputreCallback (null yet, will be changed
        // on SurfaceChanged).
        this.imageCaptureCallback = imageCaptureCallback;
    }

    /**
     * Initialize the hardware camera. holder The holder
     */
    public void surfaceCreated(SurfaceHolder holder) {
        camera = Camera.open();
        camera.setDisplayOrientation(90);
        Camera.Parameters p = camera.getParameters();
        p.set("orientation", "portrait");
        camera.setParameters(p);
        try {
            camera.setPreviewDisplay(holder);
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    /**
     *
     */
    public void surfaceDestroyed(SurfaceHolder holder) {
        this.onStop();
    }

    public void surfaceChanged(SurfaceHolder holder, int format, int width,
                               int height) {
        if (previewRunning)
            camera.stopPreview();

        Camera.Parameters params = camera.getParameters();
        Camera.Size size = getOptimalPreviewSize(params.getSupportedPreviewSizes(),
                mContext.getResources().getDisplayMetrics().widthPixels,
                mContext.getResources().getDisplayMetrics().heightPixels);
        params.setPreviewSize(size.width, size.height);
        params.setPictureSize(size.width, size.height);
        camera.setParameters(params);

        try {
            camera.setPreviewDisplay(holder);
        } catch (IOException e) {
            e.printStackTrace();
        }
        previewRunning = true;
        Logger.log("camera callback huhihihihih", Logger.MESSAGE);
        camera.startPreview();
        imageCaptureCallback = new ImageCaptureCallback(camera, width, height);
        mSafeToTakePicture = true;
        //camera.startPreview();
    }

    private Camera.Size getOptimalPreviewSize(List<Camera.Size> sizes, int w, int h) {
        final double ASPECT_TOLERANCE = 0.1;
        double targetRatio=(double)h / w;

        if (sizes == null) return null;

        Camera.Size optimalSize = null;
        double minDiff = Double.MAX_VALUE;

        int targetHeight = h;

        for (Camera.Size size : sizes) {
            double ratio = (double) size.width / size.height;
            if (Math.abs(ratio - targetRatio) > ASPECT_TOLERANCE) continue;
            if (Math.abs(size.height - targetHeight) < minDiff) {
                optimalSize = size;
                minDiff = Math.abs(size.height - targetHeight);
            }
        }

        if (optimalSize == null) {
            minDiff = Double.MAX_VALUE;
            for (Camera.Size size : sizes) {
                if (Math.abs(size.height - targetHeight) < minDiff) {
                    optimalSize = size;
                    minDiff = Math.abs(size.height - targetHeight);
                }
            }
        }
        return optimalSize;
    }


    public void onStop() {
        // Surface will be destroyed when we return, so stop the preview.
        // Because the CameraDevice object is not a shared resource, it's very
        // important to release it when the activity is paused.
        camera.setPreviewCallback(null);
        camera.stopPreview();
        previewRunning = false;
        camera.release();
    }

    public void onResume() {
        camera = Camera.open();
        camera.setPreviewCallback(imageCaptureCallback);
        previewRunning = true;
    }

    public void takePicture() {
        if (mSafeToTakePicture) {
            camera.takePicture(null, null, imageCaptureCallback);
            camera.stopPreview();
            mSafeToTakePicture = false;
        }
    }


    class ImageCaptureCallback implements Camera.PictureCallback, Camera.PreviewCallback {

        public ImageCaptureCallback(Camera camera, int width, int height) {

        }

        @Override
        public void onPictureTaken(byte[] data, Camera camera) {
            BarcodeUtil.getInstance(mContext).detect(data);
            camera.startPreview();
            mSafeToTakePicture = true;
        }

        @Override
        public void onPreviewFrame(byte[] data, Camera camera) {

        }
    }
}