import express, { Application } from 'express';
import { Telegraf } from 'telegraf';
import { TELEGRAM_TOKEN, APP_URL, PORT } from '../constants'; // импортируем переменные

const app: Application = express();

// Настройка статических файлов (если они есть)
app.use(express.static('public'));
app.use(express.json());

// Главная страница
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// Создание Telegram-бота с использованием токена
const bot = new Telegraf(TELEGRAM_TOKEN);

// Команда "start" для бота
bot.command('start', (ctx) => {
  return ctx.reply('Play RumVall', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Play Game',
            web_app: { url: `${APP_URL}` },
          },
        ],
      ],
    },
  });
});

// Запуск бота
bot.launch();

export default app;
