const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(process.env.DB_PATH, sqlite3.OPEN_READWRITE);

const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);


bot.command("start", (ctx) => {      // Команда инициации диалога, инструктирование первых шагов
    ctx.reply("Список команд доступен в сплывающем меню от знака «/» в поле ввода сообщения. Если Вы ещё не зарегистрированы в системе, сделайте это в первую очередь по команде /register.")
});

bot.launch();


// Нормальная остановка работы проекта
process.once('SIGINT', () => {
    bot.stop('SIGINT');
});
process.once('SIGTERM', () => {
    bot.stop('SIGTERM');
});