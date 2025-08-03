import styles from "./page.module.css";
import { Hero } from "@/core/ui/hero";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1>Em breve</h1>
        <Hero />
      </main>
      <footer className={styles.footer}>
        Copyright &copy; - Tarja Preta CBJR cover
      </footer>
    </>
  );
}
