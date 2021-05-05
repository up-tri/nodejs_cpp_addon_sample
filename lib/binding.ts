const addon = require('../build/Release/nodejs_cpp_addon_sample-native');

interface INodejsCppAddonSampleNative
{
    greet(strName: string): string;
};

class NodejsCppAddonSample {
    constructor(name: string) {
        this._addonInstance = new addon.NodejsCppAddonSample(name)
    }

    greet (strName: string) {
        return this._addonInstance.greet(strName);
    }

    // private members
    private _addonInstance: INodejsCppAddonSampleNative;
}

export = NodejsCppAddonSample;
