var scene = new THREE.Scene()

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
camera.position.z = 5
var renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setClearColor("skyblue")
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)




document.body.onkeydown = function(evt){
    
    if(evt.keyCode==38){
        var direction = new THREE.Vector3();
        camera.getWorldDirection(direction)
        camera.position.add(direction)
    }
    document.body.onkeydown``= function(evt) {
        camera.rotation.y-=evt.movementX/65;
    };

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
var geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
var material = new THREE.MeshLambertMaterial({color: "yellow"})
var sun = new THREE.Mesh(geometry, material)
sun.position.set(0, 2, 0);
scene.add(sun)
var render = function(){
requestAnimationFrame(render)
renderer.render(scene, camera)
}
render()