"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Usdt3DAnimation(): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Transparent background
    renderer.setSize(window.innerWidth * 0.9, 1000);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Central 3D Coin
    const coinTexture = new THREE.TextureLoader().load("/img1.svg");
    const coinSideTexture = new THREE.TextureLoader().load("/ucc-logo.svg"); // Optional texture for the coin's edge
    const coinGeometry = new THREE.CylinderGeometry(6, 6, 0.5, 64); // 3D coin shape
    const coinMaterial = [
      new THREE.MeshBasicMaterial({ map: coinSideTexture }), // Side texture
      new THREE.MeshBasicMaterial({ map: coinTexture }), // Front face
      new THREE.MeshBasicMaterial({ map: coinTexture }), // Back face
    ];
    const coin = new THREE.Mesh(coinGeometry, coinMaterial);
    coin.rotation.x = Math.PI / 4; // Rotate to face the camera
    scene.add(coin);

    // Array of Rotating USDT Spheres
    const usdtTexture = new THREE.TextureLoader().load("/ucc-logo.svg");
    const usdtGeometry = new THREE.SphereGeometry(0.7, 64, 64); // High-resolution for round spheres
    const usdtMaterial = new THREE.MeshStandardMaterial({
      map: usdtTexture,
      // emissive: 0x19ee99, // Greenish glow
      emissiveIntensity: 1,
      // roughness: 0.1, // Smooth reflective surface
      metalness: 0.5, // Glossy appearance
    });

    const usdtSpheres: THREE.Mesh[] = [];
    const numSpheres = 4; // Number of USDT spheres
    const radius = 5; // Radius for rotation

    for (let i = 0; i < numSpheres; i++) {
      const sphere = new THREE.Mesh(usdtGeometry, usdtMaterial);
      scene.add(sphere);
      usdtSpheres.push(sphere);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 2); // Soft white light for overall illumination
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // Bright directional light
    directionalLight.position.set(10, 10, 10); // Position the light to illuminate the spheres
    scene.add(directionalLight);

    // Camera Position
    camera.position.z = 20; // Positioned farther back for better visibility

    let angle = 0;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the central coin
      coin.rotation.z += 0.01;

      // Position the USDT spheres in a circular orbit around the center coin
      usdtSpheres.forEach((sphere, index) => {
        const phase = angle + (index * Math.PI * 2) / numSpheres; // Stagger positions
        sphere.position.set(
          Math.cos(phase) * radius, // X position
          Math.sin(phase * 0.6) * radius, // Y position
          Math.sin(phase) * radius // Z position
        );
        sphere.rotation.y += 0.02; // Spin effect for each sphere
      });

      angle += 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        margin: "0 auto",
        width: "100%",
        maxWidth: "600px",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Blinking $5 Text */}
      {/* {Array.from({ length: 10 }).map((_, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top: `${Math.random() * 100 + 5}%`, // Random Y position
            left: `${Math.random() * 100 + 5}%`, // Random X position
            fontSize: "1rem",
            padding: "0.25rem",
            borderRadius: "0.25rem",
            width: "3rem",
            backgroundColor: "rgba(1, 90, 4, 0.3)",
            fontWeight: "normal",
            color: "#55ee99", // Bright green color
            animation: `blink ${1.5 + Math.random()}s infinite`, // Independent blinking
            zIndex: 2,
          }}
        >
          +$5
        </span>
      ))} */}

      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
