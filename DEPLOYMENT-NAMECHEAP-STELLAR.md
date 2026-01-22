# Деплой на Namecheap Stellar Plus

Stellar Plus - это Shared Hosting план от Namecheap. К сожалению, Shared Hosting **не поддерживает Node.js напрямую**, но есть несколько решений:

---

## ⚠️ Важно: Ограничения Shared Hosting

- ❌ Нет доступа к Node.js runtime
- ❌ Нет SSH доступа (в базовом плане)
- ❌ Нет возможности запускать серверные приложения
- ✅ Есть cPanel для управления файлами
- ✅ Есть поддержка статических сайтов

---

## Решение 1: Статический экспорт Next.js (Рекомендуется для Stellar Plus)

Преобразуем Next.js приложение в статический сайт, который можно загрузить через cPanel.

### Шаги:

#### 1. Обновите `next.config.ts` для статического экспорта

```typescript
import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  output: 'export',  // Включает статический экспорт
  images: {
    unoptimized: true,  // Обязательно для статического экспорта
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // Удалите или закомментируйте для production:
  // outputFileTracingRoot: path.resolve(__dirname, '../../'),
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Удалите turbopack для production билда:
  // turbopack: {
  //   rules: {
  //     "*.{jsx,tsx}": {
  //       loaders: [LOADER]
  //     }
  //   }
  // }
};

export default nextConfig;
```

#### 2. Проверьте, что нет серверных функций

Убедитесь, что в коде нет:
- `getServerSideProps`
- API routes (`app/api/`)
- Server Components с серверными операциями
- Динамические роуты, требующие сервера

#### 3. Соберите статический сайт

```bash
cd portfolio-app
npm run build
```

После сборки в директории `out/` будет статический сайт.

#### 4. Загрузите файлы на Namecheap

**Через cPanel File Manager:**

1. Войдите в cPanel на Namecheap
2. Откройте **File Manager**
3. Перейдите в `public_html/` (или `www/` или `your-domain.com/`)
4. Удалите все файлы по умолчанию (index.html и т.д.)
5. Загрузите все содержимое из папки `out/`:
   - Выберите все файлы из `out/`
   - Загрузите через "Upload" в cPanel
   - Или используйте ZIP: создайте архив `out.zip`, загрузите и распакуйте в cPanel

**Через FTP:**

```bash
# На локальной машине
cd portfolio-app/out
# Используйте FTP клиент (FileZilla, Cyberduck) или:
ftp your-domain.com
# Загрузите все файлы в public_html/
```

#### 5. Настройте `.htaccess` для Next.js роутинга

Создайте файл `.htaccess` в `public_html/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Кеширование статических файлов
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Gzip сжатие
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

#### 6. Проверьте работу сайта

Откройте `https://your-domain.com` и проверьте:
- Главная страница загружается
- Навигация работает
- Кейс-стади открываются
- Изображения загружаются

---

## Решение 2: Домен на Namecheap + Хостинг на Vercel/Netlify (Лучший вариант)

Используйте Namecheap только для управления доменом, а хостинг на специализированном сервисе для Next.js.

### Преимущества:
- ✅ Полная поддержка Next.js функций
- ✅ Автоматический SSL
- ✅ CDN для быстрой загрузки
- ✅ Автоматический деплой из Git
- ✅ Бесплатный план доступен

### Шаги:

#### 1. Деплой на Vercel

```bash
# Установите Vercel CLI
npm i -g vercel

# Войдите
vercel login

# Деплой
cd portfolio-app
vercel

# Production деплой
vercel --prod
```

Или через веб-интерфейс:
1. Зайдите на https://vercel.com
2. Подключите GitHub репозиторий
3. Нажмите Deploy

#### 2. Настройка DNS на Namecheap

1. В панели Vercel → Settings → Domains → Add Domain
2. Введите ваш домен (например, `sergeikovtun.com`)
3. Vercel покажет DNS записи

4. На Namecheap:
   - Зайдите в панель управления доменом
   - Перейдите в **Advanced DNS**
   - Удалите существующие A и CNAME записи (если есть)
   - Добавьте новые записи:

   **A Record:**
   - **Type:** A Record
   - **Host:** @
   - **Value:** `76.76.21.21` (или IP, который покажет Vercel)
   - **TTL:** Automatic

   **CNAME Record:**
   - **Type:** CNAME Record
   - **Host:** www
   - **Value:** `cname.vercel-dns.com`
   - **TTL:** Automatic

5. Подождите 5-30 минут для распространения DNS
6. Vercel автоматически настроит SSL

---

## Решение 3: Обновление до VPS (Если нужен полный контроль)

Если вам нужен полный контроль и серверные функции, рассмотрите обновление до VPS плана на Namecheap.

См. инструкцию в `DEPLOYMENT-NAMECHEAP.md` (Вариант 1).

---

## Сравнение решений

| Решение | Сложность | Функции Next.js | Стоимость | Рекомендация |
|---------|-----------|-----------------|-----------|--------------|
| Статический экспорт | Средняя | Ограниченные | Включено | Если нужен только статический сайт |
| Vercel + Namecheap DNS | Простая | Полные | Бесплатно | ⭐ **Лучший вариант** |
| Обновление до VPS | Сложная | Полные | $6-10/мес | Если нужен полный контроль |

---

## Рекомендация для Stellar Plus

**Используйте Решение 2:** Домен на Namecheap + Хостинг на Vercel

Это даст вам:
- ✅ Все функции Next.js
- ✅ Автоматический деплой
- ✅ Бесплатный хостинг
- ✅ Простую настройку
- ✅ Отличную производительность

---

## Быстрый старт (Решение 2)

```bash
# 1. Деплой на Vercel
cd portfolio-app
npm i -g vercel
vercel login
vercel --prod

# 2. В панели Vercel добавьте домен
# 3. На Namecheap настройте DNS (см. выше)
# 4. Готово!
```

---

## Проблемы и решения

### Изображения не оптимизируются (статический экспорт):
- Это нормально для статического экспорта
- Используйте оптимизированные изображения заранее
- Или используйте Vercel для полной поддержки

### 404 ошибки на роутах:
- Добавьте `.htaccess` файл (см. выше)
- Убедитесь, что все файлы загружены в `public_html/`

### Медленная загрузка:
- Включите Gzip в `.htaccess`
- Используйте CDN (Cloudflare бесплатный)
- Или перейдите на Vercel (встроенный CDN)

---

## Следующие шаги

1. **Выберите решение:**
   - Статический экспорт → Обновите `next.config.ts`
   - Vercel + DNS → Деплой на Vercel

2. **Проверьте билд:**
   ```bash
   npm run build
   ```

3. **Следуйте инструкциям выбранного решения**

Нужна помощь с конкретным шагом? Скажите, какой вариант вы выбрали!

