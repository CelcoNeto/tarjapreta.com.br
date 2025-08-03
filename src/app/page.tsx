import { ShowsSchedule } from "@/core/ui/show-schedule";
import styles from "./page.module.css";
import { Hero } from "@/core/ui/hero";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Hero />
        <ShowsSchedule />
      </main>
      <footer className={styles.footer}>
        Copyright &copy; - Tarja Preta CBJR cover
      </footer>
    </>
  );
}
