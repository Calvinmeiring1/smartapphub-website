import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

const sittersLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Countries", href: "#countries" },
  { label: "FAQ", href: "#faq" },
];

const commissionLinks = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#contact" },
];

const companyLinks = [
  { label: "Sitters", href: "/sitters" },
  { label: "Graphic Design", href: "/graphic-design" },
  { label: "Buy a Mini App", href: "/buy-mini-app" },
  { label: "Commission an App", href: "/commission" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isSitters = location.pathname === "/sitters";
  const isCommission = location.pathname === "/commission";
  const links = isSitters ? sittersLinks : isCommission ? commissionLinks : companyLinks;
  const primaryCta = isSitters
    ? { label: "Download App", href: "#download" }
    : isCommission
      ? { label: "Get in touch", href: "#contact" }
      : { label: "Explore Sitters", href: "/sitters" };
  const tag = isSitters ? "Sitters" : isCommission ? "Commission" : null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/70 backdrop-blur-xl border-b border-[var(--color-border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container className="flex h-18 items-center justify-between py-4">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight"
        >
          <img src="/logo-icon.png" alt="SmartAppHub" className="h-9 w-9" />
          SmartAppHub
          {tag && (
            <span className="hidden rounded-full border border-[var(--color-border)] px-2.5 py-0.5 text-[11px] font-normal text-[var(--color-text-faint)] sm:inline">
              {tag}
            </span>
          )}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden md:block">
          <Button href={primaryCta.href} variant="primary" className="!py-2.5">
            {primaryCta.label}
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-xl md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {links.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-[var(--color-text-muted)] hover:text-white"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-[var(--color-text-muted)] hover:text-white"
                >
                  {link.label}
                </a>
              ),
            )}
            <Button href={primaryCta.href} variant="primary" className="mt-2 w-full">
              {primaryCta.label}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
