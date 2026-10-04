import { useEffect, useState, useMemo, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

const sittersLinks = [
  { label: "Features", href: "#features" },
  { label: "Safety", href: "#safety" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

const commissionLinks = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#process" },
];

const graphicDesignLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Packages", href: "#packages" },
];

const companyLinks = [
  { label: "App Development", href: "/commission" },
  { label: "Websites", href: "/website-development" },
  { label: "Graphic Design", href: "/graphic-design" },
  { label: "Buy a Mini App", href: "/buy-mini-app" },
  { label: "Sitters", href: "/sitters" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isSitters = location.pathname === "/sitters";
  const isWebsite = location.pathname === "/website-development";
  const isCommission = location.pathname === "/commission";
  const isGraphicDesign = location.pathname === "/graphic-design";
  const isMiniApp = location.pathname === "/buy-mini-app";

  const links = useMemo(() => {
    if (isHome) return companyLinks;
    if (isMiniApp) return [{ label: "Home", href: "/" }, ...companyLinks.filter(link => ["/commission", "/website-development", "/graphic-design", "/blog"].includes(link.href))];
    const sectionLinks = isSitters ? sittersLinks : (isCommission || isWebsite) ? commissionLinks : isGraphicDesign ? graphicDesignLinks : null;
    if (!sectionLinks) return [{ label: "Home", href: "/" }, ...companyLinks];
    return [
      { label: "Home", href: "/" },
      { label: isGraphicDesign ? "App Development" : "Graphic Design", href: isGraphicDesign ? "/commission" : "/graphic-design" },
      { label: isWebsite ? "App Development" : "Websites", href: isWebsite ? "/commission" : "/website-development" },
      ...sectionLinks,
    ];
  }, [isHome, isSitters, isCommission, isWebsite, isGraphicDesign, isMiniApp]);

  const primaryCta = useMemo(() => {
    return isSitters
      ? { label: "Download App", href: "#download" }
      : (isCommission || isWebsite)
        ? { label: "Get in touch", href: "#contact" }
        : isGraphicDesign
          ? { label: "Get in touch", href: "#contact" }
          : { label: "Discuss your project", href: "/contact" };
  }, [isSitters, isCommission, isWebsite, isGraphicDesign]);

  const tag = useMemo(() => {
    return isSitters
      ? "Sitters"
      : (isCommission || isWebsite)
        ? (isWebsite ? "Websites" : "Apps")
        : isGraphicDesign
          ? "Design"
          : isMiniApp
            ? "Mini Apps"
            : null;
  }, [isSitters, isCommission, isWebsite, isGraphicDesign, isMiniApp]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    if (menuRef.current) menuRef.current.open = false;
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuRef.current?.open) {
        menuRef.current.open = false;
        menuRef.current.querySelector("summary")?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-[var(--color-bg)] transition-[background-color,border-color] duration-200 ${
        scrolled
          ? "xl:bg-[var(--color-bg)]/80 xl:backdrop-blur-xl border-b border-[var(--color-border)]"
          : "xl:bg-transparent border-b border-transparent"
      }`}
    >
      <Container className="flex h-18 items-center justify-between gap-4 py-4">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5 whitespace-nowrap font-display text-lg font-semibold leading-none tracking-tight"
        >
          <span className="flex h-11 w-11 items-center justify-center">
            <img
              src="/logo-icon.png"
              alt="SmartAppHub"
              className="h-10 w-10 object-contain object-center"
              style={{ transform: "translateX(-1px)" }}
            />
          </span>
          SmartAppHub
          {tag && (
            <span className="hidden rounded-full border border-[var(--color-border)] px-2.5 py-0.5 text-[11px] font-normal text-[var(--color-text-faint)] sm:inline">
              {tag}
            </span>
          )}
        </Link>

        <nav className="hidden items-center gap-4 lg:gap-6 xl:gap-8 xl:flex">
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

        <div className="hidden xl:block">
          <Button
            href={isHome ? "/contact" : primaryCta.href}
            variant="primary"
            className="!py-2.5"
          >
            {isHome ? "Discuss your project" : primaryCta.label}
          </Button>
        </div>

      </Container>

      {/* Native disclosure opens immediately, including before React loads. */}
      <details ref={menuRef} className="group xl:hidden">
        <summary
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          className="absolute right-4 top-3 flex h-12 w-12 cursor-pointer list-none touch-manipulation items-center justify-center rounded-lg text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [&::-webkit-details-marker]:hidden"
        >
          <Menu size={24} className="group-open:hidden" aria-hidden="true" />
          <X size={24} className="hidden group-open:block" aria-hidden="true" />
        </summary>
        <nav id="mobile-menu" aria-label="Mobile navigation" className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-[var(--color-border)] bg-[var(--color-bg)]">
          <Container className="flex flex-col gap-4 py-6">
            {links.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={closeMenu}
                  className="flex min-h-11 items-center text-base text-[var(--color-text-muted)] hover:text-white"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex min-h-11 items-center text-base text-[var(--color-text-muted)] hover:text-white"
                >
                  {link.label}
                </a>
              ),
            )}
            {!isHome ? (
              <Button href={primaryCta.href} onClick={closeMenu} variant="primary" className="mt-2 w-full">
                {primaryCta.label}
              </Button>
            ) : (
              <Button href="/contact" onClick={closeMenu} variant="primary" className="mt-2 w-full">
                Discuss your project
              </Button>
            )}
          </Container>
        </nav>
      </details>
    </header>
  );
}
