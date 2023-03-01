var scene = new THREE.Scene()

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
camera.position.z = 5
var renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setClearColor("skyblue")
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)




document.body.requestPointerLock = document.body.requestPointerLock ||
                                    document.body.mozRequestPointerLock;
        document.exitPointerLock = document.exitPointerLock ||
                                   document.mozExitPointerLock;
        document.body.onclick = function() {
          document.body.requestPointerLock();
        };
        


document.body.onmousemove = function(evt) {
    camera.rotation.y-=evt.movementX/65;
  };
document.body.onkeydown = function(evt){
    
    if(evt.keyCode==38){
        var direction = new THREE.Vector3();
        camera.getWorldDirection(direction)
        camera.position.add(direction)

        camera.position.add(direction)
      }
        if(evt.keyCode==40){
            var direction = new THREE.Vector3();
            camera.getWorldDirection(direction)
            camera.position.sub(direction)

            }
}

var geometry = new THREE.BoxGeometry(1, 1, 1)
var material = new THREE.MeshLambertMaterial({color: "green"})
var cube1 = new THREE.Mesh(geometry, material)
scene.add(cube1)
var light = new THREE.PointLight(new THREE.Color('white'), 1, 500)
light.position.set(0, 1.5, 1)
scene.add(light)
cube1.rotation.y = 45; 
var geometry = new THREE.BoxGeometry(30, 1, 30); 
var material = new THREE.MeshLambertMaterial({color: 0xFFCC00}); 
var ground = new THREE.Mesh(geometry, material);
ground.position.y = -1
scene.add(ground);
var geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
var material = new THREE.MeshLambertMaterial({color: "yellow"})
var sun = new THREE.Mesh(geometry, material)
sun.position.set(0, 2, 0);
scene.add(sun)

var gravity = 0.2;
var downDirection = new THREE.Vector3(0,-1,0)
var raycaster = new THREE.Raycaster()
var renderGravity = function() {
raycaster.set(camera.position, downDirection);
const intersects = raycaster.intersectObjects(scene.children)
if(intersects.length>0){
  if(intersects[0].distance>1){
  camera.position.y-=gravity;
  }
}
}
var render = function(){
  renderGravity()
requestAnimationFrame(render)
renderer.render(scene, camera)
}

render();