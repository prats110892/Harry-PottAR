//
// Created by simon on 16/04/15.
// Copyright (c) 2015 Wikitude. All rights reserved.
//

#include <vector>
#include <android/log.h>
#include <sstream>
#include "__YOUR_PLUGIN__.h"
#include "Plugin.h"
#include "Frame.h"

#define  LOG_TAG    "__YOUR_PLUGIN__"
#define  LOGI(...)  __android_log_print(ANDROID_LOG_INFO,LOG_TAG,__VA_ARGS__)
#define  LOGE(...)  __android_log_print(ANDROID_LOG_ERROR,LOG_TAG,__VA_ARGS__)

namespace wikitude {
    namespace sdk {

        namespace impl {

            __YOUR_PLUGIN__::__YOUR_PLUGIN__(std::string identifier) : Plugin(identifier) {
                LOGE("__YOUR_PLUGIN__::__YOUR_PLUGIN__");
            }

            __YOUR_PLUGIN__::~__YOUR_PLUGIN__() {
                LOGE("__YOUR_PLUGIN__::~__YOUR_PLUGIN__");
            }

            void __YOUR_PLUGIN__::initialize() {
                LOGE("__YOUR_PLUGIN__::initialize");
                Plugin::initialize();
            }

            void __YOUR_PLUGIN__::pause() {
                LOGE("__YOUR_PLUGIN__::pause");
                Plugin::pause();
            }

            void __YOUR_PLUGIN__::resume(unsigned int pausedTime_) {
                LOGE("__YOUR_PLUGIN__::resume");
                Plugin::resume(pausedTime_);
            }

            void __YOUR_PLUGIN__::destroy() {
                LOGE("__YOUR_PLUGIN__::destroy");
                Plugin::destroy();
            }

            void __YOUR_PLUGIN__::cameraFrameAvailable(const Frame& cameraFrame_) {
                LOGE("__YOUR_PLUGIN__::cameraFrameAvailable");
            }

            void __YOUR_PLUGIN__::update(const std::list<RecognizedTarget>& recognizedTargets_) {
                if (recognizedTargets_.size() > 0) {
                    LOGE("__YOUR_PLUGIN__::update: target recognized!");
                    std::stringstream s;
                    s << "AR.logger.debug('Image recognized!')";
                    addToJavaScriptQueue(s.str());
                } else {
                    LOGE("__YOUR_PLUGIN__::update: nothing recognized!");
                }
            }

            bool __YOUR_PLUGIN__::processesColorCameraFrames() {
                LOGE("__YOUR_PLUGIN__::processesColorCameraFrames");
                return Plugin::processesColorCameraFrames();
            }
            
        }
    }
}