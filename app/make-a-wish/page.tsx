"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function WishPage() {
  const [countdown, setCountdown] = useState(3);
  const [showWish, setShowWish] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);

          setTimeout(() => {
            setShowWish(true);
          }, 800);

          setTimeout(() => {
            setShowLetter(true);
          }, 4500);

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black" />

      {/* PINK GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-pink-500/10 blur-[180px] rounded-full" />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-10">

        {/* COUNTDOWN */}
        {!showWish && !showLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-10 text-center"
          >
            <p className="text-white/50 text-lg tracking-[0.3em] uppercase">
              Make a wish in...
            </p>

            <h1 className="text-7xl md:text-[9rem] font-black mt-4 text-pink-200 drop-shadow-[0_0_30px_rgba(255,105,180,0.4)]">
              {countdown}
            </h1>
          </motion.div>
        )}

        {/* CAKE SECTION */}
        <AnimatePresence>
          {showWish && !showLetter && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 80,
                filter: "blur(20px)",
              }}
              transition={{ duration: 1.5 }}
              className="flex flex-col items-center"
            >
              {/* TEXT */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10 text-center"
              >
                <h1 className="text-4xl md:text-6xl font-black text-pink-100">
                  Make A Wish ✨
                </h1>

                <p className="mt-4 text-white/50 text-base md:text-lg">
                  Blow the candles before they melt away...
                </p>
              </motion.div>

              {/* CAKE */}
              <div className="relative flex flex-col items-center mt-10">

                {/* CANDLES */}
                <div className="flex items-end gap-12 absolute -top-32 z-20">

                  {/* 1 */}
                  <div className="flex flex-col items-center">

                    {/* FLAME */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.8, 1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8,
                      }}
                      className="w-5 h-7 bg-orange-400 rounded-full blur-[1px] shadow-[0_0_25px_rgba(255,140,0,0.9)]"
                    />

                    {/* MELTING */}
                    <motion.div
                      animate={{
                        height: [95, 88, 95],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                      }}
                      className="w-10 rounded-full bg-gradient-to-b from-pink-100 to-pink-300 flex items-center justify-center text-black font-black text-5xl"
                    >
                      1
                    </motion.div>
                  </div>

                  {/* 8 */}
                  <div className="flex flex-col items-center">

                    {/* FLAME */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.8, 1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8,
                        delay: 0.2,
                      }}
                      className="w-5 h-7 bg-orange-400 rounded-full blur-[1px] shadow-[0_0_25px_rgba(255,140,0,0.9)]"
                    />

                    {/* MELTING */}
                    <motion.div
                      animate={{
                        height: [95, 88, 95],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        delay: 0.3,
                      }}
                      className="w-10 rounded-full bg-gradient-to-b from-pink-100 to-pink-300 flex items-center justify-center text-black font-black text-5xl"
                    >
                      8
                    </motion.div>
                  </div>
                </div>

                {/* CHERRIES */}
                <div className="absolute -top-8 flex gap-20 z-10">
                  <div className="w-6 h-6 rounded-full bg-red-500 shadow-[0_0_20px_rgba(255,0,0,0.5)]" />
                  <div className="w-6 h-6 rounded-full bg-red-500 shadow-[0_0_20px_rgba(255,0,0,0.5)]" />
                </div>

                {/* CAKE */}
                <div className="relative w-[320px] md:w-[360px] h-40 rounded-t-[5rem] rounded-b-[2rem] bg-gradient-to-b from-pink-200 via-pink-300 to-pink-500 border border-pink-100/20 shadow-[0_0_120px_rgba(255,105,180,0.25)] overflow-hidden">

                  {/* ICING */}
                  <div className="absolute top-0 left-0 w-full h-14 bg-pink-50 rounded-b-[3rem]">

                    {/* DRIPS */}
                    <div className="absolute left-8 top-8 w-5 h-10 bg-pink-50 rounded-b-full" />
                    <div className="absolute left-24 top-8 w-6 h-14 bg-pink-50 rounded-b-full" />
                    <div className="absolute left-44 top-8 w-5 h-12 bg-pink-50 rounded-b-full" />
                    <div className="absolute left-64 top-8 w-7 h-16 bg-pink-50 rounded-b-full" />
                  </div>

                  {/* SPRINKLES */}
                  <div className="absolute inset-0 opacity-50">

                    <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full" />
                    <div className="absolute top-28 left-20 w-2 h-2 bg-yellow-200 rounded-full" />
                    <div className="absolute top-24 left-36 w-2 h-2 bg-white rounded-full" />
                    <div className="absolute top-16 left-56 w-2 h-2 bg-pink-100 rounded-full" />
                    <div className="absolute top-24 right-12 w-2 h-2 bg-white rounded-full" />
                    <div className="absolute top-28 right-28 w-2 h-2 bg-yellow-200 rounded-full" />
                  </div>
                </div>

                {/* BASE */}
                <div className="w-[350px] md:w-[390px] h-10 rounded-full bg-pink-900/40 blur-md mt-2" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* LETTER */}
        <AnimatePresence>
          {showLetter && (
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="w-full max-w-xl mt-10"
            >
              <div className="bg-[#fffaf5] text-black rounded-3xl p-8 md:p-10 shadow-[0_0_80px_rgba(255,255,255,0.08)] border border-white/10">

                <p className="text-sm text-gray-500 mb-6 tracking-[0.2em] uppercase">
                  A Letter For You ✨
                </p>

                <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 font-serif">
                  Happy Birthday.
                </h1>

                <div className="space-y-5 text-[16px] md:text-lg leading-relaxed text-gray-700 italic font-serif">

                  <p>
                    You matter more than you think you do.
                  </p>

                  <p>
                    The world feels brighter because you exist in it.
                  </p>

                  <p>
                    Even on the days you feel lost, tired, or not enough —
                    you are still someone worth loving, protecting, and
                    believing in.
                  </p>

                  <p>
                    Don’t give up on yourself.
                  </p>

                  <p>
                    One day, everything you are struggling with right now
                    will become proof of how strong you were.
                  </p>

                  <p>
                    Keep smiling.
                    <br />
                    Keep dreaming.
                    <br />
                    Keep being you.
                  </p>

                  <p className="pt-4 text-right font-semibold">
                    — Someone who truly cares ✨
                  </p>
                </div>

                {/* BUTTON */}
                <div className="mt-10 flex justify-center">
                  <Link
                    href="/memories"
                    className="px-8 py-4 rounded-full bg-pink-400/10 border border-pink-300/20 backdrop-blur-xl text-black hover:bg-pink-400/20 transition-all duration-300 shadow-[0_0_40px_rgba(255,105,180,0.15)] font-semibold"
                  >
                    {">>"} Memories
                  </Link>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}