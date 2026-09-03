import type { ReactNode } from "react";
import { X } from "lucide-react";
import Reveal from "./Reveal";

interface PhonePreviewProps {
  children: ReactNode;
  onClose?: () => void;
  isOpen?: boolean;
}

export default function PhonePreview({ children, onClose, isOpen }: PhonePreviewProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-bg)]/90 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div className="absolute top-24 right-6 z-[110]">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
          className="flex items-center justify-center h-12 w-12 text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          aria-label="Close preview"
        >
          <X size={32} />
        </button>
      </div>

      <div
        className="relative z-10 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <Reveal trigger="mount" y={24} className="relative w-[300px] sm:w-[320px]">
          {/* Ambient glow */}
          <div className="absolute inset-0 -z-10 scale-90 rounded-full bg-[var(--color-accent)]/30 blur-[100px]" />

          {/* Phone frame */}
          <div className="relative rounded-[45px] border-[6px] border-[#1a1a1a] bg-black p-2.5 shadow-2xl ring-1 ring-white/10">
            {/* Dynamic Island / Notch */}
            <div className="absolute left-1/2 top-4 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />

            <div className="overflow-hidden rounded-[35px] bg-white h-[600px] relative">
               {children}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
