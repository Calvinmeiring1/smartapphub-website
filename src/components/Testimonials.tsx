import { Star } from "lucide-react";
import Container from "./Container";
import Section from "./Section";
import Card from "./Card";
import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Film Freak South Africa",
    role: "Professional Sitter",
    content: "Great app, now I can connect with my customers better and have my sitting gigs better organised.",
    rating: 5,
  },
  {
    name: "Jade Le Roux",
    role: "Pet Owner",
    content: "The very best app in this category by far!!!",
    rating: 5,
  },
  {
    name: "Pule Marota",
    role: "Pet Owner & Sitter",
    content: "This is the place to make money and whenever I can use it to get trusted people to come watch my place!",
    rating: 5,
  },
  {
    name: "Jack Vermeulen",
    role: "Pet Owner",
    content: "great alot of hulp great app",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Trusted by pet owners everywhere
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Join our growing community of happy owners and sitters.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 0.1}>
              <Card hover className="h-full flex flex-col">
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[var(--color-text-muted)] italic flex-grow text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[var(--color-accent-soft)] flex items-center justify-center text-[var(--color-accent)] font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="text-xs text-[var(--color-text-muted)]">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
