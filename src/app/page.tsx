"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BlockchainBackground from "@/components/BlockchainBackground";
import SocialLinks from "@/components/SocialLinks"; // Import corect
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
    <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-start animate-fade-in pt-10">
      
      {/* Fundalul cu cuburi animate */}
      <BlockchainBackground />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-5">
        <h2 className="text-4xl font-bold text-white drop-shadow-lg animate-pulse">
         Bine ai venit la <span className="text-blue-400">Ladislau Ciocan</span>
        </h2>
        <p className="mt-2 text-lg text-gray-300 max-w-lg">
          Un CV Web3 interactiv care îmbină pasiunea pentru turism, blockchain, 3D printing și tehnologie.
        </p>
      </section>

      {/* About Me */}
      <section className="mt-6 flex flex-col items-center text-center px-6 max-w-3xl relative">
        <div className="relative flex items-center justify-center">
          {/* Butoane Stânga */}
          <div className="absolute left-[-250px] flex flex-col space-y-6">
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
          <Image
            src="/me.jpg"
            width={160}
            height={160}
            alt="Ladislau Ciocan"
            className="rounded-full shadow-lg border-4 border-blue-400 glow-effect"
          />

          {/* Butoane Dreapta */}
          <div className="absolute right-[-250px] flex flex-col space-y-6">
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

        <h3 className="text-2xl font-semibold mt-4">Salut! Sunt Ladislau Ciocan</h3>
        <p className="mt-1 text-gray-400">
          Pasionat de turism, 3D printing, blockchain și Web3.
        </p>
      </section>

      {/* Butoane Social Media */}
      <SocialLinks />
    </div>
  );
}
