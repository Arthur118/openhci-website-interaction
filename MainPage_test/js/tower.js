import * as THREE from "three";
import { TWEEN } from 'https://unpkg.com/three@0.142.0/examples/jsm/libs/tween.module.min.js'
import { GLTFLoader } from 'https://unpkg.com/three@0.142.0/examples/jsm/loaders/GLTFLoader.js';
// import { OrbitControls } from 'https://unpkg.com/three@0.142.0/examples/jsm/controls/OrbitControls.js';

function main(z_coord, y_coord, activateAnimation) {
    const canvas = document.querySelector('#tower-canvas');
    const renderer = new THREE.WebGLRenderer({canvas});
    // const renderer = new THREE.WebGLRenderer({canvas, alpha: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    // renderer.setClearColor( 0xffffff, 0 );

    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 7000 );
    
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x1e1e1e );
    
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
    scene.add( directionalLight );
    // const axesHelper = new THREE.AxesHelper( 1000 );
    // scene.add( axesHelper );

    const loader = new GLTFLoader();
    let tower;
    loader.load( '../tower_origin.gltf', function ( gltf ) {
        // console.log(gltf)
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

    function lerp(x, y, a){
        return (1 - a) * x + a * y
    }
    function scalePercent(start, end) {
        return (scrollPercent - start) / (end - start);
    }
    
    const animationScripts = [];
    //add an animation that moves the cube through 100 percent of scroll
    animationScripts.push({
        start: 0,
        end: 101,
        func: () => {
            if (tower) tower.rotation.y += 0.005;
        },
    })
    //add an animation that moves the cube through first 3 percent of scroll
    animationScripts.push({
        start: 0,
        end: 3,
        func: () => {
            camera.position.set(850, 350, 500);
            camera.lookAt(new THREE.Vector3(0,250,500))
            if(tower) tower.rotation.x = lerp(0, 0.25, scalePercent(0, 10))
        },
    })
    
    //add an animation that rotates the cube between 3-100 percent of scroll
    animationScripts.push({
        start: 0,
        end: 6,
        func: () => {
            if(activateAnimation){
                camera.position.x = lerp(850, 400, scalePercent(0, 7))
                camera.position.z = lerp(500, 650, scalePercent(0, 7))
                camera.position.y = lerp(350, 250, scalePercent(0, 7))
            }
        }
    })

    function playScrollAnimations() {
        animationScripts.forEach((a) => {
            if (scrollPercent >= a.start && scrollPercent < a.end) {
                a.func()
            }
        })
    }

    let scrollPercent = 0

    document.body.onscroll = () => {
        //calculate the current scroll progress as a percentage
        scrollPercent =
            ((document.documentElement.scrollTop || document.body.scrollTop) /
                ((document.documentElement.scrollHeight ||
                    document.body.scrollHeight) -
                    document.documentElement.clientHeight)) * 100;
        // console.log(scrollPercent.toFixed(2))
    }

    function animate() {
        requestAnimationFrame(animate);
        playScrollAnimations()
        TWEEN.update() // update animations
        renderer.render(scene, camera);
    }
    animate();
}
window.scrollTo({ top: 0, behavior: 'smooth' })

export { main }