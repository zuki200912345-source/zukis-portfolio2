import type { Metadata } from "next";
import { Navigation } from "./portfolio-ui";
import { MotionDirector } from "./motion";
import { Footer } from "./site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Abdallah ‘Zuki’ El Dessouky — A personal portfolio",
    template: "%s · Abdallah El Dessouky",
  },
  description:
    "Published research, software projects, student leadership, and creative work by Abdallah El Dessouky, an IB student in Cairo.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Abdallah ‘Zuki’ El Dessouky",
    description: "Research, software, student leadership, cooking, and music by Abdallah El Dessouky.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navigation />
        <MotionDirector />
        <main id="main-content">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
