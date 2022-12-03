# Сборка и запуск контейнера Docker
docker build src -t bot-telegram_zaboal-employment;
docker run -v /home/zaboal/work/organizations/zazhigin-s_it-studio/databases/local_organizational-structure.db:/usr/src/app/dbase.db bot-telegram_zaboal-employment;