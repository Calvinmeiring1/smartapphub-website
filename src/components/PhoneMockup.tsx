import { Plus, PawPrint, History, CircleHelp, ShieldCheck, ChevronRight, Bell } from "lucide-react";
import Reveal from "./Reveal";

// Illustrative owner dashboard based on Sitters' OwnerHomeView and brand palette.
// All names and pet details below are demo content, not customer data.
const shortcuts = [
  { label: "Verify ID", icon: ShieldCheck, color: "#60a5fa" },
  { label: "Add Pet", icon: PawPrint, color: "#4cc9b0" },
  { label: "History", icon: History, color: "#60a5fa" },
  { label: "FAQ", icon: CircleHelp, color: "#c084fc" },
];

export default function PhoneMockup() {
  return (
    <Reveal trigger="mount" y={24} className="relative mx-auto w-[280px] sm:w-[300px]">
      <figure aria-label="Illustrative Sitters owner dashboard with demo pet data">
        <div className="relative rounded-[40px] border-4 border-[#233248] bg-black p-2 shadow-2xl">
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
          <div className="overflow-hidden rounded-[30px] bg-[#050b14] text-[#f8fafb]">
            <div className="flex items-center justify-between px-5 pb-3 pt-4 text-[10px] text-white/70" aria-hidden="true">
              <span>9:41</span><span className="h-2 w-10 rounded-full bg-white/40" />
            </div>
            <div className="flex items-center justify-between border-b border-[#233248] px-4 py-3">
              <span className="flex items-center gap-2 text-sm font-bold"><PawPrint size={18} className="text-[#20c5c9]" /> Sitters</span>
              <Bell size={16} className="text-white/60" aria-hidden="true" />
            </div>
            <div className="space-y-5 px-4 pb-6 pt-5">
              <div>
                <p className="text-lg font-bold tracking-tight">Good morning, Alex</p>
                <p className="mt-1 text-[11px] text-slate-400">Ready to find care?</p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-[#ff6b35] p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20"><Plus size={20} aria-hidden="true" /></span>
                <div className="flex-1"><p className="text-sm font-bold">Post a Job</p><p className="mt-1 text-[10px] text-white/85">Share the care you need</p></div>
                <ChevronRight size={15} className="text-white/60" aria-hidden="true" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {shortcuts.map(({ label, icon: Icon, color }) => (
                  <div key={label} className="flex flex-col items-center gap-2 rounded-xl bg-[#101827] px-1 py-3">
                    <Icon size={18} style={{ color }} aria-hidden="true" />
                    <span className="whitespace-nowrap text-[9px] font-semibold">{label}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold">Your Pets <span className="ml-1 text-xs font-normal text-slate-400">1</span></p>
                <div className="mt-3 flex items-center gap-3 rounded-2xl border border-[#233248] bg-[#101827] p-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#20c5c9]/10"><PawPrint size={23} className="text-[#20c5c9]" aria-hidden="true" /></span>
                  <div><p className="text-xs font-semibold">Luna</p><p className="mt-1 text-[10px] text-slate-400">Dog · Demo pet</p></div>
                </div>
              </div>
              <div>
                <p className="text-sm font-bold">Current Bookings <span className="ml-1 text-xs font-normal text-slate-400">0</span></p>
                <p className="mt-3 rounded-2xl border border-dashed border-[#233248] px-3 py-5 text-center text-[11px] text-slate-400">No active bookings yet.</p>
              </div>
            </div>
            <div className="mx-auto mb-2 h-1 w-24 rounded-full bg-white/40" aria-hidden="true" />
          </div>
        </div>
        <figcaption className="mt-4 text-center text-xs text-[var(--color-text-muted)]">Owner dashboard preview · Demo data</figcaption>
      </figure>
    </Reveal>
  );
}
