import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

// Lazy-loaded Firestore
export const getDb = async () => {
  const { getFirestore } = await import("firebase/firestore");
  return getFirestore(app);
};

// Lazy-loaded Functions
export async function callFunction(name: string, data?: any) {
  const { getFunctions, httpsCallable } = await import("firebase/functions");
  const functions = getFunctions(app);
  const callable = httpsCallable(functions, name);
  return callable(data);
}

// Lazy-loaded Analytics
let analyticsPromise: Promise<any> | null = null;

async function getAnalyticsInstance() {
  if (typeof window === "undefined") return null;

  if (!analyticsPromise) {
    analyticsPromise = (async () => {
      try {
        const { getAnalytics, isSupported } = await import("firebase/analytics");
        const supported = await isSupported();
        return supported ? getAnalytics(app) : null;
      } catch (e) {
        console.error("Analytics load failed", e);
        return null;
      }
    })();
  }
  return analyticsPromise;
}

export async function logPageView(path: string) {
  const analytics = await getAnalyticsInstance();
  if (!analytics) return;

  const { logEvent } = await import("firebase/analytics");
  logEvent(analytics, "page_view", {
    page_path: path,
  });
}

export async function logEventToFirebase(name: string, params?: Record<string, unknown>) {
  const analytics = await getAnalyticsInstance();
  if (!analytics) return;

  const { logEvent } = await import("firebase/analytics");
  logEvent(analytics, name, params);
}
