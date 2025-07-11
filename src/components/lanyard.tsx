"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useTexture } from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  RigidBody,
} from '@react-three/rapier';
import * as THREE from 'three';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

export default function Lanyard({
  maxSpeed = 50,
  minSpeed = 10,
  onCardClick,
}: {
  maxSpeed?: number;
  minSpeed?: number;
  onCardClick: () => void;
}) {
  const band = useRef<THREE.Mesh>(null!);
  const fixedBody = useRef<RigidBodyApi>(null!);
  const j1 = useRef<RigidBodyApi>(null!);
  const j2 = useRef<RigidBodyApi>(null!);
  const j3 = useRef<RigidBodyApi>(null!);
  const card = useRef<RigidBodyApi>(null!);

  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();

  const segmentProps = {
    type: 'dynamic' as const,
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4,
  };

  const { nodes, materials } = useGLTF('/card.glb') as any;
  const texture = useTexture('/lanyard.png');

  const geometry = useMemo(() => new MeshLineGeometry(), []);
  const material = useMemo(
    () =>
      new MeshLineMaterial({
        color: 'white',
        depthTest: false,
        transparent: true,
        useMap: true,
        map: texture,
        repeat: [-4, 1],
        lineWidth: 1,
        resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
      }),
    [texture]
  );

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );

  useEffect(() => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  }, [texture]);

  useEffect(() => {
    band.current.geometry = geometry;
    band.current.material = material;
  }, [geometry, material]);

  useFrame((_, delta) => {
    [j1, j2].forEach((ref) => {
      if (!(ref.current as any).lerped) {
        (ref.current as any).lerped = new THREE.Vector3().copy(ref.current.translation());
      }
      const clampedDistance = Math.max(
        0.1,
        Math.min(1, (ref.current as any).lerped.distanceTo(ref.current.translation()))
      );
      (ref.current as any).lerped.lerp(
        ref.current.translation(),
        delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
      );
    });

    curve.points[0].copy(j3.current.translation());
    curve.points[1].copy((j2.current as any).lerped);
    curve.points[2].copy((j1.current as any).lerped);
    curve.points[3].copy(fixedBody.current.translation());

    geometry.setPoints(curve.getPoints(32));

    ang.copy(card.current.angvel());
    rot.copy(card.current.rotation());
    card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
  });

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody handleRef={fixedBody} {...segmentProps} type="fixed" />
        <RigidBody handleRef={j1} position={[0.5, 0, 0]} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody handleRef={j2} position={[1, 0, 0]} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody handleRef={j3} position={[1.5, 0, 0]} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody handleRef={card} position={[2, 0, 0]} {...segmentProps}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerUp={(e) => {
              e.stopPropagation();
              onCardClick();
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.base.map}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        <primitive object={geometry} attach="geometry" />
        <primitive object={material} attach="material" />
      </mesh>
    </>
  );
}
