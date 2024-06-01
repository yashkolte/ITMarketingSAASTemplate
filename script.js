var Engine = Matter.Engine,
    Render = Matter.Render,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create(),
    world = engine.world;

// Get the parent container dimensions
var container = document.getElementById('matter-container');
var containerWidth = container.clientWidth;
var containerHeight = container.clientHeight;

// create a renderer
var render = Render.create({
    element: container,
    engine: engine,
    options: {
      width: containerWidth,
      height: containerHeight,
      pixelRatio: 2,
      background: '#00000000',
      wireframes: false,
    }
});

// create bounds
var ground = Bodies.rectangle(containerWidth / 2, containerHeight + 40, containerWidth, 80, { render: { fillStyle: '#080808' }, isStatic: true });
var wallLeft = Bodies.rectangle(-40, containerHeight / 2, 80, containerHeight, { isStatic: true });
var wallRight = Bodies.rectangle(containerWidth + 40, containerHeight / 2, 80, containerHeight, { isStatic: true });
var roof = Bodies.rectangle(containerWidth / 2, -40, containerWidth, 80, { isStatic: true });

// object colors & variables
var arts = "#EDDC8C";
var videos = "#B3E8F3";
var abouts = '#4D4D4D';

var border = 2;
var radius = 20;

function createBodies(offsetX, offsetY) {
    return [
        Bodies.rectangle(140 + offsetX, 480 + offsetY, 133, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/RADmiFI.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(70 + offsetX, 420 + offsetY, 56, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/NwQqeng.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(180 + offsetX, 420 + offsetY, 52, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/ptUWXgO.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(120 + offsetX, 360 + offsetY, 105, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/TyOmVtt.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(100 + offsetX, 300 + offsetY, 86, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/tc3MsJP.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(440 + offsetX, 520 + offsetY, 165, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/QYNTBNr.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(400 + offsetX, 460 + offsetY, 128, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/rSnEY9Q.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(380 + offsetX, 400 + offsetY, 104, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/5BSBvSm.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(340 + offsetX, 340 + offsetY, 82, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/VEyrikN.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(500 + offsetX, 360 + offsetY, 108, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/hr9p4uV.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(400 + offsetX, 300 + offsetY, 92, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/n6TV7XG.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(520 + offsetX, 260 + offsetY, 86, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/dax8MwT.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(160 + offsetX, 200 + offsetY, 42, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/C2qPMbB.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(140 + offsetX, 480 + offsetY, 133, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/RADmiFI.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(70 + offsetX, 420 + offsetY, 56, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/NwQqeng.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(180 + offsetX, 420 + offsetY, 52, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/ptUWXgO.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(120 + offsetX, 360 + offsetY, 105, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/TyOmVtt.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(100 + offsetX, 300 + offsetY, 86, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/tc3MsJP.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(440 + offsetX, 520 + offsetY, 165, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/QYNTBNr.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(400 + offsetX, 460 + offsetY, 128, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/rSnEY9Q.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(380 + offsetX, 400 + offsetY, 104, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/5BSBvSm.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(340 + offsetX, 340 + offsetY, 82, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/VEyrikN.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(500 + offsetX, 360 + offsetY, 108, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/hr9p4uV.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(400 + offsetX, 300 + offsetY, 92, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/n6TV7XG.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(520 + offsetX, 260 + offsetY, 86, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/dax8MwT.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(160 + offsetX, 200 + offsetY, 42, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/C2qPMbB.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(140 + offsetX, 480 + offsetY, 133, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/RADmiFI.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(70 + offsetX, 420 + offsetY, 56, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/NwQqeng.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(180 + offsetX, 420 + offsetY, 52, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/ptUWXgO.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(120 + offsetX, 360 + offsetY, 105, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/TyOmVtt.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(100 + offsetX, 300 + offsetY, 86, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/tc3MsJP.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(440 + offsetX, 520 + offsetY, 165, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/QYNTBNr.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(400 + offsetX, 460 + offsetY, 128, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/rSnEY9Q.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(380 + offsetX, 400 + offsetY, 104, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/5BSBvSm.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(340 + offsetX, 340 + offsetY, 82, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/VEyrikN.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(500 + offsetX, 360 + offsetY, 108, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/hr9p4uV.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(400 + offsetX, 300 + offsetY, 92, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/n6TV7XG.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(520 + offsetX, 260 + offsetY, 86, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/dax8MwT.png', xScale: 0.5, yScale: 0.5 }}}),
        Bodies.rectangle(160 + offsetX, 200 + offsetY, 42, 40, { chamfer: { radius: radius }, render: { sprite: { texture: 'https://i.imgur.com/C2qPMbB.png', xScale: 0.5, yScale: 0.5 }}}),
    ];
}

// Repeat the elements 3 times with different offsets
var allBodies = [];
for (var i = 0; i < 3; i++) {
    allBodies = allBodies.concat(createBodies(i * 200, i * 100));
}

// add all of the bodies to the world
World.add(engine.world, [ground, wallLeft, wallRight, roof].concat(allBodies));

// add mouse control
var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

World.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

// Allow page scrolling in matter.js window
mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

// Detect clicks vs. drags
let click = false;

document.addEventListener('mousedown', () => click = true);
document.addEventListener('mousemove', () => click = false);
document.addEventListener('mouseup', () => console.log(click ? 'click' : 'drag'));

// Function to rotate bodies in a circular motion for 2 seconds
function rotateBodies() {
  var bodies = engine.world.bodies;
  var angleIncrement = Math.PI / 30; // Incremental angle change for each update
  var time = 0;
  var duration = 2000; // Duration in milliseconds (2 seconds)

  function applyCircularForce() {
    time += 0.02; // Time step
    if (time * 1000 >= duration) {
      return; // Stop after the duration
    }
    for (var i = 0; i < bodies.length; i++) {
      var body = bodies[i];
      var forceMagnitude = 0.03 * body.mass; // Adjust force magnitude for desired effect
      var angle = time + i * angleIncrement; // Calculate current angle for each body
      Matter.Body.applyForce(body, body.position, {
        x: Math.cos(angle) * forceMagnitude,
        y: Math.sin(angle) * forceMagnitude
      });
    }
    requestAnimationFrame(applyCircularForce);
  }

  applyCircularForce();
}

// Add event listener to button
document.getElementById('spinBtn').addEventListener('click', rotateBodies);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
