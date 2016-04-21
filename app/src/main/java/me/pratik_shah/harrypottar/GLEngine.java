package me.pratik_shah.harrypottar;

import android.content.Context;
import android.opengl.GLSurfaceView;

import com.threed.jpct.Camera;
import com.threed.jpct.FrameBuffer;
import com.threed.jpct.Light;
import com.threed.jpct.Loader;
import com.threed.jpct.Logger;
import com.threed.jpct.Matrix;
import com.threed.jpct.Object3D;
import com.threed.jpct.RGBColor;
import com.threed.jpct.SimpleVector;
import com.threed.jpct.World;
import com.threed.jpct.util.MemoryHelper;

import java.io.InputStream;
import java.lang.reflect.Field;

import javax.microedition.khronos.egl.EGLConfig;
import javax.microedition.khronos.opengles.GL10;

import me.pratik_shah.harrypottar.activities.MessageFromDobby;

/**
 * Created by batman on 3/4/16.
 */
public class GLEngine {
    private static MessageFromDobby mMaster = null;
    private static GLEngine mGLEngine = null;
    private static MyRenderer mRenderer;

    private FrameBuffer mFrameBuffer = null;
    private World mWorld = null;
    private RGBColor mBackColor = new RGBColor(0, 0, 0, 1);
    private long time = System.currentTimeMillis();
    private Object3D mDobby;
    private Context mContext;

    private int mFPS = 0;

    private GLEngine(Context context) {
        mContext = context;
    }

    public static GLEngine getInstance(Context context) {
        if (mGLEngine == null) {
            mGLEngine = new GLEngine(context);
        }
        return mGLEngine;
    }

    public MyRenderer getRendererInstance() {
        if (mRenderer == null) {
            mRenderer = new MyRenderer();
        }

        return mRenderer;
    }

    public void loadModel() {
        InputStream objStream = mContext.getResources().openRawResource(R.raw.dobby1);
        InputStream mtlStream = mContext.getResources().openRawResource(R.raw.dobby2);
        Object3D[] model = Loader.loadOBJ(objStream, mtlStream, 1);
        Object3D o3d = new Object3D(0);
        Object3D temp = null;
        for (int i = 0; i < model.length; i++) {
            temp = model[i];
            temp.setCenter(SimpleVector.ORIGIN);
            temp.rotateX((float)( -.5*Math.PI));
            temp.rotateMesh();
            temp.setRotationMatrix(new Matrix());
            o3d = Object3D.mergeObjects(o3d, temp);
            o3d.build();
        }
        o3d.rotateX((float) (Math.PI / 2));
        o3d.rotateZ((float) (Math.PI));
        o3d.rotateY((float) (Math.PI));
        mDobby = o3d;
    }

    public void show(boolean show) {
        if (show) {
            mWorld.addObject(mDobby);
        } else {
            mWorld.removeObject(mDobby);
        }
    }

    public void copy(Object src) {
        try {
            Logger.log("Copying data from master Activity!");
            Field[] fs = src.getClass().getDeclaredFields();
            for (Field f : fs) {
                f.setAccessible(true);
                f.set(this, f.get(src));
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public class MyRenderer implements GLSurfaceView.Renderer {

        private long time = System.currentTimeMillis();

        public MyRenderer() {

        }

        public void onSurfaceChanged(GL10 gl, int w, int h) {
            if (mFrameBuffer != null) {
                mFrameBuffer.dispose();
            }
            mFrameBuffer = new FrameBuffer(gl, w, h);

            if (mMaster == null) {
                mWorld = new World();
                mWorld.setAmbientLight(20, 20, 20);
                Light sun = new Light(mWorld);
                sun.setIntensity(250, 250, 250);

                Camera cam = mWorld.getCamera();
                cam.moveCamera(Camera.CAMERA_MOVEOUT, 50);
                cam.lookAt(mDobby.getTransformedCenter());

                SimpleVector sv = new SimpleVector();
                sv.set(mDobby.getTransformedCenter());
                sv.y -= 100;
                sv.z -= 100;
                sun.setPosition(sv);
                MemoryHelper.compact();

                if (mMaster == null) {
                    Logger.log("Saving master Activity!");
                    mMaster = (MessageFromDobby) mContext;
                }
            }
        }

        public void onSurfaceCreated(GL10 gl, EGLConfig config) {}

        public void onDrawFrame(GL10 gl) {
            mFrameBuffer.clear(mBackColor);
            mWorld.renderScene(mFrameBuffer);
            mWorld.draw(mFrameBuffer);
            mFrameBuffer.display();

            if (System.currentTimeMillis() - time >= 1000) {
                Logger.log(mFPS + "fps");
                mFPS = 0;
                time = System.currentTimeMillis();
            }
            mFPS++;
        }
    }
}
