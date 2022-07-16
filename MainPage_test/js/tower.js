import * as THREE from "three";
import { GLTFLoader } from 'https://unpkg.com/three@0.142.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://unpkg.com/three@0.142.0/examples/jsm/controls/OrbitControls.js';

function main(z_coord, y_coord) {
    const canvas = document.querySelector('#tower-canvas');
    const renderer = new THREE.WebGLRenderer({canvas});
    // const renderer = new THREE.WebGLRenderer({canvas, alpha: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    // renderer.setClearColor( 0xffffff, 0 );

    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 7000 );
    camera.position.set(850, 300, 500);
    camera.lookAt(new THREE.Vector3(0,200,500))
    // const controls = new OrbitControls( camera, renderer.domElement );
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x1e1e1e );
    // var zoom = controls.target.distanceTo( controls.object.position )
    // console.log(zoom)
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
    scene.add( directionalLight );
    // const axesHelper = new THREE.AxesHelper( 1000 );
    // scene.add( axesHelper );

    const loader = new GLTFLoader();
    let tower;
    loader.load( '../tower_origin.gltf', function ( gltf ) {
        console.log(gltf)
        tower = gltf.scene;
        tower.position.setZ(z_coord)
        tower.position.setY(y_coord)
        scene.add( tower );
    }, function(xhr) {
        // console.log((xhr.loaded/xhr.total * 100) + "% loaded")
    }, function ( error ) {
        console.error( error );
    } );
    
    const light = new THREE.DirectionalLight(0xffffff, 0.4)
    light.position.set(2,2,5);
    scene.add(light);
    // controls.update();

    function animate() {
        if (tower) tower.rotation.y += 0.005;
        requestAnimationFrame(animate);
        // controls.update();
        renderer.render(scene, camera);
    }
    animate();
}
// main();
export { main }