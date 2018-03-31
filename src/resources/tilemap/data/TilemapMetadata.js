import ObjectUtils from "../../../utils/ObjectUtils";

export default class TilemapMetadata {

    constructor(config) {

        this.name = ObjectUtils.getValue(config,'name','tilemap');
        this.width =  ObjectUtils.getValue(config,'width',0);
        this.height =  ObjectUtils.getValue(config,'height',0);
        this.tileWidth =  ObjectUtils.getValue(config,'tileWidth',16);
        this.tileHeight =  ObjectUtils.getValue(config,'tileHeight',16);
        this.pixelsWidth = ObjectUtils.getValue(config,'pixelsWidth',this.width * this.tileWidth);
        this.pixelsHeight = ObjectUtils.getValue(config,'pixelsHeight',this.height * this.tileHeight);
        this.orientation = ObjectUtils.getValue(config, 'orientation', 'orthogonal');
    }


}