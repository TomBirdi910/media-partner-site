// Убираем авторизацию через Steam
document.getElementById('steam-login').addEventListener('click', function() {
  alert('Авторизация временно отключена');
});

// Функция для обработки обратного вызова (пока не используется)
function handleSteamCallback() {
  alert('Обработчик обратного вызова не используется');
}

// Функция для загрузки профиля (пока не используется)
function loadUserProfile() {
  alert('Загрузка профиля отключена');
}

function submitReport(event) {
  event.preventDefault();
  alert('Отчет подан');
}