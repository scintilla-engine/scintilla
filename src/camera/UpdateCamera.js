import UpdateBounds from "../transform/UpdateBounds";
import ComputeDelimiterPoint from "../transform/ComputeDelimiterPoint";
import ComputeBounds from "../transform/ComputeBounds";


export default function UpdateCamera(camera, canvas) {
    
    if (!camera.transform._isDirty)
        return;

    let t = camera.transform;


  let pixelUnit = {x:1,y:1};

    pixelUnit.x = canvas.width / camera.width;
    pixelUnit.y = canvas.height / camera.height;

  if (camera.roundPixels)
    t.position.round();

  if (t.rotation != t._oldRotation) {
    t._oldRotation = t.rotation;
    t._cosSin.y = Math.sin(t.rotation);
    t._cosSin.x = Math.cos(t.rotation);
  }

  let origin = {
    x: camera.width * t.origin.x,
    y: camera.height * t.origin.y
  };

  let pos = {x: -(t.position.x + origin.x),
             y: -(t.position.y + origin.y)};

  // todo resolution
  t.matrix.setIdentity()
  .scale(pixelUnit.x, pixelUnit.y) // resolution
  .translate(pos.x , pos.y)
  .scale(t.scale.x, t.scale.x)
  

  ComputeBounds(
    camera.bounds, camera.transform, 
    camera.width, camera.height, 
    pos);

    t.matrix
    .radianRotate(t._cosSin.x, t._cosSin.y)
    .translate(-origin.x, -origin.y);

  

}