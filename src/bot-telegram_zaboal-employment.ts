import { Bot } from "grammy";
const bot = new Bot(`${process.env.BOT_TOKEN}`);

import { Database } from "sqlite3";
const database = new Database(`${process.env.DB_PATH}`)



bot.command("start",    (ctx) => {
    ctx.reply(
        "Вы можете ознакомиться с тем как использовать данного бота по команде `/help`",
        { parse_mode: "MarkdownV2" }
    );
});

bot.command("help",     (ctx) => {
    ctx.reply(
        "Список команд доступен в сплывающем меню от знака «/» в поле ввода сообщения\\. Но если Вы ещё не зарегистрированы в системе, сделайте это в первую очередь в формате SQL по команде: `/register \"[полное имя]\", \"[электропочта]\"`",
        { parse_mode: "MarkdownV2" },
    );
});

bot.command("register", (ctx) => {
    // В ctx.match берутся аргументы команды /register и используются как данные вводимые в таблицу
    database.run(`INSERT INTO people(per_name, per_email) VALUES (${ctx.match})`, (error) => {
        if (error == null) {
            ctx.reply(`Регистрация прошла успешно`)
        } else {
            // Отправить «сухую» ошибку пользователю
            ctx.reply(
                `Регистрация не удалась, SQLite сообщает об ошибке: «\`${error}\`»\\. Вы можете запросить трактовку и рекомендации у @zaboal`,
                { parse_mode: "MarkdownV2" }
            );
        }
    });
});


bot.start();