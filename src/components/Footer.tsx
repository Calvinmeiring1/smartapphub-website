import { Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-14">
      <Container className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <div className="flex items-center gap-2.5 font-display text-lg font-semibold">
            <img src="/logo-icon.png" alt="SmartAppHub" className="h-9 w-9" />
            SmartAppHub
          </div>
          <p className="mt-3 text-sm text-[var(--color-text-muted)]">
            Building apps that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div>
            <h4 className="font-display text-sm font-semibold text-white">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-muted)]">
              <li><Link to="/sitters" className="hover:text-white">Sitters app</Link></li>
              <li><Link to="/sitters#how-it-works" className="hover:text-white">How it works</Link></li>
              <li><Link to="/sitters#download" className="hover:text-white">Download</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-white">Services</h4>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-muted)]">
              <li><Link to="/commission" className="hover:text-white">Commission an app</Link></li>
              <li><Link to="/commission#services" className="hover:text-white">What we build</Link></li>
              <li><Link to="/commission#contact" className="hover:text-white">Get in touch</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-white">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-muted)]">
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-muted)]">
              <li>
                <a href="mailto:smartapphubdev@gmail.com" className="flex items-center gap-1.5 hover:text-white">
                  <Mail size={14} /> smartapphubdev@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/27660554819"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white"
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61582954512463"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M14.4 22v-9.2h3.1l.5-3.5h-3.6V4.7c0-1 .3-1.7 1.7-1.7h1.8V.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.7v3.5h3.1V22h3.6Z" />
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sitters.smartapphub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Container className="mt-12 flex flex-col gap-4 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-text-faint)] sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} SMARTAPPHUB (PTY) LTD. All rights reserved.</span>
        <span>South Africa</span>
      </Container>
    </footer>
  );
}
