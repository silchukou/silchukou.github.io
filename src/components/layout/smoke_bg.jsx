import React, { useCallback, useEffect, useRef } from "react";
import * as THREE from "three";

const SmokeElement = (props) => {
  const mount = useRef();
  const clock = useRef();
  const renderer = useRef();
  const scene = useRef();
  const camera = useRef();
  const geometry = useRef();
  const material = useRef();
  const cubeSineDriver = useRef(0);
  const smokeParticles = useRef([]);
  const mesh = useRef();
  const delta = useRef();
  const frameId = useRef();

  useEffect(() => {
    const width = mount.current.clientWidth;
    const height = mount.current.clientHeight;
    renderer.current = new THREE.WebGLRenderer({ alpha: true });
    scene.current = new THREE.Scene();
    clock.current = new THREE.Clock();
    geometry.current = new THREE.BoxGeometry(200, 200, 200);
    material.current = new THREE.MeshLambertMaterial({
      color: 0x000000,
      wireframe: false,
    });

    //Three.js setup
    renderer.current.setSize(width, height);

    camera.current = new THREE.PerspectiveCamera(75, width / height, 1, 10000);
    camera.current.position.z = 1000;
    camera.current.position.x = -100;
    scene.current.add(camera.current);

    mesh.current = new THREE.Mesh(geometry.current, material.current);

    let light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(-1, 0, 1);
    scene.current.add(light);
    smokeParticles.length = 0;
    new THREE.TextureLoader().load(props.smokeSrc, (smokeTexture) => {
      let smokeMaterial = new THREE.MeshLambertMaterial({
        color: Number("0x" + props.smokeColor),
        map: smokeTexture,
        opacity: props.smokeOpacity,
        transparent: true,
      });
      let smokeGeo = new THREE.PlaneGeometry(300, 300);

      for (let p = 0; p < 150; p++) {
        let particle = new THREE.Mesh(smokeGeo, smokeMaterial);
        particle.position.set(
          Math.random() * 500 - 250,
          Math.random() * 500 - 250,
          Math.random() * 1000 - 100
        );
        particle.rotation.z = Math.random() * 360;
        scene.current.add(particle);
        smokeParticles.current.push(particle);
      }
    });

    mount.current.appendChild(renderer.current.domElement);
    // remember these initial values
    // let tanFOV = Math.tan(((Math.PI / 180) * this.camera.fov) / 2);
    // let windowHeight = height;

    animate();

    return () => {
      cancelAnimationFrame(frameId.current);
      mount.current.removeChild(renderer.current.domElement);
    };
  }, []);

  const animate = useCallback(() => {
    const width = mount.current.clientWidth;
    const height = mount.current.clientHeight;
    renderer.current.setSize(width, height);

    delta.current = clock.current.getDelta();
    requestAnimationFrame(animate);
    evolveSmoke();
    mesh.current.rotation.x += 0.005;
    mesh.current.rotation.y += 0.01;
    cubeSineDriver.current += 0.01;
    mesh.current.position.z = 100 + Math.sin(cubeSineDriver.current) * 500;
    renderer.current.render(scene.current, camera.current);
  }, []);

  const evolveSmoke = useCallback(() => {
    let sp = smokeParticles.current.length;
    while (sp--) {
      smokeParticles.current[sp].rotation.z += delta.current * 0.2;
    }
  }, []);

  return <div ref={mount} className={props.className} />;
};

export default SmokeElement;
