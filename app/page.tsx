"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Link from "next/link";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;

      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setFinished(true);
        }, 500);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // MAIN WEBSITE
  if (finished) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-black text-white">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-black" />

        {/* PINK GLOW */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-pink-500/10 blur-[180px] rounded-full" />

        {/* NAVBAR */}
        <Navbar />

        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
          <div className="text-center max-w-4xl">

            {/* MAIN TEXT */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-5xl md:text-8xl font-black leading-tight tracking-tight"
            >
              Happy Birthday To The Girl
              <br />

              Who Turned Ordinary Days
              <br />

              Into Memories ✨
            </motion.h1>

            {/* SUBTEXT */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1 }}
              className="mt-8 text-sm md:text-lg text-white/50 leading-relaxed"
            >
              Some people enter life quietly.
              <br />
              But somehow become the loudest part of it.
            </motion.p>

            {/* BUTTON */}
          <Link href="/make-a-wish">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="mt-12 px-8 py-4 rounded-full bg-pink-400/10 border border-pink-300/20 backdrop-blur-xl text-white hover:bg-pink-400/20 transition-all duration-300 shadow-[0_0_40px_rgba(255,105,180,0.15)]"
            >
              {">>"} Make a Wish!
            </motion.button>
          </Link>
          </div>
        </section>
      </main>
    );
  }

  // LOADING SCREEN
  return (
    <main className="h-screen bg-black overflow-hidden flex items-center justify-center relative text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black" />

      {/* PINK GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-pink-500/10 blur-[180px] rounded-full" />

      <div className="relative z-10 w-full max-w-2xl px-6">

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-4xl md:text-6xl font-bold mb-10"
        >
          Loading the Happiest Day on Earth...
        </motion.h1>

        {/* BAR */}
        <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden border border-white/10 backdrop-blur-xl">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-500 via-pink-300 to-white"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* DATES */}
        <div className="flex justify-between mt-4 text-white/40 text-sm">
          <span>Jan 1, 2026</span>

          <span>
            Day {Math.floor((progress / 100) * 271)} / 271
          </span>

          <span>Sept 28, 2026</span>
        </div>
      </div>
    </main>
  );
}