import { useState } from "react";
import Container from "./Container";
import Section from "./Section";
import Reveal from "./Reveal";

const categories = ["All", "Wedding", "Digital"];

const projects = [
  {
    title: "Digital Wedding Invitation",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=800",
    description: "Modern, high-resolution digital invitation designed for instant sharing."
  },
  {
    category: "Wedding",
    title: "Wedding Seating Chart",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
    description: "Clear and elegant digital seating arrangement for modern receptions."
  },
  {
    category: "Digital",
    title: "QR Code Poster Design",
    image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=800",
    description: "Digital posters paired with VowVault for seamless photo sharing."
  },
  {
    category: "Wedding",
    title: "Digital RSVP & Save the Date",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
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

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <Section id="portfolio">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Creative Portfolio
            </h2>
            <p className="mt-4 max-w-xl text-[var(--color-text-muted)]">
              A showcase of our recent design work, from wedding stationery to professional branding.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-full px-6 py-2 text-xs font-bold tracking-widest uppercase transition-all ${
                    filter === cat
                      ? "bg-[var(--color-accent)] text-white"
                      : "bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-hover)]"
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
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
