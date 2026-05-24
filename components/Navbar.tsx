"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 px-3">

      <nav className="flex items-center gap-2 rounded-full border border-pink-300/20 bg-pink-400/10 px-3 sm:px-4 py-2 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,105,180,0.12)]">

        {/* GIF LOGO */}
        <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-pink-200/20 bg-white/5">
          <img
            src="/cat-dancing-animated-navbar.gif"
            alt="logo"
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        {/* HOME */}
        <Link
          href="/"
          className={`text-xs sm:text-sm transition px-2 sm:px-3 py-1 rounded-full whitespace-nowrap
            ${
              pathname === "/"
                ? "text-pink-100 bg-pink-300/10 shadow-[0_0_18px_rgba(255,105,180,0.7)]"
                : "text-white/70 hover:text-pink-200"
            }`}
        >
          Home
        </Link>

        {/* MAKE A WISH */}
        <Link
          href="/make-a-wish"
          className={`text-xs sm:text-sm transition px-2 sm:px-3 py-1 rounded-full whitespace-nowrap
            ${
              pathname === "/make-a-wish"
                ? "text-pink-100 bg-pink-300/10 shadow-[0_0_18px_rgba(255,105,180,0.7)]"
                : "text-white/70 hover:text-pink-200"
            }`}
        >
          Make a Wish
        </Link>

        {/* MEMORIES */}
        <Link
          href="/memories"
          className={`text-xs sm:text-sm transition px-2 sm:px-3 py-1 rounded-full whitespace-nowrap
            ${
              pathname === "/memories"
                ? "text-pink-100 bg-pink-300/10 shadow-[0_0_18px_rgba(255,105,180,0.7)]"
                : "text-white/70 hover:text-pink-200"
            }`}
        >
          Memories
        </Link>

        {/* WISH */}
        <Link
          href="/wish"
          className={`text-xs sm:text-sm transition px-2 sm:px-3 py-1 rounded-full whitespace-nowrap
            ${
              pathname === "/wish"
                ? "text-pink-100 bg-pink-300/10 shadow-[0_0_18px_rgba(255,105,180,0.7)]"
                : "text-white/70 hover:text-pink-200"
            }`}
        >
          Wish
        </Link>

      </nav>
    </header>
  );
}