import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memories | APK Birthday",
};

export default function MemoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}