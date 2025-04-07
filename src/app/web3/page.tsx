"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ConnectButton from "@/components/ConnectButton";

const items = [
  {
    title: "VoucherNFT Smart Contract",
    description: "Deployed on Linea Sepolia, ERC721 with full metadata & image support.",
  },
  {
    title: "MetaMask Hackathon",
    description: "Built a booking dApp with NFT-based vouchers and wallet connection.",
  },
  {
    title: "Crypto App with AI",
    description: "AI-based predictions for crypto prices using Binance + Random Forest.",
  },
  {
    title: "Tools I Use",
    description: "Solidity, Hardhat, Wagmi, MetaMask SDK, Pinata, TailwindCSS, Next.js.",
  },
  {
    title: "Next Milestone",
    description: "Launch a fully on-chain booking dApp with real NFT integration.",
  },
  {
    title: "Planning On-Chain Booking",
    description: "Bringing tourism & crypto together with dynamic voucher NFTs.",
  },
];

const svgPositions = [
  { top: "5%", left: "10%" },
  { top: "25%", left: "85%" },
  { top: "50%", left: "80%" },
  { top: "75%", left: "15%" },
  { top: "85%", left: "60%" },
];

export default function MyBlockchain() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-4 py-16 flex flex-col items-center justify-center text-center">
      {/* BACK */}
      <Link
        href="/"
        className="absolute top-4 left-4 text-cyan-400 hover:underline text-sm md:text-base z-20"
      >
        ← Back to Home
      </Link>

      {/* Background SVG */}
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
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
          My Blockchain Journey
        </h1>
        <p className="text-gray-400 mb-12">
          From smart contracts to AI & Web3 dApps – my path on-chain.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111] rounded-2xl p-6 shadow-lg border border-cyan-500/20 hover:border-cyan-400/70 hover:shadow-[0_0_15px_#22d3ee] transition-all">
              <h2 className="text-xl font-semibold text-cyan-300 mb-2">{item.title}</h2>
              <p className="text-sm text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Real Connect Button */}
        <div className="mt-16 flex justify-center items-center">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
