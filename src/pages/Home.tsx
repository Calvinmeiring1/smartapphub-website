import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Container from "../components/Container";
import Section from "../components/Section";
import CompanyHero from "../components/CompanyHero";
import About from "../components/About";
import Team from "../components/Team";
import WhyUs from "../components/WhyUs";
import FeaturedAppCard from "../components/FeaturedAppCard";
import PhoneMockup from "../components/PhoneMockup";

function SittersFlagshipSection() {
  const [liveStats, setLiveStats] = useState({ users: 427, sitters: 144, countries: 5 });

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "stats", "public"), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setLiveStats({
          users: data.users || 427,
          sitters: data.sitters || 144,
          countries: data.countries || 5
        });
      }
    });
    return unsub;
  }, []);

  return (
    <Section>
      <Container>
        <h2 className="text-center font-display text-3xl font-semibold text-white sm:text-4xl">
          Our flagship app
        </h2>
        <div className="mt-12">
          <FeaturedAppCard
            eyebrow="Live now"
            name="Sitters"
            description="Trusted pet & house sitting marketplace. Find verified sitters, book securely, and keep your pets comfortable at home while you're away."
            stats={[
              { value: liveStats.users, suffix: "+", label: "Users" },
              { value: liveStats.sitters, suffix: "+", label: "Sitters" },
              { value: liveStats.countries, label: "Countries" },
            ]}
            href="/sitters"
            visual={<PhoneMockup />}
          />
        </div>
      </Container>
    </Section>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = "SmartAppHub — Building apps that solve real-world problems";
  }, []);

  return (
    <>
      <CompanyHero />
      <About />
      <Team />
      <WhyUs />
      <SittersFlagshipSection />
    </>
  );
}
