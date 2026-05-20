"use client";

import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-pink-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24">
        <div className="w-full max-w-5xl rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(255,255,255,0.05)] backdrop-blur-2xl md:p-16">

          {/* Small Heading */}
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-pink-400 md:text-base">
            A Special Letter For APK
          </p>

          {/* Main Title */}
          <h1 className="mb-12 text-5xl font-bold leading-tight md:text-8xl">
            If you ever made
            <br />
            a wish...
          </h1>

          {/* Letter */}
          <div className="space-y-8 text-lg font-light leading-[2] text-white/80 md:text-3xl">
            <p>
              I hope every wish hidden inside your heart
              someday finds its way into reality.
            </p>

            <p>
              Every silent prayer,
              every late-night thought,
              every dream you were too afraid to say out loud -
              I truly hope the universe listens to all of them.
            </p>

            <p>
              May the Gods from every religion -
              Hindu, Sikh, Christian, and Muslim -
              stand beside you,
              protect your happiness,
              and guide your life toward beautiful things.
            </p>

            <p>
              Because someone like you deserves peace,
              love, success,
              unforgettable memories,
              and a future filled with light.
            </p>

            <p className="italic text-pink-300">
              And if destiny is listening tonight,
              then I hope every single wish you ever made
              comes true in the most beautiful way possible.
            </p>
          </div>

          {/* Footer */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40 md:text-base">
              - Made only for APK ✨
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}