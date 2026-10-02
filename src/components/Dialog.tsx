import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function Dialog({ children, label, onClose }: {
  children: ReactNode;
  label: string;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const closeRef = useRef(onClose);
  useEffect(() => { closeRef.current = onClose; }, [onClose]);
  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflowY;
    const previousPadding = document.body.style.paddingRight;
    const appRoot = document.getElementById("root");
    const previousInert = appRoot?.inert ?? false;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflowY = "hidden";
    if (appRoot) appRoot.inert = true;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${parseFloat(getComputedStyle(document.body).paddingRight) + scrollbarWidth}px`;
    }
    ref.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeRef.current();
      }
      if (event.key !== "Tab") return;
      const controls = Array.from(ref.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex="0"]'
      ) ?? []).filter(element => element.getClientRects().length > 0);
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflowY = previousRootOverflow;
      document.body.style.paddingRight = previousPadding;
      if (appRoot) appRoot.inert = previousInert;
      previousFocus?.focus({ preventScroll: true });
    };
  }, []);
  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 pt-20 backdrop-blur-md" onClick={onClose}>
      <div ref={ref} role="dialog" aria-modal="true" aria-label={label}
        className="flex max-h-[calc(100dvh-6rem)] w-full min-w-0 max-w-5xl flex-col items-center overflow-y-auto"
        onClick={event => event.stopPropagation()}>
        <button type="button" aria-label={`Close ${label}`} onClick={onClose}
          className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-surface)] text-white hover:bg-[var(--color-surface-hover)]">
          <X size={28} />
        </button>
        {children}
      </div>
    </div>, document.body
  );
}
