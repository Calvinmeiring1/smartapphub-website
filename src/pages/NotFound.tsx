import SEO from "../components/SEO";
import Container from "../components/Container";
import Section from "../components/Section";
import Button from "../components/Button";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Section className="flex min-h-[70vh] items-center pt-36">
      <SEO title="404 - Page Not Found | SmartAppHub" description="This page could not be found. Explore SmartAppHub app development, websites and graphic design." />
      <Container className="text-center">
        <span className="font-display text-sm font-semibold tracking-widest text-[var(--color-accent)] uppercase">
          Error 404
        </span>
        <h1 className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-lg text-[var(--color-text-muted)]">
          The page you are looking for doesn't exist. Check the URL or return home to start over.
        </p>
        <div className="mt-10">
          <Button href="/" variant="secondary" icon={<MoveLeft size={16} />}>
            Back to Home
          </Button>
        </div>
      </Container>
    </Section>
  );
}
