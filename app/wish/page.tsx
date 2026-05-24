"use client";

import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black" />

      {/* GLOWS */}
      <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-pink-500/20 blur-[140px]" />

      <div className="absolute bottom-[-180px] right-[-120px] h-[460px] w-[460px] rounded-full bg-fuchsia-500/20 blur-[160px]" />

      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400/10 blur-[180px]" />

      {/* MAIN */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-24">

        {/* LETTER */}
        <div className="relative w-full max-w-2xl">

          {/* OUTER GLOW */}
          <div className="absolute inset-0 rounded-[2rem] bg-pink-400/10 blur-3xl" />

          {/* PAPER */}
          <div className="relative overflow-hidden rounded-[2rem] border border-[#f3d7c7]/40 bg-[#fff8f1] px-7 py-10 text-[#3b2d2d] shadow-[0_0_80px_rgba(255,255,255,0.06)] sm:px-10 sm:py-12">

            {/* PAPER TEXTURE */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply">
              <div className="h-full w-full bg-[radial-gradient(#000_0.7px,transparent_0.7px)] [background-size:16px_16px]" />
            </div>

            {/* LIGHT SHADOW */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />

            {/* CONTENT */}
            <div className="relative z-10">

              {/* TOP TEXT */}
              <p className="mb-8 text-right font-serif text-sm italic tracking-wide text-[#8d6e63]">
                For APK ✨
              </p>

              {/* TITLE */}
              <h1 className="mb-10 font-serif text-4xl font-bold leading-tight text-[#2f1f1f] sm:text-5xl">
                Maybe this is
                <br />
                my last letter for you.
              </h1>

              {/* NORMAL TEXT */}
              <div className="space-y-8 font-serif text-[17px] leading-[2] text-[#4e3b3b] sm:text-[20px]">

                <p>
                  I don’t really know where life will take us after this,
                  or whether someday we’ll slowly become strangers again.
                </p>

                <p>
                  But before time quietly moves forward,
                  I just wanted to leave a small piece of my heart here,
                  inside these words.
                </p>

                {/* MAIN SECTION */}
                <div className="rounded-[2rem] border border-pink-200/50 bg-pink-100/20 px-6 py-7 shadow-[0_0_60px_rgba(255,105,180,0.08)]">

                  <p className="mb-5 font-['Cursive'] text-3xl font-bold italic leading-tight text-[#3b2222] sm:text-4xl">
                    Thank you
                  </p>

                  <div className="space-y-6">

                    <p className="font-['Cursive'] text-[20px] italic leading-[1.9] text-[#5b3d3d] sm:text-[24px]">
                      for existing,
                      <br />
                      for smiling,
                      <br />
                      for unknowingly making
                      <br />
                      my days feel softer
                      <br />
                      and brighter.
                    </p>

                    <p className="font-['Cursive'] text-[20px] italic leading-[1.9] text-[#5b3d3d] sm:text-[24px]">
                      Even if life becomes difficult,
                      <br />
                      I hope you never stop believing in yourself.
                    </p>

                    <p className="font-['Cursive'] text-[20px] italic leading-[1.9] text-[#5b3d3d] sm:text-[24px]">
                      I hope life gives you peace.
                      <br />
                      I hope your dreams come true.
                      <br />
                      I hope someday you realize
                      <br />
                      how special you truly are.
                    </p>

                    <div className="border-l-4 border-pink-300 pl-5">

                      <p className="font-['Cursive'] text-[20px] italic leading-[1.9] text-[#8a4f67] sm:text-[24px]">
                        “And if destiny ever asks me
                        <br />
                        what my favorite memory was,
                        <br />
                        I think somewhere in my answer,
                        <br />
                        there will always be you.”
                      </p>

                    </div>
                  </div>
                </div>

                <p>
                  Maybe this letter ends here,
                  but my prayers for your happiness never will.
                </p>

              </div>

              {/* SIGNATURE */}
              <div className="mt-14">
                <p className="font-serif text-lg italic text-[#5c4033]">
                  - From someone
                  <br />
                  who truly cared about you ✨
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}