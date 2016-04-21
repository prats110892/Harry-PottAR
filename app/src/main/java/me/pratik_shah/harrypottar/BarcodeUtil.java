package me.pratik_shah.harrypottar;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.AsyncTask;
import android.util.Log;
import android.util.SparseArray;

import com.google.android.gms.vision.Frame;
import com.google.android.gms.vision.barcode.Barcode;
import com.google.android.gms.vision.barcode.BarcodeDetector;

import java.util.Timer;
import java.util.TimerTask;

import me.pratik_shah.harrypottar.activities.MessageFromDobby;
import me.pratik_shah.harrypottar.activities.MessageFromDobby2;

/**
 * Created by batman on 3/4/16.
 */
public class BarcodeUtil {
    private static BarcodeUtil mBarcodeUtil = null;
    private Context mContext;

    private BarcodeDetector mBarcodeDetector;
    private boolean mHasDetected = false;

    private BarcodeUtil(Context context) {
        mContext = context;
        mBarcodeDetector = new BarcodeDetector.Builder(mContext).
                setBarcodeFormats(Barcode.QR_CODE).build();
    }

    public static BarcodeUtil getInstance(Context context) {
        if (mBarcodeUtil == null) {
            mBarcodeUtil = new BarcodeUtil(context);
        }
        return mBarcodeUtil;
    }

    private void analyseDetectionResult(SparseArray<Barcode> detectedResult) {
        Log.d("MessageFromDobby", "Analysing Result. Has Detected: " + mHasDetected);
        if (isQRCodePresent(detectedResult)) {
            Log.d("MessageFromDobby", "Analysing Result. QR Code Present");
            if (!mHasDetected) {
                Log.d("MessageFromDobby", "Analysing Result. Has Detected: " + mHasDetected);
                mHasDetected = true;
                startOverlay();
            }
        } else {
            Log.d("MessageFromDobby", "Analysing Result. QR Code Not Present");
            if (mHasDetected) {
                Log.d("MessageFromDobby", "Analysing Result. Has Detected: " + mHasDetected);
                mHasDetected = false;
                stopOverlay();
            }
        }
    }

    private boolean isQRCodePresent(SparseArray<Barcode> detectedResult) {
        for (int i = 0; i < detectedResult.size(); i++) {
            int key = detectedResult.keyAt(i);
            Barcode value = detectedResult.get(key);
            if (value.rawValue.equals(mContext.getString(R.string.qr_code))) {
                return true;
            }
        }
        return false;
    }

    private void startOverlay() {
        Log.d("MessageFromDobby", "Starting Overlay");
        ((MessageFromDobby2) mContext).getMessage(true).sendToTarget();
    }


    private void stopOverlay() {
        Log.d("MessageFromDobby", "Stopping Overlay");
        ((MessageFromDobby2) mContext).getMessage(false).sendToTarget();
    }


    public void detect(byte[] data) {
        new AsyncTask<byte[], Void, SparseArray<Barcode>>() {
            @Override
            protected SparseArray<Barcode> doInBackground(byte[]... params) {
                Bitmap image = BitmapFactory.decodeByteArray(params[0], 0, params[0].length);
                Frame frame = new Frame.Builder().setBitmap(image).build();
                return mBarcodeDetector.detect(frame);
            }

            @Override
            protected void onPostExecute(SparseArray<Barcode> barcodeSparseArray) {
                super.onPostExecute(barcodeSparseArray);
                Log.d("MessageFromDobby", "Detected Result Size: " + barcodeSparseArray.size());
                if (barcodeSparseArray.size() != 0) {
                    analyseDetectionResult(barcodeSparseArray);
                }
            }
        }.execute(data);
    }
}
