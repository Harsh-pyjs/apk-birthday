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
      <body>
        {children}
      </body>
    </html>
  );
}