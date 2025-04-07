'use client';

import { motion } from 'framer-motion';

interface ModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({ title, children, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="bg-[#0a0a0a] border border-cyan-500 rounded-2xl max-w-xl w-full p-8 shadow-xl relative text-white futuristic-glow"
      >
        <button
          className="absolute top-3 right-4 text-white text-xl hover:text-red-400"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-cyan-300 text-xl font-bold mb-4">{title}</h2>
        <div className="text-sm text-gray-200 space-y-4 max-h-[65vh] overflow-y-auto pr-2">
          {children}
        </div>
      </motion.div>
    </div>
  );
};
