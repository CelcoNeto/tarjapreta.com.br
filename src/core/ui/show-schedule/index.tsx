import styles from "./shows-schedule.module.css";
const SHOWS_SCHEDULES = [
  {
    date: "16/Agosto",
    location: "Calibre 12",
  },
  {
    date: "31/Agosto",
    location: "Don Beer",
  },
  {
    date: "13/Setembro",
    location: "Kintana Bar",
  },
  {
    date: "19/Setembro",
    location: "Porão Bar",
  },
];

export const ShowsSchedule = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Agenda</h2>
      <div id="schedule-container" className={styles["schedules-container"]}>
        {SHOWS_SCHEDULES.map((showSchedule) => (
          <div
            id="schedule-card"
            className={styles["schedule-card"]}
            key={showSchedule.date}
          >
            <div className={styles["schedule-info"]}>
              <span className={styles["schedule-date"]}>
                {showSchedule.date}
              </span>
              <span>{showSchedule.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
