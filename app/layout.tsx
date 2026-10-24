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
    "Education, activities, research questions, and honours of Abdallah El Dessouky, an IB student in Cairo interested in materials science, engineering, and learning.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Abdallah ‘Zuki’ El Dessouky",
    description: "Science, software, a piano, a kitchen. A few connections.",
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
