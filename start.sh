# Получение необходимых переменных окружения и вывод их в консоль
source ./env;

echo -e                                                                                 \
    "Полученные переменные окружения:\n"                                                \
    "\t\033[1mтокен Telegram Bot API\033[0m — \033[4m$BOT_TOKEN\033[0m,\n"              \
    "\t\033[1mпуть к базе данных SQLite на хосте\033[0m — \033[4m$DB_PATH\033[0m.\n\n";


# Сборка и запуск контейнера Docker
docker build src                                        \
    --tag bot-telegram_zaboal-employment:latest;

docker run                                              \
    --env BOT_TOKEN=$BOT_TOKEN                          \
    --volume $DB_PATH:/usr/src/app/dbase.db             \
    bot-telegram_zaboal-employment:latest;