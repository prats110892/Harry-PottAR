//
// Created by simon on 16/04/15.
// Copyright (c) 2015 Wikitude. All rights reserved.
//


#ifndef ____YOUR_PLUGIN___H_
#define ____YOUR_PLUGIN___H_

#include <vector>
#include "Plugin.h"
#include "Frame.h"

namespace wikitude {
    namespace sdk {

        namespace impl {

            class __YOUR_PLUGIN__ : public Plugin {

            public:
                __YOUR_PLUGIN__(std::string identifier);

                virtual ~__YOUR_PLUGIN__();

                virtual void initialize() override;

                virtual void pause() override;

                virtual void resume(unsigned int pausedTime_) override;

                virtual void destroy() override;

                virtual void cameraFrameAvailable(const Frame& cameraFrame_) override;

                virtual void update(const std::list<RecognizedTarget>& recognizedTargets_) override;

                virtual bool processesColorCameraFrames() override;
            };
            
        }
    }
}

#endif //__TestPlugin_H_
