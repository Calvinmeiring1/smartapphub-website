import { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export interface Stats {
  users: number;
  sitters: number;
  countries: number;
}

export function useLiveStats(initialStats: Stats = { users: 427, sitters: 144, countries: 5 }) {
  const [liveStats, setLiveStats] = useState<Stats>(initialStats);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, "stats", "public"),
      (snap) => {
        if (snap.exists()) {
          const data = snap.data();
          setLiveStats({
            users: data.users || initialStats.users,
            sitters: data.sitters || initialStats.sitters,
            countries: data.countries || initialStats.countries,
          });
        }
        setLoading(false);
      },
      (err) => {
        console.error("Firebase stats error:", err);
        setError(err);
        setLoading(false);
      }
    );

    return () => unsub();
  }, [initialStats.users, initialStats.sitters, initialStats.countries]);

  return { liveStats, loading, error };
}
