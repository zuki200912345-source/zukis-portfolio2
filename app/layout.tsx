import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdallah “Zuki” El Dessouky — Projects & Experience",
  description: "The projects, technical work, and experience of Abdallah “Zuki” El Dessouky, a student developer in Cairo.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
