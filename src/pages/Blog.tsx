import Container from "../components/Container";
import Section from "../components/Section";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

import { blogPosts } from "../data/blogPosts";

export default function Blog() {
  return (
    <div className="relative pt-36 min-h-screen">
      <SEO
        title="Blog | App Insights & Design Trends | SmartAppHub"
        description="Expert advice on mobile app development, graphic design trends, and building digital products in South Africa."
        canonical="https://smartapphub.co.za/blog"
      />

      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)]" />

      <Section>
        <Container>
          <Reveal>
            <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
              Our <span className="bg-gradient-to-r from-[var(--color-accent)] to-white bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="mt-6 text-lg text-[var(--color-text-muted)] max-w-2xl">
              Sharing our expertise on building scalable digital products and designing for the modern web.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.1}>
                <Link to={`/blog/${post.slug}`}>
                  <Card hover className="h-full flex flex-col p-8">
                    <div className="flex items-center gap-4 text-xs text-[var(--color-accent)] font-bold tracking-widest uppercase">
                      <span>{post.category}</span>
                    </div>
                    <h2 className="mt-4 font-display text-2xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-4 text-[var(--color-text-muted)] line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-8 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-[var(--color-text-faint)]">
                        <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                        <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
                      </div>
                      <span className="text-[var(--color-accent)]">
                        <ArrowRight size={20} />
                      </span>
                    </div>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
