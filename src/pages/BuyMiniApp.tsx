import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "../components/Container";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import { logEventToFirebase } from "../firebase";

const apps = [
  {
    name: "Wedding Mini App (VowVault)",
    price: "R 199",
    amount: 199,
    description: "Every photo. Every guest. One wedding album. Let your guests capture the moments you didn't see. Create your wedding QR code, display it at your reception, and let your guests instantly upload their photos and videos into one shared wedding gallery. No app required for guests.",
    highlight: "How it works:\n1. Create your wedding: Enter names and date.\n2. Print your QR code: Put it on your tables.\n3. Guests scan: They use their phone camera.\n4. Guests upload: Photos go to your gallery.\n5. Relive everything: Download all memories.",
    downloadUrl: "/vowvault.apk",
  },
  {
    name: "Delivery Mini App",
    price: "R 2,000",
    amount: 2000,
    description: "A simple app for local stores that want customers to order and track deliveries.",
    highlight: "Supports product listings, checkout, and delivery updates",
  },
  {
    name: "Event Mini App",
    price: "R 1,800",
    amount: 1800,
    description: "Great for community events, workshops, and private gatherings that need ticketing.",
    highlight: "Includes RSVP, event info, and attendee notices",
  },
];

export default function BuyMiniApp() {
  const [searchParams] = useSearchParams();
  const successApp = searchParams.get("success");

  useEffect(() => {
    document.title = "Buy a Mini App | SmartAppHub";
  }, []);

  const handlePayFast = (app: (typeof apps)[0]) => {
    const merchantId = "32256199";
    const merchantKey = "czjmwioff4vuw";

    const baseUrl = window.location.origin + window.location.pathname;
    const returnUrl = `${baseUrl}?success=${encodeURIComponent(app.name)}`;
    const cancelUrl = baseUrl;

    const fields: Record<string, string> = {
      merchant_id: merchantId,
      merchant_key: merchantKey,
      return_url: returnUrl,
      cancel_url: cancelUrl,
      notify_url: "https://payfastitn-olptt6eiea-uc.a.run.app",
      amount: app.amount.toString(),
      item_name: app.name,
      m_payment_id: `mini_${Date.now()}`,
    };

    const queryString = new URLSearchParams(fields).toString();
    window.location.href = `https://www.payfast.co.za/eng/process?${queryString}`;
  };

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
                <span className="shrink-0 rounded-full border border-[var(--color-border)] px-3 py-1 text-sm font-medium text-[var(--color-accent)]">
                  {app.price}
                </span>
              </div>

              <div className="flex flex-1 flex-col">
                <p className="mt-4 text-sm whitespace-pre-line leading-relaxed text-[var(--color-text-muted)]">
                  {app.description}
                </p>
                <p className="mt-3 text-sm whitespace-pre-line text-[var(--color-text-faint)]">
                  {app.highlight}
                </p>
              </div>

              <div className="mt-8">
                <div className="mb-6 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg)]/60 p-4">
                  {successApp === app.name ? (
                    <>
                      <p className="text-sm font-medium text-[var(--color-accent)]">Payment Confirmed!</p>
                      <p className="mt-2 text-sm text-white">Your download is ready below.</p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm font-medium text-white">Payment unlocks the download link</p>
                      <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                        Download access will appear here after payment is confirmed.
                      </p>
                    </>
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  {successApp === app.name && app.downloadUrl ? (
                    <Button
                      href={app.downloadUrl}
                      variant="primary"
                      download
                      onClick={() =>
                        logEventToFirebase("download_app_click", {
                          app_name: app.name,
                        })
                      }
                    >
                      Download APK
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        logEventToFirebase("pay_to_unlock_click", {
                          app_name: app.name,
                          price: app.price,
                        });
                        handlePayFast(app);
                      }}
                      variant="primary"
                    >
                      Pay to unlock
                    </Button>
                  )}
                  <Button
                    href="mailto:smartapphubdev@gmail.com?subject=Mini%20App%20Purchase%20Request"
                    variant="secondary"
                  >
                    Ask a question
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
