"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 z-50 w-full -translate-x-1/2 px-3">
      <div className="overflow-x-auto scrollbar-hide">
        <nav className="mx-auto flex w-max min-w-max items-center gap-3 rounded-full border border-pink-300/20 bg-pink-400/10 px-4 py-2 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,105,180,0.12)]">

          {/* GIF LOGO */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-pink-200/20 bg-white/5">
            <img
              src="/cat-dancing-animated-navbar.gif"
              alt="logo"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          {/* LINKS */}
          <Link
            href="/"
            className="shrink-0 text-sm text-white/70 transition hover:text-pink-200"
          >
            Home
          </Link>

          <Link
            href="/make-a-wish"
            className="shrink-0 text-sm text-white/70 transition hover:text-pink-200"
          >
            Make a Wish
          </Link>

          <Link
            href="/memories"
            className="shrink-0 text-sm text-white/70 transition hover:text-pink-200"
          >
            Memories
          </Link>

          <Link
            href="/wish"
            className="shrink-0 text-sm text-white/70 transition hover:text-pink-200"
          >
            Wish
          </Link>

        </nav>
      </div>
    </header>
  );
}