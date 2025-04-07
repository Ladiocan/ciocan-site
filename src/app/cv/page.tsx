'use client';

import CardNode from '@/components/CardNode';
import { useState } from 'react';
import SocialLinks from '@/components/SocialLinks';
import { FaRegCompass, FaHotel, FaSuitcaseRolling, FaCubes } from "react-icons/fa";
import Link from 'next/link';

export default function CVPage() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Experience',
      content: (
        <ul className="space-y-4 text-left">
          <li className="flex items-start gap-2">
            <FaRegCompass className="mt-1 text-cyan-400" />
            <span>
              <strong>General Manager</strong> – Turist in Transilvania (2013–Present):<br />
              Developed tourism experiences in Transylvania, managed accommodations & guided tours.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaHotel className="mt-1 text-cyan-400" />
            <span>
              <strong>Hotel Manager</strong> – Karpaten Hotels (2014–2015):<br />
              Oversaw hotel operations, guest experience, and logistics during peak seasons.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaSuitcaseRolling className="mt-1 text-cyan-400" />
            <span>
              <strong>Receptionist & Tour Assistant</strong> – Karpaten Tourism (2009–2014):<br />
              Front-desk & logistics support for group travel across Romania.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCubes className="mt-1 text-cyan-400" />
            <span>
              <strong>Web3 Explorer</strong> (Since 2025):<br />
              Learning front-end, Solidity & building Web3 DApps for tourism & NFTs.
            </span>
          </li>
        </ul>
      )
    },
    {
      title: 'Education',
      content: (
        <div className="space-y-4 text-left">
          <div className="flex items-start gap-2">
            🎓
            <div>
              <p className="text-cyan-400 font-bold uppercase text-sm">
                Master in Marketing & Tourism
              </p>
              <p className="text-white text-sm">Lucian Blaga University – Sibiu</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            🎓
            <div>
              <p className="text-cyan-400 font-bold uppercase text-sm">
                Bachelor in Tourism & Geography
              </p>
              <p className="text-white text-sm">Lucian Blaga University – Sibiu</p>
              </div>
          </div>
          <div className="flex items-start gap-2">
            🗣️
            <div>
              <p className="text-cyan-400 font-bold uppercase text-sm">
                German Language Diploma
              </p>
               <p className="text-white text-sm">German School – Mediasch</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Skills',
      content: (
        <div className="grid grid-cols-2 gap-4 text-left">
          <div className="flex items-start gap-2">
            💻
            <div>
              <p className="text-cyan-400 font-bold uppercase text-sm">HTML, CSS, JS</p>
              <p className="text-white text-sm">Frontend Fundamentals</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            🧱
            <div>
              <p className="text-cyan-400 font-bold uppercase text-sm">Solidity</p>
              <p className="text-white text-sm">Smart Contract Development</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            🌐
            <div>
              <p className="text-cyan-400 font-bold uppercase text-sm">Web3 & DApps</p>
              <p className="text-white text-sm">Blockchain Integration</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            🧠
            <div>
              <p className="text-cyan-400 font-bold uppercase text-sm">3D Printing / Blender</p>
              <p className="text-white text-sm">Design & Rapid Prototyping</p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-cyan-400 font-bold mb-2 flex items-center gap-2">
              🌍 Languages
            </h4>
            <div className="flex flex-wrap md:flex-nowrap md:justify-start items-center gap-x-4 gap-y-1 text-white text-sm leading-relaxed text-center md:text-left">
              <span className="flex items-center gap-1 whitespace-nowrap">
                🇷🇴 Romanian – Native
              </span>
              <span className="flex items-center gap-1 whitespace-nowrap">
                🇩🇪 German – C1
              </span>
              <span className="flex items-center gap-1 whitespace-nowrap">
                🇭🇺 Hungarian – B2
              </span>
              <span className="flex items-center gap-1 whitespace-nowrap">
                🇬🇧 English – B2
             </span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Projects',
      content: (
        <div className="space-y-4 text-left">
          <div className="flex items-start gap-2">
            🏨
            <div>
              <p className="text-cyan-400 font-bold uppercase text-sm">Web3 Booking DApp</p>
              <p className="text-white text-sm">
                Created for MetaMask Hackathon – tourism-focused DApp with NFT vouchers.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            🤖
            <div>
              <p className="text-cyan-400 font-bold uppercase text-sm">Crypto AI App</p>
              <p className="text-white text-sm">
                Integrated with Binance API – Predictive dashboard with AI models.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            🏰
            <div>
              <p className="text-cyan-400 font-bold uppercase text-sm">NFT Collection</p>
              <p className="text-white text-sm">
                Fortified Churches of Transylvania – Cultural preservation on the blockchain.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            🌐
            <div>
              <p className="text-cyan-400 font-bold uppercase text-sm">First Site</p>
              <p className="text-white text-sm">
                My very first website built with just HTML, CSS and vanilla JS – simple, clean, and fully responsive.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            🎨
            <div>
              <p className="text-cyan-400 font-bold uppercase text-sm">Fusion Travel</p>
              <p className="text-white text-sm">
                Pixel-perfect page built from design – attention to layout, fonts and responsiveness.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
  <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-4 py-16 flex flex-col items-center justify-center text-center">
  {/* === DESKTOP === */}
    <div className="hidden md:flex flex-row justify-center items-center gap-12 w-full max-w-7xl">
      <Link href="/" className="absolute top-4 left-4 text-cyan-400 hover:underline text-sm md:text-base">  
  ← Back to Home
      </Link>
    {/* Left column */}
      <div className="flex flex-col justify-between gap-20">
        {steps.slice(0, 2).map((step, index) => (
          <div key={index} className="relative flex items-center justify-end">
            <CardNode
              title={step.title}
              content={step.content}
                onNext={() => setActiveStep(index + 1)}
              />
              <svg
                className="absolute right-[-80px] top-1/2 transform -translate-y-1/2"
                width="80"
                height="60"
                viewBox="0 0 100 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 30 C40 0, 60 60, 100 30"
                  stroke="#00FFFF"
                  strokeWidth="2"
                  fill="none"
                />
                <circle r="4" fill="white">
                  <animateMotion dur="2s" repeatCount="indefinite" path="M0 30 C40 0, 60 60, 100 30" />
                </circle>
              </svg>
            </div>
          ))}
        </div>

        {/* Center box */}
        <div className="relative z-10 flex-shrink-0 rounded-2xl border-2 border-cyan-400 bg-gradient-to-br from-gray-900 to-black shadow-xl p-6 flex flex-col items-center text-center w-[700px] h-fit">
          <img
            src="/ladislau.jpg"
            alt="Ladislau"
            className="w-40 h-40 rounded-full border-4 border-cyan-500 shadow-md object-cover"
          />
          <h2 className="mt-4 text-lg md:text-xl font-bold text-cyan-300">
            Ladislau Ciocan
          </h2>
          <div className="mt-2 text-md text-gray-300 max-h-64 overflow-y-auto px-2 text-justify space-y-4 min-h-[300px]">
            <p>
              👋 Hi! I’m Ladislau, born in the heart of Transylvania – Mediasch – with Saxon and Hungarian roots. I studied at the German school until 12th grade, then deepened my passion for travel and culture by studying tourism in Sibiu.
            </p>
            <p>
              🌍 Since 2013, I’ve been shaping travel experiences across Transylvania through my company <strong>Turist in Transilvania</strong>, offering authentic stays in Mediasch, Frauendorf, Wurmloch, and Meschen – including 13th-century fortified churches turned into unforgettable overnight locations.
            </p>
            <p>
              💡 In 2025, I embraced a new journey: learning front-end development and diving into Web3. From classic tourism to blockchain-based travel tools, I now merge tradition with technology – one smart contract at a time.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-between gap-20">
          {steps.slice(2).map((step, index) => (
            <div key={index} className="relative flex items-center justify-start">
              <svg
                className="absolute left-[-80px] top-1/2 transform -translate-y-1/2"
                width="80"
                height="60"
                viewBox="0 0 100 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 30 C60 0, 40 60, 0 30"
                  stroke="#00FFFF"
                  strokeWidth="2"
                  fill="none"
                />
                <circle r="4" fill="white">
                  <animateMotion dur="2s" repeatCount="indefinite" path="M100 30 C60 0, 40 60, 0 30" />
                </circle>
              </svg>
              <CardNode
                title={step.title}
                content={step.content}
                onNext={() => setActiveStep(index + 3)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* === MOBILE === */}
      <div className="md:hidden flex flex-col items-center py-1 gap-8 mt-6 w-full max-w-md">
      <Link href="/" className="absolute top-4 left-4 text-cyan-400 hover:underline text-sm md:text-base">
  ← Back to Home
</Link>
        <div className="rounded-2xl border-2 border-cyan-400 bg-gradient-to-br from-gray-900 to-black shadow-xl p-6 flex flex-col items-center text-center w-full">
          <img
            src="/ladislau.jpg"
            alt="Ladislau"
            className="w-28 h-28 rounded-full border-4 border-cyan-500 shadow-md object-cover"
          />
          <h2 className="mt-4 text-lg md:text-xl font-bold text-cyan-300">
            Ladislau Ciocan
          </h2>
          <p className="mt-4 text-base text-gray-300 leading-relaxed px-2 text-justify">
            Let me introduce myself, I was born in Mediasch, Transylvania and I am half Saxon and half Hungarian from Transylvania. Until 12th grade, I attended the German school in Mediasch, afterwards I studied tourism in Hermannstadt. Since 2009 I have been working in the tourism industry and currently own the company Turist in Transilvania. We offer accommodation in Mediasch, Frauendorf, Wurmloch and Meschen, as well as day trips in Transylvania. We also manage two fortified churches from the 13th century where special overnight stays are available. Since 2022 I'm also learning front-end web development.
          </p>
        </div>

        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center w-full">
            {/* Linie verticală + punct între carduri */}
            {index > 0 && (
              <div className="absolute -top-10 h-12 w-1 bg-cyan-400 flex justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-move-dot-vertical" />
              </div>
            )}
            <CardNode
              title={step.title}
              content={step.content}
              onNext={() => setActiveStep(index + 1)}
            />
          </div>
        ))}
      </div>
      <SocialLinks />
    </div>
  );
}
