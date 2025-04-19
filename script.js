// Функция для загрузки пользователей
function loadUsers() {
    return fetch('users.json')
        .then(response => response.json())
        .catch(error => console.log("Ошибка при загрузке данных:", error));
}

// Функция для обработки входа
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Загружаем пользователей из файла
    loadUsers().then(users => {
        // Ищем пользователя с таким логином и паролем
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            // Если нашли, показываем информацию о пользователе
            localStorage.setItem('user', JSON.stringify(user)); // Сохраняем информацию о пользователе
            document.getElementById('user-info').classList.remove('hidden');
            document.getElementById('username').innerText = user.username;
            document.getElementById('user-rank').innerText = user.rank;

            // Переход на главную страницу после успешного входа
            window.location.href = "index.html";
        } else {
            // Если не нашли, выводим ошибку
            alert('Неверный логин или пароль');
        }
    });
});

// Проверяем, если пользователь уже залогинен
window.onload = function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('user-info').classList.remove('hidden');
        document.getElementById('username').innerText = user.username;
        document.getElementById('user-rank').innerText = user.rank;
    }
};
