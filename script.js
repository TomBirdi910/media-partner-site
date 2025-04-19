// Данные о пользователе (задать вручную для теста)
const user = {
    name: "Иван",
    rank: "Медиа партнёр", // Возможные значения: "Игрок", "Медиа партнёр", "Администратор"
};

// Функция для управления доступом в зависимости от ранга пользователя
function manageAccess() {
    // Элементы для отображения
    const reportsLink = document.getElementById('reports-link');
    const profileLink = document.getElementById('profile-link');
    const briefingLink = document.getElementById('briefing-link');
    const rulesLink = document.getElementById('rules-link');
    const chatLink = document.getElementById('chat-link');
    const ranksLink = document.getElementById('ranks-link');

    // Убираем доступ к определенным страницам в зависимости от ранга
    if (user.rank === "Игрок") {
        reportsLink.classList.add("hidden");
        briefingLink.classList.add("hidden");
        chatLink.classList.add("hidden");
        ranksLink.classList.add("hidden");
    } else if (user.rank === "Медиа партнёр") {
        // Медиа партнёр имеет доступ к отчетам и брифингу только для чтения
        reportsLink.classList.remove("hidden");
        briefingLink.classList.remove("hidden");
        chatLink.classList.add("hidden");
        ranksLink.classList.add("hidden");
    } else if (user.rank === "Администратор") {
        // Администратор имеет доступ ко всему
        reportsLink.classList.remove("hidden");
        briefingLink.classList.remove("hidden");
        chatLink.classList.remove("hidden");
        ranksLink.classList.remove("hidden");
    }

    // Выводим информацию о текущем пользователе
    const content = document.querySelector('.content');
    content.innerHTML += `<div class="admin-only">Добро пожаловать, ${user.name}! Ваш ранг: ${user.rank}</div>`;
}

// Вызов функции для управления доступом
manageAccess();
