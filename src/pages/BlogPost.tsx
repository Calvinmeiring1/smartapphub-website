import { useParams, Link } from "react-router-dom";
import Container from "../components/Container";
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
    "datePublished": post.publishedDate,
    "description": post.excerpt,
    "mainEntityOfPage": `https://smartapphub.co.za/blog/${post.slug}`
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
              <span className="flex items-center gap-2"><Calendar size={16} className="text-[var(--color-accent)]" /> <time dateTime={post.publishedDate}>{post.date}</time></span>
              <span className="flex items-center gap-2"><Clock size={16} className="text-[var(--color-accent)]" /> {post.readTime}</span>
            </div>
          </header>
        </Reveal>

        <article className="mt-16 max-w-3xl">
          <div className="text-lg text-[var(--color-text-muted)] leading-relaxed space-y-8">
            {post.content.map((section, idx) => {
              if (section.type === 'heading') {
                const level = section.level || 2;
                return (
                  <div
                    key={idx}
                    className={`font-display font-bold text-white mt-12 mb-4 ${
                      level === 1 ? 'text-3xl' : level === 2 ? 'text-2xl' : 'text-xl'
                    }`}
                    role="heading"
                    aria-level={level}
                  >
                    {section.text}
                  </div>
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
        {post.relatedLinks && (
          <nav aria-label="Related reading and services" className="mt-16 max-w-3xl border-t border-[var(--color-border)] pt-8">
            <h2 className="font-display text-xl font-semibold text-white">Explore next</h2>
            <ul className="mt-4 space-y-3">
              {post.relatedLinks.map(link => (
                <li key={link.href}><Link to={link.href} className="text-[var(--color-accent)] underline underline-offset-4 hover:text-white">{link.label}</Link></li>
              ))}
            </ul>
          </nav>
        )}
      </Container>
    </div>
  );
}
