import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Section from "../components/Section";

export default function Profile() {
  const { id } = useParams();

  useEffect(() => {
    document.title = id ? `Profile ${id} | SmartAppHub` : "Profile | SmartAppHub";
  }, [id]);

  return (
    <Section className="pt-36">
      <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">Profile</h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
          {id
            ? `This is the placeholder profile page for ${id}.`
            : "This is a placeholder profile page. A deep link will open here when a profile URL is valid."}
        </p>
      </Container>
    </Section>
  );
}
