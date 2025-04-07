"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Hobby data
const hobbies = [
  {
    title: "3D Printing",
    image: "/3dprinting.jpg",
    description: "Turning digital dreams into real-world creations – one layer at a time.",
  },
  {
    title: "Fishing",
    image: "/fishing.jpg",
    description: "Patience, silence, and the thrill of the catch. Hooked on peace.",
  },
  {
    title: "Hunting",
    image: "/hunting.jpg",
    description: "Tradition, instinct, and respect for nature – the ultimate pursuit.",
  },
  {
    title: "Travel",
    image: "/travel.jpg",
    description: "Exploring the world to collect memories, not things.",
  },
];

// Positioning for small rotating blockchain SVGs
const meshPositions = [
  { top: "5%", left: "10%" },
  { top: "5%", left: "80%" },
  { top: "30%", left: "85%" },
  { top: "45%", left: "12%" },
  { top: "65%", left: "90%" },
  { top: "85%", left: "5%" },
];

export default function HobbiesPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-4 py-16 flex flex-col items-center justify-center text-center">
    {/* Back button */}
      <Link
        href="/"
        className="absolute top-4 left-4 text-cyan-400 hover:underline text-sm md:text-base z-20"
      >
        ← Back to Home
      </Link>

      {/* Multiple small blockchain mesh SVGs in random positions */}
      {meshPositions.map((pos, index) => (
        <motion.div
          key={index}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40 + index * 15, ease: "linear" }}
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
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-cyan-400 drop-shadow-md">
          My Hobbies
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {hobbies.map((hobby, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#111] rounded-2xl overflow-hidden shadow-lg border border-cyan-500/50 hover:border-cyan-400/70 hover:shadow-[0_0_15px_#22d3ee] transition-all">
              <Image
                src={hobby.image}
                alt={hobby.title}
                width={800}
                height={600}
                className="w-full object-cover h-[320px]"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-cyan-300">{hobby.title}</h2>
                <p className="mt-2 text-sm text-gray-300">{hobby.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
