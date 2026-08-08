import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported, logEvent } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

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
export const db = getFirestore(app);

let analyticsInstance: ReturnType<typeof getAnalytics> | null | undefined;

async function getAnalyticsInstance() {
  if (analyticsInstance !== undefined) {
    return analyticsInstance;
  }

  const supported = await isSupported();
  analyticsInstance = supported ? getAnalytics(app) : null;
  return analyticsInstance;
}

export async function logPageView(path: string) {
  const analytics = await getAnalyticsInstance();
  if (!analytics) return;

  logEvent(analytics, "page_view", {
    page_path: path,
  });
}

export async function logEventToFirebase(name: string, params?: Record<string, unknown>) {
  const analytics = await getAnalyticsInstance();
  if (!analytics) return;

  logEvent(analytics, name, params);
}
