"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function WishPage() {
  const [countdown, setCountdown] = useState(3);

  const [showCake, setShowCake] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const [candlesBlown, setCandlesBlown] = useState(false);

  /* ---------------- COUNTDOWN ---------------- */

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);

          setTimeout(() => {
            setShowCake(true);
          }, 800);

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* ---------------- TAP EFFECT ---------------- */

  const blowCandles = () => {
    if (candlesBlown) return;

    setCandlesBlown(true);

    setTimeout(() => {
      setShowLetter(true);
    }, 2600);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070007] text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black" />

      {/* TOP GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-pink-500/10 blur-[180px] rounded-full" />

      {/* BOTTOM GLOW */}
      <div className="absolute bottom-[-200px] right-[-100px] w-[400px] h-[400px] bg-fuchsia-500/10 blur-[150px] rounded-full" />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-10">

        {/* COUNTDOWN */}
        {!showCake && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-white/60 text-lg md:text-xl tracking-[0.3em] uppercase"
            >
              Tap & make a wish in ✨
            </motion.p>

            <motion.h1
              key={countdown}
              initial={{
                scale: 0.5,
                opacity: 0,
                filter: "blur(20px)",
              }}
              animate={{
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.7,
              }}
              className="text-8xl md:text-[10rem] font-black mt-6 text-pink-200 drop-shadow-[0_0_40px_rgba(255,105,180,0.5)]"
            >
              {countdown}
            </motion.h1>
          </motion.div>
        )}

        {/* CAKE SECTION */}
        <AnimatePresence>
          {showCake && !showLetter && (
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
                scale: 0.75,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
                y: 120,
                rotate: -4,
                filter: "blur(25px)",
              }}
              transition={{
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-center w-full"
            >

              {/* TITLE */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center mb-20 relative z-50"
              >
                <motion.h1
                  animate={{
                    textShadow: [
                      "0 0 12px rgba(255,255,255,0.15)",
                      "0 0 35px rgba(255,105,180,0.45)",
                      "0 0 12px rgba(255,255,255,0.15)",
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                  className="text-4xl sm:text-5xl md:text-6xl font-black text-pink-100 tracking-tight"
                >
                  Make A Wish ✨
                </motion.h1>

                <p className="mt-4 text-pink-100/60 text-sm sm:text-base">
                  Tap the cake to blow the candles
                </p>
              </motion.div>

              {/* CAKE WRAPPER */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.3,
                }}
                onClick={blowCandles}
                className="relative flex flex-col items-center cursor-pointer"
              >

                {/* BACK GLOW */}
                <div className="absolute w-[360px] h-[360px] rounded-full bg-pink-500/20 blur-[140px] top-0" />

                {/* FLOATING STARS */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                  className="absolute left-0 top-10 text-pink-200 text-xl"
                >
                  ✦
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    delay: 0.5,
                  }}
                  className="absolute right-0 top-20 text-pink-300 text-lg"
                >
                  ✨
                </motion.div>

                {/* CANDLES */}
                <div className="absolute -top-20 flex items-end gap-16 z-30">

                  {/* CANDLE 1 */}
                  <div className="flex flex-col items-center">

                    {!candlesBlown && (
                      <motion.div
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [1, 0.7, 1],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                        }}
                        className="w-5 h-8 bg-gradient-to-b from-yellow-200 via-orange-400 to-red-500 rounded-full blur-[1px] shadow-[0_0_40px_rgba(255,140,0,1)]"
                      />
                    )}

                    {candlesBlown && (
                      <motion.div
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 0, y: -40 }}
                        transition={{ duration: 2 }}
                        className="w-6 h-6 rounded-full bg-gray-300 blur-xl"
                      />
                    )}

                    <motion.div
                      animate={{
                        y: [0, 2, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                      }}
                      className="w-11 h-[92px] rounded-full bg-gradient-to-b from-pink-50 via-pink-200 to-pink-400 border border-white/20 flex items-center justify-center text-black text-5xl font-black shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                      1
                    </motion.div>
                  </div>

                  {/* CANDLE 8 */}
                  <div className="flex flex-col items-center">

                    {!candlesBlown && (
                      <motion.div
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [1, 0.7, 1],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          delay: 0.2,
                        }}
                        className="w-5 h-8 bg-gradient-to-b from-yellow-200 via-orange-400 to-red-500 rounded-full blur-[1px] shadow-[0_0_40px_rgba(255,140,0,1)]"
                      />
                    )}

                    {candlesBlown && (
                      <motion.div
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 0, y: -40 }}
                        transition={{ duration: 2 }}
                        className="w-6 h-6 rounded-full bg-gray-300 blur-xl"
                      />
                    )}

                    <motion.div
                      animate={{
                        y: [0, 2, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        delay: 0.2,
                      }}
                      className="w-11 h-[92px] rounded-full bg-gradient-to-b from-pink-50 via-pink-200 to-pink-400 border border-white/20 flex items-center justify-center text-black text-5xl font-black shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                      8
                    </motion.div>
                  </div>
                </div>

                {/* CAKE */}
                <div className="relative w-[240px] sm:w-[320px] h-[170px] rounded-t-[5rem] rounded-b-[2.5rem] bg-gradient-to-b from-pink-100 via-pink-300 to-pink-500 overflow-hidden border border-pink-100/20 shadow-[0_0_120px_rgba(255,105,180,0.3)]">

                  {/* ICING */}
                  <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-pink-50 rounded-b-[4rem]">

                    {/* DRIPS */}
                    <div className="absolute left-6 top-8 w-5 h-10 bg-pink-50 rounded-b-full" />
                    <div className="absolute left-20 top-8 w-6 h-16 bg-pink-50 rounded-b-full" />
                    <div className="absolute left-40 top-8 w-5 h-12 bg-pink-50 rounded-b-full" />
                    <div className="absolute right-8 top-8 w-6 h-14 bg-pink-50 rounded-b-full" />
                  </div>

                  {/* SPRINKLES */}
                  <div className="absolute inset-0 opacity-80">

                    <div className="absolute top-20 left-10 w-3 h-3 bg-white rounded-full" />
                    <div className="absolute top-28 left-20 w-3 h-3 bg-yellow-200 rounded-full" />
                    <div className="absolute top-24 left-36 w-3 h-3 bg-pink-100 rounded-full" />
                    <div className="absolute top-32 left-52 w-3 h-3 bg-white rounded-full" />
                    <div className="absolute top-24 right-12 w-3 h-3 bg-yellow-200 rounded-full" />

                    {/* STARS */}
                    <div className="absolute top-24 left-16 text-white text-sm">
                      ✦
                    </div>

                    <div className="absolute top-20 right-20 text-pink-100 text-sm">
                      ✨
                    </div>
                  </div>

                  {/* SHINE */}
                  <div className="absolute top-0 left-0 w-24 h-full bg-white/10 blur-2xl rotate-12 translate-x-[-40px]" />
                </div>

                {/* PLATE */}
                <div className="relative mt-4">

                  {/* GLOW */}
                  <div className="absolute inset-0 bg-pink-500/30 blur-3xl rounded-full" />

                  {/* PLATE */}
                  <div className="relative w-[290px] sm:w-[360px] h-10 rounded-full bg-gradient-to-b from-pink-200/20 to-pink-500/20 backdrop-blur-xl border border-pink-100/10" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* LETTER */}
        <AnimatePresence>
          {showLetter && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.6,
                rotateX: 90,
                y: 120,
                filter: "blur(40px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full max-w-2xl mt-10 perspective-[2000px]"
            >
              <motion.div className="bg-[#fffaf5] text-black rounded-[2rem] p-8 md:p-12 border border-white/10 shadow-[0_0_120px_rgba(255,255,255,0.08)]">

                <p className="text-sm text-gray-500 mb-6 tracking-[0.2em] uppercase">
                  A Letter For You ✨
                </p>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8 font-serif">
                  Happy Birthday.
                </h1>

                <div className="space-y-5 text-[17px] md:text-xl leading-relaxed text-gray-700 italic font-serif">

                  <p>
                    You matter more than you think you do.
                  </p>

                  <p>
                    The world feels brighter because you exist in it.
                  </p>

                  <p>
                    Even on the days you feel lost, tired, or not enough -
                    you are still someone worth loving, protecting,
                    and believing in.
                  </p>

                  <p>
                    Keep smiling.
                    <br />
                    Keep dreaming.
                    <br />
                    Keep being you.
                  </p>

                  <p className="pt-4 text-right font-semibold">
                    - Someone who truly cares ✨
                  </p>
                </div>

                {/* BUTTON */}
                <div className="mt-12 flex justify-center">
                  <Link
                    href="/memories"
                    className="px-8 py-4 rounded-full bg-pink-400/10 border border-pink-300/20 backdrop-blur-xl text-black hover:bg-pink-400/20 transition-all duration-300 shadow-[0_0_40px_rgba(255,105,180,0.15)] font-semibold"
                  >
                    {">>"} Memories
                  </Link>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}