# Настройка домена ux-ui.dev на Vercel

## Шаг 1: Добавление домена в Vercel

1. Откройте ваш проект в Vercel
2. Перейдите в **Settings** → **Domains**
3. Нажмите **"Add"** или **"Add Domain"**
4. Введите домен: `ux-ui.dev`
5. Нажмите **"Add"**

Vercel покажет инструкции по настройке DNS.

---

## Шаг 2: Настройка DNS на Namecheap

### Вариант A: Если домен на Namecheap

1. Войдите в панель управления Namecheap
2. Перейдите в **Domain List** → выберите `ux-ui.dev`
3. Нажмите **"Manage"**
4. Перейдите в **Advanced DNS**

### Вариант B: Если домен на другом регистраторе

Найдите раздел управления DNS (обычно называется "DNS Management", "DNS Settings", или "Zone Editor")

---

## Шаг 3: Добавление DNS записей

В Vercel вы увидите DNS записи, которые нужно добавить. Обычно это:

### Для корневого домена (ux-ui.dev):

**A Record:**
- **Type:** A Record
- **Host:** @
- **Value:** IP адрес от Vercel (обычно `76.76.21.21` или другой, который покажет Vercel)
- **TTL:** Automatic (или 300)

**ИЛИ CNAME Record (рекомендуется Vercel):**
- **Type:** CNAME Record
- **Host:** @
- **Value:** `cname.vercel-dns.com`
- **TTL:** Automatic

**Примечание:** Некоторые регистраторы (включая Namecheap) не поддерживают CNAME для корневого домена (@). В этом случае используйте A Record.

### Для www поддомена (www.ux-ui.dev):

**CNAME Record:**
- **Type:** CNAME Record
- **Host:** www
- **Value:** `cname.vercel-dns.com`
- **TTL:** Automatic

---

## Шаг 4: Удаление старых записей

Удалите все существующие A, AAAA и CNAME записи для `ux-ui.dev` и `www.ux-ui.dev` (если есть).

---

## Шаг 5: Ожидание распространения DNS

- Обычно занимает **5-30 минут**
- Может занять до **24-48 часов** (редко)

Проверить можно командой:
```bash
nslookup ux-ui.dev
# или
dig ux-ui.dev
```

---

## Шаг 6: Проверка в Vercel

1. В Vercel → **Settings** → **Domains**
2. Рядом с `ux-ui.dev` должен появиться статус:
   - ⏳ **"Pending"** - DNS еще не обновился
   - ✅ **"Valid"** - домен настроен правильно
   - ❌ **"Invalid"** - проверьте DNS записи

---

## Шаг 7: SSL сертификат

Vercel автоматически выдаст SSL сертификат (Let's Encrypt) после того, как DNS записи будут настроены правильно. Это может занять несколько минут.

---

## Проверка работы

После настройки DNS и получения SSL:

1. Откройте `https://ux-ui.dev` в браузере
2. Сайт должен загрузиться
3. Проверьте, что есть зеленый замочек (HTTPS)

---

## Проблемы и решения

### Домен не работает через 30 минут:

1. Проверьте DNS записи:
   ```bash
   nslookup ux-ui.dev
   dig ux-ui.dev
   ```

2. Убедитесь, что записи точно совпадают с теми, что показал Vercel

3. Очистите DNS кеш:
   - На Windows: `ipconfig /flushdns`
   - На Mac: `sudo dscacheutil -flushcache`
   - На Linux: `sudo systemd-resolve --flush-caches`

### SSL сертификат не выдается:

- Подождите еще 10-15 минут после настройки DNS
- Убедитесь, что DNS записи правильные
- В Vercel → Domains нажмите "Refresh" или "Retry"

### Namecheap не поддерживает CNAME для @:

- Используйте A Record вместо CNAME
- IP адрес будет показан в Vercel

---

## Дополнительные настройки

### Редирект www на корневой домен (или наоборот):

В Vercel → **Settings** → **Domains** можно настроить редирект:
- `www.ux-ui.dev` → `ux-ui.dev`
- Или `ux-ui.dev` → `www.ux-ui.dev`

---

## Готово!

После настройки ваш сайт будет доступен по адресу:
- `https://ux-ui.dev`
- `https://www.ux-ui.dev` (если настроили)

