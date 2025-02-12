document.addEventListener('DOMContentLoaded', () => {
    console.log("A-Frame project loaded!");

    // Получаем сцену
    let scene = document.querySelector('a-scene');

    // Пример динамического добавления объекта
    let box = document.createElement('a-box');
    box.setAttribute('position', '0 1 -3');
    box.setAttribute('color', '#4CC3D9');
    scene.appendChild(box);
});
