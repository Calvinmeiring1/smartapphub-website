import { useEffect } from "react";
import Container from "../components/Container";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import { logEventToFirebase } from "../firebase";

const apps = [
  {
    name: "Booking Mini App",
    price: "R 1,500",
    description: "Perfect for salons, tutors, and service businesses that need fast online bookings.",
    highlight: "Includes booking flow, reminders, and admin dashboard",
  },
  {
    name: "Delivery Mini App",
    price: "R 2,000",
    description: "A simple app for local stores that want customers to order and track deliveries.",
    highlight: "Supports product listings, checkout, and delivery updates",
  },
  {
    name: "Event Mini App",
    price: "R 1,800",
    description: "Great for community events, workshops, and private gatherings that need ticketing.",
    highlight: "Includes RSVP, event info, and attendee notices",
  },
];

export default function BuyMiniApp() {
  useEffect(() => {
    document.title = "Buy a Mini App | SmartAppHub";
  }, []);

  return (
    <Section className="pt-36">
      <Container className="max-w-6xl">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">Buy a Mini App</h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
            Browse ready-made mini apps below. Once you pay, the download link for that app will be unlocked for you.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {apps.map((app) => (
            <Card key={app.name} hover className="flex h-full flex-col">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display text-xl font-semibold text-white">{app.name}</h2>
                <span className="rounded-full border border-[var(--color-border)] px-3 py-1 text-sm font-medium text-[var(--color-accent)]">
                  {app.price}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">{app.description}</p>
              <p className="mt-3 text-sm text-[var(--color-text-faint)]">{app.highlight}</p>

              <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg)]/60 p-4">
                <p className="text-sm font-medium text-white">Payment unlocks the download link</p>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Download access will appear here after payment is confirmed.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  href="https://wa.me/27660554819"
                  variant="primary"
                  onClick={() =>
                    logEventToFirebase("pay_to_unlock_click", {
                      app_name: app.name,
                      price: app.price,
                    })
                  }
                >
                  Pay to unlock
                </Button>
                <Button href="mailto:smartapphubdev@gmail.com?subject=Mini%20App%20Purchase%20Request" variant="secondary">
                  Ask a question
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
