import { VowVaultPreview, WeddaraPreview } from "./MiniAppPreviews";

/** Decorative views of the same interfaces available in the live preview. */
export default function MiniAppCover({ kind }: { kind: "gallery" | "planner" | "bundle" }) {
  const bundle = kind === "bundle";
  return (
    <div
      aria-hidden="true"
      inert
      className={`mini-app-cover relative isolate overflow-hidden ${bundle ? "h-72 sm:h-80" : "h-64"} ${kind === "gallery" ? "bg-gradient-to-br from-[#402334] via-[#241c2a] to-[#17171f]" : "bg-gradient-to-br from-[#302858] via-[#201d36] to-[#17171f]"}`}
    >
      <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full border border-white/10" />
      <div className="absolute -right-4 -top-4 h-48 w-48 rounded-full border border-white/10" />
      <div className="absolute bottom-0 left-0 h-40 w-64 rounded-full bg-[#977aff]/15 blur-3xl" />
      {bundle ? (
        <>
          <div className="absolute left-[5%] top-10 h-[420px] w-[260px] origin-top-left -rotate-9 scale-[.64] overflow-hidden rounded-[36px] border-[7px] border-[#20202a] bg-white shadow-2xl sm:left-[12%] sm:scale-[.7]">
            <VowVaultPreview />
          </div>
          <div className="absolute right-[4%] top-7 h-[420px] w-[260px] origin-top-right rotate-9 scale-[.64] overflow-hidden rounded-[36px] border-[7px] border-[#20202a] bg-white shadow-2xl sm:right-[12%] sm:scale-[.7]">
            <WeddaraPreview />
          </div>
        </>
      ) : (
        <div className="absolute left-1/2 top-7 h-[430px] w-[280px] -translate-x-1/2 overflow-hidden rounded-[32px] border-[7px] border-[#20202a] bg-white shadow-2xl">
          {kind === "gallery" ? <VowVaultPreview /> : <WeddaraPreview />}
        </div>
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#17171f] to-transparent" />
    </div>
  );
}
