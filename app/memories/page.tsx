"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function MemoriesPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black" />

      {/* PINK GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-pink-500/10 blur-[180px] rounded-full" />

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <div className="relative z-10 pt-36 pb-20 px-6 flex flex-col items-center">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-pink-100"
        >
          Memories ✨
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-white/50 text-center max-w-xl text-sm md:text-base"
        >
          There are a lot of moments...
          <br />
          but some become memories forever.
        </motion.p>

        {/* BOXES */}
        <div className="mt-14 flex flex-col gap-5 w-full max-w-md">

          {/* RESULT DAY */}
          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 40px rgba(255,105,180,0.35)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelected("result")}
            className="w-full text-left rounded-3xl border border-pink-200/10 bg-white/5 backdrop-blur-xl px-6 py-5 transition-all duration-300"
          >
            <h2 className="text-lg font-semibold text-pink-100">
              1. Result Day
            </h2>

            <p className="text-white/40 text-sm mt-1">
              24-03-2026
            </p>
          </motion.button>

          {/* LAST DAY */}
          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 40px rgba(255,105,180,0.35)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelected("lastday")}
            className="w-full text-left rounded-3xl border border-pink-200/10 bg-white/5 backdrop-blur-xl px-6 py-5 transition-all duration-300"
          >
            <h2 className="text-lg font-semibold text-pink-100">
              2. Your Last Day in Nabha
            </h2>

            <p className="text-white/40 text-sm mt-1">
              16-05-2026
            </p>
          </motion.button>

          {/* COMING SOON */}
          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 40px rgba(255,105,180,0.35)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelected("comingsoon")}
            className="w-full text-left rounded-3xl border border-pink-200/10 bg-white/5 backdrop-blur-xl px-6 py-5 transition-all duration-300"
          >
            <h2 className="text-lg font-semibold text-pink-100">
              3. Coming Soon...
            </h2>

            <p className="text-white/40 text-sm mt-1">
              More beautiful memories soon ✨
            </p>
          </motion.button>

        </div>
      </div>

      {/* LETTERS */}
      <AnimatePresence>

        {/* RESULT DAY LETTER */}
        {selected === "result" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center px-6 py-20"
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-[2rem] border border-pink-200/10 bg-[#fffaf7] text-black px-8 py-10 shadow-[0_0_80px_rgba(255,255,255,0.08)]"
            >

              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 text-black/40 hover:text-black transition"
              >
                ✕
              </button>

              <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Result Day ✨
              </h1>

              <div className="space-y-5 text-[17px] leading-8 font-serif text-black/80">

                <p>
                  You approached me to go with you on result day.
                </p>

                <p>
                  You talked to me nicely and said:
                  <br />
                  <span className="font-semibold">
                    “Good morning”
                  </span>{" "}
                  instead of Radhe Radhe 😭
                </p>

                <p>
                  Then we went to see the result together
                  where you sat side by side with me.
                </p>

                <p>
                  Btw yk Sukhvinder mam?
                  <br />
                  Lol 😭
                </p>

              </div>
            </motion.div>
          </motion.div>
        )}

        {/* LAST DAY LETTER */}
        {selected === "lastday" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center px-6 py-20"
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-[2rem] border border-pink-200/10 bg-[#fffaf7] text-black px-8 py-10 shadow-[0_0_80px_rgba(255,255,255,0.08)]"
            >

              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 text-black/40 hover:text-black transition"
              >
                ✕
              </button>

              <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Your Last Day in Nabha ✨
              </h1>

              <div className="space-y-5 text-[17px] leading-8 font-serif text-black/80">

                <p>
                  After you shifted to CHD, I was a little sad.
                </p>

                <p>
                  But after some months you said you are coming
                  to Nabha again and I became really nervous.
                </p>

                <p>
                  On that day, when I saw your Jupiter in parking,
                  I literally started shaking.
                </p>

                <p>
                  But when I reached class, you were not there
                  so I thought you would be in another class
                  and honestly I felt a little relieved 😭
                </p>

                <p>
                  Then Satyam said:
                  <br />
                  “She didn’t come.”
                </p>

                <p>
                  But I was damn sure it was your activa
                  because I knew the color,
                  HeadGuard press words,
                  and even the number plate.
                </p>

                <p>
                  We started searching for you...
                  but I failed.
                </p>

                <p>
                  Then when we came upstairs,
                  I finally saw you ❤️
                </p>

                <p>
                  But within 0.30 milliseconds,
                  I turned around
                  and hid inside the boys washroom 😭
                </p>

                <p>
                  I still remember hearing:
                  <br />
                  “Raghav kithe gya?”
                </p>

                <p>
                  I even started crying.
                </p>

                <p>
                  Then finally the 3rd time,
                  I somehow reached upstairs
                  and saw you properly.
                </p>

                <p>
                  (Swear you had became alot skinny ahm... ahm... 👀)
                </p>

                <p>
                  Then we talked,
                  we had a little party at Rana Bakery,
                  and I swear I still don’t know
                  how those two days passed so fast.
                </p>

                <p>
                  But during the last period,
                  I started panicking
                  because you were about to leave.
                </p>

                <p>
                  I had planned many things...
                  where we would go,
                  what we would eat,
                  and alot more.
                </p>

                <p>
                  But you said
                  you had to reach home ASAP.
                </p>

                <p>
                  I never forced you,
                  but somehow Satyam managed to stop you.
                </p>

                <p>
                  But at the same time,
                  I got stuck in the fees department
                  with Harman.
                </p>

                <p>
                  Then Satyam came and said:
                  <br />
                  “Arsh ja rhi aa.”
                </p>

                <p>
                  At that moment,
                  I genuinely thought
                  I had missed the last chance.
                </p>

                <p>
                  But...
                  you waited.
                </p>

                <p>
                  I just came outside...
                  and you were there.
                </p>

                <p>
                  And when you said:
                  <br />
                  “Aapna dhayan rakhi.”
                </p>

                <p>
                  I became too emotional
                  and cried alot after that.
                </p>

                <p>
                  But in the end...
                  it became a memory too ✨
                </p>

              </div>
            </motion.div>
          </motion.div>
        )}

        {/* COMING SOON LETTER */}
        {selected === "comingsoon" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center px-6 py-20"
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-[2rem] border border-pink-200/10 bg-[#fffaf7] text-black px-8 py-10 shadow-[0_0_80px_rgba(255,255,255,0.08)]"
            >

              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 text-black/40 hover:text-black transition"
              >
                ✕
              </button>

              <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Coming Soon ✨
              </h1>

              <div className="space-y-5 text-[17px] leading-8 font-serif text-black/80">

                <p>
                  We made many memories together,
                  and yeah...
                  many times we fought too 😭
                </p>

                <p>
                  My ego clashed alot of times,
                  but somehow you always managed
                  to make me settle down for good.
                </p>

                <p>
                  And honestly,
                  I think we are still gonna make
                  many more memories in future ✨
                </p>

                <p>
                  And store them forever
                  in the DBs of our minds.
                </p>

                <p className="text-sm opacity-50">
                  (DBs = databases 😭)
                </p>

              </div>
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
    </main>
  );
}