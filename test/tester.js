
//Test.log();
//var t = new Test();
//t.log();

//import scintilla from '../src/Scintilla'

var VIEW = {
    w : 640,
    h : 480,
}

var config = {
    width: VIEW.w,
    height: VIEW.h,
    camera: {
        width: 320,
        height: 240
    },
    parent: "canvas-container",
    debug: false,
    fps: 60,
    pixelated: true,
    roundPixels : true,
    floorTiles : true
};
  
  var game = new scintilla.Game(config);
  var scene = game.scene.new('scene');
  game.system.render.layer.add('gui');

  var x = 0;
  var camSpeed = 100;

 /* var mat = new scintilla.Matrix(1);
  var mat2 = new scintilla.Matrix(3);
  //mat.set(1,2,5);
  mat2 = mat2.multiply(mat);
  mat2.transpose();
  console.log(mat2.toString());
  */

  console.log(scintilla.VERSION)


scene.preload = function() {
    this.load.setPath('assets/')
    this.load.image('test','img/block.png');
    this.load.image('title','img/neof.png');
    this.load.tilemapJSON('tilemap','map/n_tilemap.json');
    this.load.webFont('font', 'google', 'Press Start 2P');
    //game.load.text('fontie','https://fonts.googleapis.com/css?family=Arima+Madurai:300,400,500', true)
}

var t = null;

scene.start = function() {

    t = this.create.tilemap('tilemap');
    t.origin.set(0,0)
    t.angle = 0;
    //t = this.create.sprite('test');
    //t.position.y = 100;
    

    //t.update.bind(update);
    //let render = t.modules.get('render');

}

scene.gui = function(draw) {
    
    draw.color = '#000'
    draw.rect(0, 0, 640, 16);
    draw.font('Press Start 2P', 7, 'normal');
    draw.text('SCORE',8, 12,'white','left');
    
}

var time = 0.0;


scene.update = function(dt) {

    

    time += dt;

    if (time >= 1)
    time = 1;

   this.camera.x = scintilla.Ease.inout.cut(0,320,time, 3);
   //scintilla.Ease.inBy(scintilla.EasingType.Cut, 0, 320, time, 2, 3);
 
    //console.log(this.camera.x);
    //t.position.x += 80 * dt;

    /*if (game.input.keyboard.press(scintilla.KeyCode.Right)) 
    {
        this.camera.x += dt * camSpeed;
    }
    if (game.input.keyboard.press(scintilla.KeyCode.Left)) 
    {
        this.camera.x -= dt * camSpeed;
    }

    if (game.input.keyboard.press(scintilla.KeyCode.Up)) 
    {
        this.camera.y -= dt * camSpeed;
    }
    if (game.input.keyboard.press(scintilla.KeyCode.Down)) 
    {
        this.camera.y += dt * camSpeed;
    }*/



  }

  game.scene.set('scene');

Tester = function() {

  
    this.s = null;

    this.init = function() {
  
        // <script class="test-placeholder" type="application/javascript"> </script>

        this.s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "js1.js";
        s.innerHTML = null;
        s.id = "widget";
        document.getElementById("output").innerHTML = s;
  
    }
}

//init();*/