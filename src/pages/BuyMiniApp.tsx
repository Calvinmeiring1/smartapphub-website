import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Section from "../components/Section";
import MiniAppCover from "../components/MiniAppCover";
import Button from "../components/Button";
import StructuredData from "../components/StructuredData";
import PhonePreview from "../components/PhonePreview";
import { VowVaultPreview, WeddaraPreview } from "../components/MiniAppPreviews";
import { logEventToFirebase, callFunction } from "../firebase";

import { ArrowRight, Camera, CalendarDays, Check, Download, Gift, PlayCircle, ShieldCheck, Sparkles } from "lucide-react";

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
    name: "Wedding Duo Bundle (Save R99!)",
    price: "R 599",
    amount: 599,
    description: "The complete digital wedding suite. Get both VowVault and Weddara at a discounted price. Manage your planning process and capture guest memories in one seamless experience.",
    highlight: "Includes:\n• VowVault (Wedding Gallery)\n• Weddara (Wedding Planner)",
    isBundle: true,
    bundleItems: ["Wedding Gallery Mini App (VowVault)", "Weddara: Your All-in-One Wedding Planner"]
  },
  {
    name: "Wedding Gallery Mini App (VowVault)",
    price: "R 199",
    amount: 199,
    description: "Every photo. Every guest. One wedding album. Let your guests capture the moments you didn't see. Create your wedding QR code, display it at your reception, and let your guests instantly upload their photos and videos into one shared wedding gallery. No app required for guests.",
    highlight: "How it works:\n1. Create your wedding: Enter names and date.\n2. Print your QR code: Put it on your tables.\n3. Guests scan: They use their phone camera.\n4. Guests upload: Photos go to your gallery.\n5. Relive everything: Download all memories.",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1cPQKzF-q2x0aMUx8QNV5mq6Xw7n8-6Nx",
  },
  {
    name: "Weddara: Your All-in-One Wedding Planner",
    price: "R 499",
    amount: 499,
    description: "Every detail. Every guest. One seamless celebration. Weddara takes the stress out of planning so you can focus on the \"I do.\" Manage your guest list, track your budget in real-time, and stay on top of your timeline all in one vibrant, intuitive experience.",
    highlight: "How it works:\n1. Set the Stage: Enter your names, date, and venue in seconds.\n2. Build Your Dream: Choose your wedding style and set your target budget in your local currency.\n3. Personalize Your Toolset: Enable only the modules you need from guest RSVPs to vendor management.\n4. Stay on Track: Use the smart dashboard for priority alerts, task countdowns, and real-time budget tracking.\n5. Celebrate Stress-Free: Manage your timeline and vendors on the go, ensuring your big day runs perfectly.",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1NZ0q3UyTLTuDQGrSJoe1v-aGqPbhMxCS",
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
  const [unlockedApps, setUnlockedApps] = useState<string[]>(() => {
    if (typeof localStorage === "undefined") return [];
    const saved = localStorage.getItem("sah_unlocked_apps");
    return saved ? JSON.parse(saved) : [];
  });
  const [activePreview, setActivePreview] = useState<string | null>(null);

  useEffect(() => {
    if (successApp) {
      const app = apps.find(a => a.name === successApp);
      let nextUnlocked = [...unlockedApps];

      if (app?.isBundle && app.bundleItems) {
        nextUnlocked = [...new Set([...nextUnlocked, ...app.bundleItems, successApp])];
      } else if (!unlockedApps.includes(successApp)) {
        nextUnlocked = [...new Set([...nextUnlocked, successApp])];
      }

      if (nextUnlocked.length !== unlockedApps.length) {
        setUnlockedApps(nextUnlocked);
        localStorage.setItem("sah_unlocked_apps", JSON.stringify(nextUnlocked));
      }
    }
  }, [successApp]);
  const [activationEmail, setActivationEmail] = useState(() => {
    if (typeof localStorage === "undefined") return "";
    return localStorage.getItem("sah_activation_email") || "";
  });
  const [isActivating, setIsActivating] = useState(false);
  const [activationStatus, setActivationStatus] = useState<"idle" | "success" | "error">("idle");

  const handleRegisterLicense = async (appName: string) => {
    if (!activationEmail) return;
    setIsActivating(true);
    setActivationStatus("idle");

    try {
      await callFunction("registerLicense", {
        email: activationEmail.toLowerCase(),
        appName: appName
      });

      localStorage.setItem("sah_activation_email", activationEmail);
      setActivationStatus("success");
      logEventToFirebase("license_registered", { app_name: appName });
    } catch (error) {
      console.error("Error registering license:", error);
      setActivationStatus("error");
    } finally {
      setIsActivating(false);
    }
  };

  const handlePromoChange = (appName: string, value: string) => {
    setPromoCodes((prev) => ({ ...prev, [appName]: value }));
  };

  const handleApplyPromo = async (appName: string) => {
    const code = promoCodes[appName]?.trim().toUpperCase();
    if (!code) return;

    // Use a SHA-256 hash to keep the master override code hidden from source code scrapers
    const encoder = new TextEncoder();
    const data = encoder.encode(code);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    // Hash for "SAH-ADMIN-UNLOCKED-2026"
    const masterHash = "796bc75a21a8166a55f23b5fd44b46c28d8e6f72739202a11a6d30ea998b2d57"; // Note: User should update this hash for 2026 if they changed the code

    let isMatch = false;
    if (hashHex === masterHash) {
      isMatch = true;
      logEventToFirebase("promo_code_applied", {
        app_name: appName,
        promo_code: "MASTER_OVERRIDE",
      });
    } else {
      // You can add other public promo codes here
      const publicCodes: Record<string, string[]> = {
        "Weddara: Your All-in-One Wedding Planner": ["WEDDARA2026"],
        "Wedding Gallery Mini App (VowVault)": ["VOWVAULT"]
      };

      if (publicCodes[appName]?.includes(code)) {
        isMatch = true;
        logEventToFirebase("promo_code_applied", {
          app_name: appName,
          promo_code: code,
        });
      }
    }

    if (isMatch) {
      let nextUnlocked = [...unlockedApps];
      const app = apps.find(a => a.name === appName);

      if (app?.isBundle && app.bundleItems) {
        nextUnlocked = [...new Set([...nextUnlocked, ...app.bundleItems, appName])];
      } else {
        nextUnlocked = [...new Set([...nextUnlocked, appName])];
      }

      setUnlockedApps(nextUnlocked);
      localStorage.setItem("sah_unlocked_apps", JSON.stringify(nextUnlocked));
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

    // Save success intent for after redirect
    localStorage.setItem("sah_unlocked_apps", JSON.stringify([...new Set([...unlockedApps, app.name])]));

    window.location.href = `https://www.payfast.co.za/eng/process?${queryString}`;
  };

  const openPreview = (name: string) => {
    setActivePreview(name);
    logEventToFirebase("mini_app_preview_click", { app_name: name });
  };

  const renderPurchase = (app: (typeof apps)[0]) => {
    const unlocked = successApp === app.name || unlockedApps.includes(app.name);
    const downloads = app.isBundle ? apps.filter(item => app.bundleItems?.includes(item.name)) : [app];
    return (
      <div className="mt-6 border-t border-white/10 pt-6">
        {unlocked ? (
          <div className="space-y-4">
            <p className="flex items-center gap-2 text-sm font-medium text-emerald-300"><Check size={16} /> Your download is ready</p>
            <div className="flex flex-col gap-2">
              {downloads.map(item => (
                <Button key={item.name} href={item.downloadUrl} download variant="primary" className="w-full" onClick={() => logEventToFirebase("download_app_click", { app_name: item.name })}>
                  <Download size={16} /> {app.isBundle ? `Download ${item.name.includes("VowVault") ? "VowVault" : "Weddara"}` : "Download APK"}
                </Button>
              ))}
            </div>
            <details className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <summary className="cursor-pointer text-sm font-medium text-white">Activate your license & update your app</summary>
              <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-muted)]">Updating? Install the new APK over your existing app to keep your data. Do not uninstall first.</p>
              <label className="mt-4 block text-xs font-medium text-white" htmlFor={`email-${app.amount}`}>Your app sign-in email</label>
              <input id={`email-${app.amount}`} type="email" placeholder="you@example.com" value={activationEmail} onChange={e => setActivationEmail(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white focus:border-[var(--color-accent)] focus:outline-none" />
              <Button onClick={() => handleRegisterLicense(app.name)} disabled={isActivating || !activationEmail} className="mt-3 w-full">{isActivating ? "Registering…" : "Register license"}</Button>
              {activationStatus === "success" && <p role="status" className="mt-3 text-xs text-emerald-300">License registered. Use this email in the app.</p>}
              {activationStatus === "error" && <p role="alert" className="mt-3 text-xs text-red-300">Could not register your license. Please try again.</p>}
            </details>
          </div>
        ) : (
          <>
            <Button className="w-full" onClick={() => {
              logEventToFirebase("pay_to_unlock_click", { app_name: app.name, price: app.price });
              handlePayFast(app);
            }}>
              {app.isBundle ? "Get the wedding bundle" : `Get ${app.name.includes("VowVault") ? "VowVault" : "Weddara"}`} <ArrowRight size={16} />
            </Button>
            <p className="mt-3 flex items-center justify-center gap-2 text-xs text-[var(--color-text-muted)]"><ShieldCheck size={13} /> Checkout with PayFast</p>
            <details className="mt-4 text-sm text-[var(--color-text-muted)]">
              <summary className="cursor-pointer transition-colors hover:text-white">Have a promo code?</summary>
              <div className="mt-3 flex gap-2">
                <input aria-label={`Promo code for ${app.name}`} type="text" placeholder="Enter your code" value={promoCodes[app.name] || ""} onChange={e => handlePromoChange(app.name, e.target.value)} className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white focus:border-[var(--color-accent)] focus:outline-none" />
                <button onClick={() => handleApplyPromo(app.name)} className="rounded-xl border border-white/10 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10">Apply</button>
              </div>
            </details>
          </>
        )}
      </div>
    );
  };

  const products = [
    { app: apps[1], title: "VowVault", category: "The wedding gallery", kind: "gallery" as const, icon: Camera, color: "text-rose-300", description: "The moments you missed, captured by the people you love.", features: ["One shared photo & video gallery", "Guests join with your wedding QR code", "No app download needed for guests"] },
    { app: apps[2], title: "Weddara", category: "The wedding planner", kind: "planner" as const, icon: CalendarDays, color: "text-violet-300", description: "A little less admin. A lot more looking forward to your day.", features: ["Guest lists, RSVPs & vendor details", "Budget tracking in your local currency", "Tasks, countdowns & wedding timeline"] },
  ];

  return (
    <>
      <SEO title="Buy a Mini App | Ready-Made Wedding & Event Apps | SmartAppHub" description="Browse ready-made mini apps by SmartAppHub. Fast deployment, secure checkout with PayFast, and professional tools for weddings and businesses." canonical="https://smartapphub.co.za/buy-mini-app" />
      <StructuredData data={buyMiniAppSchema} />
      <Section className="relative isolate overflow-hidden !pt-32 sm:!pt-36">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/10 blur-[140px]" />
        <Container className="relative max-w-6xl">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-[var(--color-accent)]"><Sparkles size={15} /> The mini app collection</p>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">Buy a <span className="text-[var(--color-accent)]">Mini App</span></h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">Thoughtful little tools for your big day. Plan the celebration, collect the memories, and make more time for the moments that matter.</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[var(--color-text-muted)] sm:text-sm">
            <span className="flex items-center gap-2"><Check size={15} className="text-[var(--color-accent)]" /> Ready-made apps</span>
            <span className="flex items-center gap-2"><PlayCircle size={15} className="text-[var(--color-accent)]" /> Try a live preview</span>
            <span className="flex items-center gap-2"><ShieldCheck size={15} className="text-[var(--color-accent)]" /> PayFast checkout</span>
          </div>

          <article className="mt-12 overflow-hidden rounded-[28px] border border-[var(--color-accent)]/40 bg-gradient-to-br from-[#181c30] via-[#15151d] to-[#131316] shadow-[0_20px_80px_-40px_rgba(91,127,255,.35)] lg:grid lg:grid-cols-[1.15fr_1fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)]/15 px-3 py-1.5 text-xs font-semibold text-[#aebeff]"><Gift size={14} /> Better together</span>
                <span className="text-xs font-medium text-emerald-300">Save R99</span>
              </div>
              <h2 className="mt-5 font-display text-3xl font-semibold text-white sm:text-4xl">The Wedding Duo</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--color-text-muted)]">From the first plan to the last dance. Get Weddara and VowVault together for a complete digital wedding toolkit.</p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/80">
                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Weddara · your planner</span>
                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">VowVault · your gallery</span>
              </div>
              <div className="mt-6 flex items-baseline gap-3"><span className="font-display text-4xl font-semibold text-white">R599</span><span className="text-sm text-[var(--color-text-muted)] line-through">R698 separately</span></div>
              <div className="max-w-md">{renderPurchase(apps[0])}</div>
            </div>
            <div className="flex flex-col justify-center border-t border-white/10 bg-black/10 lg:border-l lg:border-t-0">
              <MiniAppCover kind="bundle" />
              <div className="flex flex-wrap justify-center gap-3 p-5">
                <Button variant="secondary" className="!px-4 !py-2.5 !text-xs" onClick={() => openPreview(apps[1].name)}><PlayCircle size={15} /> Preview VowVault</Button>
                <Button variant="secondary" className="!px-4 !py-2.5 !text-xs" onClick={() => openPreview(apps[2].name)}><PlayCircle size={15} /> Preview Weddara</Button>
              </div>
            </div>
          </article>

          <div className="mb-6 mt-14 flex flex-wrap items-end justify-between gap-3">
            <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-[var(--color-text-faint)]">Choose your favourite</p><h2 className="mt-2 font-display text-2xl font-semibold text-white">Just what you need.</h2></div>
            <p className="text-sm text-[var(--color-text-muted)]">Available individually, too.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {products.map(({ app, title, category, kind, icon: Icon, color, description, features }) => (
              <article key={app.name} className="flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#141416] transition-colors hover:border-white/20">
                <MiniAppCover kind={kind} />
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div><p className={`flex items-center gap-2 text-xs font-medium ${color}`}><Icon size={15} /> {category}</p><h3 className="mt-2 font-display text-3xl font-semibold text-white">{title}</h3></div>
                    <span className="font-display text-2xl font-semibold text-white">{app.price.replace(" ", "")}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">{description}</p>
                  <ul className="mt-5 space-y-3 text-sm text-white/80">{features.map(feature => <li key={feature} className="flex items-start gap-2.5"><Check size={16} className={`mt-0.5 shrink-0 ${color}`} /><span>{feature}</span></li>)}</ul>
                  <details className="mt-5 text-sm text-[var(--color-text-muted)]"><summary className="cursor-pointer hover:text-white">How it works</summary><p className="mt-3 whitespace-pre-line text-xs leading-relaxed">{app.highlight.replace("How it works:\n", "")}</p></details>
                  <div className="mt-auto pt-5"><Button variant="secondary" className="w-full" onClick={() => openPreview(app.name)}><PlayCircle size={16} /> Explore live preview</Button>{renderPurchase(app)}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[.02] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div><p className="flex items-center gap-2 text-sm font-medium text-white"><Sparkles size={16} className="text-[var(--color-accent)]" /> More little tools are on the way.</p><p className="mt-2 text-sm text-[var(--color-text-muted)]">Need help choosing an app? Let's find the right fit.</p></div>
            <Button href="mailto:smartapphubdev@gmail.com?subject=Mini%20App%20Purchase%20Request" variant="secondary" className="shrink-0">Ask a question <ArrowRight size={15} /></Button>
          </div>
        </Container>
        <PhonePreview isOpen={!!activePreview} onClose={() => setActivePreview(null)}>
          {activePreview === apps[1].name && <VowVaultPreview />}
          {activePreview === apps[2].name && <WeddaraPreview />}
          {activePreview === apps[0].name && <VowVaultPreview />}
        </PhonePreview>
      </Section>
    </>
  );
}
