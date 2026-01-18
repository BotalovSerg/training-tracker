import styles from "./App.module.css";

export const App = () => {
  const workoutsList = [
    {
      name: "ГИРИ блуд №1",
      type: "⚡ Гири",
      time: "45 мин",
      exercises: 8,
      level: "hard",
      date: "12 дек 2023",
    },
    {
      name: "ОФП начальный уровень",
      type: "🏋️ ОФП",
      time: "30 мин",
      exercises: 6,
      level: "beginner",
      date: "11 дек 2023",
    },
    {
      name: "Кардио разминка продвинутая",
      type: "🧘 Кардио",
      time: "25 мин",
      exercises: 5,
      level: "advanced",
      date: "10 дек 2023",
    },
  ];
  return (
    <div className={styles.app}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <div className={styles.logoIcon}>G</div>
            <h1 className={styles.logoText}>GymTracker</h1>
            <nav className={styles.nav}>
              <a href="#" className={`${styles.navLink} ${styles.active}`}>
                Главная
              </a>
              <a href="#" className={styles.navLink}>
                Тренировки
              </a>
              <a href="#" className={styles.navLink}>
                Упражнения
              </a>
              <a href="#" className={styles.navLink}>
                Статистика
              </a>
            </nav>
          </div>

          <div className={styles.headerActions}>
            <button className={styles.createWorkoutBtn}>
              + Создать тренировку
            </button>
            <div className={styles.userAvatar}>ИИ</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Welcome Section */}
        <div className={styles.welcomeCard}>
          <div className={styles.welcomeHeader}>
            <div>
              <h1 className={styles.welcomeTitle}>
                Добро пожаловать, Иван! 👋
              </h1>
              <p className={styles.welcomeText}>
                Ваш прогресс за неделю и быстрый доступ к тренировкам. Сегодня
                отличный день для новой тренировки!
              </p>
            </div>
            <div>
              <div className={styles.todayBlock}>
                <div className={styles.todayLabel}>Сегодня</div>
                <div className={styles.todayTime}>19:00</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className={styles.contentGrid}>
          {/* Left Column */}
          <div className={styles.column}>
            {/* Quick Actions */}
            <div className={styles.card}>
              <h2 className={styles.sectionTitle}>🚀 Быстрые действия</h2>
              <div className={styles.quickActionsGrid}>
                <button className={`${styles.quickActionBtn} ${styles.start}`}>
                  <div className={styles.iconLarge}>▶</div>
                  Начать тренировку
                </button>

                <button className={`${styles.quickActionBtn} ${styles.create}`}>
                  <div className={styles.iconLarge}>📝</div>
                  Создать тренировку
                </button>

                <button className={`${styles.quickActionBtn} ${styles.add}`}>
                  <div className={styles.iconLarge}>➕</div>
                  Добавить упражнение
                </button>
              </div>
            </div>

            {/* Recent Workouts */}
            <div className={styles.card}>
              <div className={styles.workoutsHeader}>
                <h2 className={styles.sectionTitle}>📋 Последние тренировки</h2>
                <button className={styles.viewAllBtn}>Все тренировки →</button>
              </div>

              <div className={styles.workoutList}>
                {workoutsList.map((workout, index) => (
                  <div key={index} className={styles.workoutItem}>
                    <div>
                      <div className={styles.workoutItemTitle}>
                        <div className={styles.workoutName}>{workout.name}</div>
                        <span
                          className={`${styles.levelTag} ${
                            workout.level === "hard"
                              ? styles.hard
                              : workout.level === "beginner"
                                ? styles.beginner
                                : styles.advanced
                          }`}
                        >
                          {workout.level}
                        </span>
                      </div>
                      <div className={styles.workoutMeta}>
                        <span>{workout.type}</span>
                        <span>•</span>
                        <span>🕐 {workout.time}</span>
                        <span>•</span>
                        <span>💪 {workout.exercises} упражнений</span>
                        <span>•</span>
                        <span>{workout.date}</span>
                      </div>
                    </div>

                    <div className={styles.workoutActions}>
                      <button
                        className={`${styles.actionBtn} ${styles.secondary}`}
                      >
                        Просмотр
                      </button>
                      <button
                        className={`${styles.actionBtn} ${styles.primary}`}
                      >
                        Начать
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.column}>
            {/* Stats */}
            <div className={styles.card}>
              <h2 className={styles.sectionTitle}>📊 Статистика</h2>
              <div className={styles.rightColumnBody}>
                <div className={styles.statsGrid}>
                  <div className={`${styles.statCard} ${styles.workouts}`}>
                    <div className={`${styles.statLabel} ${styles.workouts}`}>
                      Всего тренировок
                    </div>
                    <div
                      className={`${styles.statValue} ${styles.workouts} ${styles.bold}`}
                    >
                      7
                    </div>
                  </div>

                  <div className={`${styles.statCard} ${styles.time}`}>
                    <div className={`${styles.statLabel} ${styles.time}`}>
                      Среднее время
                    </div>
                    <div
                      className={`${styles.statValue} ${styles.time} ${styles.bold}`}
                    >
                      45 мин
                    </div>
                  </div>
                </div>

                <div className={`${styles.statCard} ${styles.calories}`}>
                  <div className={`${styles.statLabel} ${styles.calories}`}>
                    Сожжено калорий
                  </div>
                  <div
                    className={`${styles.statValue} ${styles.calories} ${styles.bold}`}
                  >
                    ~3500
                  </div>
                </div>

                <div className={`${styles.statCard} ${styles.progress}`}>
                  <div className={`${styles.statLabel} ${styles.progress}`}>
                    Прогресс за неделю
                  </div>
                  <div
                    className={`${styles.statValue} ${styles.progress} ${styles.bold}`}
                  >
                    +12%
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Workout */}
            <div className={styles.card}>
              <h2 className={styles.sectionTitle}>🎯 Ближайшая тренировка</h2>
              <div className={styles.upcomingCard}>
                <div className={styles.upcomingHeader}>
                  <div>
                    <div className={styles.upcomingTitle}>
                      ГИРИ средний уровень
                    </div>
                    <div className={styles.upcomingDate}>Сегодня, 19:00</div>
                  </div>
                  <span className={styles.typeTag}>Гири</span>
                </div>
                <div className={styles.descriptionBox}>
                  <div className={styles.descriptionLabel}>Описание:</div>
                  <div>
                    Тренировка на выносливость с акцентом на технику взятия на
                    грудь
                  </div>
                </div>

                <div className={styles.metricsRow}>
                  <div className={styles.metric}>
                    <div className={styles.metricLabel}>Упражнений</div>
                    <div className={styles.metricValue}>8</div>
                  </div>
                  <div className={styles.metric}>
                    <div className={styles.metricLabel}>Время</div>
                    <div className={styles.metricValue}>40 мин</div>
                  </div>
                  <div className={styles.metric}>
                    <div className={styles.metricLabel}>Уровень</div>
                    <div className={styles.metricValue}>Средний</div>
                  </div>
                </div>

                <button className={styles.startUpcomingBtn}>
                  Начать тренировку
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <div>
              <div className={styles.footerBrand}>GymTracker</div>
              <div className={styles.footerDescription}>
                Профессиональная платформа для планирования и отслеживания
                тренировок
              </div>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.footerColumn}>
                <h3>Приложение</h3>
                <a href="#">О проекте</a>
                <a href="#">Функции</a>
                <a href="#">Тарифы</a>
              </div>
              <div className={styles.footerColumn}>
                <h3>Поддержка</h3>
                <a href="#">Помощь</a>
                <a href="#">Контакты</a>
                <a href="#">FAQ</a>
              </div>
              <div className={styles.footerColumn}>
                <h3>Сообщество</h3>
                <a href="#">Блог</a>
                <a href="#">Форум</a>
                <a href="#">Группы</a>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            © 2025 GymTracker. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};
