"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BlockchainBackground from "@/components/BlockchainBackground";
import SocialLinks from "@/components/SocialLinks";
import "../styles/globals.css";

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);
  const [explode, setExplode] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleExplode = (id: string, href: string) => {
    setExplode(id);
    setTimeout(() => {
      window.location.href = href;
    }, 500);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-start animate-fade-in pt-2 sm:pt-10">
      
      {/* Fundal animat */}
      <BlockchainBackground />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center mt-5 px-4 mb-2 sm:mb-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg animate-pulse">
          Welcome to <span className="text-blue-400">Ladislau Ciocan</span>
        </h2>
        <p className="mt-2 text-base sm:text-lg text-gray-300 max-w-lg">
        An interactive Web3 CV that combines a passion for tourism, blockchain, 3D printing, and technology        </p>
      </section>

      {/* About Me + Butoane */}
      <section className="mt-6 flex flex-col items-center text-center px-6 max-w-3xl relative">
      <div className="w-full flex flex-col items-center justify-center md:relative md:flex-row md:gap-6">
          
          {/* Butoane Stânga (pe mobil deasupra) */}
          <div className="flex flex-col space-y-4 md:absolute md:left-[-250px] md:top-1/2 md:-translate-y-1/2">
          <button
              className={`futuristic-button ${explode === "cv" ? "explode" : ""}`}
              onClick={() => handleExplode("cv", "/cv")}
            >
              My C.V.
            </button>
            <button
              className={`futuristic-button ${explode === "hobbies" ? "explode" : ""}`}
              onClick={() => handleExplode("hobbies", "/hobbies")}
            >
              My Hobbies
            </button>
          </div>

          {/* Imagine Profil */}
          <div className="flex justify-center">
            <Image
              src="/me.jpg"
              width={160}
              height={160}
              alt="Ladislau Ciocan"
              className="mt-4 sm:mt-6 rounded-full shadow-lg border-4 border-blue-400 glow-effect"
            />
          </div>

          {/* Butoane Dreapta (pe mobil sub poză) */}
          <div className="flex flex-col space-y-4 mt-4 md:mt-0 md:absolute md:right-[-250px] md:top-1/2 md:-translate-y-1/2">
          <button
              className={`futuristic-button ${explode === "projects" ? "explode" : ""}`}
              onClick={() => handleExplode("projects", "/projects")}
            >
              My Projects
            </button>
            <button
              className={`futuristic-button ${explode === "blockchain" ? "explode" : ""}`}
              onClick={() => handleExplode("blockchain", "/web3")}
            >
              My Blockchain
            </button>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mt-6">Hi! I'm Ladislau</h3>
        <p className="mt-1 text-gray-400">
        Passionate about tourism, 3D printing, blockchain, and Web3.
        </p>
      </section>

      {/* Social Media */}
      <SocialLinks />
    </div>
  );
}
