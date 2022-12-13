# Скрипт запуска проекта
# Процедура запуска проекта подробно описана в docs/start.md.

# Получение необходимых переменных окружения и вывод их в консоль
source ./env;

echo -e                                                     \
    "Полученные переменные окружения:\n"                    \
    "\tтокен Telegram Bot API — $BOT_TOKEN,\n"              \
    "\tпуть к базе данных бота — $BOT_DB_PATH,\n"           \
    "\tпуть к базе данных организации — $ORG_DB_PATH.\n\n";


# Сборка и запуск контейнера Docker
docker build src                                        \
    --tag bot-telegram_zaboal-employment:latest;

docker run -it                                          \
    --env BOT_TOKEN=$BOT_TOKEN                          \
    --volume $BOT_DB_PATH:/usr/src/app/bot_db.sqlite    \
    --volume $ORG_DB_PATH:/usr/src/app/org_db.sqlite    \
    bot-telegram_zaboal-employment:latest;