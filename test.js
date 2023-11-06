const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Создаем подключение к MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase'
});

// Подключаемся к MySQL
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});

// Создаем таблицу (пример)
const createTableQuery = `CREATE TABLE IF NOT EXISTS photos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description VARCHAR(255),
  imageUrl VARCHAR(255)
)`;

connection.query(createTableQuery, (err) => {
  if (err) throw err;
  console.log('Table created or already exists!');
});

// Остальной код Express.js добавь сам, например, обработку запросов для админ-панели.

// Запускаем сервер
app.listen(port, () => {
  console.log(Server is running on port ${port});
});