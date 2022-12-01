import { Bot } from "grammy";
const bot = new Bot(`${process.env.BOT_TOKEN}`);



bot.command("start",    (ctx) => {
    ctx.reply("Вы можете ознакомиться с тем как использовать данного бота по команде /help");
});

bot.command("help",     (ctx) => {
    ctx.reply(
        "Список команд доступен в сплывающем меню от знака «/» в поле ввода сообщения\\. Если Вы ещё не зарегистрированы в системе, сделайте это в первую очередь по команде: `/register [полное имя] <[электропочта]>`",
        { parse_mode: "MarkdownV2" },
    );
});

bot.command("register", (ctx) => {
    ctx.reply("Данная команда на данный момент не работает, никого нигде не регистрирует. Данная функция ещё в разработке");
    if (ctx.match != '') {
        ctx.reply(`Вы дали команде аргументы: ${ctx.match}`);
    }
});


bot.start();