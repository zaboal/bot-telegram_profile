## Настройки бота

Настройки бота расположены в директории [`src/bot/settings`](../src/bot/settings) для Telegram Bot API и в файле переменных окружения [`env.sh`](../env.sh) для команды `source`. Файл переменных окружения имеет жизненно необходимые значения, их обязательно требуется указать.


### [`env.sh`](../env.sh) — переменные окружения

Для запуска бота требуется три константы в формате Bash:

* `BOT_TOKEN` — токен бота, получаемый от [BotFather](https://t.me/BotFather);
* `BOT_DB_PATH` — путь к базе данных SQLite бота на хосте, с данными об идентификаторах пользователя Телеграм людей зарегистрированных в организации (схема базы данных описана [здесь](/home/zaboal/work/templates/database-schemas/sql/organizational_structure/organizational_structure.sql));
* `ORG_BD_PATH` — путь к базе данных SQLite орагнизации, с данными об подразделениях, рабочих и т.д. (схема базы данных описана [здесь](/home/zaboal/work/templates/database-schemas/sql/organizational_structure/organizational_structure.sql)).

Данные будут переданы в контейнер Docker в процессе Bash скрипта запуска проекта [`start.sh`](../start.sh). По путям к базам данных на хосте в контейнер будут примонтированы соответствующие файлы SQLite под программными названиями.


### [`src/bot/settings`](../src/bot/bot.ts) — переменные для Telegram Bot API

При запуске бот передаст Telegram Bot API файлы конфигурации в формате json из директории [`settings`](../src/bot/settings/):

* [`commands.json`](../src/bot/settings/commands.json) — список команд и их описаний бота;
* [`default_administrator_rights.json`](../src/bot/settings/default_administrator_rights.json) — предлагаемый набор прав администратора бота при добавлении в группу.

Эти настройки формируются согласно изменениям кода самого бота. Изменять их рекомендуются только разработчикам, внёсшим изменения.