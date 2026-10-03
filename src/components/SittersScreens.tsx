import Container from "./Container";
import Section from "./Section";

const screens = [
  ["sitters-welcome.png", "Two clear starting points", "Owners find care for their pets and home; sitters join to offer their services."],
  ["sitters-booking.png", "Owners choose the care they need", "The booking journey starts with pet sitting, house sitting or boarding."],
  ["sitters-availability.png", "Sitters manage their availability", "A calendar brings available dates and booked days into one place."],
];
export default function SittersScreens() {
  return <Section id="app-screens" className="border-y border-[var(--color-border)]"><Container>
    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">Inside the Android app</p>
    <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">See both sides of Sitters</h2>
    <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">Real screens captured from Sitters, showing how owners arrange care and sitters plan their time.</p>
    <div className="mt-9 grid gap-8 sm:grid-cols-3">{screens.map(([file,title,description]) => <figure key={file}>
      <div className="flex justify-center rounded-2xl bg-[#dff4f4] p-5"><a href={"/work/"+file} target="_blank" rel="noopener noreferrer" aria-label={"View full app screenshot: "+title}><img src={"/work/"+file} alt={title} width={1080} height={2340} loading="lazy" className="mx-auto w-full max-w-[220px] rounded-2xl border-4 border-[#142b30] shadow-lg" /></a></div>
      <figcaption className="mt-5"><h3 className="text-lg font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{description}</p></figcaption>
    </figure>)}</div>
    <p className="mt-6 text-xs text-[var(--color-text-muted)]">Android screenshots from the app’s welcome screen and demo accounts. Select a screen to view it at full size.</p>
  </Container></Section>;
}
