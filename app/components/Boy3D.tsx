"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Center, ContactShadows, Html } from "@react-three/drei";
import * as THREE from "three";

interface BoyModelProps {
  selectedPart: string | null;
  onSelectPart: (part: string | null) => void;
}

// ----------------------------------------------------
// 1. BOY MODEL (Full Body View with Clickable Hotspots)
// ----------------------------------------------------
function BoyModel({ selectedPart, onSelectPart }: BoyModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  // Change cursor to pointer when hovering over clickable organ parts
  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "auto";
    }
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  // Subtle floating idle & breathing animation
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      groupRef.current.position.y = Math.sin(time * 1.5) * 0.05 + 0.02;

      const head = groupRef.current.getObjectByName("head");
      if (head) {
        head.rotation.y = Math.sin(time * 0.8) * 0.02;
        head.rotation.x = Math.sin(time * 1.2) * 0.01;
      }
    }
  });

  const getEmissive = (part: string) => {
    if (selectedPart === part) return "#3b82f6";
    if (hovered === part) return "#93c5fd";
    return "#000000";
  };

  const getIntensity = (part: string) => {
    if (selectedPart === part) return 0.6;
    if (hovered === part) return 0.4;
    return 0;
  };

  return (
    <group ref={groupRef} position={[0, 0.1, 0]}>
      {/* KEPALA (Body mesh) */}
      <group name="head" position={[0, 1.9, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.6, 0.6, 0.5]} />
          <meshStandardMaterial color="#fed7aa" roughness={0.4} />
        </mesh>
        <mesh position={[0, 0.25, -0.05]} castShadow>
          <boxGeometry args={[0.64, 0.2, 0.54]} />
          <meshStandardMaterial color="#451a03" roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.1, 0.1]} castShadow>
          <boxGeometry args={[0.64, 0.15, 0.4]} />
          <meshStandardMaterial color="#451a03" roughness={0.8} />
        </mesh>
        <mesh position={[-0.2, -0.1, 0.255]}>
          <boxGeometry args={[0.08, 0.04, 0.02]} />
          <meshStandardMaterial color="#fca5a5" transparent opacity={0.6} />
        </mesh>
        <mesh position={[0.2, -0.1, 0.255]}>
          <boxGeometry args={[0.08, 0.04, 0.02]} />
          <meshStandardMaterial color="#fca5a5" transparent opacity={0.6} />
        </mesh>

        {/* ORGANS ON HEAD */}

        {/* A. MATA */}
        <group
          name="mata_group"
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered("mata");
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            setHovered(null);
          }}
          onClick={(e) => {
            e.stopPropagation();
            onSelectPart("mata");
          }}
        >
          <mesh position={[-0.15, 0.05, 0.26]} castShadow>
            <boxGeometry args={[0.09, 0.09, 0.03]} />
            <meshStandardMaterial
              color="#111827"
              emissive={getEmissive("mata")}
              emissiveIntensity={getIntensity("mata")}
            />
          </mesh>
          <mesh position={[0.15, 0.05, 0.26]} castShadow>
            <boxGeometry args={[0.09, 0.09, 0.03]} />
            <meshStandardMaterial
              color="#111827"
              emissive={getEmissive("mata")}
              emissiveIntensity={getIntensity("mata")}
            />
          </mesh>

          <Html position={[0, 0.18, 0.28]} distanceFactor={3.2} center>
            <div
              className={`px-2 py-1 rounded-full text-[9px] font-bold shadow-md cursor-pointer transition-all duration-200 flex items-center gap-1 border whitespace-nowrap select-none ${selectedPart === "mata"
                  ? "bg-amber-500 text-white border-amber-600 scale-110"
                  : "bg-white/95 text-amber-700 border-amber-200 hover:border-amber-400 hover:bg-amber-50"
                }`}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
              </span>
              <span>👁️ Mata</span>
            </div>
          </Html>
        </group>

        {/* B. HIDUNG */}
        <mesh
          position={[0, -0.05, 0.265]}
          castShadow
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered("hidung");
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            setHovered(null);
          }}
          onClick={(e) => {
            e.stopPropagation();
            onSelectPart("hidung");
          }}
        >
          <boxGeometry args={[0.07, 0.08, 0.04]} />
          <meshStandardMaterial
            color="#fba575"
            emissive={getEmissive("hidung")}
            emissiveIntensity={getIntensity("hidung")}
          />

          <Html position={[0.18, 0, 0.06]} distanceFactor={3.2} center>
            <div
              className={`px-2 py-1 rounded-full text-[9px] font-bold shadow-md cursor-pointer transition-all duration-200 flex items-center gap-1 border whitespace-nowrap select-none ${selectedPart === "hidung"
                  ? "bg-emerald-500 text-white border-emerald-600 scale-110"
                  : "bg-white/95 text-emerald-700 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50"
                }`}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span>👃 Hidung</span>
            </div>
          </Html>
        </mesh>

        {/* C. MULUT */}
        <mesh
          position={[0, -0.16, 0.26]}
          castShadow
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered("mulut");
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            setHovered(null);
          }}
          onClick={(e) => {
            e.stopPropagation();
            onSelectPart("mulut");
          }}
        >
          <boxGeometry args={[0.18, 0.04, 0.02]} />
          <meshStandardMaterial
            color="#ef4444"
            emissive={getEmissive("mulut")}
            emissiveIntensity={getIntensity("mulut")}
          />

          <Html position={[0, -0.12, 0.05]} distanceFactor={3.2} center>
            <div
              className={`px-2 py-1 rounded-full text-[9px] font-bold shadow-md cursor-pointer transition-all duration-200 flex items-center gap-1 border whitespace-nowrap select-none ${selectedPart === "mulut"
                  ? "bg-rose-500 text-white border-rose-600 scale-110"
                  : "bg-white/95 text-rose-700 border-rose-200 hover:border-rose-400 hover:bg-rose-50"
                }`}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose-500"></span>
              </span>
              <span>👄 Mulut</span>
            </div>
          </Html>
        </mesh>

        {/* D. TELINGA */}
        <group
          name="telinga_group"
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered("telinga");
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            setHovered(null);
          }}
          onClick={(e) => {
            e.stopPropagation();
            onSelectPart("telinga");
          }}
        >
          <mesh position={[-0.32, 0, 0]} castShadow>
            <boxGeometry args={[0.06, 0.15, 0.1]} />
            <meshStandardMaterial
              color="#fed7aa"
              roughness={0.4}
              emissive={getEmissive("telinga")}
              emissiveIntensity={getIntensity("telinga")}
            />
          </mesh>
          <mesh position={[0.32, 0, 0]} castShadow>
            <boxGeometry args={[0.06, 0.15, 0.1]} />
            <meshStandardMaterial
              color="#fed7aa"
              roughness={0.4}
              emissive={getEmissive("telinga")}
              emissiveIntensity={getIntensity("telinga")}
            />
          </mesh>

          <Html position={[0.48, 0, 0.05]} distanceFactor={3.2} center>
            <div
              className={`px-2 py-1 rounded-full text-[9px] font-bold shadow-md cursor-pointer transition-all duration-200 flex items-center gap-1 border whitespace-nowrap select-none ${selectedPart === "telinga"
                  ? "bg-indigo-500 text-white border-indigo-600 scale-110"
                  : "bg-white/95 text-indigo-700 border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50"
                }`}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
              </span>
              <span>👂 Telinga</span>
            </div>
          </Html>
        </group>
      </group>

      {/* BADAN & JANTUNG / PARU-PARU */}
      <group name="badan_static">
        <mesh name="torso" position={[0, 1.2, 0]} castShadow>
          <boxGeometry args={[0.7, 0.8, 0.4]} />
          <meshStandardMaterial color="#3b82f6" roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.65, 0]} castShadow>
          <boxGeometry args={[0.72, 0.35, 0.42]} />
          <meshStandardMaterial color="#1e3a8a" roughness={0.5} />
        </mesh>

        <group
          name="jantung_paruparu"
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered("jantung_paruparu");
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            setHovered(null);
          }}
          onClick={(e) => {
            e.stopPropagation();
            onSelectPart("jantung_paruparu");
          }}
        >
          <mesh name="heart_mesh_boy" position={[-0.14, 1.28, 0.21]} castShadow>
            <boxGeometry args={[0.1, 0.1, 0.04]} />
            <meshStandardMaterial
              color="#ef4444"
              roughness={0.2}
              emissive={getEmissive("jantung_paruparu")}
              emissiveIntensity={getIntensity("jantung_paruparu")}
            />
          </mesh>
          <mesh position={[-0.14, 1.14, 0.205]} castShadow>
            <boxGeometry args={[0.12, 0.16, 0.03]} />
            <meshStandardMaterial
              color="#fca5a5"
              roughness={0.5}
              emissive={getEmissive("jantung_paruparu")}
              emissiveIntensity={getIntensity("jantung_paruparu")}
            />
          </mesh>
          <mesh position={[0.14, 1.18, 0.205]} castShadow>
            <boxGeometry args={[0.12, 0.2, 0.03]} />
            <meshStandardMaterial
              color="#fca5a5"
              roughness={0.5}
              emissive={getEmissive("jantung_paruparu")}
              emissiveIntensity={getIntensity("jantung_paruparu")}
            />
          </mesh>

          <Html position={[-0.42, 1.2, 0.25]} distanceFactor={3.2} center>
            <div
              className={`px-2 py-1 rounded-full text-[9px] font-bold shadow-md cursor-pointer transition-all duration-200 flex items-center gap-1 border whitespace-nowrap select-none ${selectedPart === "jantung_paruparu"
                  ? "bg-red-500 text-white border-red-600 scale-110"
                  : "bg-white/95 text-red-700 border-red-200 hover:border-red-400 hover:bg-red-50"
                }`}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
              </span>
              <span>❤️🫁 Jantung & Paru</span>
            </div>
          </Html>
        </group>
      </group>

      {/* TANGAN */}
      <group name="tangan_static">
        <mesh position={[-0.48, 1.25, 0]} castShadow>
          <boxGeometry args={[0.2, 0.7, 0.25]} />
          <meshStandardMaterial color="#3b82f6" roughness={0.3} />
        </mesh>
        <mesh position={[-0.48, 0.85, 0]} castShadow>
          <boxGeometry args={[0.18, 0.15, 0.2]} />
          <meshStandardMaterial color="#fed7aa" roughness={0.4} />
        </mesh>
        <mesh position={[0.48, 1.25, 0]} castShadow>
          <boxGeometry args={[0.2, 0.7, 0.25]} />
          <meshStandardMaterial color="#3b82f6" roughness={0.3} />
        </mesh>
        <mesh position={[0.48, 0.85, 0]} castShadow>
          <boxGeometry args={[0.18, 0.15, 0.2]} />
          <meshStandardMaterial color="#fed7aa" roughness={0.4} />
        </mesh>
      </group>

      {/* KAKI */}
      <group name="kaki_static">
        <mesh position={[-0.2, 0.3, 0]} castShadow>
          <boxGeometry args={[0.24, 0.5, 0.3]} />
          <meshStandardMaterial color="#1e3a8a" roughness={0.5} />
        </mesh>
        <mesh position={[-0.2, 0.05, 0.05]} castShadow>
          <boxGeometry args={[0.26, 0.12, 0.4]} />
          <meshStandardMaterial color="#111827" roughness={0.2} />
        </mesh>
        <mesh position={[0.2, 0.3, 0]} castShadow>
          <boxGeometry args={[0.24, 0.5, 0.3]} />
          <meshStandardMaterial color="#1e3a8a" roughness={0.5} />
        </mesh>
        <mesh position={[0.2, 0.05, 0.05]} castShadow>
          <boxGeometry args={[0.26, 0.12, 0.4]} />
          <meshStandardMaterial color="#111827" roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
}

// ----------------------------------------------------
// 2. DETAILED ORGAN MODELS (Centered at 0, 0, 0)
// ----------------------------------------------------

// A. DETAILED EYE MODEL
function EyeballModel() {
  const eyeRef = useRef<THREE.Group>(null);

  // Slowly look around
  useFrame((state) => {
    if (eyeRef.current) {
      const time = state.clock.getElapsedTime();
      eyeRef.current.rotation.y = Math.sin(time * 0.8) * 0.3;
      eyeRef.current.rotation.x = Math.sin(time * 0.5) * 0.15;
    }
  });

  return (
    <group ref={eyeRef} scale={[1.1, 1.1, 1.1]}>
      {/* Sclera (White sphere) */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} />
      </mesh>

      {/* Iris (Blue circular disk) */}
      <mesh position={[0, 0, 0.72]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.36, 0.36, 0.1, 32]} />
        <meshStandardMaterial color="#3b82f6" roughness={0.2} />
      </mesh>

      {/* Pupil (Black inner circle) */}
      <mesh position={[0, 0, 0.77]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 0.1, 32]} />
        <meshStandardMaterial color="#0f172a" roughness={0.1} />
      </mesh>

      {/* Cornea (Transparent outer lens dome) */}
      <mesh position={[0, 0, 0.68]} castShadow>
        <sphereGeometry args={[0.42, 32, 32, 0, Math.PI * 2, 0, Math.PI / 3]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.3} roughness={0} metalness={0.1} />
      </mesh>

      {/* Optic Nerve (Saraf Mata - Tube on the back) */}
      <mesh position={[0, 0, -0.9]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.12, 0.4, 16]} />
        <meshStandardMaterial color="#fed7aa" roughness={0.5} />
      </mesh>

      {/* Blood vessels */}
      <mesh position={[0.25, 0.25, -0.4]} rotation={[0, 0.4, 0.5]}>
        <torusGeometry args={[0.4, 0.015, 8, 24, Math.PI / 2]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>
      <mesh position={[-0.25, -0.2, -0.4]} rotation={[0.2, -0.4, -0.8]}>
        <torusGeometry args={[0.4, 0.015, 8, 24, Math.PI / 2]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>
    </group>
  );
}

// B. DETAILED NOSE MODEL
function NoseModel() {
  return (
    <group rotation={[0, -Math.PI / 6, 0]} scale={[1.2, 1.2, 1.2]}>
      {/* Nose bridge & base */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <coneGeometry args={[0.35, 1.1, 4]} />
        <meshStandardMaterial color="#fed7aa" roughness={0.4} />
      </mesh>

      {/* Nose tip */}
      <mesh position={[0, -0.22, 0.26]} castShadow>
        <sphereGeometry args={[0.16, 16, 16]} />
        <meshStandardMaterial color="#fba575" roughness={0.3} />
      </mesh>

      {/* Left Nostril */}
      <mesh position={[-0.16, -0.3, 0.12]} castShadow>
        <sphereGeometry args={[0.11, 16, 16]} />
        <meshStandardMaterial color="#fed7aa" roughness={0.4} />
      </mesh>

      {/* Right Nostril */}
      <mesh position={[0.16, -0.3, 0.12]} castShadow>
        <sphereGeometry args={[0.11, 16, 16]} />
        <meshStandardMaterial color="#fed7aa" roughness={0.4} />
      </mesh>

      {/* Dark holes */}
      <mesh position={[-0.08, -0.35, 0.14]} rotation={[Math.PI / 6, 0, 0]}>
        <boxGeometry args={[0.05, 0.02, 0.07]} />
        <meshBasicMaterial color="#1e293b" />
      </mesh>
      <mesh position={[0.08, -0.35, 0.14]} rotation={[Math.PI / 6, 0, 0]}>
        <boxGeometry args={[0.05, 0.02, 0.07]} />
        <meshBasicMaterial color="#1e293b" />
      </mesh>

      {/* Airflow flow line */}
      <mesh position={[0, -0.1, 0.3]} rotation={[Math.PI / 3, 0, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.5]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

// C. DETAILED MOUTH & TEETH MODEL
function MouthModel() {
  const tongueRef = useRef<THREE.Mesh>(null);

  // Tongue movement animation
  useFrame((state) => {
    if (tongueRef.current) {
      const time = state.clock.getElapsedTime();
      tongueRef.current.position.y = -0.22 + Math.sin(time * 3) * 0.04;
    }
  });

  return (
    <group scale={[1.1, 1.1, 1.1]}>
      {/* Mouth Interior Cavity */}
      <mesh castShadow receiveShadow position={[0, 0, -0.1]}>
        <boxGeometry args={[1.1, 0.7, 0.4]} />
        <meshStandardMaterial color="#450a0a" roughness={0.9} />
      </mesh>

      {/* Upper Lip */}
      <mesh position={[0, 0.35, 0.1]} castShadow>
        <boxGeometry args={[1.2, 0.12, 0.2]} />
        <meshStandardMaterial color="#ef4444" roughness={0.3} />
      </mesh>

      {/* Lower Lip */}
      <mesh position={[0, -0.35, 0.1]} castShadow>
        <boxGeometry args={[1.2, 0.12, 0.2]} />
        <meshStandardMaterial color="#ef4444" roughness={0.3} />
      </mesh>

      {/* Upper Teeth */}
      <group position={[0, 0.22, 0.08]}>
        <mesh castShadow><boxGeometry args={[0.13, 0.13, 0.14]} /><meshStandardMaterial color="#ffffff" roughness={0.1} /></mesh>
        <mesh position={[-0.15, 0, -0.02]}><boxGeometry args={[0.13, 0.13, 0.14]} /><meshStandardMaterial color="#ffffff" roughness={0.1} /></mesh>
        <mesh position={[0.15, 0, -0.02]}><boxGeometry args={[0.13, 0.13, 0.14]} /><meshStandardMaterial color="#ffffff" roughness={0.1} /></mesh>
        <mesh position={[-0.3, 0, -0.05]}><boxGeometry args={[0.11, 0.13, 0.14]} /><meshStandardMaterial color="#ffffff" roughness={0.1} /></mesh>
        <mesh position={[0.3, 0, -0.05]}><boxGeometry args={[0.11, 0.13, 0.14]} /><meshStandardMaterial color="#ffffff" roughness={0.1} /></mesh>
      </group>

      {/* Lower Teeth */}
      <group position={[0, -0.22, 0.08]}>
        <mesh castShadow><boxGeometry args={[0.11, 0.11, 0.14]} /><meshStandardMaterial color="#ffffff" roughness={0.1} /></mesh>
        <mesh position={[-0.13, 0, -0.02]}><boxGeometry args={[0.11, 0.11, 0.14]} /><meshStandardMaterial color="#ffffff" roughness={0.1} /></mesh>
        <mesh position={[0.14, 0, -0.02]}><boxGeometry args={[0.11, 0.11, 0.14]} /><meshStandardMaterial color="#ffffff" roughness={0.1} /></mesh>
        <mesh position={[-0.26, 0, -0.05]}><boxGeometry args={[0.09, 0.11, 0.14]} /><meshStandardMaterial color="#ffffff" roughness={0.1} /></mesh>
        <mesh position={[0.26, 0, -0.05]}><boxGeometry args={[0.09, 0.11, 0.14]} /><meshStandardMaterial color="#ffffff" roughness={0.1} /></mesh>
      </group>

      {/* Tongue */}
      <mesh ref={tongueRef} position={[0, -0.22, 0]} castShadow>
        <boxGeometry args={[0.55, 0.16, 0.4]} />
        <meshStandardMaterial color="#fda4af" roughness={0.6} />
      </mesh>
    </group>
  );
}

// D. DETAILED EAR MODEL
function EarModel() {
  return (
    <group rotation={[0, Math.PI / 3, 0]} scale={[1.2, 1.2, 1.2]}>
      {/* Outer helix */}
      <mesh castShadow>
        <torusGeometry args={[0.55, 0.11, 12, 32, Math.PI * 1.6]} />
        <meshStandardMaterial color="#fed7aa" roughness={0.4} />
      </mesh>

      {/* Ear lobe */}
      <mesh position={[0, -0.55, 0]} castShadow>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#fed7aa" roughness={0.4} />
      </mesh>

      {/* Inner concha */}
      <mesh position={[0.08, -0.12, -0.04]} castShadow>
        <sphereGeometry args={[0.28, 16, 16]} />
        <meshStandardMaterial color="#fba575" roughness={0.5} />
      </mesh>

      {/* Ear canal opening */}
      <mesh position={[0, -0.12, -0.15]}>
        <cylinderGeometry args={[0.07, 0.07, 0.1, 16]} />
        <meshBasicMaterial color="#1e293b" />
      </mesh>

      {/* Soundwaves visualizer */}
      <mesh position={[0, -0.12, 0.35]}>
        <torusGeometry args={[0.26, 0.01, 8, 24, Math.PI * 2]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.4} />
      </mesh>
      <mesh position={[0, -0.12, 0.6]}>
        <torusGeometry args={[0.45, 0.01, 8, 24, Math.PI * 2]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

// E. DETAILED HEART & LUNGS MODEL
function HeartLungsModel() {
  const heartRef = useRef<THREE.Mesh>(null);
  const lungsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Heart beats
    if (heartRef.current) {
      const beat = 0.8 + Math.sin(time * 5.5) * 0.07;
      heartRef.current.scale.set(beat, beat, beat);
    }

    // Lungs breathe
    if (lungsRef.current) {
      const breath = 1.0 + Math.sin(time * 2.0) * 0.06;
      lungsRef.current.scale.set(breath, breath, 1.0 + Math.sin(time * 2.0) * 0.02);
    }
  });

  return (
    <group scale={[1.1, 1.1, 1.1]}>
      {/* Trachea (Air tube) */}
      <mesh position={[0, 0.7, 0]} castShadow>
        <cylinderGeometry args={[0.09, 0.09, 0.7, 16]} />
        <meshStandardMaterial color="#60a5fa" roughness={0.3} />
      </mesh>

      {/* Lungs */}
      <group ref={lungsRef}>
        {/* Left Lung */}
        <mesh position={[-0.35, 0.08, 0.0]} castShadow>
          <sphereGeometry args={[0.32, 16, 16]} />
          <group scale={[1, 1.7, 0.8]}>
            <meshStandardMaterial color="#fca5a5" roughness={0.4} />
          </group>
        </mesh>

        {/* Right Lung */}
        <mesh position={[0.35, 0.08, 0.0]} castShadow>
          <sphereGeometry args={[0.32, 16, 16]} />
          <group scale={[1, 1.7, 0.8]}>
            <meshStandardMaterial color="#fca5a5" roughness={0.4} />
          </group>
        </mesh>
      </group>

      {/* Heart */}
      <mesh ref={heartRef} position={[-0.08, 0.08, 0.2]} castShadow>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#dc2626" roughness={0.2} />
      </mesh>

      {/* Vessels */}
      <mesh position={[-0.06, 0.3, 0.15]} rotation={[0.2, 0, -0.4]} castShadow>
        <cylinderGeometry args={[0.035, 0.035, 0.25, 8]} />
        <meshStandardMaterial color="#dc2626" />
      </mesh>
      <mesh position={[0.02, 0.28, 0.16]} rotation={[-0.1, 0, 0.2]} castShadow>
        <cylinderGeometry args={[0.035, 0.035, 0.25, 8]} />
        <meshStandardMaterial color="#2563eb" />
      </mesh>
    </group>
  );
}

// ----------------------------------------------------
// 3. CAMERA RIG COMPONENT
// ----------------------------------------------------
interface CameraRigProps {
  selectedPart: string | null;
  controlsRef: React.RefObject<any>;
}

function CameraRig({ selectedPart, controlsRef }: CameraRigProps) {
  useFrame((state) => {
    // Default values for Full Boy Model
    let targetPosX = 0;
    let targetPosY = 1.3;
    let targetPosZ = 3.6;

    let targetTarX = 0;
    let targetTarY = 1.1;
    let targetTarZ = 0;

    // Default values for Isolated Organ Models (Centered at 0,0,0)
    if (selectedPart !== null) {
      targetPosX = 0;
      targetPosY = 0.2;
      targetPosZ = 2.1; // Close focus centered organ
      targetTarX = 0;
      targetTarY = 0;
      targetTarZ = 0;
    }

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetPosX, 0.07);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetPosY, 0.07);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetPosZ, 0.07);

    if (controlsRef.current) {
      controlsRef.current.target.x = THREE.MathUtils.lerp(controlsRef.current.target.x, targetTarX, 0.07);
      controlsRef.current.target.y = THREE.MathUtils.lerp(controlsRef.current.target.y, targetTarY, 0.07);
      controlsRef.current.target.z = THREE.MathUtils.lerp(controlsRef.current.target.z, targetTarZ, 0.07);
      controlsRef.current.update();
    }
  });

  return null;
}

// ----------------------------------------------------
// 4. MAIN EXPORT COMPONENT
// ----------------------------------------------------
interface Boy3DProps {
  selectedPart: string | null;
  onSelectPart: (part: string | null) => void;
}

export default function Boy3D({ selectedPart, onSelectPart }: Boy3DProps) {
  const controlsRef = useRef<any>(null);

  // Render the selected organ or the full boy model
  const renderInteractiveModel = () => {
    switch (selectedPart) {
      case "mata":
        return <EyeballModel />;
      case "hidung":
        return <NoseModel />;
      case "mulut":
        return <MouthModel />;
      case "telinga":
        return <EarModel />;
      case "jantung_paruparu":
        return <HeartLungsModel />;
      default:
        return <BoyModel selectedPart={selectedPart} onSelectPart={onSelectPart} />;
    }
  };

  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 1.3, 3.6], fov: 45 }}
        shadows
        className="w-full h-full"
      >
        <CameraRig selectedPart={selectedPart} controlsRef={controlsRef} />

        <ambientLight intensity={0.9} />
        <directionalLight
          position={[4, 6, 4]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-4, 4, -2]} intensity={0.35} />

        <Center>
          {renderInteractiveModel()}
        </Center>

        <ContactShadows
          position={[0, -0.01, 0]}
          opacity={0.3}
          scale={4}
          blur={1.5}
          far={3}
        />

        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          minDistance={0.6}
          maxDistance={5}
          maxPolarAngle={Math.PI / 2 - 0.05}
        />
      </Canvas>
    </div>
  );
}
