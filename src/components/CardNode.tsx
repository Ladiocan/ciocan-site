'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { Modal } from '@/components/Modal';

interface CardNodeProps {
  title: string;
  content: string | React.ReactNode;
  onNext?: () => void;
}

export default function CardNode({ title, content, onNext }: CardNodeProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    onNext?.();
  };

  return (
    <>
      <div
        onClick={handleOpen}
        className={clsx(
          'futuristic-button transition-all duration-500 p-4 rounded-2xl border border-cyan-500 shadow-xl cursor-pointer bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white relative overflow-hidden flex flex-col items-center justify-center text-center',
          'w-full md:w-64 h-24'
        )}
      >
        <h3 className="text-cyan-400 font-bold text-base md:text-lg uppercase tracking-wide">
          {title}
        </h3>
      </div>

      {open && (
        <Modal title={title} onClose={() => setOpen(false)}>
          {content}
        </Modal>
      )}
    </>
  );
}
