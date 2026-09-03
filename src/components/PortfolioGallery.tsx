import { useState, useEffect } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "./Container";
import Section from "./Section";
import Reveal from "./Reveal";

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
  },
  {
    category: "Digital",
    title: "Custom Social Media Assets",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    description: "Tailored digital content for professional online presence."
  }
];

export default function PortfolioGallery() {
  const [filter, setFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedIndex]);

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
              Creative Portfolio
            </h2>
            <p className="mt-4 max-w-xl text-[var(--color-text-muted)]">
              A showcase of our recent design work, from wedding stationery to professional branding. Click any image to view it full-screen.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
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
              <div
                onClick={() => setSelectedIndex(i)}
                className="group relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-500 hover:border-[var(--color-accent)]/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 opacity-0 transition-all duration-300 group-hover:opacity-100">
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
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-bg)]/95 backdrop-blur-xl transition-all duration-300"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-8 right-8 z-[110] p-3 text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={32} />
          </button>

          {/* Navigation */}
          <button
            className="absolute left-4 z-[110] h-14 w-14 items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/5 transition-all hidden md:flex"
            onClick={handlePrev}
          >
            <ChevronLeft size={48} />
          </button>
          <button
            className="absolute right-4 z-[110] h-14 w-14 items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/5 transition-all hidden md:flex"
            onClick={handleNext}
          >
            <ChevronRight size={48} />
          </button>

          {/* Image Content */}
          <Reveal trigger="mount" scale={0.9} y={0} className="relative max-w-[90vw] max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl border border-white/10">
            <div className="relative group" onClick={(e) => e.stopPropagation()}>
              <img
                src={filteredProjects[selectedIndex].image}
                alt={filteredProjects[selectedIndex].title}
                className="max-w-full max-h-[85vh] object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  {filteredProjects[selectedIndex].category}
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">
                  {filteredProjects[selectedIndex].title}
                </h3>
                <p className="mt-2 text-[var(--color-text-muted)]">
                  {filteredProjects[selectedIndex].description}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Counter */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-white/5 px-6 py-2 text-xs font-bold tracking-widest text-white/50 border border-white/10 backdrop-blur-md">
            {selectedIndex + 1} / {filteredProjects.length}
          </div>
        </div>
      )}
    </Section>
  );
}
