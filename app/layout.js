"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.5 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    // RAF callback for Lenis
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Clean up Lenis on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en">
      <head>
        {/* <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Morph is a leading digital marketing agency specializing in SEO, SEM, content marketing, and social media strategies to grow your online presence."
        />
        <meta
          name="keywords"
          content="digital marketing, SEO, SEM, content marketing, social media marketing"
        />
        <meta name="author" content="Your Name" /> */}
        <link rel="icon" href="img/favicon.ico" />
        <title>Wright&apos;s Harbor Mansion</title>
        {/* Add any other meta tags or links here */}
      </head>
      <body className={`${inter.className} bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
