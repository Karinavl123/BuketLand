document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо кнопку за її ідентифікатором
    const accountButton = document.getElementById("accountButton");

    // Додаємо обробник подій для кліка
    accountButton.addEventListener("click", function() {
        // Переходимо на нову сторінку
        window.location.href = "auth.html";
    });
});