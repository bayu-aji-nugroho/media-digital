"use client";

import React, { useState } from "react";
import Boy2D from "./components/Boy2D";

interface PartInfo {
  title: string;
  emoji: string;
  themeColor: {
    bg: string;
    border: string;
    text: string;
    badge: string;
    accent: string;
  };
  intro: string;
  bullets: string[];
}

const PARTS_DATA: Record<string, PartInfo> = {
  mata: {
    title: "Mata (Eyes)",
    emoji: "👁️✨",
    themeColor: {
      bg: "bg-amber-50/90",
      border: "border-amber-200",
      text: "text-amber-950",
      badge: "bg-amber-100 text-amber-900",
      accent: "from-amber-400 to-orange-500",
    },
    intro: "Mata adalah jendela tubuh kita! Kita memiliki dua mata yang hebat untuk melihat keindahan di sekeliling kita.",
    bullets: [
      "👁️ Melihat Dunia: Membaca buku cerita menarik, menonton kartun seru, dan mengenali wajah orang tua dan guru.",
      "🛡️ Kelopak Pelindung: Kelopak mata akan menutup secara otomatis jika ada debu atau benda asing yang mendekat.",
      "💧 Air Mata Bersih: Air mata bertugas membasahi bola mata agar selalu bersih dan terbebas dari kuman.",
    ],
  },
  hidung: {
    title: "Hidung (Nose)",
    emoji: "👃🌸",
    themeColor: {
      bg: "bg-emerald-50/90",
      border: "border-emerald-200",
      text: "text-emerald-950",
      badge: "bg-emerald-100 text-emerald-900",
      accent: "from-emerald-400 to-teal-500",
    },
    intro: "Hidung berada tepat di tengah wajah kita. Selain untuk menghirup udara, hidung bisa membedakan berbagai macam aroma!",
    bullets: [
      "👃 Bernapas: Gerbang masuknya udara bersih (oksigen) yang dibutuhkan oleh seluruh bagian tubuh kita.",
      "🌸 Indera Penciuman: Membantu kita mencium harum wangi bunga, wangi sabun, hingga bau masakan lezat.",
      "🧹 Penyaring Debu: Bulu-bulu hidung yang sangat halus menyaring debu agar tidak ikut masuk ke dalam tubuh.",
    ],
  },
  mulut: {
    title: "Mulut (Mouth)",
    emoji: "👄🍎",
    themeColor: {
      bg: "bg-rose-50/90",
      border: "border-rose-200",
      text: "text-rose-950",
      badge: "bg-rose-100 text-rose-900",
      accent: "from-rose-400 to-red-500",
    },
    intro: "Mulut adalah gerbang utama masuknya makanan dan tempat keluarnya suara kita yang sopan!",
    bullets: [
      "🍎 Mengunyah Makanan: Gigi memotong makanan agar menjadi lembut sehingga perut kita mudah mencernanya.",
      "👅 Merasakan Rasa: Lidah membantu kita menikmati rasa manis cokelat, asin keju, gurih sup, dan asam buah jeruk.",
      "🗣️ Berbicara & Menyanyi: Membantu mengucapkan kata-kata secara jelas saat kita bernyanyi atau bercerita.",
    ],
  },
  telinga: {
    title: "Telinga (Ears)",
    emoji: "👂🎶",
    themeColor: {
      bg: "bg-indigo-50/90",
      border: "border-indigo-200",
      text: "text-indigo-950",
      badge: "bg-indigo-100 text-indigo-900",
      accent: "from-indigo-400 to-violet-500",
    },
    intro: "Kita memiliki dua telinga di sisi kiri dan kanan kepala. Telinga menangkap getaran suara yang merambat di udara.",
    bullets: [
      "🎶 Mendengar Suara: Mendengarkan nasihat orang tua, penjelasan guru di kelas, serta lantunan lagu yang indah.",
      "⚖️ Menjaga Keseimbangan: Di dalam telinga terdapat cairan khusus yang membantu kita tetap berdiri tegak tanpa terjatuh.",
    ],
  },
  jantung_paruparu: {
    title: "Jantung & Paru-Paru (Heart & Lungs)",
    emoji: "❤️🫁",
    themeColor: {
      bg: "bg-red-50/90",
      border: "border-red-200",
      text: "text-red-950",
      badge: "bg-red-100 text-red-900",
      accent: "from-red-400 to-rose-600",
    },
    intro: "Jantung dan paru-paru bekerja sama di dalam dada untuk mengalirkan tenaga dan kesegaran ke seluruh tubuh kita!",
    bullets: [
      "❤️ Jantung Perkasa: Memompa darah bersih yang kaya akan sari makanan ke otak, tangan, hingga ujung kaki.",
      "🫁 Paru-Paru Bersih: Menyerap oksigen dari udara yang kita hirup, dan membuang udara kotor keluar tubuh.",
      "⚡ Menghasilkan Energi: Kerja sama keduanya membuat tubuh kita bertenaga untuk belajar, berlari, dan bermain.",
    ],
  },
};

export default function Home() {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const activeData = selectedPart ? PARTS_DATA[selectedPart] : null;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-zinc-50 via-white to-zinc-100 flex flex-col md:flex-row overflow-hidden font-sans">
      {/* KIRI: Panel Informasi (Edukasi) */}
      <div className="w-full md:w-[450px] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-200/80 bg-white/90 backdrop-blur-md z-10 shrink-0 shadow-lg animate-fadeIn">
        <div>
          {/* Header Aplikasi */}
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <span className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-sm font-bold text-white shadow-md">
              🏫
            </span>
            <div>
              <h1 className="text-lg font-bold text-zinc-900 tracking-tight leading-none">Media Edukasi SD</h1>
              <p className="text-xs text-zinc-500 font-medium mt-1">Belajar Organ Tubuh Interaktif</p>
            </div>
          </div>

          {/* Isi Informasi Dinamis */}
          {!activeData ? (
            <div className="py-8 text-center md:text-left transition-all duration-300">
              <div className="inline-block p-4 rounded-full bg-blue-50 mb-4 animate-bounce">
                <span className="text-4xl">👋</span>
              </div>
              <h2 className="text-2xl font-extrabold text-zinc-800 tracking-tight">Halo Adik-Adik!</h2>
              <p className="text-zinc-600 mt-4 leading-relaxed text-sm">
                Selamat datang di Lab Organ Tubuh Interaktif! Mari belajar mengenali organ-organ penting di dalam tubuh kita.
              </p>
              <div className="mt-6 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-start gap-3 text-left">
                <span className="text-lg mt-0.5">💡</span>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  <strong>Cara belajar:</strong> Klik langsung **pin berkedip** (Mata, Hidung, Mulut, Telinga, atau Jantung/Paru) pada karakter di sebelah kanan untuk melihat gambar organ dan belajar fungsinya!
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-fadeIn transition-all duration-300">
              {/* Judul & Emoji */}
              <div className="flex items-center gap-3">
                <span className="text-3xl">{activeData.emoji.slice(0, 2)}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${activeData.themeColor.badge}`}>
                  {activeData.title}
                </span>
              </div>

              {/* Box Deskripsi Utama */}
              <div className={`p-5 rounded-3xl border ${activeData.themeColor.bg} ${activeData.themeColor.border} shadow-sm`}>
                <h3 className={`text-sm font-bold ${activeData.themeColor.text} mb-2`}>Tahukah Kamu?</h3>
                <p className="text-sm text-zinc-700 leading-relaxed font-medium">
                  {activeData.intro}
                </p>
              </div>

              {/* List Detail Fungsi */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Bagian & Fungsinya:</h4>
                <div className="grid gap-3">
                  {activeData.bullets.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white border border-zinc-150 rounded-2xl flex gap-3 items-start shadow-xs text-xs font-medium text-zinc-700 hover:border-zinc-300 transition-colors"
                    >
                      <span className="text-sm leading-none shrink-0">•</span>
                      <p className="leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Panel / Navigasi Cepat */}
        <div className="mt-8 pt-6 border-t border-zinc-100">
          {activeData && (
            <button
              onClick={() => setSelectedPart(null)}
              className="w-full py-3 px-4 rounded-2xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>🔄</span> Kembalikan ke Awal
            </button>
          )}

          {/* Quick Buttons for accessibility */}
          <div className="grid grid-cols-5 gap-1.5 mt-4">
            {Object.keys(PARTS_DATA).map((partKey) => (
              <button
                key={partKey}
                onClick={() => setSelectedPart(partKey)}
                className={`py-2 px-1 text-[9px] font-bold rounded-xl border transition-all ${selectedPart === partKey
                  ? "bg-zinc-950 border-zinc-950 text-white shadow-md scale-95"
                  : "bg-white border-zinc-200 hover:border-zinc-400 text-zinc-600"
                  }`}
              >
                {partKey === "jantung_paruparu" ? "ORGAN DADA" : partKey.toUpperCase()}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* KANAN: Viewport 2D */}
      <div className="flex-1 flex items-center justify-center p-6 bg-gradient-to-b from-white to-zinc-100 relative min-h-[450px] md:h-screen">
        {/* Floating Instruction */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none bg-white/75 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-zinc-150 text-[10px] font-bold text-zinc-500 shadow-xs flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          💡 Tips: Klik pin berwarna merah/biru pada karakter untuk detail
        </div>

        {/* 2D Interactive Model */}
        <Boy2D selectedPart={selectedPart} onSelectPart={setSelectedPart} />

        {/* Selected Accent Light */}
        {activeData && (
          <div className="absolute inset-x-0 bottom-16 flex justify-center pointer-events-none">
            <div className={`w-36 h-4 rounded-full bg-gradient-to-r ${activeData.themeColor.accent} blur-md opacity-20 animate-pulse`} />
          </div>
        )}
      </div>
    </div>
  );
}
