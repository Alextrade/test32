// constants.ts

import dotenv from 'dotenv';

// Загружаем переменные из .env файла
dotenv.config();

export const PORT = Number(process.env.PORT) || 3306; // Порт по умолчанию 3306
export const APP_URL = String(process.env.APP_URL) || 'http://localhost';
export const TELEGRAM_TOKEN = String(process.env.TELEGRAM_TOKEN) || ''; // Токен Telegram-бота