"use client"

import CompleteQuestButton from "@/components/CompleteQuestButton";
import styles from "./page.module.css";
import { useEffect } from "react";
import OneSignal from "react-onesignal";

export default function Home() {

  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window !== 'undefined') {
      OneSignal.init({
        appId: process.env.NEXT_ONESIGNAL_APP_ID || "47d72783-3c4c-4a2e-b627-36600985e646",
        safari_web_id: process.env.NEXT_ONESIGNAL_SAFARI_WEB_ID || "web.onesignal.auto.2ce6e088-bd06-4a6b-8c58-d83c247eb259",
        // You can add other initialization options here
        notifyButton: {
          enable: true,
        },
        // Uncomment the below line to run on localhost. See: https://documentation.onesignal.com/docs/local-testing
        // allowLocalhostAsSecureOrigin: true
      });
    }
  }, []);


  return (
    <main className={styles.main}>
      <w3m-button />
      <CompleteQuestButton questId="123" />
    </main>
  );
}
