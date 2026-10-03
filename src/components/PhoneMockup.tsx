import Reveal from "./Reveal";

export default function PhoneMockup() {
  return <Reveal trigger="mount" y={24} className="relative mx-auto w-[260px] sm:w-[280px]">
    <figure>
      <div className="overflow-hidden rounded-[32px] border-[6px] border-[#233248] bg-white shadow-2xl"><img src="/work/sitters-booking.png" alt="Real Sitters Android booking screen with pet sitting, house sitting and boarding choices" width={1080} height={2340} className="block h-auto w-full" /></div>
      <figcaption className="mt-4 text-center text-xs text-[var(--color-text-muted)]">Actual Sitters Android app · Owner booking journey</figcaption>
    </figure>
  </Reveal>;
}
