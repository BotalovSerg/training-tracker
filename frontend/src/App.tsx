import style from "./App.module.css";

export const App = () => {
  return (
    <div className={style.app}>
      {/* Header */}
      <header className={style.header}>
        <div className={style.headerContainer}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              G
            </div>
            <h1
              style={{
                margin: 0,
                fontSize: "22px",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              GymTracker
            </h1>
            <nav
              style={{
                display: "flex",
                gap: "24px",
                marginLeft: "40px",
                fontSize: "15px",
              }}
            >
              <a
                href="#"
                style={{
                  color: "#4f46e5",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                Главная
              </a>
              <a
                href="#"
                style={{
                  color: "#6b7280",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                Тренировки
              </a>
              <a
                href="#"
                style={{
                  color: "#6b7280",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                Упражнения
              </a>
              <a
                href="#"
                style={{
                  color: "#6b7280",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                Статистика
              </a>
            </nav>
          </div>

          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: "#4f46e5",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontWeight: "500",
                cursor: "pointer",
                fontSize: "14px",
                transition: "background-color 0.2s",
              }}
            >
              + Создать тренировку
            </button>
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#f3f4f6",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              ИИ
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "32px 40px",
        }}
      >
        {/* Welcome Section */}
        <div
          style={{
            marginBottom: "40px",
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "32px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
              <h1
                style={{
                  margin: "0 0 12px 0",
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#111827",
                }}
              >
                Добро пожаловать, Иван! 👋
              </h1>
              <p
                style={{
                  margin: 0,
                  color: "#6b7280",
                  fontSize: "16px",
                  lineHeight: "1.6",
                  maxWidth: "600px",
                }}
              >
                Ваш прогресс за неделю и быстрый доступ к тренировкам. Сегодня
                отличный день для новой тренировки!
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <div
                style={{
                  padding: "12px 20px",
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    color: "#64748b",
                    marginBottom: "4px",
                  }}
                >
                  Сегодня
                </div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#0f172a",
                  }}
                >
                  19:00
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "32px",
            alignItems: "start",
          }}
        >
          {/* Left Column */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {/* Quick Actions */}
            <div
              style={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              <h2
                style={{
                  margin: "0 0 24px 0",
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#111827",
                }}
              >
                🚀 Быстрые действия
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "20px",
                }}
              >
                <button
                  style={{
                    padding: "24px 20px",
                    backgroundColor: "#f0f9ff",
                    border: "2px solid #bae6fd",
                    borderRadius: "12px",
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "all 0.2s",
                    minWidth: "180px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      marginBottom: "12px",
                    }}
                  >
                    ▶
                  </div>
                  <div
                    style={{
                      fontWeight: "600",
                      fontSize: "16px",
                      color: "#0369a1",
                    }}
                  >
                    Начать тренировку
                  </div>
                </button>

                <button
                  style={{
                    padding: "24px 20px",
                    backgroundColor: "#f0fdf4",
                    border: "2px solid #bbf7d0",
                    borderRadius: "12px",
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "all 0.2s",
                    minWidth: "180px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      marginBottom: "12px",
                    }}
                  >
                    📝
                  </div>
                  <div
                    style={{
                      fontWeight: "600",
                      fontSize: "16px",
                      color: "#15803d",
                    }}
                  >
                    Создать тренировку
                  </div>
                </button>

                <button
                  style={{
                    padding: "24px 20px",
                    backgroundColor: "#fffbeb",
                    border: "2px solid #fde68a",
                    borderRadius: "12px",
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "all 0.2s",
                    minWidth: "180px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      marginBottom: "12px",
                    }}
                  >
                    ➕
                  </div>
                  <div
                    style={{
                      fontWeight: "600",
                      fontSize: "16px",
                      color: "#a16207",
                    }}
                  >
                    Добавить упражнение
                  </div>
                </button>
              </div>
            </div>

            {/* Recent Workouts */}
            <div
              style={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "24px",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  📋 Последние тренировки
                </h2>
                <button
                  style={{
                    color: "#4f46e5",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  Все тренировки →
                </button>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {[
                  {
                    name: "ГИРИ блуд №1",
                    type: "⚡ Гири",
                    time: "45 мин",
                    exercises: 8,
                    level: "блуд",
                    date: "12 дек 2023",
                  },
                  {
                    name: "ОФП начальный уровень",
                    type: "🏋️ ОФП",
                    time: "30 мин",
                    exercises: 6,
                    level: "начальный",
                    date: "11 дек 2023",
                  },
                  {
                    name: "Кардио разминка продвинутая",
                    type: "🧘 Кардио",
                    time: "25 мин",
                    exercises: 5,
                    level: "продвинутый",
                    date: "10 дек 2023",
                  },
                ].map((workout, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "24px",
                      border: "1px solid #e5e7eb",
                      borderRadius: "12px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "all 0.2s",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        flex: 1,
                      }}
                    >
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          backgroundColor: "#f3f4f6",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "24px",
                          flexShrink: 0,
                        }}
                      >
                        {workout.type.charAt(0)}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            marginBottom: "8px",
                          }}
                        >
                          <div
                            style={{
                              fontWeight: "600",
                              fontSize: "18px",
                              color: "#111827",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {workout.name}
                          </div>
                          <span
                            style={{
                              padding: "4px 12px",
                              backgroundColor:
                                workout.level === "блуд"
                                  ? "#fce7f3"
                                  : workout.level === "начальный"
                                  ? "#dcfce7"
                                  : "#fef3c7",
                              color:
                                workout.level === "блуд"
                                  ? "#db2777"
                                  : workout.level === "начальный"
                                  ? "#15803d"
                                  : "#92400e",
                              borderRadius: "20px",
                              fontSize: "12px",
                              fontWeight: "500",
                              flexShrink: 0,
                            }}
                          >
                            {workout.level}
                          </span>
                        </div>
                        <div
                          style={{
                            color: "#6b7280",
                            fontSize: "14px",
                            display: "flex",
                            gap: "16px",
                            flexWrap: "wrap",
                          }}
                        >
                          <span>{workout.type}</span>
                          <span>•</span>
                          <span>🕐 {workout.time}</span>
                          <span>•</span>
                          <span>💪 {workout.exercises} упражнений</span>
                          <span>•</span>
                          <span>{workout.date}</span>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        flexShrink: 0,
                        marginLeft: "20px",
                      }}
                    >
                      <button
                        style={{
                          padding: "8px 16px",
                          border: "1px solid #d1d5db",
                          borderRadius: "8px",
                          background: "white",
                          cursor: "pointer",
                          fontWeight: "500",
                          fontSize: "14px",
                        }}
                      >
                        Просмотр
                      </button>
                      <button
                        style={{
                          padding: "8px 20px",
                          background: "#4f46e5",
                          color: "white",
                          border: "none",
                          borderRadius: "8px",
                          cursor: "pointer",
                          fontWeight: "500",
                          fontSize: "14px",
                        }}
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
          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {/* Stats */}
            <div
              style={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              <h2
                style={{
                  margin: "0 0 24px 0",
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#111827",
                }}
              >
                📊 Статистика
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      padding: "20px",
                      backgroundColor: "#f0f9ff",
                      border: "1px solid #bae6fd",
                      borderRadius: "12px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#0369a1",
                        fontWeight: "500",
                        marginBottom: "8px",
                      }}
                    >
                      Всего тренировок
                    </div>
                    <div
                      style={{
                        fontSize: "32px",
                        fontWeight: "bold",
                        color: "#0c4a6e",
                      }}
                    >
                      7
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "20px",
                      backgroundColor: "#f0fdf4",
                      border: "1px solid #bbf7d0",
                      borderRadius: "12px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#15803d",
                        fontWeight: "500",
                        marginBottom: "8px",
                      }}
                    >
                      Среднее время
                    </div>
                    <div
                      style={{
                        fontSize: "32px",
                        fontWeight: "bold",
                        color: "#14532d",
                      }}
                    >
                      45 мин
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "#fffbeb",
                    border: "1px solid #fde68a",
                    borderRadius: "12px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#92400e",
                      fontWeight: "500",
                      marginBottom: "8px",
                    }}
                  >
                    Сожжено калорий
                  </div>
                  <div
                    style={{
                      fontSize: "32px",
                      fontWeight: "bold",
                      color: "#78350f",
                    }}
                  >
                    ~3500
                  </div>
                </div>

                <div
                  style={{
                    padding: "20px",
                    backgroundColor: "#faf5ff",
                    border: "1px solid #e9d5ff",
                    borderRadius: "12px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#7c3aed",
                      fontWeight: "500",
                      marginBottom: "8px",
                    }}
                  >
                    Прогресс за неделю
                  </div>
                  <div
                    style={{
                      fontSize: "32px",
                      fontWeight: "bold",
                      color: "#5b21b6",
                    }}
                  >
                    +12%
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Workout */}
            <div
              style={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              <h2
                style={{
                  margin: "0 0 20px 0",
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#111827",
                }}
              >
                🎯 Ближайшая тренировка
              </h2>

              <div
                style={{
                  padding: "24px",
                  backgroundColor: "#faf5ff",
                  border: "2px solid #e9d5ff",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#111827",
                        marginBottom: "4px",
                      }}
                    >
                      ГИРИ средний уровень
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#6b7280",
                      }}
                    >
                      Сегодня, 19:00
                    </div>
                  </div>
                  <span
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#ede9fe",
                      color: "#5b21b6",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    Гири
                  </span>
                </div>

                <div
                  style={{
                    marginBottom: "20px",
                    padding: "16px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#6b7280",
                      marginBottom: "8px",
                    }}
                  >
                    Описание:
                  </div>
                  <div style={{ fontSize: "14px" }}>
                    Тренировка на выносливость с акцентом на технику взятия на
                    грудь
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#6b7280",
                        marginBottom: "4px",
                      }}
                    >
                      Упражнений
                    </div>
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      8
                    </div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#6b7280",
                        marginBottom: "4px",
                      }}
                    >
                      Время
                    </div>
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      40 мин
                    </div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#6b7280",
                        marginBottom: "4px",
                      }}
                    >
                      Уровень
                    </div>
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Средний
                    </div>
                  </div>
                </div>

                <button
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  Начать тренировку
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          marginTop: "64px",
          padding: "40px 0",
          backgroundColor: "#f8fafc",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 40px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "40px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                GymTracker
              </div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: "14px",
                  maxWidth: "300px",
                }}
              >
                Профессиональная платформа для планирования и отслеживания
                тренировок
              </div>
            </div>
            <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
              <div>
                <div
                  style={{
                    fontWeight: "600",
                    marginBottom: "12px",
                    fontSize: "15px",
                  }}
                >
                  Приложение
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      color: "#64748b",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    О проекте
                  </a>
                  <a
                    href="#"
                    style={{
                      color: "#64748b",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Функции
                  </a>
                  <a
                    href="#"
                    style={{
                      color: "#64748b",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Тарифы
                  </a>
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontWeight: "600",
                    marginBottom: "12px",
                    fontSize: "15px",
                  }}
                >
                  Поддержка
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      color: "#64748b",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Помощь
                  </a>
                  <a
                    href="#"
                    style={{
                      color: "#64748b",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Контакты
                  </a>
                  <a
                    href="#"
                    style={{
                      color: "#64748b",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    FAQ
                  </a>
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontWeight: "600",
                    marginBottom: "12px",
                    fontSize: "15px",
                  }}
                >
                  Сообщество
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      color: "#64748b",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Блог
                  </a>
                  <a
                    href="#"
                    style={{
                      color: "#64748b",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Форум
                  </a>
                  <a
                    href="#"
                    style={{
                      color: "#64748b",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Группы
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "40px",
              paddingTop: "24px",
              borderTop: "1px solid #e2e8f0",
              color: "#64748b",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            © 2024 GymTracker. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};
