"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Plane, Activity } from "lucide-react";

const projects = [
  {
    title: "Booking NFT Voucher",
    description: "A Web3 booking platform for generating personalized NFT vouchers for travel services.",
    image:"/nftvoucher.png",
    link: "https://nft-voucher.ciocan.eu",
  },
  {
    title: "Crypto App",
    description: "AI price prediction for top crypto coins using Binance + Random Forest.",
    icon: <Activity size={48} className="text-cyan-400 mb-4" />,
    link: "https://crypto-app.ciocan.eu",
  },
  {
    title: "Fusion Travel",
    description: "A pixel-perfect travel UI built by replicating a design from a reference image.",
    icon: <Plane size={48} className="text-cyan-400 mb-4" />,
    link: "https://fusion-travel.ciocan.eu",
  },
  {
    title: "First Site",
    description: "My first experiments with HTML, CSS, and JavaScript — where the journey began.",
    icon: <Globe size={48} className="text-cyan-400 mb-4" />,
    link: "https://first-site.ciocan.eu",
  },
];

const svgPositions = [
  { top: "5%", left: "10%" },
  { top: "25%", left: "85%" },
  { top: "50%", left: "80%" },
  { top: "75%", left: "15%" },
  { top: "85%", left: "83%" },
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen px-4 py-16 md:px-12 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      {/* BACK button */}
      <Link
        href="/"
        className="absolute top-4 left-4 text-cyan-400 hover:underline text-sm md:text-base z-20"
      >
        ← Back to Home
      </Link>

      {/* Background SVGs */}
      {svgPositions.map((pos, index) => (
        <motion.div
          key={index}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 100 + index * 10, ease: "linear" }}
          className="absolute w-20 h-20 opacity-10 pointer-events-none filter invert"
          style={{
            top: pos.top,
            left: pos.left,
            backgroundImage: "url('/blockchain-mesh.svg')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">My Projects</h1>
        <p className="text-gray-400 mb-12">A collection of Web2 & Web3 creations I’ve built so far.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111] rounded-2xl p-6 shadow-lg border border-cyan-500/20 hover:border-cyan-400/70 hover:shadow-[0_0_15px_#22d3ee] transition-all flex flex-col items-center"
            >
              {/* Afișează imagine sau icon */}
              {proj.image ? (
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={64}
                  height={64}
                  className=" rounded-xl object-contain"
                />
              ) : (
                proj.icon
              )}
              <h2 className="text-xl font-semibold text-cyan-300 mb-2">{proj.title}</h2>
              <p className="text-sm text-gray-300 mb-4">{proj.description}</p>
              {proj.link.startsWith("http") ? (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="futuristic-button text-sm px-4 py-2 mt-auto"
                >
                  Go to Project
                </a>
              ) : (
                <Link href={proj.link} className="futuristic-button text-sm px-4 py-2 mt-auto">
                  Go to Project
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
