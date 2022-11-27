import { Bot } from "grammy";
const bot = new Bot(`${process.env.BOT_TOKEN}`);


bot.command("start",    (ctx) => {
    ctx.reply("Список команд доступен в сплывающем меню от знака «/» в поле ввода сообщения. Если Вы ещё не зарегистрированы в системе, сделайте это в первую очередь по команде /register.");});

bot.command("register", (ctx) => {
    ctx.reply("Данная команда на данный момент не работает.");});


bot.start();