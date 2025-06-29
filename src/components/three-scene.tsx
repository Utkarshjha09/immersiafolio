'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    let animationFrameId: number;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Create a group to hold all objects
    const objectGroup = new THREE.Group();
    scene.add(objectGroup);

    // Outer wireframe sphere
    const outerGeometry = new THREE.IcosahedronGeometry(2.5, 1);
    const outerMaterial = new THREE.MeshBasicMaterial({
      color: 0xBE52F2,
      wireframe: true,
    });
    const outerSphere = new THREE.Mesh(outerGeometry, outerMaterial);
    objectGroup.add(outerSphere);

    // Inner glowing core
    const innerGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xBE52F2,
      emissiveIntensity: 5,
      toneMapped: false, // Make it glow more
    });
    const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial);
    objectGroup.add(innerSphere);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xBE52F2, 5, 100);
    pointLight.position.set(0, 0, 0);
    objectGroup.add(pointLight);

    const mouse = new THREE.Vector2();

    const onMouseMove = (event: MouseEvent) => {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Animate rotations
      outerSphere.rotation.y = elapsedTime * 0.1;
      outerSphere.rotation.x = elapsedTime * 0.1;
      innerSphere.rotation.y = elapsedTime * -0.2;
      
      // Animate group based on mouse position
      objectGroup.rotation.y += (mouse.x * 0.5 - objectGroup.rotation.y) * 0.05;
      objectGroup.rotation.x += (mouse.y * 0.5 - objectGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      cancelAnimationFrame(animationFrameId);
      outerGeometry.dispose();
      outerMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
