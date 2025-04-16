document.getElementById('steam-login').addEventListener('click', function() {
  // Замените URL ниже на свой реальный адрес для Steam OpenID
  const steamLoginURL = 'https://steamcommunity.com/openid/login?openid.realm=http://yourwebsite.com&openid.return_to=http://yourwebsite.com/steam-login-callback';
  window.location.href = steamLoginURL;
});

// Функция для обработки обратного вызова после авторизации Steam
function handleSteamCallback() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('openid.claimed_id')) {
    const steamID = urlParams.get('openid.claimed_id').split('/').pop(); // Получаем Steam ID
    document.getElementById('steam-id').innerText = steamID;
    // Здесь можно делать дальнейшую обработку, например, запросить Steam API для получения информации о пользователе
  }
}

function loadUserProfile() {
  const urlParams = new URLSearchParams(window.location.search);
  const steamID = urlParams.get('steamid');
  const name = urlParams.get('name');
  const avatar = urlParams.get('avatar');

  document.getElementById('steam-id').innerText = steamID;
  document.getElementById('profile-name').innerText = name;
  document.getElementById('profile-avatar').src = avatar;
}

function submitReport(event) {
  event.preventDefault();
  // Логика для отправки отчета
  alert('Report submitted');
}