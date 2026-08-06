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

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <h4 className="font-display text-sm font-semibold text-white">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-muted)]">
              <li><Link to="/sitters" className="hover:text-white">Sitters app</Link></li>
              <li><Link to="/sitters#how-it-works" className="hover:text-white">How it works</Link></li>
              <li><Link to="/sitters#download" className="hover:text-white">Download</Link></li>
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
                <a href="mailto:support@smartapphub.com" className="flex items-center gap-1.5 hover:text-white">
                  <Mail size={14} /> support@smartapphub.com
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1.5 hover:text-white">
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Container className="mt-12 flex flex-col gap-4 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-text-faint)] sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} SMARTAPPHUB (PTY) LTD. All rights reserved.</span>
        <span>Pretoria, South Africa</span>
      </Container>
    </footer>
  );
}
