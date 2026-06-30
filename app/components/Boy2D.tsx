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
          <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 animate-fadeIn">
            <h3 className="text-[11px] sm:text-xs font-bold text-zinc-400 mb-4 uppercase tracking-wider">
              Gambar 2D: Anatomi Mata
            </h3>
            <div className="w-full max-w-[220px] sm:max-w-[280px] aspect-square flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-100 p-2 shadow-inner">
              <img
                src="/eye.png"
                alt="Anatomi Mata"
                className="max-w-full max-h-full object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="mt-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[10px] sm:text-xs font-bold text-amber-700 animate-pulse">
              <span>💡</span> Mata menangkap pantulan cahaya untuk dikirim ke otak!
            </div>
          </div>
        );
      case "hidung":
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 animate-fadeIn">
            <h3 className="text-[11px] sm:text-xs font-bold text-zinc-400 mb-4 uppercase tracking-wider">
              Gambar 2D: Anatomi Hidung
            </h3>
            <div className="w-full max-w-[220px] sm:max-w-[280px] aspect-square flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-100 p-2 shadow-inner">
              <img
                src="/nose.png"
                alt="Anatomi Hidung"
                className="max-w-full max-h-full object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="mt-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] sm:text-xs font-bold text-emerald-700 animate-pulse">
              <span>🌬️</span> Bulu hidung menyaring debu agar udara masuk bersih!
            </div>
          </div>
        );
      case "mulut":
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 animate-fadeIn">
            <h3 className="text-[11px] sm:text-xs font-bold text-zinc-400 mb-4 uppercase tracking-wider">
              Gambar 2D: Anatomi Mulut
            </h3>
            <div className="w-full max-w-[220px] sm:max-w-[280px] aspect-square flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-100 p-2 shadow-inner">
              <img
                src="/mouth.png"
                alt="Anatomi Mulut"
                className="max-w-full max-h-full object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="mt-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-[10px] sm:text-xs font-bold text-rose-700 animate-pulse">
              <span>👅</span> Air liur membantu melembutkan makanan yang dikunyah!
            </div>
          </div>
        );
      case "telinga":
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 animate-fadeIn">
            <h3 className="text-[11px] sm:text-xs font-bold text-zinc-400 mb-4 uppercase tracking-wider">
              Gambar 2D: Anatomi Telinga
            </h3>
            <div className="w-full max-w-[220px] sm:max-w-[280px] aspect-square flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-100 p-2 shadow-inner">
              <img
                src="/ear.png"
                alt="Anatomi Telinga"
                className="max-w-full max-h-full object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="mt-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] sm:text-xs font-bold text-indigo-700 animate-pulse">
              <span>👂</span> Gendang telinga bergetar lembut saat mendengar suara!
            </div>
          </div>
        );
      case "jantung":
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 animate-fadeIn">
            <h3 className="text-[11px] sm:text-xs font-bold text-zinc-400 mb-4 uppercase tracking-wider">
              Gambar 2D: Anatomi Jantung
            </h3>
            <div className="w-full max-w-[220px] sm:max-w-[280px] aspect-square flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-100 p-2 shadow-inner">
              <img
                src="/jantung.png"
                alt="Anatomi Jantung"
                className="max-w-full max-h-full object-contain drop-shadow-md transition-transform duration-300 hover:scale-105 animate-pulse"
              />
            </div>
            <div className="mt-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-[10px] sm:text-xs font-bold text-rose-705 animate-pulse">
              <span>💓</span> Jantung berdenyut sekitar 100.000 kali setiap hari!
            </div>
          </div>
        );
      case "paru_paru":
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 animate-fadeIn">
            <h3 className="text-[11px] sm:text-xs font-bold text-zinc-400 mb-4 uppercase tracking-wider">
              Gambar 2D: Anatomi Paru-Paru
            </h3>
            <div className="w-full max-w-[220px] sm:max-w-[280px] aspect-square flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-100 p-2 shadow-inner">
              <img
                src="/paru paru.png"
                alt="Anatomi Paru-Paru"
                className="max-w-full max-h-full object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="mt-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-[10px] sm:text-xs font-bold text-teal-700 animate-pulse">
              <span>🫁</span> Jutaan kantung udara kecil (alveoli) mengambil oksigen untuk tubuh!
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center relative bg-transparent">
      {/* INJECT CUSTOM CSS FOR MICRO-ANIMATIONS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes heartbeat {
          0% { transform: scale(1); }
          12% { transform: scale(1.08); }
          24% { transform: scale(1); }
          38% { transform: scale(1.13); }
          60% { transform: scale(1); }
          100% { transform: scale(1); }
        }
        @keyframes lungsbreathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        @keyframes noseflow {
          0% { transform: translateY(15px); opacity: 0; }
          40% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translateY(-15px) scale(0.6); opacity: 0; }
        }
        @keyframes tongueWiggle {
          0%, 100% { transform: rotate(0deg) translateY(0px); }
          50% { transform: rotate(-3deg) translateY(3px); }
        }
        @keyframes soundwave-pulse {
          0% { opacity: 0.2; stroke-width: 2.5px; }
          50% { opacity: 1; stroke-width: 4px; }
          100% { opacity: 0.2; stroke-width: 2.5px; }
        }
        @keyframes blinking {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        .animate-heartbeat {
          animation: heartbeat 1.4s infinite ease-in-out;
        }
        .animate-lungsbreathe {
          animation: lungsbreathe 4s infinite ease-in-out;
        }
        .animate-noseflow1 {
          animation: noseflow 1.6s infinite linear;
          transform-origin: center;
        }
        .animate-noseflow2 {
          animation: noseflow 1.6s infinite linear 0.5s;
          transform-origin: center;
        }
        .animate-noseflow3 {
          animation: noseflow 1.6s infinite linear 1s;
          transform-origin: center;
        }
        .animate-tongue {
          animation: tongueWiggle 2.5s infinite ease-in-out;
        }
        .animate-wave1 {
          animation: soundwave-pulse 1.4s infinite ease-in-out;
        }
        .animate-wave2 {
          animation: soundwave-pulse 1.4s infinite ease-in-out 0.4s;
        }
        .animate-blinking {
          animation: blinking 4.5s infinite ease-in-out;
        }
      `}} />

      {/* Dynamic illustration panel or Full Body */}
      {selectedPart ? (
        <div className="w-full max-w-[340px] sm:max-w-[400px] aspect-square bg-white border border-zinc-150 rounded-3xl p-6 sm:p-8 shadow-xl flex items-center justify-center relative">
          <button
            onClick={() => onSelectPart(null)}
            className="absolute top-4 left-4 p-1.5 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-[10px] font-bold text-zinc-650 transition-colors shadow-xs"
          >
            ← Kembali
          </button>
          {renderOrganIllustration()}
        </div>
      ) : (
        /* 2D CARTOON BOY ILLUSTRATION */
        <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[2/3] flex items-center justify-center select-none overflow-hidden rounded-3xl bg-white border border-zinc-150 shadow-xl p-2 bg-gradient-to-b from-blue-50/20 to-zinc-50/40">
          {/* Main Image representing a cute boy character */}
          <img
            src="/boy.png"
            alt="Karakter Anak Laki-laki"
            className="w-full h-full object-cover rounded-2xl select-none pointer-events-none"
          />

          {/* ==================================================== */}
          {/* INTERACTIVE HOTSPOTS ON THE 2D CHARACTER */}
          {/* ==================================================== */}

          {/* 1. MATA (Eyes) */}
          <div
            onClick={() => onSelectPart("mata")}
            className="absolute top-[14.5%] left-[48%] -translate-x-1/2 -translate-y-1/2 group z-20"
            title="Mata"
          >
            <div className="w-5.5 h-5.5 rounded-full bg-amber-500/30 border border-amber-500 flex items-center justify-center cursor-pointer hover:scale-125 active:scale-95 transition-all shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
            </div>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-900/90 text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
              👁️ Mata
            </span>
          </div>

          {/* 2. HIDUNG (Nose) */}
          <div
            onClick={() => onSelectPart("hidung")}
            className="absolute top-[18.5%] left-[49.5%] -translate-x-1/2 -translate-y-1/2 group z-20"
            title="Hidung"
          >
            <div className="w-5.5 h-5.5 rounded-full bg-emerald-500/30 border border-emerald-500 flex items-center justify-center cursor-pointer hover:scale-125 active:scale-95 transition-all shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-900/90 text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
              👃 Hidung
            </span>
          </div>

          {/* 3. MULUT (Mouth) */}
          <div
            onClick={() => onSelectPart("mulut")}
            className="absolute top-[22.5%] left-[50%] -translate-x-1/2 -translate-y-1/2 group z-20"
            title="Mulut"
          >
            <div className="w-5.5 h-5.5 rounded-full bg-rose-500/30 border border-rose-500 flex items-center justify-center cursor-pointer hover:scale-125 active:scale-95 transition-all shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
            </div>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-900/90 text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
              👄 Mulut
            </span>
          </div>

          {/* 4. TELINGA (Ear) */}
          <div
            onClick={() => onSelectPart("telinga")}
            className="absolute top-[23.4%] left-[36%] -translate-x-1/2 -translate-y-1/2 group z-20"
            title="Telinga"
          >
            <div className="w-5.5 h-5.5 rounded-full bg-indigo-500/30 border border-indigo-500 flex items-center justify-center cursor-pointer hover:scale-125 active:scale-95 transition-all shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
            </div>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-900/90 text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
              👂 Telinga
            </span>
          </div>

          {/* 5. JANTUNG (Heart) */}
          <div
            onClick={() => onSelectPart("jantung")}
            className="absolute top-[42%] left-[54.7%] -translate-x-1/2 -translate-y-1/2 group z-20"
            title="Jantung"
          >
            <div className="w-5.5 h-5.5 rounded-full bg-red-500/30 border border-red-500 flex items-center justify-center cursor-pointer hover:scale-125 active:scale-95 transition-all shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            </div>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-900/90 text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
              ❤️ Jantung
            </span>
          </div>

          {/* 6. PARU-PARU (Lungs) */}
          <div
            onClick={() => onSelectPart("paru_paru")}
            className="absolute top-[42%] left-[42.8%] -translate-x-1/2 -translate-y-1/2 group z-20"
            title="Paru-paru"
          >
            <div className="w-5.5 h-5.5 rounded-full bg-teal-500/30 border border-teal-500 flex items-center justify-center cursor-pointer hover:scale-125 active:scale-95 transition-all shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
            </div>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-900/90 text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
              🫁 Paru-paru
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
