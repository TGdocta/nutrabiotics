"use client"
import Link from 'next/link';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';


export default function Cone() {
  const sceneRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (!sceneRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    sceneRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.ConeGeometry();

    const fillMaterial = new THREE.MeshBasicMaterial({ color: 0xd8b4fe, wireframe: true });
    const fillCube = new THREE.Mesh(geometry, fillMaterial);
    scene.add(fillCube);

    camera.position.z = 5;

    const handleResize = () => {
      if (!sceneRef.current) return;
      const { clientWidth, clientHeight } = sceneRef.current;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      requestAnimationFrame(animate);


      fillCube.rotation.x += 0.01;
      fillCube.rotation.y += 0.01;


      renderer.render(scene, camera);
    };

    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div className="bg-black p-10">
        <Link className="text-purple-500 font-extrabold transition-color hover:text-white" href="/landing">Volver</Link>
      </div>
      <div
        ref={sceneRef}
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: '#fff',
        }}
      />
    </>

  );
}
