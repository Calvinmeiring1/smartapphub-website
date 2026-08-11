import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import StructuredData from "../components/StructuredData";
import { logEventToFirebase } from "../firebase";

const buyMiniAppSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "SmartAppHub Mini Apps Marketplace",
  "description": "Purchase ready-made mini apps from SmartAppHub for fast deployment, secure checkout, and easy customization.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Wedding Gallery Mini App (VowVault)",
      "url": "https://smartapphub.co.za/buy-mini-app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Weddara: Your All-in-One Wedding Planner",
      "url": "https://smartapphub.co.za/buy-mini-app"
    }
  ]
};

const apps = [
  {
    name: "Wedding Gallery Mini App (VowVault)",
    price: "R 399",
    amount: 399,
    description: "Every photo. Every guest. One wedding album. Let your guests capture the moments you didn't see. Create your wedding QR code, display it at your reception, and let your guests instantly upload their photos and videos into one shared wedding gallery. No app required for guests.",
    highlight: "How it works:\n1. Create your wedding: Enter names and date.\n2. Print your QR code: Put it on your tables.\n3. Guests scan: They use their phone camera.\n4. Guests upload: Photos go to your gallery.\n5. Relive everything: Download all memories.",
    downloadUrl: "/vowvault.apk",
  },
  {
    name: "Weddara: Your All-in-One Wedding Planner",
    price: "R 999",
    amount: 999,
    description: "Every detail. Every guest. One seamless celebration. Weddara takes the stress out of planning so you can focus on the \"I do.\" Manage your guest list, track your budget in real-time, and stay on top of your timeline all in one vibrant, intuitive experience.",
    highlight: "How it works:\n1. Set the Stage: Enter your names, date, and venue in seconds.\n2. Build Your Dream: Choose your wedding style and set your target budget in your local currency.\n3. Personalize Your Toolset: Enable only the modules you need from guest RSVPs to vendor management.\n4. Stay on Track: Use the smart dashboard for priority alerts, task countdowns, and real-time budget tracking.\n5. Celebrate Stress-Free: Manage your timeline and vendors on the go, ensuring your big day runs perfectly.",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1cVDRB6aorbTKJCEVH78FSVCd7-lz_7XR",
  },
  {
    name: "Coming Soon",
    price: "TBA",
    amount: 0,
    description: "Watch this space for more mini apps coming soon! We are constantly developing new tools to make your wedding planning experience even more seamless and enjoyable.",
    highlight: "",
    isComingSoon: true,
  },
];

export default function BuyMiniApp() {
  const [searchParams] = useSearchParams();
  const successApp = searchParams.get("success");
  const [promoCodes, setPromoCodes] = useState<Record<string, string>>({});
  const [unlockedApps, setUnlockedApps] = useState<string[]>([]);

  const handlePromoChange = (appName: string, value: string) => {
    setPromoCodes((prev) => ({ ...prev, [appName]: value }));
  };

  const handleApplyPromo = (appName: string) => {
    const code = promoCodes[appName]?.toUpperCase();
    // Logic for promo codes - you can add real codes here
    if (code === "FREE" || code === "SAH100" || code === "WEDDARA") {
      setUnlockedApps((prev) => [...prev, appName]);
      logEventToFirebase("promo_code_applied", {
        app_name: appName,
        promo_code: code,
      });
    }
  };

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
    <>
      <SEO
        title="Buy a Mini App | Ready-Made Wedding & Event Apps | SmartAppHub"
        description="Browse ready-made mini apps by SmartAppHub. Fast deployment, secure checkout with PayFast, and professional tools for weddings and businesses."
        canonical="https://smartapphub.co.za/buy-mini-app"
      />
      <StructuredData data={buyMiniAppSchema} />
      <Section className="pt-36">
        <Container className="max-w-6xl">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">Buy a Mini App</h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
            Browse ready-made mini apps below. Each app is designed to launch fast, simplify operations, and help your customers or guests engage effortlessly. Once you pay, the download link for that app will be unlocked for you.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg)]/70 p-5">
            <p className="text-sm font-semibold text-[var(--color-accent)]">Launch fast</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
              Pick a ready-made mini app and get a working solution live quickly without building from scratch.
            </p>
          </div>
          <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg)]/70 p-5">
            <p className="text-sm font-semibold text-[var(--color-accent)]">Built for many use cases</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
              Use mini apps for weddings, events, delivery, sitters, bookings, and more all from one marketplace.
            </p>
          </div>
          <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg)]/70 p-5">
            <p className="text-sm font-semibold text-[var(--color-accent)]">Secure checkout</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
              Payments, downloads, and customer support are handled securely so you can focus on growing your business.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {apps.map((app) => (
            <Card key={app.name} hover className="relative flex h-full flex-col">
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

              <div className="mt-8 relative pb-16">
                {!app.isComingSoon && (
                  <div className="mb-6 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg)]/60 p-4">
                    {successApp === app.name || unlockedApps.includes(app.name) ? (
                      <>
                        <p className="text-sm font-medium text-[var(--color-accent)]">
                          {unlockedApps.includes(app.name) ? "Promo Applied!" : "Payment Confirmed!"}
                        </p>
                        <p className="mt-2 text-sm text-white">Your download is ready below.</p>
                      </>
                    ) : (
                      <>
                        <p className="text-sm font-medium text-white">Payment unlocks the download link</p>
                        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                          Download access will appear here after payment is confirmed.
                        </p>
                        <div className="mt-4 flex gap-2">
                          <input
                            type="text"
                            placeholder="Promo code"
                            value={promoCodes[app.name] || ""}
                            onChange={(e) => handlePromoChange(app.name, e.target.value)}
                            className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)]/50 px-3 py-2 text-xs text-white placeholder:text-[var(--color-text-faint)] focus:border-[var(--color-accent)] focus:outline-none"
                          />
                          <button
                            onClick={() => handleApplyPromo(app.name)}
                            className="text-xs font-semibold text-[var(--color-accent)] hover:text-white transition-colors"
                          >
                            Apply
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                )}

                <div className="flex items-end justify-between gap-3">
                  <div className="flex flex-col gap-3">
                    {!app.isComingSoon && (
                      (successApp === app.name || unlockedApps.includes(app.name)) ? (
                        <Button
                          href={app.downloadUrl || "#"}
                          variant="primary"
                          download={!!app.downloadUrl}
                          onClick={() => {
                            if (!app.downloadUrl) {
                              alert("Download file not found. Please contact support.");
                            }
                            logEventToFirebase("download_app_click", {
                              app_name: app.name,
                            });
                          }}
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
                      )
                    )}
                    <Button
                      href="mailto:smartapphubdev@gmail.com?subject=Mini%20App%20Purchase%20Request"
                      variant="secondary"
                    >
                      Ask a question
                    </Button>
                  </div>
                  <div className="flex shrink-0">
                    {(app as any).demoUrl ? (
                      <Button
                        href={(app as any).demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        variant="secondary"
                        className="flex flex-col items-center rounded-full px-4 py-2 text-xs"
                      >
                        <span>Watch</span>
                        <span className="block">Demo</span>
                      </Button>
                    ) : (
                      <div className="flex flex-col items-center rounded-full border border-[var(--color-border)] px-4 py-2 text-xs text-[var(--color-text-faint)]">
                        <span>Demo</span>
                        <span className="block italic">Coming Soon</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
    </>
  );
}
