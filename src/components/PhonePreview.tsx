import type { ReactNode } from "react";
import Dialog from "./Dialog";

interface PhonePreviewProps {
  children: ReactNode;
  onClose?: () => void;
  isOpen?: boolean;
}

export default function PhonePreview({ children, onClose, isOpen }: PhonePreviewProps) {
  if (!isOpen) return null;
  return (
    <Dialog label="app preview" onClose={() => onClose?.()}>
      <div className="relative w-full max-w-[320px] rounded-[40px] border-[6px] border-[#1a1a1a] bg-black p-2.5 shadow-2xl">
        <div className="absolute left-1/2 top-4 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="relative h-[min(600px,calc(100dvh-9rem))] overflow-hidden rounded-[28px] bg-white">
          {children}
        </div>
      </div>
    </Dialog>
  );
}
