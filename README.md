# Непідкупний бухгалтер

Лендинг-проєкт на React + Vite про автоматичний розподіл роялті через смарт-контракт.

## Локальний запуск

```bash
npm install
npm run dev
```

Відкрити: `http://localhost:5173/`

## Змінні середовища

Створи `.env` (можна скопіювати з `.env.example`):

```bash
VITE_GITHUB_URL=https://github.com/<your-username>/<your-repo>
```

Це посилання використовується в футері сайту.

## Деплой на GitHub Pages

У репозиторії вже є workflow: `.github/workflows/deploy-pages.yml`.

Що треба зробити на GitHub:
1. Створити порожній репозиторій.
2. Запушити цей проєкт у гілку `main`.
3. В репозиторії відкрити `Settings -> Pages` і переконатися, що Source = `GitHub Actions`.
4. Дочекатися завершення workflow `Deploy to GitHub Pages`.

Після цього сайт буде доступний за адресою:
`https://<your-username>.github.io/<your-repo>/`
