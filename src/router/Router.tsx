import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import MainLayout from "../layouts/MainLayout";
import { logPageView } from "../firebase";
import Home from "../pages/Home";

const Sitters = lazy(() => import("../pages/Sitters"));
const Commission = lazy(() => import("../pages/Commission"));
const GraphicDesign = lazy(() => import("../pages/GraphicDesign"));
const BuyMiniApp = lazy(() => import("../pages/BuyMiniApp"));
const Profile = lazy(() => import("../pages/Profile"));
const Privacy = lazy(() => import("../pages/Privacy"));
const Terms = lazy(() => import("../pages/Terms"));
const NotFound = lazy(() => import("../pages/NotFound"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    logPageView(pathname);
  }, [pathname]);
  return null;
}

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sitters" element={<Sitters />} />
            <Route path="/commission" element={<Commission />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
            <Route path="/buy-mini-app" element={<BuyMiniApp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}
