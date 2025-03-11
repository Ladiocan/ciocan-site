"use client";

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { FaLinkedin, FaGithub, FaFacebook, FaXTwitter, FaTelegram } from "react-icons/fa6";

const SocialLinks = () => {
  const handlePhoneClick = () => {
    const phoneNumber = "+40749680770";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(phoneNumber);
      alert(`📞 Numărul de telefon ${phoneNumber} a fost copiat!`);
    } else {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <div className="flex justify-center gap-6 mt-6">
      {/* Email */}
      <a href="mailto:ladislau.ciocan@turistintransilvania.com" className="social-icon group" title="Trimite email">
        <EnvelopeIcon className="w-6 h-6 text-cyan-400 group-hover:text-white transition-transform transform group-hover:scale-125" />
      </a>

      {/* Telefon */}
      <button onClick={handlePhoneClick} className="social-icon group" title="Sună">
        <PhoneIcon className="w-6 h-6 text-cyan-400 group-hover:text-white transition-transform transform group-hover:scale-125" />
      </button>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/ciocan-laszlo-36599693/" target="_blank" className="social-icon group" title="Profil LinkedIn">
        <FaLinkedin className="w-6 h-6 text-cyan-400 group-hover:text-white transition-transform transform group-hover:scale-125" />
      </a>

      {/* GitHub */}
      <a href="https://github.com/Ladiocan" target="_blank" className="social-icon group" title="Profil GitHub">
        <FaGithub className="w-6 h-6 text-cyan-400 group-hover:text-white transition-transform transform group-hover:scale-125" />
      </a>

      {/* Facebook */}
      <a href="https://www.facebook.com/szabo.laszlo.1257" target="_blank" className="social-icon group" title="Profil Facebook">
        <FaFacebook className="w-6 h-6 text-cyan-400 group-hover:text-white transition-transform transform group-hover:scale-125" />
      </a>

      {/* X (Twitter) */}
      <a href="https://x.com/CiocanLadi90084" target="_blank" className="social-icon group" title="Profil Twitter">
        <FaXTwitter className="w-6 h-6 text-cyan-400 group-hover:text-white transition-transform transform group-hover:scale-125" />
      </a>

      {/* Telegram */}
      <a href="https://t.me/Ladiocan" target="_blank" className="social-icon group" title="Telegram">
        <FaTelegram className="w-6 h-6 text-cyan-400 group-hover:text-white transition-transform transform group-hover:scale-125" />
      </a>
    </div>
  );
};

export default SocialLinks;
