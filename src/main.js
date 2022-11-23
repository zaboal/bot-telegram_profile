const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("start", (ctx) =>       // Команда инициации диалога, инструктирование первых шагов
    ctx.reply("Список доступных команд доступен по кнопке справа от поля ввода сообщения. Если Вы ещё не зарегистрированы в системе, сделайте это в первую очередь по команде /register.")
)

bot.command("register", (ctx) =>    // Команда регистрации в схеме базы данных организационной структуры
    ctx.reply("Это команда регистрации. Она пока не работает.")
)


bot.launch();

// Нормальная остановка работы бота
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));