import Container from "./Container";
import Section from "./Section";
import Card from "./Card";
import Badge from "./Badge";
import Reveal from "./Reveal";

const team = [
  {
    photo: "/team-calvin.jpg",
    name: "Calvin Meiring",
    role: "Founder & Developer",
    bio: "Builds every SmartAppHub app end-to-end — Kotlin, Firebase, and a lot of attention to detail.",
    badge: null,
  },
  {
    photo: "/team-dominique.jpg",
    name: "Dominique Meiring",
    role: "Co-founder & Design",
    bio: "The newest addition to the studio, bringing a design eye to branding — including custom stationery, posters, and wedding stationery.",
    badge: null,
  },
];

export default function Team() {
  return (
    <Section className="border-y border-[var(--color-border)]">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Who's behind SmartAppHub
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)]">
            Two people, two crafts, one studio.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:max-w-2xl sm:mx-auto">
          {team.map((member, i) => (
            <Reveal key={member.role} margin="-60px" delay={i * 0.1}>
              <Card hover className="h-full">
                <div className="flex items-center justify-between">
                  <img
                    src={member.photo}
                    alt={member.name}
                    width={64}
                    height={64}
                    loading="lazy"
                    decoding="async"
                    className="h-16 w-16 rounded-2xl object-cover grayscale"
                  />
                  {member.badge && <Badge tone="verified">{member.badge}</Badge>}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm font-medium text-[var(--color-accent)]">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{member.bio}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
