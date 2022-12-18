# Бот в Telegram для регистрации в организации

Бот описан в [`src/bot/bot.ts`](../src/index.ts) на TypeScript с помощью фреймворка Grammy над Telegram Bot API. Предназначен для запуска в контейнере Docker через NodeJS, файл сборки образа можно видеть под названием [`src/dockerfile`](../src/dockerfile). Главный метод запуска проекта — через файл Bash скрипта [`start.sh`](../start.sh). Процедура запуска изложена подробнее в [`docs/start.md`](start.md), вся документация в этой же директории.

Официально запускается от имени [@emp_zaboal_bot](tg://emp_zaboal_bot).
