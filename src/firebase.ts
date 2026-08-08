import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDWTLqJSeMJ-1X5fX_tBvrMwJjJMyQV4",
  authDomain: "the-sitters-de4cb.firebaseapp.com",
  projectId: "the-sitters-de4cb",
  storageBucket: "the-sitters-de4cb.appspot.com",
  messagingSenderId: "852917602224",
  appId: "1:852917602224:web:b17e2976b82c2d0a9f3875",
  measurementId: "G-WJPQYWQSY0",
};

const app = initializeApp(firebaseConfig);
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
