const API_KEY = 'b38c89fe' 

export const getMovie = async (title) => {
  try{
    const fetchResponse = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(title)}`)
    const response = await fetchResponse.json()
    if (response.Response === 'False'){
    throw new Error(response.Error)
    }
    return response
  }
  catch(error){
    throw new Error(`movie response was not ok ${error.message}`)
  }
}

export const searchMovies = async (query) => {
  try{
    const fetchResponse = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`)
    const response = await fetchResponse.json()
    if(response.Response === 'False'){
      throw new Error (response.Error)
    } 
    return response.Search ? response.Search.slice(0, 5) : [];

  } catch (error){
    throw new Error (`movie search response was not ok: ${error.message}`)
  }
}


// import express from 'express';
// import mysql from 'mysql2';

// const app = express();
// const PORT = 5000;

// // Настройка подключения к MySQL
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root', // ваш пользователь MySQL
//   password: 'root', // ваш пароль MySQL
//   database: 'movie_catalog', // название базы данных
// });

// // Подключение к базе данных
// db.connect((err) => {
//   if (err) {
//     console.error('Ошибка подключения к базе данных:', err);
//   } else {
//     console.log('Подключение к базе данных успешно!');
//   }
// });

// // Эндпоинт для поиска фильмов по части названия
// app.get('/movies/search', (req, res) => {
//   const query = req.query.q; // поисковый запрос
//   if (!query) {
//     return res.status(400).json({ error: 'Отсутствует поисковый запрос' });
//   }
//   const sql = `SELECT * FROM movies WHERE LOWER(title) LIKE LOWER(?) LIMIT 20`;

//   db.query(sql, [`%${query}%`], (err, results) => {
//     if (err) {
//       res.status(500).json({ error: 'Ошибка выполнения запроса' });
//     } else {
//       res.json(results);
//     }
//   });
// });

// // Эндпоинт для получения информации о фильме по названию
// app.get('/movies/:title', (req, res) => {
//   const title = req.params.title;

//   const sql = `SELECT * FROM movies WHERE LOWER(title) = LOWER(?)`;
//   db.query(sql, [title], (err, results) => {
//     if (err) {
//       res.status(500).json({ error: 'Ошибка выполнения запроса' });
//     } else if (results.length === 0) {
//       res.status(404).json({ error: 'Фильм не найден' });
//     } else {
//       res.json(results[0]);
//     }
//   });
// });

// // Запуск сервера
// app.listen(PORT, () => {
//   console.log(`Сервер запущен на порту ${PORT}`);
// });


// проверка работы бд / вывод данных

// app.get('/test-movies', (req, res) => {
//   const sql = 'SELECT * FROM movies LIMIT 3';
//   db.query(sql, (err, results) => {
//     if (err) {
//       res.status(500).json({ error: 'Ошибка выполнения запроса' });
//     } else {
//       res.json(results);
//     }
//   });
// })