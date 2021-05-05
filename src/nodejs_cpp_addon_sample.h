#pragma once

#include <napi.h>

class NodejsCppAddonSample : public Napi::ObjectWrap<NodejsCppAddonSample>
{
public:
    NodejsCppAddonSample(const Napi::CallbackInfo&);
    Napi::Value Greet(const Napi::CallbackInfo&);

    static Napi::Function GetClass(Napi::Env);

private:
    std::string _greeterName;
};
