import * as THREE from "./three/build/three.module.js";
// import GLTFLoader from "./three/examples/jsm/loaders/GLTFLoader.js";
function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});

    const fov = 75;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 5;

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 3;

    const scene = new THREE.Scene();

    // const gltfLoader = new THREE.GLTFLoader();
    // const url = './TOWER.gltf';
    // gltfLoader.load(url, (gltf) => {
    //     const root = gltf.scene;
    //     scene.add(root);
    // });
        
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const material = new THREE.MeshBasicMaterial({color: 0x0000ee});

    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    renderer.render(scene, camera);

    function render(time) {
        time *= 0.004;  // convert time to seconds
        
        cube.rotation.x = 1;
        cube.rotation.y = time;
        
        renderer.render(scene, camera);
        
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
main();