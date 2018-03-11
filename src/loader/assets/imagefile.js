

Scintilla.ImageFile = Scintilla.File.extend(function() {

this.constructor = function(tag, url, path, xhrSettings, config)
{
    var assetTag = null;
    
    if (typeof tag === 'string')
    {
        assetTag = tag;
    }
    else
    {
        assetTag = Scintilla.Utils.getValue(tag, 'tag', '');
    }

    var fileConfig = {
        type: 'image',
        tag: assetTag,
        ext: Scintilla.Utils.getValue(tag, 'ext', Scintilla.Utils.getFileExtension(url)),
        url: Scintilla.Utils.getValue(tag, 'file', url),
        path: path,
        responseType: 'blob',
        xhrSettings: Scintilla.Utils.getValue(tag, 'xhr', xhrSettings),
        config: Scintilla.Utils.getValue(tag, 'config', config)
    };

    this.super(fileConfig);
}

this.onProcessing = function(processingCallback)
{
    this.state = LOADER_STATE.PROCESSING;
    this.data = new Image();
    this.data.crossOrigin = this.crossOrigin;


    var self = this;

    this.data.onload = function () {

        Scintilla.URLObject.revoke(self.data);

        self.onDone();

        processingCallback(self);
    };

    this.data.onerror = function () {

        Scintilla.URLObject.revoke(self.data);

        self.state = LOADER_STATE.ERROR;

        processingCallback(self);

    };


    Scintilla.URLObject.create(this.data, this.xhrRequest.response, 'image/' + this.config.ext);
}

});

AssetTypeHandler.register('image', function (tag, url, path, xhrSettings)
{


    this.addAsset(new Scintilla.ImageFile(tag, url, this.path, xhrSettings));

    return this;

});