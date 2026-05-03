# Lagoon - Децентрализованное кредитование Bitcoin

Lagoon - это DeFi платформа для кредитования и заимствования Bitcoin через sBTC на блокчейне Stacks.

## 🚀 Возможности

- **Дать в долг**: Положите sBTC в пул ликвидности и получайте 10% годовых
- **Взять в долг**: Получите кредит до 50% от вашего депозита под 10% годовых
- **Депозит BTC**: Конвертируйте Bitcoin в sBTC для использования в DeFi
- **Вывод sBTC**: Конвертируйте sBTC обратно в Bitcoin

## 📋 Требования

- Node.js 18+ 
- npm или yarn
- Leather кошелек (или другой Stacks-совместимый кошелек)

## 🛠 Установка

1. Клонируйте репозиторий:
```bash
git clone <repository-url>
cd lagoon
```

2. Установите зависимости:
```bash
npm install
```

3. Создайте файл `.env.local` (опционально):
```bash
cp .env.example .env.local
```

4. Запустите dev-сервер:
```bash
npm run dev
```

5. Откройте [http://localhost:3000](http://localhost:3000) в браузере

## 🏗 Сборка для продакшена

```bash
npm run build
npm start
```

## 📁 Структура проекта

```
lagoon/
├── src/
│   └── app/
│       ├── components/      # React компоненты
│       │   ├── BorrowForm.js
│       │   ├── LendForm.js
│       │   ├── DepositForm.js
│       │   ├── WithdrawForm.js
│       │   ├── ConnectWallet.js
│       │   └── Navbar.js
│       ├── borrow/          # Страница займа
│       ├── lend/            # Страница кредитования
│       ├── deposit/         # Страница депозита
│       ├── withdraw/        # Страница вывода
│       ├── layout.js        # Главный layout
│       ├── page.js          # Главная страница
│       ├── globals.css      # Глобальные стили
│       └── UserContext.js   # Context для пользователя
├── contract/
│   └── lagoon.clar          # Смарт-контракт Clarity
├── public/                  # Статические файлы
└── package.json
```

## 🔧 Технологии

- **Frontend**: Next.js 16, React, Tailwind CSS v4
- **Blockchain**: Stacks, sBTC
- **Wallet**: Stacks Connect, Leather
- **Smart Contracts**: Clarity

## 🔐 Безопасность

- Все транзакции подписываются в вашем кошельке
- Приватные ключи никогда не покидают ваше устройство
- Смарт-контракты на блокчейне Stacks

## ⚠️ Известные проблемы

См. [ERRORS_REPORT.md](./ERRORS_REPORT.md) для полного списка известных проблем и их статуса.

### Уязвимости безопасности
Проект имеет 6 уязвимостей в зависимостях (2 moderate, 4 high). Рекомендуется следить за обновлениями библиотек.

## 🧪 Тестирование

В настоящее время тесты отсутствуют. Планируется добавить:
- Unit тесты для компонентов
- Integration тесты для форм
- E2E тесты для пользовательских сценариев

## 📝 Конфигурация

Основные настройки можно изменить в `.env.local`:

- `NEXT_PUBLIC_NETWORK` - Сеть (mocknet/testnet/mainnet)
- `NEXT_PUBLIC_CONTRACT_ADDRESS` - Адрес смарт-контракта
- `NEXT_PUBLIC_CONTRACT_NAME` - Имя контракта

## 🤝 Вклад в проект

1. Fork репозиторий
2. Создайте feature branch (`git checkout -b feature/amazing-feature`)
3. Commit изменения (`git commit -m 'Add amazing feature'`)
4. Push в branch (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект использует MIT лицензию.

## 🔗 Полезные ссылки

- [Stacks Documentation](https://docs.stacks.co/)
- [sBTC Documentation](https://docs.stacks.co/sbtc)
- [Clarity Language](https://docs.stacks.co/clarity)
- [Next.js Documentation](https://nextjs.org/docs)

## 💬 Поддержка

Если у вас возникли вопросы или проблемы, пожалуйста:
1. Проверьте [ERRORS_REPORT.md](./ERRORS_REPORT.md)
2. Откройте Issue в GitHub
3. Свяжитесь с командой разработчиков

---

**Версия**: 0.1.0  
**Последнее обновление**: 2026-05-02

