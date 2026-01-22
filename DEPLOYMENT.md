# Инструкция по деплою портфолио

## Варианты хостинга для Next.js

### 1. Vercel (Рекомендуется) ⭐

**Почему Vercel:**
- Создан командой Next.js, идеальная интеграция
- Автоматический деплой из Git
- Бесплатный план для личных проектов
- Автоматический SSL
- Edge Network для быстрой загрузки

**Шаги:**

1. **Подготовка проекта:**
   ```bash
   cd portfolio-app
   npm run build  # Проверьте, что билд проходит успешно
   ```

2. **Создайте аккаунт на Vercel:**
   - Перейдите на https://vercel.com
   - Войдите через GitHub/GitLab/Bitbucket

3. **Деплой:**
   - Нажмите "Add New Project"
   - Подключите ваш Git репозиторий
   - Vercel автоматически определит Next.js
   - Нажмите "Deploy"

4. **Настройка переменных окружения (если нужно):**
   - В настройках проекта → Environment Variables
   - Добавьте `NEXT_PUBLIC_BASE_URL` = `https://your-domain.vercel.app`

5. **Настройка домена:**
   - В настройках проекта → Domains
   - Добавьте ваш домен (например, sergeikovtun.com)
   - Следуйте инструкциям по настройке DNS

---

### 2. Netlify

**Шаги:**

1. **Создайте `netlify.toml` в корне проекта:**
   ```toml
   [build]
     command = "cd portfolio-app && npm run build"
     publish = "portfolio-app/.next"
   
   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

2. **Деплой:**
   - Зарегистрируйтесь на https://netlify.com
   - Подключите Git репозиторий
   - Netlify автоматически определит настройки

---

### 3. Self-hosted (VPS)

**Требования:**
- Node.js 18+ 
- npm или yarn
- PM2 (для управления процессом)

**Шаги:**

1. **На сервере:**
   ```bash
   # Клонируйте репозиторий
   git clone <your-repo-url>
   cd portfolio/portfolio-app
   
   # Установите зависимости
   npm install
   
   # Соберите проект
   npm run build
   
   # Запустите с PM2
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

2. **Настройте Nginx (reverse proxy):**
   ```nginx
   server {
       listen 80;
       server_name sergeikovtun.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

3. **Настройте SSL (Let's Encrypt):**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d sergeikovtun.com
   ```

---

## Предварительная проверка перед деплоем

### 1. Проверьте билд локально:
```bash
cd portfolio-app
npm run build
npm start
# Откройте http://localhost:3000 и проверьте работу
```

### 2. Проверьте переменные окружения:
Убедитесь, что в `app/layout.tsx` правильно настроен `metadataBase`:
```typescript
metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://sergeikovtun.com")
```

### 3. Оптимизация изображений:
- Все изображения должны быть в `public/images/`
- Используйте `next/image` для оптимизации
- Проверьте размеры изображений (рекомендуется < 500KB на изображение)

### 4. Проверьте SEO:
- ✅ Sitemap (`app/sitemap.ts`)
- ✅ Robots.txt (`app/robots.ts`)
- ✅ Metadata в `app/layout.tsx`
- ✅ Favicon файлы в `public/`

---

## Рекомендуемые настройки для production

### 1. Создайте `.env.production` (не коммитьте в Git):
```env
NEXT_PUBLIC_BASE_URL=https://sergeikovtun.com
```

### 2. Обновите `next.config.ts` для production:
```typescript
const nextConfig: NextConfig = {
  // ... существующие настройки
  
  // Уберите или закомментируйте для production:
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  
  // Добавьте для оптимизации:
  compress: true,
  poweredByHeader: false,
}
```

### 3. Добавьте `.gitignore` проверку:
Убедитесь, что `.env*` файлы в `.gitignore`

---

## После деплоя

1. **Проверьте работу сайта:**
   - Откройте главную страницу
   - Проверьте навигацию
   - Проверьте кейс-стади
   - Проверьте мобильную версию

2. **Проверьте SEO:**
   - Google Search Console
   - Проверьте sitemap: `https://your-domain.com/sitemap.xml`
   - Проверьте robots.txt: `https://your-domain.com/robots.txt`

3. **Проверьте производительность:**
   - Google PageSpeed Insights
   - Lighthouse в Chrome DevTools

---

## Быстрый старт с Vercel (5 минут)

```bash
# 1. Установите Vercel CLI
npm i -g vercel

# 2. Войдите
vercel login

# 3. Деплой
cd portfolio-app
vercel

# 4. Production деплой
vercel --prod
```

---

## Проблемы и решения

### Ошибка билда:
```bash
# Очистите кеш и пересоберите
rm -rf .next
npm run build
```

### Изображения не загружаются:
- Проверьте пути в `public/images/`
- Убедитесь, что используете `/images/...` (с ведущим слэшем)

### Медленная загрузка:
- Используйте `next/image` для всех изображений
- Оптимизируйте размеры изображений
- Включите кеширование в настройках хостинга

---

## Рекомендации

**Для личного портфолио:** Vercel (бесплатно, быстро, просто)

**Для максимального контроля:** VPS + Nginx + PM2

**Для корпоративного использования:** AWS Amplify или Vercel Pro

