import mongoose from "mongoose";

// Укажите свои данные для подключения
const username = "ilyakashitsyn"; // Замените на имя пользователя из MongoDB
const password = "7M94GAIPSIOLaEds"; // Замените на ваш пароль
const clusterUrl = "cluster0.fhj1j.mongodb.net"; // Адрес вашего кластера
const dbName = "jobs-docker"; // Название вашей базы данных

// Формируем строку подключения
const uri = `mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}?retryWrites=true&w=majority`;

// Подключаемся к MongoDB
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ Успешное подключение к MongoDB:", dbName);
    mongoose.disconnect(); // Закрываем подключение
  })
  .catch((err) => {
    console.error("❌ Ошибка подключения к MongoDB:", err.message);
    process.exit(1);
  });
