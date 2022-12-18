# Бот в Telegram для регистрации в организации

Бот описан в [`src/bot/bot.ts`](../source/bot-telegram_register/bot.ts) на TypeScript с помощью фреймворка Grammy над Telegram Bot API. Предназначен для запуска в контейнере Docker через NodeJS, файл сборки образа можно видеть под названием [`src/dockerfile`](../source/dockerfile). Главный метод запуска проекта — через файл Bash скрипта [`start.sh`](../source/start.sh). Процедура запуска изложена подробнее в [`docs/start.md`](start.md), вся документация в этой же директории.

Официально запускается от имени [@emp_zaboal_bot](https://t.me/emp_zaboal_bot) для [«Студии Зажигина»](https://site.zaboal.ru).
