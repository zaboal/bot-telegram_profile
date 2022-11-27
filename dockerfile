FROM node:lts-buster-slim


WORKDIR /usr/src/app
COPY src/package.json .

RUN npm install
COPY src/app.js .


# Требуемые переменные окружения
# Токен бота Telegram от бота @BotFather
ENV BOT_TOKEN=""
# Путь к базе данных внутри контейнера, монтируется из файловой системы хоста
ENV DB_PATH="./dbase.db"

CMD npm run start