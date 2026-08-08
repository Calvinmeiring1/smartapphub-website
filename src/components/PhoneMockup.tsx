import { Search, Star, ShieldCheck, MapPin } from "lucide-react";
import Reveal from "./Reveal";

const sitters = [
  { name: "Naledi K.", rating: "4.9", distance: "1.2 km", initials: "NK" },
  { name: "Johan V.", rating: "5.0", distance: "2.8 km", initials: "JV" },
  { name: "Amara P.", rating: "4.8", distance: "0.6 km", initials: "AP" },
];

export default function PhoneMockup() {
  return (
    <Reveal trigger="mount" y={24} className="relative mx-auto w-[280px] sm:w-[300px]">
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 scale-90 rounded-full bg-[var(--color-accent)]/20 blur-[80px]" />

      {/* Floating verified badge, signature element */}
      <div className="animate-float absolute -left-10 top-16 z-20 hidden items-center gap-2 rounded-2xl border border-[var(--color-verified)]/25 bg-[var(--color-surface)]/95 px-3 py-2.5 shadow-xl backdrop-blur-md sm:flex">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-verified)] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-verified)]" />
        </span>
        <ShieldCheck size={16} className="text-[var(--color-verified)]" />
        <span className="text-xs font-medium text-white">ID verified</span>
      </div>

      {/* Phone frame */}
      <div className="relative rounded-[40px] border-4 border-[#2a2a2a] bg-black p-2 shadow-2xl">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="overflow-hidden rounded-[30px] bg-gradient-to-b from-[#111214] to-[#0a0a0a]">
          <div className="flex items-center justify-between px-5 pb-2 pt-4 text-[11px] text-white/70">
            <span>21:16</span>
            <span className="h-2 w-14 rounded-full bg-white/20" />
          </div>

          <div className="px-5 pt-3">
            <p className="text-xs text-[var(--color-text-faint)]">Find a sitter near</p>
            <p className="font-display text-base font-semibold text-white">South Africa</p>

            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5">
              <Search size={14} className="text-[var(--color-text-faint)]" />
              <span className="text-xs text-[var(--color-text-faint)]">Dates, pet type, sitter...</span>
            </div>

            <div className="mt-4 space-y-2.5 pb-5">
              {sitters.map((sitter, i) => (
                <Reveal
                  key={sitter.name}
                  trigger="mount"
                  x={12}
                  y={0}
                  delay={0.3 + i * 0.15}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[var(--color-surface)] p-3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/20 text-xs font-semibold text-[var(--color-accent)]">
                    {sitter.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1">
                      <p className="truncate text-xs font-medium text-white">{sitter.name}</p>
                      <ShieldCheck size={11} className="shrink-0 text-[var(--color-verified)]" />
                    </div>
                    <div className="mt-0.5 flex items-center gap-2 text-[10px] text-[var(--color-text-faint)]">
                      <span className="flex items-center gap-0.5">
                        <Star size={9} className="fill-yellow-400 text-yellow-400" />
                        {sitter.rating}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <MapPin size={9} />
                        {sitter.distance}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
