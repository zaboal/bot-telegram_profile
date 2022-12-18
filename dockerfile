# Файл сборки Docker контейнера проекта

# Установка образа и рабочей директории
FROM node:latest
WORKDIR /usr/src/app


# Установка зависимостей
COPY src/package.json .
RUN npm install

# Добавление оставшихся файлов проекта
COPY src .


# Объявление переменных окружения
ARG BOT_TOKEN


# Запуск контейнера
CMD npm run start