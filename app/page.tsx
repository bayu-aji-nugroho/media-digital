"use client";

import React, { useState, useEffect } from "react";
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
  jantung: {
    title: "Jantung (Heart)",
    emoji: "❤️⚡",
    themeColor: {
      bg: "bg-red-50/90",
      border: "border-red-200",
      text: "text-red-950",
      badge: "bg-red-100 text-red-900",
      accent: "from-red-400 to-rose-600",
    },
    intro: "Jantung adalah organ otot seukuran kepalan tangan yang memompa darah ke seluruh tubuh kita tanpa henti!",
    bullets: [
      "❤️ Memompa Darah: Jantung mengalirkan darah beroksigen ke seluruh sel tubuh (otak, tangan, kaki).",
      "⚡ Berdetak Selalu: Detak jantung terjadi secara otomatis, bekerja bahkan saat kita sedang tertidur lelap.",
      "🏃 Menyesuaikan Aktivitas: Saat kita berlari, jantung berdetak lebih cepat untuk menyalurkan energi ekstra.",
    ],
  },
  paru_paru: {
    title: "Paru-Paru (Lungs)",
    emoji: "🫁🌬️",
    themeColor: {
      bg: "bg-teal-50/90",
      border: "border-teal-200",
      text: "text-teal-950",
      badge: "bg-teal-100 text-teal-900",
      accent: "from-teal-400 to-emerald-600",
    },
    intro: "Paru-paru adalah organ utama sistem pernapasan kita yang menyaring udara bersih untuk tubuh kita!",
    bullets: [
      "🌬️ Menghirup Oksigen: Mengambil gas oksigen dari udara bersih yang kita hirup melalui hidung.",
      "💨 Membuang Karbon Dioksida: Mengeluarkan gas sisa pernapasan saat kita mengembuskan napas.",
      "🛡️ Penyaring Udara: Paru-paru melindungi tubuh kita dengan menyaring debu kecil yang masuk ke saluran napas.",
    ],
  },
};

const QUIZ_RIDDLES = [
  {
    riddle: "Aku berdenyut terus di dalam dadamu untuk memompa darah segar ke seluruh tubuh. Siapakah aku?",
    answer: "jantung",
    options: ["jantung", "paru_paru", "mata"],
    hint: "Pegang dada sebelah kirimu, rasakan detak jantungmu!",
  },
  {
    riddle: "Aku membantumu bernapas, menghirup udara bersih (oksigen) dan membuang karbon dioksida. Siapakah aku?",
    answer: "paru_paru",
    options: ["paru_paru", "hidung", "mulut"],
    hint: "Jumlahku ada sepasang (dua) di dalam rongga dada.",
  },
  {
    riddle: "Aku adalah jendela tubuhmu yang bisa melihat warna-warni pelangi, gambar kartun, dan buku cerita. Siapakah aku?",
    answer: "mata",
    options: ["mata", "telinga", "hidung"],
    hint: "Kedipkan aku untuk membersihkan permukaan bola mataku!",
  },
  {
    riddle: "Aku membantumu mencium wangi bunga yang harum atau menyadari bau sampah yang menyengat. Siapakah aku?",
    answer: "hidung",
    options: ["hidung", "mulut", "telinga"],
    hint: "Aku berada di tengah-tengah wajahmu dan memiliki dua lubang.",
  },
  {
    riddle: "Aku membantumu mendengarkan musik merdu, penjelasan guru, dan nasihat orang tuamu. Siapakah aku?",
    answer: "telinga",
    options: ["telinga", "mata", "mulut"],
    hint: "Aku terletak di sebelah kiri dan kanan kepalamu.",
  },
  {
    riddle: "Aku adalah tempat gigi dan lidah berada, digunakan untuk berbicara sopan serta mengunyah makanan lezat. Siapakah aku?",
    answer: "mulut",
    options: ["mulut", "hidung", "telinga"],
    hint: "Gunakan aku untuk tersenyum manis!",
  },
];

const TRIVIA_FACTS = [
  {
    emoji: "💡❤️",
    fact: "Jantungmu berdetak sekitar 100.000 kali dalam satu hari untuk mengedarkan darah segar ke seluruh tubuh!",
  },
  {
    emoji: "💡🫁",
    fact: "Paru-paru kananmu berukuran sedikit lebih besar daripada paru-paru kirimu untuk memberikan ruang bagi jantung!",
  },
  {
    emoji: "💡👃",
    fact: "Hidung manusia sangat luar biasa karena bisa mengenali dan mengingat hingga 50.000 aroma yang berbeda!",
  },
  {
    emoji: "💡👁️",
    fact: "Mata kita berkedip sekitar 15 hingga 20 kali setiap menit secara otomatis untuk menjaga mata tetap basah dan bersih!",
  },
  {
    emoji: "💡👅",
    fact: "Lidah memiliki ribuan sensor rasa kecil bernama papila yang membantumu membedakan rasa manis, asin, asam, dan pahit!",
  },
  {
    emoji: "💡👂",
    fact: "Telinga bagian dalam tidak hanya membantumu mendengar suara, tetapi juga menjaga keseimbangan tubuhmu agar tidak jatuh saat berdiri!",
  },
];

export default function Home() {
  const [showOpening, setShowOpening] = useState(true);
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const activeData = selectedPart ? PARTS_DATA[selectedPart] : null;

  const [activeTab, setActiveTab] = useState<"info" | "game" | "care">("info");

  // Welcome Panel Interactive States
  const [visitedParts, setVisitedParts] = useState<string[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<string | null>(null);
  const [quizAnswered, setQuizAnswered] = useState<boolean | null>(null);
  const [triviaIndex, setTriviaIndex] = useState(0);

  const playEntrySound = () => {
    if (typeof window === "undefined") return;
    const AudioContextClass = (window.AudioContext || (window as any).webkitAudioContext);
    if (!AudioContextClass) return;
    try {
      const audioCtx = new AudioContextClass();
      const playTone = (freq: number, delay: number, dur: number) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);
        gain.gain.setValueAtTime(0, audioCtx.currentTime + delay);
        gain.gain.linearRampToValueAtTime(0.15, audioCtx.currentTime + delay + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + delay + dur);
        osc.start(audioCtx.currentTime + delay);
        osc.stop(audioCtx.currentTime + delay + dur + 0.05);
      };
      playTone(261.63, 0, 0.25); // C4
      playTone(329.63, 0.08, 0.25); // E4
      playTone(392.00, 0.16, 0.25); // G4
      playTone(523.25, 0.24, 0.55); // C5
    } catch (e) {
      console.warn("Web Audio API chime blocked:", e);
    }
  };

  // Load exploration progress
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("visited_organs");
      if (stored) {
        try {
          setVisitedParts(JSON.parse(stored));
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, []);

  // Track exploration progress
  useEffect(() => {
    if (selectedPart) {
      setVisitedParts((prev) => {
        if (!prev.includes(selectedPart)) {
          const next = [...prev, selectedPart];
          if (typeof window !== "undefined") {
            localStorage.setItem("visited_organs", JSON.stringify(next));
          }
          return next;
        }
        return prev;
      });
    }
  }, [selectedPart]);

  const resetExplorationProgress = () => {
    setVisitedParts([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("visited_organs");
    }
  };

  const playQuizSound = (isCorrect: boolean) => {
    if (typeof window === "undefined") return;
    const AudioContextClass = (window.AudioContext || (window as any).webkitAudioContext);
    if (!AudioContextClass) return;
    try {
      const audioCtx = new AudioContextClass();
      if (isCorrect) {
        const playTone = (freq: number, delay: number, dur: number) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);
          gain.gain.setValueAtTime(0, audioCtx.currentTime + delay);
          gain.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + delay + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + delay + dur);
          osc.start(audioCtx.currentTime + delay);
          osc.stop(audioCtx.currentTime + delay + dur + 0.05);
        };
        playTone(523.25, 0, 0.15); // C5
        playTone(659.25, 0.08, 0.15); // E5
        playTone(783.99, 0.16, 0.35); // G5
      } else {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = "triangle";
        osc.frequency.setValueAtTime(150, audioCtx.currentTime);
        osc.frequency.linearRampToValueAtTime(100, audioCtx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
      }
    } catch (e) {
      console.warn("Web Audio API not supported or blocked by user gesture:", e);
    }
  };

  const handleQuizAnswer = (choice: string) => {
    setSelectedQuizAnswer(choice);
    const isCorrect = choice === QUIZ_RIDDLES[quizIndex].answer;
    setQuizAnswered(isCorrect);
    playQuizSound(isCorrect);
  };

  const nextQuiz = () => {
    setSelectedQuizAnswer(null);
    setQuizAnswered(null);
    setQuizIndex((prev) => (prev + 1) % QUIZ_RIDDLES.length);
  };

  // Reset tab to info whenever a new part is selected
  useEffect(() => {
    setActiveTab("info");
    setSmellObject(null);
    setTasteObject(null);
    setBreathState("siap");
    setSnellenStage("start");
  }, [selectedPart]);

  // Snellen Chart Game State
  const [snellenLetter, setSnellenLetter] = useState("E");
  const [snellenSize, setSnellenSize] = useState(0); // 0 to 4
  const [snellenScore, setSnellenScore] = useState(0);
  const [snellenStage, setSnellenStage] = useState<"start" | "play" | "finish">("start");
  const [snellenChoices, setSnellenChoices] = useState<string[]>(["E", "A", "O"]);

  const lettersPool = ["A", "B", "C", "D", "E", "F", "G", "H", "K", "L", "N", "O", "P", "R", "S", "T", "U", "V", "Z"];
  const snellenSizes = [
    { text: "text-7xl sm:text-8xl", label: "20/200 (Ukuran Besar)" },
    { text: "text-5xl sm:text-6xl", label: "20/100 (Ukuran Sedang)" },
    { text: "text-3xl sm:text-4xl", label: "20/50 (Ukuran Kecil)" },
    { text: "text-xl sm:text-2xl", label: "20/30 (Ukuran Sangat Kecil)" },
    { text: "text-[10px] sm:text-xs", label: "20/20 (Ukuran Mikro - Ketajaman Sempurna!)" },
  ];

  const generateNewSnellenLetter = (stageIndex: number) => {
    const target = lettersPool[Math.floor(Math.random() * lettersPool.length)];
    setSnellenLetter(target);
    const choices = [target];
    while (choices.length < 3) {
      const randomLetter = lettersPool[Math.floor(Math.random() * lettersPool.length)];
      if (!choices.includes(randomLetter)) {
        choices.push(randomLetter);
      }
    }
    setSnellenChoices(choices.sort(() => Math.random() - 0.5));
  };

  const handleSnellenAnswer = (choice: string) => {
    let newScore = snellenScore;
    if (choice === snellenLetter) {
      newScore += 1;
      setSnellenScore(newScore);
    }
    if (snellenSize < 4) {
      const nextSize = snellenSize + 1;
      setSnellenSize(nextSize);
      generateNewSnellenLetter(nextSize);
    } else {
      setSnellenStage("finish");
    }
  };

  const startSnellenGame = () => {
    setSnellenScore(0);
    setSnellenSize(0);
    setSnellenStage("play");
    generateNewSnellenLetter(0);
  };

  // Aroma Sensor Game State
  const [smellObject, setSmellObject] = useState<string | null>(null);

  // Tongue Tasting Game State
  const [tasteObject, setTasteObject] = useState<string | null>(null);

  // Ear Desibel Simulator State
  const [earVolume, setEarVolume] = useState<number>(50);

  // Heartbeat sound loop Web Audio API State & Effect
  const [heartState, setHeartState] = useState<"tidur" | "santai" | "lari">("santai");

  const playHeartbeat = (bpm: number) => {
    if (typeof window === "undefined") return;
    const AudioContextClass = (window.AudioContext || (window as any).webkitAudioContext);
    if (!AudioContextClass) return;
    try {
      const audioCtx = new AudioContextClass();
      const playPulse = (delay: number, pitch: number, volume: number) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = "sine";
        osc.frequency.setValueAtTime(pitch, audioCtx.currentTime + delay);
        gain.gain.setValueAtTime(0, audioCtx.currentTime + delay);
        gain.gain.linearRampToValueAtTime(volume, audioCtx.currentTime + delay + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + delay + 0.35);
        osc.start(audioCtx.currentTime + delay);
        osc.stop(audioCtx.currentTime + delay + 0.4);
      };
      playPulse(0, 80, 0.4);      // lub (first sound)
      playPulse(0.15, 60, 0.3);   // dub (second sound)
    } catch (e) {
      console.warn("Web Audio API not supported or blocked by user gesture:", e);
    }
  };

  useEffect(() => {
    if (selectedPart !== "jantung" || activeTab !== "game") return;
    let bpm = 75;
    if (heartState === "tidur") bpm = 55;
    if (heartState === "lari") bpm = 140;
    const intervalMs = (60 / bpm) * 1000;
    const interval = setInterval(() => {
      playHeartbeat(bpm);
    }, intervalMs);
    playHeartbeat(bpm);
    return () => clearInterval(interval);
  }, [selectedPart, activeTab, heartState]);

  // Breathing Coach State & Effect
  const [breathState, setBreathState] = useState<"siap" | "tarik" | "tahan" | "hembus">("siap");
  const [breathTimer, setBreathTimer] = useState(0);
  const [breathCycle, setBreathCycle] = useState(0);

  useEffect(() => {
    if (selectedPart !== "paru_paru" || activeTab !== "game" || breathState === "siap") return;
    const timer = setInterval(() => {
      setBreathTimer((prev) => {
        if (prev <= 1) {
          if (breathState === "tarik") {
            setBreathState("tahan");
            return 2;
          } else if (breathState === "tahan") {
            setBreathState("hembus");
            return 4;
          } else {
            setBreathState("tarik");
            setBreathCycle((c) => c + 1);
            return 4;
          }
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [selectedPart, activeTab, breathState]);

  // Care Challenge State
  const [careChecklists, setCareChecklists] = useState<Record<string, boolean[]>>({
    mata: [false, false, false],
    hidung: [false, false, false],
    mulut: [false, false, false],
    telinga: [false, false, false],
    jantung: [false, false, false],
    paru_paru: [false, false, false],
  });

  const careTipsData: Record<string, string[]> = {
    mata: [
      "👁️ Membaca buku di ruangan yang cukup terang.",
      "🥕 Makan sayur wortel yang kaya akan Vitamin A.",
      "📱 Mengurangi melihat layar HP/komputer terlalu lama."
    ],
    hidung: [
      "🧹 Menghindari asap rokok dan debu kotor.",
      "🤧 Membersihkan lubang hidung secara perlahan saat mandi.",
      "😷 Menggunakan masker saat bepergian ke tempat berdebu."
    ],
    mulut: [
      "🪥 Menggosok gigi minimal 2 kali sehari (pagi dan malam).",
      "🍬 Mengurangi konsumsi permen manis dan cokelat berlebih.",
      "🥦 Rajin makan buah dan sayur segar untuk gusi sehat."
    ],
    telinga: [
      "🎧 Menghindari volume earphone yang terlalu kencang.",
      "👂 Tidak mengorek telinga dengan benda keras (cotton bud).",
      "🧹 Menjaga kebersihan daun telinga bagian luar."
    ],
    jantung: [
      "🏃 Melakukan olahraga rutin (bermain sepeda, lari pagi).",
      "🍔 Mengurangi makanan yang terlalu berminyak/junk food.",
      "😴 Tidur tepat waktu dan istirahat yang cukup."
    ],
    paru_paru: [
      "🌳 Sering menghirup udara segar di dekat pepohonan.",
      "🚭 Menjauh dari asap rokok dan polusi udara kendaraan.",
      "🧘 Melakukan latihan napas dalam untuk menguatkan paru."
    ]
  };

  const toggleChecklist = (part: string, index: number) => {
    setCareChecklists((prev) => {
      const current = [...prev[part]];
      current[index] = !current[index];
      return { ...prev, [part]: current };
    });
  };

  const renderOrganGame = () => {
    switch (selectedPart) {
      case "mata":
        return (
          <div className="p-4 bg-white border border-zinc-150 rounded-2xl shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-wider">🎮 Tes Ketajaman Mata</span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-[10px] font-bold text-zinc-600">Snellen Chart</span>
            </div>
            {snellenStage === "start" && (
              <div className="py-6 text-center space-y-4">
                <span className="text-5xl block animate-pulse">👁️🔍</span>
                <p className="text-xs sm:text-sm font-bold text-zinc-650 leading-relaxed max-w-sm mx-auto">
                  Ayo uji ketajaman matamu! Tebak huruf apa yang muncul di layar dengan ukuran yang akan mengecil di setiap babak.
                </p>
                <button
                  onClick={startSnellenGame}
                  className="py-2.5 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl text-xs font-extrabold shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
                >
                  Mulai Tes Sekarang
                </button>
              </div>
            )}
            {snellenStage === "play" && (
              <div className="py-4 text-center space-y-6">
                <p className="text-[10px] font-bold text-zinc-400 tracking-wide uppercase">
                  Babak {snellenSize + 1} / 5 ({snellenSizes[snellenSize].label})
                </p>
                <div className="h-32 flex items-center justify-center bg-zinc-950 rounded-2xl border-4 border-zinc-800 shadow-inner relative overflow-hidden select-none">
                  <span className={`font-extrabold text-white tracking-widest leading-none ${snellenSizes[snellenSize].text}`}>
                    {snellenLetter}
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-zinc-555">Huruf apa yang kamu lihat?</p>
                  <div className="grid grid-cols-3 gap-2">
                    {snellenChoices.map((choice) => (
                      <button
                        key={choice}
                        onClick={() => handleSnellenAnswer(choice)}
                        className="py-3 bg-zinc-50 border border-zinc-200 hover:border-blue-300 hover:bg-blue-50 rounded-xl text-sm font-extrabold text-zinc-800 active:scale-95 transition-all cursor-pointer"
                      >
                        {choice}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {snellenStage === "finish" && (
              <div className="py-6 text-center space-y-4">
                <span className="text-5xl block animate-bounce">🎉</span>
                <h5 className="font-extrabold text-sm sm:text-base text-zinc-900 leading-tight">
                  Tes Selesai! Skor Ketajaman: {snellenScore * 20}/100
                </h5>
                <p className="text-xs font-semibold text-zinc-600 leading-relaxed max-w-sm mx-auto">
                  {snellenScore === 5
                    ? "Luar biasa! Penglihatan matamu sangat tajam seperti elang! 👁️🦅 (20/20)"
                    : snellenScore >= 3
                    ? "Bagus sekali! Ketajaman matamu cukup baik. Jaga selalu matamu ya! 👁️✨"
                    : "Matamu tampak agak lelah atau kurang fokus. Jangan ragu beristirahat dari gadget dan berkonsultasi jika terasa buram! 🤓"}
                </p>
                <button
                  onClick={startSnellenGame}
                  className="py-2 px-4 rounded-xl border border-zinc-200 hover:bg-zinc-50 text-xs font-extrabold text-zinc-700 active:scale-95 transition-all cursor-pointer"
                >
                  Ulangi Tes
                </button>
              </div>
            )}
          </div>
        );

      case "hidung":
        return (
          <div className="p-4 bg-white border border-zinc-150 rounded-2xl shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-wider">🎮 Lab Sensor Aroma</span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-[10px] font-bold text-zinc-600">Respon Otak</span>
            </div>
            <p className="text-xs text-zinc-550 font-bold">
              Klik pada salah satu benda di bawah ini untuk mengirimkan molekul aroma ke saraf penciuman dan melihat respon otak!
            </p>
            <div className="grid grid-cols-4 gap-2">
              {[
                { key: "bunga", emoji: "🌸", name: "Bunga" },
                { key: "sampah", emoji: "🗑️", name: "Sampah" },
                { key: "kopi", emoji: "☕", name: "Kopi" },
                { key: "parfum", emoji: "🧪", name: "Parfum" },
              ].map((obj) => (
                <button
                  key={obj.key}
                  onClick={() => setSmellObject(obj.key)}
                  className={`py-3 rounded-xl border flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                    smellObject === obj.key
                      ? "bg-emerald-50 border-emerald-500 scale-105 shadow-2xs animate-pulse"
                      : "bg-zinc-50 border-zinc-200 hover:border-zinc-350 hover:bg-white"
                  }`}
                >
                  <span className="text-2xl">{obj.emoji}</span>
                  <span className="text-[10px] font-extrabold text-zinc-650">{obj.name}</span>
                </button>
              ))}
            </div>

            {smellObject && (
              <div className="p-4 rounded-xl border border-zinc-100 bg-zinc-50 flex gap-3.5 items-start animate-fadeIn">
                <span className="text-3xl animate-bounce shrink-0">
                  {smellObject === "bunga" ? "😌" : smellObject === "sampah" ? "🤢" : smellObject === "kopi" ? "☕⚡" : "✨"}
                </span>
                <div>
                  <h5 className="text-xs font-extrabold text-zinc-900 uppercase">
                    Hasil Sensor Otak:
                  </h5>
                  <p className="text-xs font-semibold text-zinc-650 mt-1 leading-relaxed">
                    {smellObject === "bunga" && "Wangi harum segar! Molekul aroma ditangkap bulu hidung, dikirim melalui saraf pembau ke otak. Otak merasa senang dan rileks!"}
                    {smellObject === "sampah" && "Bau busuk menyengat! Otak memberi peringatan agar segera menutup hidung untuk mencegah gas berbahaya terhirup!"}
                    {smellObject === "kopi" && "Aroma kuat dan menyegarkan! Membantu memicu sensor otak agar merasa lebih segar dan terjaga!"}
                    {smellObject === "parfum" && "Bau wangi semerbak! Aroma manis/segar parfum dikenali otak sebagai wewangian yang menyenangkan!"}
                  </p>
                </div>
              </div>
            )}
          </div>
        );

      case "mulut":
        return (
          <div className="p-4 bg-white border border-zinc-150 rounded-2xl shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-wider">🎮 Petualangan Rasa Lidah</span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-[10px] font-bold text-zinc-600">Ujung Saraf Lidah</span>
            </div>
            <p className="text-xs text-zinc-550 font-bold">
              Lidah kita memiliki area bintil rasa (papila). Suapi lidah dengan makanan berikut dan perhatikan ekspresi mukanya!
            </p>
            <div className="grid grid-cols-4 gap-2">
              {[
                { key: "permen", emoji: "🍬", name: "Permen" },
                { key: "lemon", emoji: "🍋", name: "Lemon" },
                { key: "cabai", emoji: "🌶️", name: "Cabai" },
                { key: "garam", emoji: "🧂", name: "Garam" },
              ].map((obj) => (
                <button
                  key={obj.key}
                  onClick={() => setTasteObject(obj.key)}
                  className={`py-3 rounded-xl border flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                    tasteObject === obj.key
                      ? "bg-rose-50 border-rose-500 scale-105 shadow-2xs animate-pulse"
                      : "bg-zinc-50 border-zinc-200 hover:border-zinc-350 hover:bg-white"
                  }`}
                >
                  <span className="text-2xl">{obj.emoji}</span>
                  <span className="text-[10px] font-extrabold text-zinc-650">{obj.name}</span>
                </button>
              ))}
            </div>

            {tasteObject && (
              <div className="p-4 rounded-xl border border-zinc-100 bg-zinc-50 flex gap-3.5 items-start animate-fadeIn">
                <span className="text-4xl shrink-0">
                  {tasteObject === "permen" ? "😋" : tasteObject === "lemon" ? "😖" : tasteObject === "cabai" ? "🥵" : "🤔"}
                </span>
                <div>
                  <h5 className="text-xs font-extrabold text-zinc-900 uppercase">
                    Reaksi Rasa Lidah:
                  </h5>
                  <p className="text-xs font-semibold text-zinc-650 mt-1 leading-relaxed">
                    {tasteObject === "permen" && "Rasa manis dideteksi paling peka di ujung lidah. Energi dan rasa bahagia langsung dikirim ke otak! Nyam!"}
                    {tasteObject === "lemon" && "Asam tajam memicu kelenjar air liur berproduksi kencang. Wajah secara otomatis akan mengernyit menanggapi keasaman!"}
                    {tasteObject === "cabai" && "Rasa pedas sebenarnya adalah sinyal nyeri/panas yang ditangkap oleh saraf lidah. Lidah terasa terbakar dan berkeringat!"}
                    {tasteObject === "garam" && "Asin gurih merangsang reseptor garam di sepanjang sisi lidah. Sangat penting untuk keseimbangan cairan tubuh, tapi secukupnya ya!"}
                  </p>
                </div>
              </div>
            )}
          </div>
        );

      case "telinga":
        return (
          <div className="p-4 bg-white border border-zinc-150 rounded-2xl shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-wider">🎮 Simulator Desibel Suara</span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-[10px] font-bold text-zinc-600">Gendang Telinga</span>
            </div>
            <p className="text-xs text-zinc-550 font-bold">
              Geser slider suara di bawah untuk mendengar & mengetahui tingkat bahaya desibel (dB) terhadap kesehatan gendang telinga:
            </p>
            <div className="py-2 space-y-4">
              <div className="flex items-center justify-between text-xs font-extrabold">
                <span className="text-zinc-600">Volume Suara:</span>
                <span className={`px-2.5 py-1 rounded-full text-white ${
                  earVolume <= 50
                    ? "bg-emerald-500"
                    : earVolume <= 85
                    ? "bg-amber-500"
                    : "bg-red-500 animate-pulse"
                }`}>
                  {earVolume} dB
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="120"
                step="10"
                value={earVolume}
                onChange={(e) => setEarVolume(Number(e.target.value))}
                className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[8px] font-bold text-zinc-400">
                <span>20 dB (Bisik)</span>
                <span>70 dB (Kantor)</span>
                <span>120 dB (Jet)</span>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-zinc-100 bg-zinc-50 flex gap-3.5 items-start">
              <span className="text-3xl shrink-0">
                {earVolume <= 50 ? "🟢" : earVolume <= 85 ? "🟡" : "🔴"}
              </span>
              <div>
                <h5 className="text-xs font-extrabold text-zinc-900 uppercase">
                  Tingkat Keamanan ({earVolume <= 50 ? "Sangat Aman" : earVolume <= 85 ? "Batas Aman" : "Berbahaya!"}):
                </h5>
                <p className="text-xs font-semibold text-zinc-650 mt-1 leading-relaxed">
                  {earVolume <= 20 && "Bisikan desau angin daun (20 dB). Sangat tenang dan nyaman bagi telinga."}
                  {earVolume > 20 && earVolume <= 50 && "Percakapan biasa (50 dB). Suara yang normal dan aman didengarkan terus-menerus tanpa batas waktu."}
                  {earVolume > 50 && earVolume <= 85 && "Lalu lintas padat atau musik cukup kencang (85 dB). Adalah batas aman maksimal suara yang dapat diterima telinga dalam jangka waktu tertentu (max 8 jam)."}
                  {earVolume > 85 && "Musik keras konser, klakson jet dekat (120 dB). Sangat berisik! Merusak sel-sel rambut halus di koklea jika didengar langsung dan dapat menyebabkan kurang pendengaran!"}
                </p>
              </div>
            </div>
          </div>
        );

      case "jantung":
        return (
          <div className="p-4 bg-white border border-zinc-150 rounded-2xl shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-wider">🎮 Simulator Detak Jantung</span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-[10px] font-bold text-zinc-600">Web Audio API</span>
            </div>
            <p className="text-xs text-zinc-550 font-bold">
              Pilih tingkat aktivitas fisik anak untuk memicu detak jantung. Efek suara `lub-dub` akan dimainkan secara real-time!
            </p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { key: "tidur", label: "Tidur 😴", bpm: 55 },
                { key: "santai", label: "Santai 🚶", bpm: 75 },
                { key: "lari", label: "Berlari 🏃", bpm: 140 },
              ].map((act) => (
                <button
                  key={act.key}
                  onClick={() => setHeartState(act.key as any)}
                  className={`py-3 rounded-xl border flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                    heartState === act.key
                      ? "bg-red-50 border-red-500 scale-105 shadow-2xs text-red-750 font-extrabold"
                      : "bg-zinc-50 border-zinc-200 hover:border-zinc-350 hover:bg-white text-zinc-600"
                  }`}
                >
                  <span className="text-xs font-extrabold">{act.label}</span>
                  <span className="text-[10px] opacity-75 font-semibold">{act.bpm} BPM</span>
                </button>
              ))}
            </div>

            <div className="p-4 rounded-xl border border-zinc-100 bg-zinc-50 flex items-center justify-between animate-fadeIn">
              <div className="flex gap-3.5 items-start">
                <span className="text-3xl shrink-0 animate-pulse text-red-500">💓</span>
                <div>
                  <h5 className="text-xs font-extrabold text-zinc-900 uppercase">
                    Status Denyut Jantung:
                  </h5>
                  <p className="text-xs font-semibold text-zinc-650 mt-1 leading-relaxed">
                    {heartState === "tidur" && "Jantung berdenyut lambat dan rileks (55 kali per menit) untuk memulihkan energi sel tubuh saat kamu lelap."}
                    {heartState === "santai" && "Jantung berdenyut normal (75 kali per menit) menyalurkan oksigen ke seluruh organ tanpa beban berlebih."}
                    {heartState === "lari" && "Jantung berdenyut sangat kencang (140 kali per menit) untuk menyuplai energi ekstra yang dibutuhkan otot-otot kaki dan tangan saat berlari!"}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-[9px] font-bold text-zinc-400 text-center italic">
              🔊 Pastikan speaker perangkat Anda aktif untuk mendengarkan simulator suara detak jantung.
            </p>
          </div>
        );

      case "paru_paru":
        return (
          <div className="p-4 bg-white border border-zinc-150 rounded-2xl shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-zinc-400 uppercase tracking-wider">🎮 Latihan Napas Interaktif</span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-[10px] font-bold text-zinc-600">Breathing Simulator</span>
            </div>
            {breathState === "siap" ? (
              <div className="py-6 text-center space-y-4">
                <span className="text-5xl block animate-bounce">🫁🌬️</span>
                <p className="text-xs sm:text-sm font-bold text-zinc-650 leading-relaxed max-w-sm mx-auto font-semibold">
                  Ayo lakukan latihan bernapas sehat untuk membersihkan paru-parumu dan memberikan asupan oksigen yang baik!
                </p>
                <button
                  onClick={() => {
                    setBreathState("tarik");
                    setBreathTimer(4);
                    setBreathCycle(0);
                  }}
                  className="py-2.5 px-6 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-xl text-xs font-extrabold shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
                >
                  Mulai Latihan Bernapas
                </button>
              </div>
            ) : (
              <div className="py-4 text-center space-y-6">
                <div className="flex items-center justify-between text-xs font-bold text-zinc-555 px-2">
                  <span>Siklus Selesai: {breathCycle}</span>
                  <button
                    onClick={() => setBreathState("siap")}
                    className="text-xs text-red-500 font-extrabold cursor-pointer hover:underline"
                  >
                    Hentikan
                  </button>
                </div>

                <div className="h-36 flex flex-col items-center justify-center relative">
                  <div className={`rounded-full flex items-center justify-center text-white font-extrabold transition-all duration-1000 ${
                    breathState === "tarik"
                      ? "w-28 h-28 bg-teal-500 scale-110 shadow-lg"
                      : breathState === "tahan"
                      ? "w-28 h-28 bg-amber-500 scale-100 shadow-md animate-pulse"
                      : "w-20 h-20 bg-emerald-500 scale-90 shadow-sm"
                  }`}>
                    <span className="text-xs tracking-wider uppercase font-black">{breathState}</span>
                  </div>
                  <span className="absolute bottom-2 text-2xl font-black text-zinc-700 animate-pulse">{breathTimer}s</span>
                </div>

                <div className="p-3 bg-zinc-50 border border-zinc-100 rounded-xl">
                  <p className="text-xs font-extrabold text-zinc-750">
                    {breathState === "tarik" && "🌬️ Tarik napas secara perlahan dari hidung... kembangkan perut dan dada."}
                    {breathState === "tahan" && "🧘 Tahan napas sejenak... biarkan oksigen diserap oleh pembuluh paru."}
                    {breathState === "hembus" && "💨 Hembuskan napas pelan dari mulut... rasakan tubuh menjadi rileks."}
                  </p>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  if (showOpening) {
    return (
      <div className="w-screen h-screen bg-gradient-to-br from-indigo-900 via-indigo-850 to-blue-900 flex items-center justify-center p-4 relative overflow-hidden font-sans select-none animate-fadeIn">
        {/* Floating background blobs/particles */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-indigo-500/10 blur-3xl pointer-events-none animate-pulse"></div>
        
        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-6 sm:p-8 max-w-lg w-full text-center space-y-6 sm:space-y-8 relative z-10 transition-all duration-300 hover:shadow-indigo-500/10 hover:shadow-3xl">
          {/* Logo / Badge */}
          <div className="flex flex-col items-center gap-3">
            <span className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-4xl shadow-lg border-2 border-white/80 animate-bounce">
              🎓
            </span>
            <div className="space-y-1">
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-black tracking-wider uppercase border border-indigo-200">
                Media Pembelajaran Interaktif
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight leading-tight mt-1 bg-gradient-to-r from-indigo-950 via-zinc-900 to-indigo-950 bg-clip-text text-transparent">
                Media Pembelajaran Digital: Anatomi Organ Tubuh Manusia
              </h1>
            </div>
          </div>

          {/* Kelompok Info */}
          <div className="p-4 sm:p-5 bg-zinc-50 border border-zinc-200/80 rounded-2xl space-y-3.5">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
              <span className="text-xs font-black text-zinc-500 tracking-wider uppercase">Kelompok 7</span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <div className="space-y-2 text-left">
              {[
                { name: "Maharani Putri Dewi Saraswati", id: "K7124138", avatar: "👩‍⚕️" },
                { name: "Tri Kurnia Puji Lestari", id: "K7124154", avatar: "👩‍⚕️" },
                { name: "‘Inayah Khairiyah Ghozali", id: "K7124160", avatar: "👩‍⚕️" },
                { name: "Bayu Aji Nugroho", id: "K7124171", avatar: "👨‍⚕️" },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 py-2 px-3 bg-white border border-zinc-100 hover:border-indigo-200 rounded-xl transition-all shadow-2xs hover:shadow-xs group cursor-default"
                >
                  <span className="text-lg bg-zinc-50 rounded-lg p-1 group-hover:scale-110 transition-transform">{member.avatar}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-zinc-800 truncate leading-none">
                      {member.name}
                    </p>
                    <p className="text-[9px] font-black text-zinc-400 mt-1 uppercase tracking-wider">
                      NIM: {member.id}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    ✨
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="space-y-3">
            <button
              onClick={() => {
                setShowOpening(false);
                playEntrySound();
              }}
              className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-500 via-indigo-600 to-indigo-700 hover:from-blue-600 hover:to-indigo-800 text-white rounded-2xl text-xs sm:text-sm font-black tracking-wider uppercase shadow-md hover:shadow-xl active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              Mulai Jelajah Anatomi ➔
            </button>
            <p className="text-[9px] sm:text-[10px] font-bold text-zinc-400 max-w-xs mx-auto">
              Direkomendasikan menggunakan speaker aktif untuk mendengarkan simulator suara organ tubuh.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-50 via-zinc-50 to-blue-50 overflow-hidden font-sans">
      
      {/* ---------------------------------------------------- */}
      {/* CASE 1: HOME VIEW (selectedPart === null)            */}
      {/* ---------------------------------------------------- */}
      {!selectedPart ? (
        <div className="w-full h-full flex flex-col md:flex-row animate-fadeIn">
          {/* Welcome Panel (Left Sidebar on Desktop, Hidden on Mobile) */}
          <div className="
            /* Mobile styles */
            hidden absolute bottom-4 left-4 right-4 z-10 max-h-[45%] flex-col bg-white/90 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl overflow-hidden
            /* Desktop styles */
            md:flex md:relative md:bottom-auto md:left-auto md:right-auto md:z-auto md:h-full md:w-[420px] md:max-h-none md:border-r md:border-zinc-200 md:bg-white/80 md:rounded-none md:shadow-lg
          ">
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-zinc-100 flex items-center gap-2.5 shrink-0 bg-white/50">
              <span className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-sm shadow-md">
                🏫
              </span>
              <div>
                <h1 className="text-sm sm:text-base font-extrabold text-zinc-950 tracking-tight leading-none">
                  Media Pembelajaran Digital
                </h1>
                <p className="text-[10px] text-zinc-500 font-bold mt-1">
                  Belajar Organ Tubuh Interaktif
                </p>
              </div>
            </div>

            {/* Panel Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              {/* Welcome Section */}
              <div className="text-center md:text-left space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-3xl animate-bounce">👋</span>
                  <div>
                    <h2 className="text-lg sm:text-xl font-extrabold text-zinc-900 tracking-tight leading-none">
                      Halo Calon Dokter!
                    </h2>
                    <p className="text-[10px] sm:text-xs font-semibold text-zinc-500 mt-1">
                      Mari jelajahi organ tubuh manusia dengan cara yang seru.
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress Misi Dokter Cilik */}
              <div className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50/50 border border-indigo-100 rounded-2xl shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-indigo-950 uppercase tracking-wider">🏆 Misi Dokter Cilik</span>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-[9px] font-black text-indigo-700">
                    {visitedParts.length} / 6 Organ
                  </span>
                </div>
                <div className="w-full bg-zinc-200/80 rounded-full h-2 overflow-hidden shadow-inner">
                  <div
                    className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${(visitedParts.length / 6) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center pt-1 gap-2">
                  <div className="flex gap-1.5 overflow-x-auto pb-0.5">
                    {Object.keys(PARTS_DATA).map((partKey) => {
                      const isVisited = visitedParts.includes(partKey);
                      const emoji = PARTS_DATA[partKey].emoji.substring(0, 2);
                      return (
                        <span
                          key={partKey}
                          title={PARTS_DATA[partKey].title}
                          className={`text-sm p-1 rounded-md transition-all ${
                            isVisited
                              ? "bg-white border border-indigo-200 scale-105 shadow-2xs filter-none"
                              : "bg-zinc-100/50 border border-transparent opacity-30 grayscale"
                          }`}
                        >
                          {emoji}
                        </span>
                      );
                    })}
                  </div>
                  {visitedParts.length > 0 && (
                    <button
                      onClick={resetExplorationProgress}
                      className="text-[8px] font-extrabold text-red-500 hover:underline uppercase shrink-0 cursor-pointer"
                    >
                      Reset Misi
                    </button>
                  )}
                </div>
                {visitedParts.length === 6 && (
                  <div className="p-2.5 rounded-xl bg-amber-100 border border-amber-300 text-amber-950 text-[10px] font-extrabold text-center animate-pulse">
                    🎉 Luar Biasa! Kamu telah menjelajahi semua organ tubuh. Gelar Dokter Cilik Utama didapatkan! 🎓
                  </div>
                )}
              </div>

              {/* Riddle Quiz Card */}
              <div className="p-4 bg-white border border-zinc-150 rounded-2xl shadow-2xs space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-wider">🔍 Detektif Organ: Tebak Aku!</span>
                  <span className="px-1.5 py-0.5 rounded-md bg-zinc-100 text-[8px] font-extrabold text-zinc-550">
                    Soal {quizIndex + 1}
                  </span>
                </div>
                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-100 relative min-h-[50px] flex items-center">
                  <p className="text-xs font-semibold text-zinc-700 leading-relaxed">
                    "{QUIZ_RIDDLES[quizIndex].riddle}"
                  </p>
                </div>
                
                {/* Quiz Choices */}
                {quizAnswered === null ? (
                  <div className="grid grid-cols-3 gap-1.5">
                    {QUIZ_RIDDLES[quizIndex].options.map((option) => {
                      const label = option === "paru_paru" ? "Paru" : option.toUpperCase();
                      return (
                        <button
                          key={option}
                          onClick={() => handleQuizAnswer(option)}
                          className="py-2.5 px-1 bg-zinc-50 border border-zinc-200 hover:border-indigo-300 hover:bg-indigo-50/50 rounded-xl text-[9px] font-extrabold text-zinc-800 active:scale-95 transition-all cursor-pointer"
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="space-y-3 animate-fadeIn">
                    <div className={`p-3 rounded-xl border flex gap-2.5 items-start ${
                      quizAnswered
                        ? "bg-emerald-50 border-emerald-200 text-emerald-950"
                        : "bg-rose-50 border-rose-200 text-rose-950"
                    }`}>
                      <span className="text-2xl shrink-0">
                        {quizAnswered ? "🎉" : "❌"}
                      </span>
                      <div>
                        <h4 className="text-[10px] font-extrabold uppercase">
                          {quizAnswered ? "Hebat, Jawabanmu Benar!" : "Aduh, Belum Tepat!"}
                        </h4>
                        <p className="text-[10px] font-semibold opacity-90 mt-0.5 leading-relaxed">
                          {quizAnswered 
                            ? `Ya! Jawabannya adalah ${PARTS_DATA[QUIZ_RIDDLES[quizIndex].answer].title}. Ayo telusuri organnya!`
                            : `Petunjuk: ${QUIZ_RIDDLES[quizIndex].hint}`}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {quizAnswered && (
                        <button
                          onClick={() => setSelectedPart(QUIZ_RIDDLES[quizIndex].answer)}
                          className="flex-1 py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-[10px] font-extrabold active:scale-95 transition-all shadow-xs cursor-pointer text-center"
                        >
                          Buka Organ {PARTS_DATA[QUIZ_RIDDLES[quizIndex].answer].title.split(" ")[0]} ➔
                        </button>
                      )}
                      <button
                        onClick={nextQuiz}
                        className="flex-1 py-2 px-3 border border-zinc-200 hover:bg-zinc-50 rounded-xl text-[10px] font-extrabold text-zinc-700 active:scale-95 transition-all cursor-pointer text-center"
                      >
                        {quizAnswered ? "Main Lagi 🔄" : "Coba Soal Lain ➡️"}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Fakta Keren Trivia Carousel */}
              <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200/70 rounded-2xl shadow-2xs space-y-3 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-amber-900 uppercase tracking-wider">💡 Tahukah Kamu? (Trivia)</span>
                  <span className="text-xs">{TRIVIA_FACTS[triviaIndex].emoji}</span>
                </div>
                <div className="min-h-[55px] flex items-center">
                  <p className="text-xs font-semibold text-amber-950 leading-relaxed">
                    {TRIVIA_FACTS[triviaIndex].fact}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-amber-200/50">
                  <div className="flex gap-1">
                    {TRIVIA_FACTS.map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === triviaIndex ? "w-3 bg-amber-600" : "w-1.5 bg-amber-300"
                        }`}
                      ></span>
                    ))}
                  </div>
                  <button
                    onClick={() => setTriviaIndex((prev) => (prev + 1) % TRIVIA_FACTS.length)}
                    className="text-[9px] font-extrabold text-amber-800 hover:text-amber-950 flex items-center gap-0.5 cursor-pointer hover:translate-x-0.5 transition-all"
                  >
                    Fakta Selanjutnya ➔
                  </button>
                </div>
              </div>

              {/* Quick instructions banner */}
              <div className="p-3 bg-zinc-50 border border-zinc-150 rounded-xl flex items-start gap-2.5">
                <span className="text-sm mt-0.5">💡</span>
                <p className="text-[10px] leading-relaxed text-zinc-500 font-bold">
                  <strong>Petunjuk:</strong> Klik salah satu organ pada menu cepat di bawah ini atau cari titik pin bercahaya pada gambar anak laki-laki untuk menjelajah!
                </p>
              </div>
            </div>

            {/* Quick Access Grid */}
            <div className="p-4 border-t border-zinc-100 bg-zinc-50/50 shrink-0 space-y-2">
              <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                Pilih Organ Secara Cepat:
              </span>
              <div className="grid grid-cols-3 gap-1.5">
                {Object.keys(PARTS_DATA).map((partKey) => (
                  <button
                    key={partKey}
                    onClick={() => setSelectedPart(partKey)}
                    className="py-2 px-1 text-[9px] font-bold rounded-xl border bg-white border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-zinc-650 transition-all shadow-2xs hover:shadow-sm"
                  >
                    {partKey === "paru_paru" ? "🫁 PARU" : partKey === "jantung" ? "❤️ JANTUNG" : partKey.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Model Viewport (Center/Right Panel) */}
          <div className="absolute inset-0 z-0 flex items-center justify-center p-4 pt-10 pb-4 md:relative md:inset-auto md:z-auto md:flex-1 md:h-full md:p-8">
            <div className="absolute top-4 right-4 z-10 pointer-events-none bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-white/30 text-[10px] sm:text-xs font-bold text-zinc-650 shadow-sm flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              💡 Cari dan klik titik organ pada tubuh untuk memulai!
            </div>
            <div className="w-full max-w-[500px] h-full flex items-center justify-center">
              <Boy2D selectedPart={selectedPart} onSelectPart={setSelectedPart} />
            </div>
          </div>
        </div>
      ) : (
        /* ---------------------------------------------------- */
        /* CASE 2: DEDICATED ORGAN VIEW (selectedPart !== null) */
        /* ---------------------------------------------------- */
        <div className="w-full h-full flex flex-col animate-fadeIn bg-slate-50">
          {/* Top Navigation Bar */}
          <header className="w-full py-4 px-6 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md flex items-center justify-between z-10 shrink-0 shadow-sm">
            <button
              onClick={() => setSelectedPart(null)}
              className="py-2 px-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-350 text-xs sm:text-sm font-extrabold text-zinc-700 hover:text-zinc-950 transition-all flex items-center gap-2 shadow-sm cursor-pointer hover:-translate-x-0.5 active:translate-x-0"
            >
              <span>←</span> Kembali ke Halaman Utama
            </button>
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-extrabold ${activeData?.themeColor.badge} shadow-xs`}>
                Detail Anatomi
              </span>
            </div>
          </header>

          {/* Dedicated Two-Column Grid Content */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 max-w-6xl mx-auto w-full">
            {/* Left Column: Visual Illustration Box */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-white border border-zinc-150 rounded-3xl p-6 shadow-md min-h-[300px] md:h-[500px]">
              <div className="w-full h-full flex items-center justify-center">
                <Boy2D selectedPart={selectedPart} onSelectPart={setSelectedPart} />
              </div>
            </div>

            {/* Right Column: Educational facts and details */}
            <div className="w-full md:w-1/2 flex flex-col justify-start space-y-5 h-full max-h-none md:max-h-[500px] overflow-y-auto pr-2">
              {/* Title & Emoji */}
              <div className="flex items-center gap-3">
                <span className="text-4xl sm:text-5xl">{activeData?.emoji}</span>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                    {activeData?.title}
                  </h2>
                  <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider block mt-1">
                    Sistem Organ Manusia
                  </span>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-zinc-200 gap-1 bg-zinc-100/80 p-1 rounded-xl shrink-0">
                <button
                  onClick={() => setActiveTab("info")}
                  className={`flex-1 py-2.5 px-3 text-xs font-extrabold rounded-lg transition-all cursor-pointer ${
                    activeTab === "info"
                      ? "bg-white text-zinc-950 shadow-xs"
                      : "text-zinc-555 hover:text-zinc-950 hover:bg-white/40"
                  }`}
                >
                  📖 Info & Fungsi
                </button>
                <button
                  onClick={() => setActiveTab("game")}
                  className={`flex-1 py-2.5 px-3 text-xs font-extrabold rounded-lg transition-all cursor-pointer ${
                    activeTab === "game"
                      ? "bg-white text-zinc-950 shadow-xs"
                      : "text-zinc-555 hover:text-zinc-950 hover:bg-white/40"
                  }`}
                >
                  🎮 Game Interaktif
                </button>
                <button
                  onClick={() => setActiveTab("care")}
                  className={`flex-1 py-2.5 px-3 text-xs font-extrabold rounded-lg transition-all cursor-pointer ${
                    activeTab === "care"
                      ? "bg-white text-zinc-950 shadow-xs"
                      : "text-zinc-555 hover:text-zinc-950 hover:bg-white/40"
                  }`}
                >
                  🛡️ Cara Merawat
                </button>
              </div>

              {/* Tab Contents */}
              {activeTab === "info" && (
                <div className="space-y-5 animate-fadeIn">
                  {/* Box Deskripsi Utama */}
                  <div className={`p-5 rounded-2xl border ${activeData?.themeColor.bg} ${activeData?.themeColor.border} shadow-sm`}>
                    <h3 className={`text-xs font-extrabold uppercase tracking-wider ${activeData?.themeColor.text} mb-2`}>
                      Tahukah Kamu?
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-800 leading-relaxed font-bold">
                      {activeData?.intro}
                    </p>
                  </div>

                  {/* List Detail Fungsi */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-zinc-400">
                      Fungsi Penting Untuk Tubuh Kita:
                    </h4>
                    <div className="grid gap-3">
                      {activeData?.bullets.map((bullet, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-white border border-zinc-100 rounded-2xl flex gap-3.5 items-start shadow-xs hover:border-zinc-300 hover:bg-zinc-50/50 transition-all duration-200"
                        >
                          <span className="text-base leading-none shrink-0">•</span>
                          <p className="leading-relaxed text-xs sm:text-sm font-semibold text-zinc-700">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "game" && (
                <div className="animate-fadeIn">
                  {renderOrganGame()}
                </div>
              )}

              {activeTab === "care" && (
                <div className="space-y-5 animate-fadeIn">
                  <div className="p-4 bg-white border border-zinc-150 rounded-2xl shadow-xs">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-zinc-400 mb-3">
                      Tantangan Merawat {activeData?.title}:
                    </h4>
                    <p className="text-xs text-zinc-555 font-bold mb-4">
                      Centang semua aksi sehat di bawah ini untuk membuktikan kamu peduli dengan kesehatan organmu!
                    </p>
                    <div className="space-y-3">
                      {careTipsData[selectedPart || ""]?.map((tip, idx) => {
                        const isChecked = careChecklists[selectedPart || ""]?.[idx];
                        return (
                          <div
                            key={idx}
                            onClick={() => toggleChecklist(selectedPart || "", idx)}
                            className={`p-4 border rounded-2xl flex items-center justify-between cursor-pointer transition-all ${
                              isChecked
                                ? "bg-emerald-50 border-emerald-200 text-emerald-950 shadow-2xs"
                                : "bg-white border-zinc-200 hover:border-zinc-350 hover:bg-zinc-50"
                            }`}
                          >
                            <span className="text-xs sm:text-sm font-extrabold select-none leading-relaxed flex-1 pr-2">
                              {tip}
                            </span>
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                              isChecked
                                ? "bg-emerald-500 border-emerald-500 text-white"
                                : "border-zinc-300 bg-white"
                            }`}>
                              {isChecked && <span className="text-xs font-bold leading-none">✓</span>}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Badge Reward if all completed */}
                  {careChecklists[selectedPart || ""]?.every(Boolean) && (
                    <div className="p-5 rounded-2xl bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 text-amber-950 border border-amber-400 shadow-lg text-center animate-bounce flex flex-col items-center justify-center gap-2">
                      <span className="text-4xl">🏅</span>
                      <h5 className="font-extrabold text-sm sm:text-base leading-tight">
                        Lencana Dokter Cilik SD!
                      </h5>
                      <p className="text-[10px] sm:text-xs font-bold opacity-90">
                        Hebat! Kamu telah menyelesaikan semua cara merawat {activeData?.title}. Tubuh sehat, jiwa kuat!
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
