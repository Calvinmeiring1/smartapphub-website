import { useState } from "react";
import {
  Camera,
  Heart,
  Calendar,
  Users,
  MapPin,
  ChevronRight,
  Plus,
  RefreshCw,
  Download,
  Play,
  Settings,
  AlertCircle,
  LayoutDashboard,
  Wallet,
  ClipboardList,
  Store,
  TableProperties
} from "lucide-react";

// Colors from D:\AndroidStudioProjects projects
const ROMANTIC_PINK = "#E84D8A";
const PINK_CONTAINER = "#FCE4EC";
const BLUSH_BG = "#FFF5F7";

// --- VowVault Preview ---
export function VowVaultPreview() {
  const [photos] = useState([
    { id: 1, url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400", user: "Sarah", type: 'photo' },
    { id: 2, url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400", user: "Mike", type: 'video' },
    { id: 3, url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=400", user: "Jessica", type: 'photo' },
    { id: 4, url: "https://images.unsplash.com/photo-1465495910483-34a1d374bb3c?auto=format&fit=crop&q=80&w=400", user: "David", type: 'photo' },
  ]);

  return (
    <div className="flex h-full flex-col bg-[#FFF5F7] font-sans text-slate-900">
      {/* TopAppBar */}
      <div className="bg-[#FFF5F7] px-5 pb-4 pt-12 flex items-center justify-between">
        <div>
          <h1 className="text-base font-bold text-slate-900">The Thompson Wedding</h1>
          <p className="text-[10px] font-bold text-[#E84D8A]">Updating...</p>
        </div>
        <div className="flex gap-4 text-slate-600">
          <RefreshCw size={18} />
          <Download size={18} />
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2.5 px-5 py-2 overflow-x-auto no-scrollbar">
        <div className="rounded-xl bg-[#E84D8A] px-4 py-1.5 text-[11px] font-semibold text-white">All</div>
        <div className="rounded-xl border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-semibold text-slate-600">Photos</div>
        <div className="rounded-xl border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-semibold text-slate-600">Videos</div>
      </div>

      {/* Gallery Grid */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-2 gap-3">
          {photos.map(p => (
            <div key={p.id} className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
              <img src={p.url} alt="Wedding" className="h-full w-full object-cover" />
              {p.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-black/30 p-2 text-white backdrop-blur-sm">
                    <Play size={16} fill="currentColor" />
                  </div>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-2">
                <p className="text-[9px] font-bold text-white tracking-wider">{p.user}</p>
              </div>
            </div>
          ))}
          <div className="flex aspect-square flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white/50 text-slate-400">
            <Plus size={20} />
          </div>
        </div>
      </div>

      {/* FAB Area */}
      <div className="p-6">
        <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#E84D8A] py-4 text-sm font-bold text-white shadow-xl shadow-[#E84D8A]/20 active:scale-95 transition-transform">
          <Camera size={20} />
          Capture Memory
        </button>
      </div>
    </div>
  );
}

// --- Weddara Preview ---
export function WeddaraPreview() {
  return (
    <div className="flex h-full flex-col bg-[#FFF5F7] font-sans text-slate-900">
      {/* TopAppBar */}
      <div className="bg-white px-6 pb-6 pt-12 shadow-sm flex flex-col items-center">
        <div className="w-full flex justify-end absolute px-6 top-12">
          <Settings size={20} className="text-slate-400" />
        </div>
        <h1 className="text-4xl italic text-[#E84D8A] font-serif" style={{ fontFamily: 'serif' }}>Weddara</h1>
        <p className="text-xs font-medium text-slate-500 mt-1">Sarah & James</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        {/* Countdown Card */}
        <div className="rounded-[24px] bg-[#FCE4EC] p-6 text-[#3E0016]">
          <p className="text-[11px] font-bold uppercase tracking-wider opacity-60">Countdown</p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-5xl font-black">124</span>
            <span className="text-lg font-bold">days to go</span>
          </div>
          <div className="mt-3 inline-block rounded-full bg-[#3E0016]/5 px-3 py-1 text-[10px] font-bold">
            Saturday, October 12, 2026
          </div>
        </div>

        {/* Priority Updates (Alerts) */}
        <div className="rounded-[20px] bg-red-50 p-4 border border-red-100">
           <div className="flex items-center gap-2 mb-3">
              <AlertCircle size={16} className="text-red-500" />
              <h3 className="text-xs font-bold text-red-500 uppercase tracking-wider">Priority Updates</h3>
           </div>
           <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-medium text-slate-700">
                 <div className="flex items-center gap-3">
                    <Users size={14} className="text-red-500" />
                    <span>12 RSVPs pending</span>
                 </div>
                 <ChevronRight size={14} className="text-slate-300" />
              </div>
              <div className="flex items-center justify-between text-xs font-medium text-slate-700">
                 <div className="flex items-center gap-3">
                    <ClipboardList size={14} className="text-[#E84D8A]" />
                    <span>8 tasks left</span>
                 </div>
                 <ChevronRight size={14} className="text-slate-300" />
              </div>
           </div>
        </div>

        {/* Module Grid */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-800 ml-1">Wedding Modules</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Guests", icon: Users, color: "#E84D8A" },
              { label: "Tasks", icon: ClipboardList, color: "#F06292" },
              { label: "Budget", icon: Wallet, color: "#8C4A60" },
              { label: "Vendors", icon: Store, color: "#E91E63" },
              { label: "Timeline", icon: Calendar, color: "#9C27B0" },
              { label: "Seating", icon: TableProperties, color: "#4CAF50" },
            ].map(m => (
              <div key={m.label} className="flex flex-col items-center justify-center rounded-[20px] bg-white border border-slate-100 p-3 aspect-square shadow-sm active:scale-95 transition-transform">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center mb-2"
                  style={{ backgroundColor: `${m.color}15`, color: m.color }}
                >
                  <m.icon size={20} />
                </div>
                <span className="text-[10px] font-bold text-slate-800">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Guest Summary Card */}
        <div className="rounded-[20px] bg-white p-5 border border-slate-100 shadow-sm">
           <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-slate-900">Guest Summary</h3>
              <div className="rounded-full bg-[#FCE4EC] px-2.5 py-0.5 text-[10px] font-bold text-[#E84D8A]">142 Total</div>
           </div>
           <div className="flex items-center gap-6">
              <div className="flex-1 space-y-3">
                 <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Confirmed</p>
                    <p className="text-xl font-black">98</p>
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Pending</p>
                    <p className="text-xl font-black text-red-500">12</p>
                 </div>
              </div>
              <div className="relative h-16 w-16 flex items-center justify-center">
                 <svg className="h-full w-full -rotate-90">
                    <circle cx="32" cy="32" r="28" fill="transparent" stroke="#F1F5F9" strokeWidth="6" />
                    <circle cx="32" cy="32" r="28" fill="transparent" stroke="#E84D8A" strokeWidth="6" strokeDasharray="175" strokeDashoffset="50" strokeLinecap="round" />
                 </svg>
                 <span className="absolute text-xs font-black">69%</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
