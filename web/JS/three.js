import * as THREE from 'three'

import Renderer from 'three/examples/jsm/renderers/common/Renderer.js';
const scene = new THREE.Scene();
const geometry = new THREE.SphereGeometry();
const material = new THREE.MeshStandardMaterial(
	{
		color:"#d08f2d"
	}
);
const mesh= new THREE.Mesh(geometry,material);
scene.add(mesh);
const camera = new THREE.PerspectiveCamera(45,800,600);
scene.add(camera)
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGL3DRender({canvas});
renderer.setSize(800,600);
renderer.render(scene,camera)