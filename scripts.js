document.getElementById('steam-login').addEventListener('click', function() {
  // Запрос на авторизацию через Steam
  window.location.href = 'https://steamcommunity.com/openid/login?openid.realm=http://yourwebsite.com&openid.return_to=http://yourwebsite.com/steam-login-callback';
});

// Пример обработки данных из Steam (после входа)
function loadUserProfile() {
  // Здесь можно использовать API Steam для получения данных профиля
  document.getElementById('steam-id').innerText = '1234567890'; // Пример Steam ID
  document.getElementById('status').innerText = 'Active'; // Пример статуса
  document.getElementById('reports-count').innerText = '5'; // Пример количества отчетов
}

function submitReport(event) {
  event.preventDefault();
  // Логика для отправки отчета
  alert('Report submitted');
}