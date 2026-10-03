import { useState } from "react";
import { Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "./Container";
import Section from "./Section";
import Reveal from "./Reveal";
import Dialog from "./Dialog";

const categories = ["All", "Wedding", "Digital"];

const projects = [
  {
    title: "Digital Wedding Invitation",
    category: "Wedding",
    image: "/invite.jpeg",
    description: "Modern, high-resolution digital invitation designed for instant sharing."
  },
  {
    category: "Wedding",
    title: "Wedding Seating Chart",
    image: "/chart.jpeg",
    description: "Clear and elegant digital seating arrangement for modern receptions."
  },
  {
    category: "Digital",
    title: "QR Code Poster Design",
    image: "/qr code.jpeg",
    description: "Digital posters paired with VowVault for seamless photo sharing."
  },
  {
    category: "Wedding",
    title: "Digital RSVP & Save the Date",
    image: "/rsvp.jpeg",
    description: "Beautifully designed digital stationery for pre-wedding notifications."
  }
];

export default function PortfolioGallery() {
  const [filter, setFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filteredProjects.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <Section id="portfolio">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl text-shimmer">
              Wedding & digital stationery
            </h2>
            <p className="mt-4 max-w-xl text-[var(--color-text-muted)]">
              Wedding stationery and digital artwork created by our studio. Select a project to view the design.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  aria-pressed={filter === cat}
                  className={`rounded-full px-6 py-2 text-xs font-bold tracking-widest uppercase transition-all active:scale-95 ${
                    filter === cat
                      ? "bg-[var(--color-accent)] text-white shadow-[0_0_20px_rgba(91,127,255,0.3)]"
                      : "bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-hover)] hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <button
                type="button"
                aria-label={`View ${project.title}`}
                onClick={() => setSelectedIndex(i)}
                className="group relative w-full text-left aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-500 hover:border-[var(--color-accent)]/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent p-5 opacity-100 transition-all duration-300 sm:p-8">
                  <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-transform group-hover:scale-100 scale-50">
                    <Maximize2 size={20} />
                  </div>

                  <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                      {project.category}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      {selectedIndex !== null && (
        <Dialog label="portfolio viewer" onClose={() => setSelectedIndex(null)}>
          <img src={filteredProjects[selectedIndex].image} alt={filteredProjects[selectedIndex].title}
            className="max-h-[calc(100dvh-19rem)] max-w-full rounded-xl object-contain" />
          <div className="mt-4 w-full text-center">
            <h3 className="font-display text-xl font-semibold text-white">{filteredProjects[selectedIndex].title}</h3>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">{filteredProjects[selectedIndex].description}</p>
          </div>
          <div className="mt-4 flex items-center justify-center gap-6 text-white">
            <button type="button" aria-label="Previous project" onClick={handlePrev} className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-surface)]">
              <ChevronLeft size={24} />
            </button>
            <span aria-live="polite">{selectedIndex + 1} / {filteredProjects.length}</span>
            <button type="button" aria-label="Next project" onClick={handleNext} className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-surface)]">
              <ChevronRight size={24} />
            </button>
          </div>
        </Dialog>
      )}
    </Section>
  );
}
