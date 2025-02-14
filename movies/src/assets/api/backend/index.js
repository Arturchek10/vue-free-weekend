import express from "express";
import cors from "cors";
import pkg from "pg";
const { Pool } = pkg; // Деструктурируем Pool из pg

const app = express();

const pool = new Pool({
  user: "postgres", // Ваш логин для PostgreSQL
  host: "localhost", // Хост (локальный компьютер)
  database: "test", // Имя вашей базы данных
  password: "", // Пароль для пользователя
  port: 5432, // Порт PostgreSQL (по умолчанию 5432)
});

app.use(cors()); // Для разрешения запросов с других источников
app.use(express.json()); // Для работы с JSON в запросах

// Проверка соединения с базой данных
pool
  .connect()
  .then(() => console.log("Подключение к базе данных установлено"))
  .catch((err) => console.error("Ошибка подключения к базе данных:", err));


// Эндпоинт для регистрации
app.post('/register', async (req, res) => {
  const { login, password } = req.body;

  try {
      // Вставка данных в таблицу
      await pool.query(
          'INSERT INTO user_data (login, password) VALUES ($1, $2)',
          [login, password]
      );
      res.status(201).json({ message: 'Пользователь зарегистрирован' });
  } catch (error) {
      console.error('Ошибка регистрации:', error);
      res.status(500).json({ message: 'Ошибка сервера' });
  }
});


  
// Эндпоинт для авторизации
app.post("/login", async (req, res) => {
  const { login, password } = req.body;

  try {
    // Проверка существования пользователя
    const result = await pool.query(
      "SELECT * FROM user_data WHERE login = $1",
      [login]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    const user = result.rows[0];
    if (user.password !== password) {
      return res.status(401).json({ message: "Неверный пароль" });
    }

    res.status(200).json({ message: "Авторизация успешна", user });
  } catch (error) {
    console.error("Ошибка авторизации:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

// запуск сервера

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
