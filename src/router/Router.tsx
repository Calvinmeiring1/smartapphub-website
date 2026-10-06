import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import MainLayout from "../layouts/MainLayout";
import { logPageView } from "../firebase";
import Home from "../pages/Home";

const WebsiteDevelopment = lazy(() => import("../pages/WebsiteDevelopment"));
const Contact = lazy(() => import("../pages/Contact"));
const Sitters = lazy(() => import("../pages/Sitters"));
const Commission = lazy(() => import("../pages/Commission"));
const GraphicDesign = lazy(() => import("../pages/GraphicDesign"));
const BuyMiniApp = lazy(() => import("../pages/BuyMiniApp"));
const Blog = lazy(() => import("../pages/Blog"));
const BlogPost = lazy(() => import("../pages/BlogPost"));
const Profile = lazy(() => import("../pages/Profile"));
const Privacy = lazy(() => import("../pages/Privacy"));
const Terms = lazy(() => import("../pages/Terms"));
const NotFound = lazy(() => import("../pages/NotFound"));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    logPageView(pathname);
  }, [pathname]);

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    // Lazy routes may not have mounted when navigation first changes the URL.
    const scrollToTarget = () => {
      const target = document.getElementById(hash.slice(1));
      if (!target) return false;
      target.scrollIntoView({ block: "start", behavior: "instant" });
      return true;
    };
    if (scrollToTarget()) return;
    const observer = new MutationObserver(() => {
      if (scrollToTarget()) observer.disconnect();
    });
    observer.observe(document.getElementById("root") ?? document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [pathname, hash]);
  return null;
}

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <MainLayout>
        <Suspense fallback={<div role="status" className="min-h-screen pt-32 text-center text-[var(--color-text-muted)]">Loading page…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sitters" element={<Sitters />} />
            <Route path="/website-development" element={<WebsiteDevelopment />} />
            <Route path="/commission" element={<Commission />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
            <Route path="/buy-mini-app" element={<BuyMiniApp />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </>
  );
}

export default function Router() {
  return <BrowserRouter><AppRoutes /></BrowserRouter>;
}
