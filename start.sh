# Сборка и запуск контейнера Docker
docker build src -t zaboal/bot-telegram_employment;
docker container run -v /home/zaboal/work/organizations/zazhigin-s_it-studio/databases/local_organizational-structure.db:/usr/src/app/dbase.db zaboal/bot-telegram_employment