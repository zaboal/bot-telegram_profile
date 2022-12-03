## Запуск бота

Для запуска требуются 2 переменных окружения: `BOT_TOKEN`, токен бота Telegram получаемый от [BotFather](https://t.me/BotFather), и `DB_PATH`, путь к базе данных на хосте. `BOT_TOKEN` указывается в [`src/dockerfile`](../src/dockerfile) на 13-й строке после «`ENV BOT_TOKEN=`», а `DB_PATH` в [`start.sh`](../start.sh) на 3-й после «…`-v`» и до «`:`…».

Затем нужно запустить файл [`start.sh`](../start.sh) от имени администратора:
```bash
sudo bash start.sh
```