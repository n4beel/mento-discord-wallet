import Image from "next/image";
import styles from "./page.module.css";

export function ConnectButton() {
  return <w3m-button />
}

export default function Home() {
  return (
    <main className={styles.main}>
      <ConnectButton />
    </main>
  );
}
