"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BlockchainBackground from "@/components/BlockchainBackground";

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
      <section className="flex flex-col items-center justify-center text-center mt-10">
        <h2 className="text-4xl font-bold text-white drop-shadow-lg animate-pulse">
          👋 Bine ai venit la <span className="text-blue-400">Ladislau Ciocan</span>
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
              my C.V.
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

      {/* CSS */}
      <style jsx>{`
        .futuristic-button {
          position: relative;
          background: rgba(0, 255, 255, 0.2);
          border: 2px solid rgba(0, 255, 255, 0.6);
          color: white;
          padding: 12px 24px;
          font-size: 1rem;
          font-weight: bold;
          border-radius: 10px;
          cursor: pointer;
          transition: transform 0.2s ease-in-out, box-shadow 0.3s, background 0.3s;
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
          text-transform: uppercase;
          width: 220px;
          text-align: center;
        }

        .futuristic-button:hover {
          transform: scale(1.2);
          background: rgba(0, 255, 255, 0.5);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.8);
        }

        .explode {
          animation: explodeEffect 0.5s forwards;
        }

        @keyframes explodeEffect {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.5;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .glow-effect {
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
          animation: glow 2s infinite alternate;
        }

        @keyframes glow {
          from {
            box-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
          }
          to {
            box-shadow: 0 0 25px rgba(0, 255, 255, 1);
          }
        }
      `}</style>
    </div>
  );
}
