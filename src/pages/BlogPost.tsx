import { useParams, Link } from "react-router-dom";
import Container from "../components/Container";
import Section from "../components/Section";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import Reveal from "../components/Reveal";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

import { blogPosts } from "../data/blogPosts";
import NotFound from "./NotFound";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return <NotFound />;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "SmartAppHub",
      "logo": {
        "@type": "ImageObject",
        "url": "https://smartapphub.co.za/logo-icon.png"
      }
    },
    "datePublished": "2026-05-15" // In a real app, parse post.date
  };

  return (
    <div className="relative pt-36 pb-24">
      <SEO
        title={`${post.title} | SmartAppHub Blog`}
        description={post.excerpt}
        canonical={`https://smartapphub.co.za/blog/${slug}`}
        ogType="article"
      />
      <StructuredData data={blogSchema} />

      <Container>
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <Reveal>
          <header className="max-w-3xl">
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              {post.title}
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[var(--color-text-muted)] border-b border-[var(--color-border)] pb-8">
              <span className="flex items-center gap-2"><User size={16} className="text-[var(--color-accent)]" /> {post.author}</span>
              <span className="flex items-center gap-2"><Calendar size={16} className="text-[var(--color-accent)]" /> {post.date}</span>
              <span className="flex items-center gap-2"><Clock size={16} className="text-[var(--color-accent)]" /> {post.readTime}</span>
            </div>
          </header>
        </Reveal>

        <article className="mt-16 max-w-3xl">
          <div className="text-lg text-[var(--color-text-muted)] leading-relaxed space-y-8">
            {post.content.map((section, idx) => {
              if (section.type === 'heading') {
                const Tag = `h${section.level || 2}` as keyof JSX.IntrinsicElements;
                return (
                  <Tag key={idx} className="font-display text-2xl font-bold text-white mt-12 mb-4">
                    {section.text}
                  </Tag>
                );
              }
              if (section.type === 'paragraph') {
                return <p key={idx}>{section.text}</p>;
              }
              if (section.type === 'list') {
                return (
                  <ul key={idx} className="list-disc pl-6 space-y-3">
                    {section.items?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>
        </article>
      </Container>
    </div>
  );
}
