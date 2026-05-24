import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APK Birthday",
  description: "A special birthday website for APK ✨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* PNG Fallback */}
        <link rel="icon" type="image/png" href="/favicon.png" />

        {/* GIF */}
        <link rel="alternate icon" type="image/gif" href="/favicon.gif" />
      </head>

      <body>{children}</body>
    </html>
  );
}