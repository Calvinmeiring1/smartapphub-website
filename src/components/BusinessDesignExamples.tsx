export default function BusinessDesignExamples() {
  return (
    <div className="mt-10">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h3 className="font-display text-xl font-semibold text-white">Two directions for your business</h3>
        <p className="text-xs text-[var(--color-text-muted)]">Layout concepts · Illustrative examples, not client projects</p>
      </div>
      <div className="mt-5 grid gap-6 md:grid-cols-2">
        <article className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="relative flex min-h-72 flex-col justify-between overflow-hidden bg-[#172a35] p-8 sm:p-10" aria-label="Social graphic concept with bold typography and an orange circle">
            <div aria-hidden="true" className="absolute -right-14 top-12 h-56 w-56 rounded-full bg-[#e6a06d]" />
            <p className="relative text-xs font-semibold uppercase tracking-[.2em] text-[#c2d8dd]">Your brand / Social</p>
            <p className="relative mt-12 max-w-52 font-display text-4xl font-semibold leading-none tracking-tight text-white">Make your<br />next move.</p>
            <div className="relative mt-8 flex items-center justify-between border-t border-white/20 pt-4 text-xs text-[#c2d8dd]"><span>A clear message. A confident look.</span><span aria-hidden="true">↗</span></div>
          </div>
          <div className="p-6"><h4 className="font-display text-lg font-semibold text-white">Social & campaign graphics</h4><p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">A consistent visual direction for announcements, offers and your social channels.</p></div>
        </article>
        <article className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="flex min-h-72 items-center justify-center gap-4 bg-[#d9d8ce] p-6 sm:p-8" aria-label="Business stationery concept with a letterhead and matching business card">
            <div className="flex h-60 w-44 shrink-0 flex-col bg-[#f8f6ef] p-5 text-[#213d39] shadow-lg">
              <p className="font-display text-sm font-semibold tracking-tight">YOUR COMPANY<span className="mt-1 block text-[8px] font-normal tracking-widest">BUSINESS STATIONERY</span></p>
              <div aria-hidden="true" className="mt-9 space-y-2"><div className="h-1 w-16 bg-[#213d39]/35" />{[1,2,3,4,5].map(n=><div key={n} className="h-1 bg-[#213d39]/15" />)}</div>
              <p className="mt-auto border-t border-[#213d39]/20 pt-3 text-[7px] tracking-widest">A THOUGHTFUL FIRST IMPRESSION</p>
            </div>
            <div className="-ml-16 mt-24 flex h-24 w-40 shrink-0 flex-col justify-between bg-[#213d39] p-4 text-[#f8f6ef] shadow-xl"><span className="font-display text-xs font-semibold">YOUR COMPANY</span><span className="text-[8px] tracking-wide">Your name<br />Your role</span></div>
          </div>
          <div className="p-6"><h4 className="font-display text-lg font-semibold text-white">Business stationery</h4><p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">Coordinated business cards and letterheads, with digital files prepared for your printer.</p></div>
        </article>
      </div>
    </div>
  );
}
