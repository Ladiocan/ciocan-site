"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Importă Lottie doar pe client-side (evită erori SSR)
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

const BlockchainBackground = () => {
  const [cubes, setCubes] = useState<
    { id: number; top: number; left: number; size: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    const generateCube = () => {
      let top, left;
      let isLeftSide; // Stabilește dacă cubul apare în partea stângă sau dreaptă

      do {
        top = Math.random() * 85 + 5; // Poziție verticală între 5% și 90%
        isLeftSide = Math.random() > 0.5; // 50% șanse să fie pe partea stângă
        left = isLeftSide ? Math.random() * 20 : 80 + Math.random() * 20; // Doar pe laterale (0-20% sau 80-100%)
      } while (top > 35 && top < 65); // Exclude complet partea centrală

      return {
        id: Math.random(),
        top,
        left,
        size: 50 + Math.random() * 60, // Dimensiuni între 50px și 110px
        delay: Math.random() * 3, // Întârziere aleatorie
        duration: 6 + Math.random() * 5, // Fiecare cub durează între 6s și 11s
      };
    };

    setCubes(Array.from({ length: 5 }, generateCube)); // Primele 5 cuburi deja prezente

    const addCube = () => {
      setCubes((prevCubes) => {
        const newCubes = [...prevCubes, generateCube()];
        return newCubes.length > 15 ? newCubes.slice(1) : newCubes; // Menține maxim 15 cuburi
      });
    };

    const interval = setInterval(() => {
      addCube();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {cubes.map((cube) => (
        <div
          key={cube.id}
          className="absolute opacity-0 animate-fadeInOut"
          style={{
            top: `${cube.top}%`,
            left: `${cube.left}%`,
            width: `${cube.size}px`,
            height: `${cube.size}px`,
            animationDelay: `${cube.delay}s`,
            animationDuration: `${cube.duration}s`,
          }}
        >
          <Player
            src="/animations/blockchain.json"
            autoplay
            loop
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      ))}

      {/* Stilizare animație */}
      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          20% {
            opacity: 1;
            transform: scale(1);
          }
          80% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.5);
          }
        }
        .animate-fadeInOut {
          animation: fadeInOut var(--duration, 7s) ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BlockchainBackground;
