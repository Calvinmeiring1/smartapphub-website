import { Mail, MessageCircle } from "lucide-react";

export default function ContactLinks({ design = false }: { design?: boolean }) {
  const person = design ? "Dominique" : "Calvin";
  const number = design ? "27662070280" : "27660554819";
  const email = design ? "dominiquecreation30@gmail.com" : "smartapphubdev@gmail.com";
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
      <a href={"https://wa.me/" + number} target="_blank" rel="noopener noreferrer"
        className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[var(--color-border)] px-4 text-white hover:bg-[var(--color-surface-hover)]">
        <MessageCircle size={18} /> WhatsApp {person}
      </a>
      <a href={"mailto:" + email + "?subject=" + encodeURIComponent(design ? "Design project enquiry" : "App or website project enquiry")}
        className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[var(--color-border)] px-4 text-white hover:bg-[var(--color-surface-hover)]">
        <Mail size={18} /> Email {person}
      </a>
    </div>
  );
}
