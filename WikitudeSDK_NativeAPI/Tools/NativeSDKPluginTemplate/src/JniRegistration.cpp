#include <jni.h>

#include "__YOUR_PLUGIN__.h"

extern "C" JNIEXPORT jlongArray JNICALL Java_com_wikitude_architect_PluginManager_createNativePlugins(JNIEnv *env, jobject thisObj, jstring jPluginName) {

    int numberOfPlugins = 1;
    
    jlong cPluginsArray[numberOfPlugins];
    cPluginsArray[0] = (jlong) new wikitude::sdk::impl::__YOUR_PLUGIN__("com.example.plugin");

    jlongArray jPluginsArray = env->NewLongArray(numberOfPlugins);
    if (jPluginsArray != nullptr) {
        env->SetLongArrayRegion(jPluginsArray, 0, numberOfPlugins, cPluginsArray);
    }
    
    return jPluginsArray;
}
