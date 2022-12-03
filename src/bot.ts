import { Bot } from "grammy";
const bot = new Bot(`${process.env.BOT_TOKEN}`);


const sqlite3 = require("sqlite3");
const db = new sqlite3.Database(process.env.DB_PATH)

function newPerson(values: string){
    console.log("В таблицу people вносятся данные: " + `${values}`);
    db.run(`INSERT INTO people(per_name, per_email) VALUES (${values});`);
}



bot.command("start",    (ctx) => {
    ctx.reply(
        "Вы можете ознакомиться с тем как использовать данного бота по команде `/help`",
        { parse_mode: "MarkdownV2" }
    );
});

bot.command("help",     (ctx) => {
    ctx.reply(
        "Список команд доступен в сплывающем меню от знака «/» в поле ввода сообщения\\. Но если Вы ещё не зарегистрированы в системе, сделайте это в первую очередь по команде: `/register \"[полное имя]\", \"[электропочта]\"`",
        { parse_mode: "MarkdownV2" },
    );
});

bot.command("register", (ctx) => {
    if (ctx.match != '') {
        newPerson(`${ctx.match}`);
    } else {
        ctx.reply(
            "Данная команда требует аргументы, введённые в формате `\"[полное имя]\", \"[электропочта]\"`\\. Например: `/register \"Зажигин Богдан Алексеевич\", \"za.boal@vk.com\"`",
            { parse_mode: "MarkdownV2" }
        );
    }
});


bot.start();