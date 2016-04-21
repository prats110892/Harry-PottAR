LOCAL_PATH := $(call my-dir)/..
SRC_DIR := $(LOCAL_PATH)/src

include $(CLEAR_VARS)

LOCAL_PATH := $(SRC_DIR)
include $(CLEAR_VARS)

LOCAL_MODULE := samplePlugin

LOCAL_C_INCLUDES := $(SRC_DIR)
LOCAL_SRC_FILES := __YOUR_PLUGIN__.cpp JniRegistration.cpp Plugin.cpp RecognizedTarget.cpp Frame.cpp

LOCAL_LDLIBS += -llog

include $(BUILD_SHARED_LIBRARY)
