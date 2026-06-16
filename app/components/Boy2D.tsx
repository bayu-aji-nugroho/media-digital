"use client";

import React from "react";

interface Boy2DProps {
  selectedPart: string | null;
  onSelectPart: (part: string | null) => void;
}

export default function Boy2D({ selectedPart, onSelectPart }: Boy2DProps) {
  // Render the corresponding 2D SVG illustration based on selected organ
  const renderOrganIllustration = () => {
    switch (selectedPart) {
      case "mata":
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 animate-fadeIn">
            <h3 className="text-sm font-bold text-zinc-400 mb-6 uppercase tracking-wider">Gambar 2D: Anatomi Mata</h3>
            <svg viewBox="0 0 200 200" className="w-64 h-64 drop-shadow-xl">
              <defs>
                <radialGradient id="irisGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="70%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#1e3a8a" />
                </radialGradient>
                <radialGradient id="lensGrad" cx="35%" cy="35%" r="60%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
                </radialGradient>
              </defs>
              {/* Sclera (White eye background) */}
              <circle cx="100" cy="100" r="80" fill="#ffffff" stroke="#e4e4e7" strokeWidth="3" />
              {/* Blood Vessels (Saraf/Pembuluh darah halus) */}
              <path d="M 30,100 Q 50,90 60,110 Q 70,100 80,105" fill="none" stroke="#ef4444" strokeWidth="1.5" opacity="0.6" />
              <path d="M 170,100 Q 150,110 140,90 Q 130,95 120,90" fill="none" stroke="#ef4444" strokeWidth="1.5" opacity="0.6" />
              <path d="M 100,30 Q 95,50 110,65" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.5" />
              {/* Iris (Warna Mata) */}
              <circle cx="100" cy="100" r="45" fill="url(#irisGrad)" stroke="#1d4ed8" strokeWidth="2" />
              {/* Pupil (Pusat Hitam) */}
              <circle cx="100" cy="100" r="22" fill="#0f172a" />
              {/* Lens reflection (Pantulan cahaya membuat hidup) */}
              <circle cx="86" cy="86" r="10" fill="url(#lensGrad)" />
              <circle cx="112" cy="112" r="4" fill="#ffffff" opacity="0.6" />
              {/* Saraf Mata (Optic Nerve) */}
              <path d="M 100,180 L 100,195" stroke="#fed7aa" strokeWidth="12" strokeLinecap="round" />
            </svg>
          </div>
        );
      case "hidung":
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 animate-fadeIn">
            <h3 className="text-sm font-bold text-zinc-400 mb-6 uppercase tracking-wider">Gambar 2D: Anatomi Hidung</h3>
            <svg viewBox="0 0 200 200" className="w-64 h-64 drop-shadow-xl">
              {/* Nose Outer Bridge Profile */}
              <path
                d="M 80,30 L 80,95 Q 80,125 110,125 Q 125,125 125,115 Q 125,100 110,100 Q 100,100 98,85 L 98,30 Z"
                fill="#fed7aa"
                stroke="#fba575"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              {/* Nostril Hole */}
              <ellipse cx="106" cy="116" rx="10" ry="5" fill="#1e293b" />
              {/* Airflow Particles (Oksigen masuk) */}
              <g className="animate-pulse">
                <path d="M 106,160 Q 106,140 106,125" fill="none" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6,4" strokeLinecap="round" />
                <circle cx="106" cy="150" r="3" fill="#0ea5e9" />
                <circle cx="106" cy="135" r="4" fill="#0ea5e9" />
              </g>
            </svg>
          </div>
        );
      case "mulut":
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 animate-fadeIn">
            <h3 className="text-sm font-bold text-zinc-400 mb-6 uppercase tracking-wider">Gambar 2D: Anatomi Mulut</h3>
            <svg viewBox="0 0 200 200" className="w-64 h-64 drop-shadow-xl">
              {/* Mouth Cavity (Rongga dalam) */}
              <path d="M 30,100 Q 100,40 170,100 Q 100,170 30,100 Z" fill="#450a0a" stroke="#ef4444" strokeWidth="4" />
              {/* Tongue (Lidah) */}
              <path d="M 50,115 Q 100,85 150,115 Q 100,160 50,115 Z" fill="#fca5a5" />
              <path d="M 100,100 L 100,135" stroke="#f43f5e" strokeWidth="2" opacity="0.5" />
              {/* Upper Teeth (Gigi Atas) */}
              <path d="M 50,75 L 62,75 L 62,85 L 50,85 Z" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
              <path d="M 62,72 L 76,72 L 76,85 L 62,85 Z" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
              <path d="M 76,70 L 90,70 L 90,85 L 76,85 Z" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
              <path d="M 90,70 L 104,70 L 104,85 L 90,85 Z" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
              <path d="M 104,70 L 118,70 L 118,85 L 104,85 Z" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
              <path d="M 118,72 L 132,72 L 132,85 L 118,85 Z" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
              <path d="M 132,75 L 144,75 L 144,85 L 132,85 Z" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
              {/* Lower Teeth (Gigi Bawah) */}
              <path d="M 60,120 L 72,120 L 72,110 L 60,110 Z" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
              <path d="M 72,122 L 86,122 L 86,110 L 72,110 Z" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
              <path d="M 86,124 L 100,124 L 100,110 L 86,110 Z" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
              <path d="M 100,124 L 114,124 L 114,110 L 100,110 Z" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
              <path d="M 114,122 L 128,122 L 128,110 L 114,110 Z" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
              <path d="M 128,120 L 140,120 L 140,110 L 128,110 Z" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
            </svg>
          </div>
        );
      case "telinga":
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 animate-fadeIn">
            <h3 className="text-sm font-bold text-zinc-400 mb-6 uppercase tracking-wider">Gambar 2D: Anatomi Telinga</h3>
            <svg viewBox="0 0 200 200" className="w-64 h-64 drop-shadow-xl">
              {/* Outer helix (Daun telinga) */}
              <path
                d="M 60,50 Q 30,80 50,130 Q 70,170 110,170 Q 140,170 145,130 Q 150,70 100,40 Q 80,30 60,50 Z"
                fill="#fed7aa"
                stroke="#fba575"
                strokeWidth="3"
              />
              {/* Inner folds */}
              <path d="M 75,65 Q 60,85 70,110 Q 80,135 110,135" fill="none" stroke="#fba575" strokeWidth="3" />
              <path d="M 95,80 Q 80,95 85,115" fill="none" stroke="#fba575" strokeWidth="2" />
              {/* Ear canal opening (Lubang telinga) */}
              <circle cx="105" cy="115" r="10" fill="#1e293b" />
              {/* Soundwaves */}
              <g className="opacity-80">
                <path d="M 140,115 A 25,25 0 0,0 125,95" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 160,115 A 45,45 0 0,0 135,75" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
              </g>
            </svg>
          </div>
        );
      case "jantung_paruparu":
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 animate-fadeIn">
            <h3 className="text-sm font-bold text-zinc-400 mb-6 uppercase tracking-wider">Gambar 2D: Jantung & Paru-Paru</h3>
            <svg viewBox="0 0 200 200" className="w-64 h-64 drop-shadow-xl">
              {/* Trachea (Tenggorokan - Blue Ribs) */}
              <rect x="94" y="20" width="12" height="60" rx="3" fill="#93c5fd" stroke="#2563eb" strokeWidth="1.5" />
              <line x1="94" y1="32" x2="106" y2="32" stroke="#2563eb" strokeWidth="1.5" />
              <line x1="94" y1="44" x2="106" y2="44" stroke="#2563eb" strokeWidth="1.5" />
              <line x1="94" y1="56" x2="106" y2="56" stroke="#2563eb" strokeWidth="1.5" />
              <line x1="94" y1="68" x2="106" y2="68" stroke="#2563eb" strokeWidth="1.5" />

              {/* Lungs (Paru-Paru) */}
              {/* Left Lung */}
              <path d="M 94,75 C 60,75 50,110 50,150 C 50,165 70,175 90,160 C 96,155 96,130 94,75 Z" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
              {/* Right Lung */}
              <path d="M 106,75 C 140,75 150,110 150,150 C 150,165 130,175 110,160 C 104,155 104,130 106,75 Z" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />

              {/* Heart (Jantung - Beating Animation class) */}
              <g className="animate-bounce" style={{ transformOrigin: "90px 130px" }}>
                <path
                  d="M 90,142 C 90,142 76,126 76,118 C 76,110 82,106 88,110 C 90,112 90,112 90,112 C 90,112 90,112 92,110 C 98,106 104,110 104,118 C 104,126 90,142 90,142 Z"
                  fill="#dc2626"
                  stroke="#991b1b"
                  strokeWidth="1.5"
                />
                {/* Aorta Vessel */}
                <path d="M 88,110 Q 88,100 94,102" fill="none" stroke="#dc2626" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M 92,110 Q 96,96 100,102" fill="none" stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center relative bg-gradient-to-b from-white to-zinc-550 min-h-[400px] md:min-h-0">
      {/* Dynamic illustration panel */}
      {selectedPart ? (
        renderOrganIllustration()
      ) : (
        /* 2D CARTOON BOY ILLUSTRATION */
        <div className="relative w-full max-w-[320px] aspect-[4/5] flex items-center justify-center p-6 animate-fadeIn select-none">
          {/* Main SVG representing a cute boy character */}
          <svg viewBox="0 0 240 300" className="w-full h-full drop-shadow-lg overflow-visible">
            {/* Shadow */}
            <ellipse cx="120" cy="285" rx="60" ry="10" fill="#cbd5e1" opacity="0.6" />

            {/* Feet / Shoes */}
            <ellipse cx="90" cy="275" rx="16" ry="10" fill="#1e293b" />
            <ellipse cx="150" cy="275" rx="16" ry="10" fill="#1e293b" />

            {/* Legs */}
            <rect x="80" y="220" width="20" height="60" rx="4" fill="#1e3a8a" />
            <rect x="140" y="220" width="20" height="60" rx="4" fill="#1e3a8a" />

            {/* Torso / Shirt */}
            <rect x="70" y="130" width="100" height="100" rx="12" fill="#3b82f6" />
            
            {/* Arms */}
            <rect x="42" y="130" width="24" height="70" rx="10" fill="#3b82f6" />
            <rect x="174" y="130" width="24" height="70" rx="10" fill="#3b82f6" />
            {/* Hands */}
            <circle cx="54" cy="205" r="11" fill="#fed7aa" />
            <circle cx="186" cy="205" r="11" fill="#fed7aa" />

            {/* Neck */}
            <rect x="105" y="118" width="30" height="20" rx="4" fill="#fed7aa" />

            {/* Head (Face) */}
            <circle cx="120" cy="80" r="45" fill="#fed7aa" />
            
            {/* Ears */}
            <circle cx="72" cy="80" r="9" fill="#fed7aa" />
            <circle cx="168" cy="80" r="9" fill="#fed7aa" />

            {/* Eyes */}
            <circle cx="104" cy="74" r="5" fill="#0f172a" />
            <circle cx="136" cy="74" r="5" fill="#0f172a" />
            <circle cx="102" cy="72" r="1.5" fill="#ffffff" />
            <circle cx="134" cy="72" r="1.5" fill="#ffffff" />

            {/* Cheek blush */}
            <ellipse cx="96" cy="84" rx="6" ry="3" fill="#fca5a5" opacity="0.6" />
            <ellipse cx="144" cy="84" rx="6" ry="3" fill="#fca5a5" opacity="0.6" />

            {/* Nose */}
            <path d="M 120,74 L 117,82 L 123,82 Z" fill="#fba575" />

            {/* Mouth */}
            <path d="M 110,92 Q 120,102 130,92" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />

            {/* Hair */}
            <path
              d="M 72,70 C 72,30 168,30 168,70 C 168,70 174,50 155,42 C 145,38 135,38 120,44 C 105,38 95,38 85,42 C 66,50 72,70 72,70 Z"
              fill="#451a03"
            />

            {/* Heart shape printed on shirt */}
            <path
              d="M 120,165 C 120,165 110,152 110,145 C 110,138 115,135 120,138 C 120,138 120,138 120,138 C 120,138 120,138 120,138 C 125,135 130,138 130,145 C 130,152 120,165 120,165 Z"
              fill="#dc2626"
              opacity="0.8"
            />
          </svg>

          {/* ==================================================== */}
          {/* INTERACTIVE HOTSPOTS ON THE 2D ILLUST */}
          {/* ==================================================== */}

          {/* 1. MATA (Eyes) */}
          <div
            onClick={() => onSelectPart("mata")}
            className="absolute top-[20%] left-[34%] -translate-x-1/2 -translate-y-1/2 group z-20"
          >
            <div className="w-5 h-5 rounded-full bg-amber-500/30 border border-amber-500 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
            </div>
            <span className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/95 border border-amber-200 text-amber-800 text-[8px] font-extrabold px-1.5 py-0.5 rounded-full shadow-xs whitespace-nowrap opacity-90 group-hover:opacity-100 group-hover:bg-amber-50">
              👁️ Mata
            </span>
          </div>

          {/* 2. HIDUNG (Nose) */}
          <div
            onClick={() => onSelectPart("hidung")}
            className="absolute top-[26%] left-[50%] -translate-x-1/2 -translate-y-1/2 group z-20"
          >
            <div className="w-5 h-5 rounded-full bg-emerald-500/30 border border-emerald-500 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <span className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/95 border border-emerald-200 text-emerald-800 text-[8px] font-extrabold px-1.5 py-0.5 rounded-full shadow-xs whitespace-nowrap opacity-90 group-hover:opacity-100 group-hover:bg-emerald-50">
              👃 Hidung
            </span>
          </div>

          {/* 3. MULUT (Mouth) */}
          <div
            onClick={() => onSelectPart("mulut")}
            className="absolute top-[32%] left-[45%] -translate-x-1/2 -translate-y-1/2 group z-20"
          >
            <div className="w-5 h-5 rounded-full bg-rose-500/30 border border-rose-500 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
            </div>
            <span className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/95 border border-rose-200 text-rose-800 text-[8px] font-extrabold px-1.5 py-0.5 rounded-full shadow-xs whitespace-nowrap opacity-90 group-hover:opacity-100 group-hover:bg-rose-50">
              👄 Mulut
            </span>
          </div>

          {/* 4. TELINGA (Ear) */}
          <div
            onClick={() => onSelectPart("telinga")}
            className="absolute top-[25%] left-[72%] -translate-x-1/2 -translate-y-1/2 group z-20"
          >
            <div className="w-5 h-5 rounded-full bg-indigo-500/30 border border-indigo-500 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
            </div>
            <span className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/95 border border-indigo-200 text-indigo-800 text-[8px] font-extrabold px-1.5 py-0.5 rounded-full shadow-xs whitespace-nowrap opacity-90 group-hover:opacity-100 group-hover:bg-indigo-50">
              👂 Telinga
            </span>
          </div>

          {/* 5. JANTUNG & PARU-PARU (Chest) */}
          <div
            onClick={() => onSelectPart("jantung_paruparu")}
            className="absolute top-[52%] left-[50%] -translate-x-1/2 -translate-y-1/2 group z-20"
          >
            <div className="w-5 h-5 rounded-full bg-red-500/30 border border-red-500 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            </div>
            <span className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/95 border border-red-200 text-red-800 text-[8px] font-extrabold px-1.5 py-0.5 rounded-full shadow-xs whitespace-nowrap opacity-90 group-hover:opacity-100 group-hover:bg-red-50">
              ❤️🫁 Jantung & Paru
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
