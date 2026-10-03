import { useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import Button from "./Button";
import Container from "./Container";
import Section from "./Section";

const film = "/media/sitters-film-v2.mp4";
const poster = "/media/sitters-film-v2-poster.webp";

export default function SittersFilm() {
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  const startFilm = () => {
    const player = video.current;
    if (!player) return;
    // Keep play() in the tap handler so iPhone Safari retains user activation.
    setStarted(true);
    setFailed(false);
    player.focus();
    void player.play().catch(() => setStarted(false));
  };

  return (
    <Section id="sitters-film" className="scroll-mt-24 border-y border-[var(--color-border)] bg-[var(--color-surface)]/40">
      <Container className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">Meet Sitters · 16-second film</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">Heading away?<br />Let care stay at home.</h2>
          <p id="sitters-film-description" className="mt-4 max-w-lg leading-relaxed text-[var(--color-text-muted)]">
            Meet Luna and her sitter, then take a look inside the real Sitters app. Find care for your pets and home while you’re away.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="#download">Get Sitters</Button>
            <Button href="#app-screens" variant="ghost" icon={<ArrowRight size={16} />}>Explore the app</Button>
          </div>
        </div>
        <figure className="min-w-0">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black shadow-xl">
              <video ref={video} src={film} controls={started} playsInline preload="none" poster={poster}
                aria-label="Sitters introduction film" aria-describedby="sitters-film-description"
                tabIndex={0} onError={() => setFailed(true)} className="h-full w-full object-contain">
                <a href={film}>Watch the Sitters film</a>
              </video>
            {!started && (
              <button type="button" onClick={startFilm}
                aria-label="Play the 16-second Sitters introduction film"
                className="group absolute inset-0 block h-full w-full cursor-pointer focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-[var(--color-accent)]">
                <img src={poster} alt="Luna the golden dog meets her sitter while her owner smiles nearby" width={1280} height={720} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#00696d] shadow-lg transition-transform group-hover:scale-110 motion-reduce:transition-none"><Play size={28} fill="currentColor" aria-hidden="true" /></span>
                </span>
                <span className="absolute bottom-4 left-5 text-sm font-semibold text-white">Watch Luna’s story <span className="ml-2 font-normal text-white/80">0:16</span></span>
              </button>
            )}
          </div>
          <figcaption className="mt-3 text-xs leading-relaxed text-[var(--color-text-faint)]">
            Meet Luna and her sitter, then explore the real Sitters app. Instrumental soundtrack; no dialogue.
          </figcaption>
          {failed && <p role="status" className="mt-3 text-sm text-[var(--color-text-muted)]">Having trouble playing? <a href={film} className="underline underline-offset-4">Open the film directly</a>.</p>}
        </figure>
      </Container>
    </Section>
  );
}
