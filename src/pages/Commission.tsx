import { useEffect } from "react";
import CommissionHero from "../components/CommissionHero";
import Services from "../components/Services";
import Process from "../components/Process";
import CommissionCTA from "../components/CommissionCTA";

export default function Commission() {
  useEffect(() => {
    document.title = "Commission an App | SmartAppHub";
  }, []);

  return (
    <>
      <CommissionHero />
      <Services />
      <Process />
      <CommissionCTA />
    </>
  );
}
