import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import Container from "../components/Container";
import Section from "../components/Section";
import StructuredData from "../components/StructuredData";

export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(!!id);

  useEffect(() => {
    document.title = id ? `Profile | SmartAppHub` : "Profile | SmartAppHub";

    if (id) {
      setLoading(true);
      getDoc(doc(db, "users", id)).then((snap) => {
        if (snap.exists()) {
          const data = snap.data();
          setUser(data);
          document.title = `${data.name || "Sitter"} | SmartAppHub`;
        }
        setLoading(false);
      }).catch(() => setLoading(false));
    }
  }, [id]);

  const profileSchema = user
    ? {
        "@context": "https://schema.org",
        "@type": "Person",
        name: user.name || "Sitter",
        url: window.location.href,
        description: user.bio || "",
        jobTitle: user.role === "sitter" ? "Verified sitter" : "Pet owner"
      }
    : {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Profile | SmartAppHub",
        url: window.location.href,
        description: "Profile page for SmartAppHub sitters and users.",
        inLanguage: "en-US"
      };

  return (
    <>
      <StructuredData data={profileSchema} />
      <Section className="pt-36">
        <Container className="max-w-3xl">
        {loading ? (
          <div className="animate-pulse">
            <div className="h-8 w-48 rounded bg-[var(--color-surface)]" />
            <div className="mt-4 h-4 w-full rounded bg-[var(--color-surface)]" />
          </div>
        ) : user ? (
          <div>
            <div className="flex items-center gap-6">
              {user.photoUrl && (
                <img
                  src={user.photoUrl}
                  alt={user.name}
                  className="h-24 w-24 rounded-full border-2 border-[var(--color-border)] object-cover"
                />
              )}
              <div>
                <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  {user.name}
                </h1>
                <p className="text-[var(--color-text-muted)]">
                  {user.role === "sitter" ? "Verified Sitter" : "Pet Owner"} • {user.city || user.country}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)]/30 p-8">
              <h2 className="font-display text-xl font-semibold text-white">About</h2>
              <p className="mt-4 leading-relaxed text-[var(--color-text-muted)] whitespace-pre-wrap">
                {user.bio || "No bio provided."}
              </p>

              {user.role === "sitter" && (
                <div className="mt-8 flex gap-8 border-t border-[var(--color-border)] pt-8">
                  <div>
                    <p className="font-display text-xl font-semibold text-white">{user.rating?.toFixed(1) || "5.0"}</p>
                    <p className="text-xs text-[var(--color-text-faint)] uppercase tracking-wider">Rating</p>
                  </div>
                  <div>
                    <p className="font-display text-xl font-semibold text-white">{user.jobsCompleted || 0}</p>
                    <p className="text-xs text-[var(--color-text-faint)] uppercase tracking-wider">Jobs</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-[var(--color-text-faint)]">
                View full profile and book in the Sitters app.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">Profile</h1>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
              {id
                ? "We couldn't find the profile you're looking for."
                : "This is a placeholder profile page. A deep link will open here when a profile URL is valid."}
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
}
