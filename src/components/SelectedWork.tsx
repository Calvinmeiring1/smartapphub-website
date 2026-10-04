import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Container from "./Container";
import Section from "./Section";
import WebsiteWorkPreview from "./WebsiteWorkPreview";

export default function SelectedWork() {
  return (
    <Section id="selected-work" className="border-y border-[var(--color-border)]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">Created by our studio</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">Selected work</h2>
          </div>
          <p className="max-w-md text-[var(--color-text-muted)]">An app, a website and a stationery collection. Explore what we’ve made and the thinking behind it.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="flex h-64 justify-center gap-4 overflow-hidden bg-[#dff4f4] p-4">{[["sitters-booking.png","Owner booking setup"],["sitters-availability.png","Sitter availability calendar"]].map(([file,alt]) => <img key={file} src={"/work/"+file} alt={alt} width={1080} height={2340} loading="lazy" className="h-full min-w-0 w-auto rounded-xl border-[3px] border-[#142b30] shadow-xl" />)}</div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-widest text-[var(--color-accent)]">Our product · Mobile development</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">Sitters</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">Pet and house care, brought together through profiles, bookings, payments and messaging.</p>
              <p className="mt-2 text-xs text-[var(--color-text-muted)]">Actual Android app · Owner & sitter screens</p>
              <Link to="/commission#case-studies" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">Explore the app case study <ArrowUpRight size={16} /></Link>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <WebsiteWorkPreview />
            <div className="p-6">
              <p className="text-xs uppercase tracking-widest text-[var(--color-accent)]">Our studio · Website development</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">SmartAppHub</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">One website connecting three services, with responsive layouts and a direct route to enquiries.</p>
              <Link to="/website-development#website-example" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">Explore the website case study <ArrowUpRight size={16} /></Link>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="grid h-64 grid-cols-2 grid-rows-[minmax(0,1fr)] overflow-hidden items-center gap-3 bg-[#e8e5df] p-5"><img src="/invite.jpeg" alt="Blue floral wedding invitation designed by Dominique" loading="lazy" className="h-full w-full object-contain" /><div className="grid h-full min-h-0 grid-rows-[repeat(2,minmax(0,1fr))] gap-3"><img src="/rsvp.jpeg" alt="Coordinated RSVP stationery" loading="lazy" className="h-full min-h-0 w-full object-contain" /><img src="/chart.jpeg" alt="Wedding seating chart from the stationery collection" loading="lazy" className="h-full min-h-0 w-full object-contain" /></div></div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-widest text-[var(--color-accent)]">Stationery · Graphic design</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">Wedding collection</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">Invitations, seating plans and matching digital stationery designed by Dominique.</p>
              <Link to="/graphic-design#portfolio" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">View the design collection <ArrowUpRight size={16} /></Link>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}
