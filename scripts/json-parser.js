async function loadConfig() {
    try {
        console.log("Загрузка конфигурации из config.json...");

        let response = await fetch('config.json');

        if (!response.ok) {
            throw new Error(`Ошибка загрузки JSON: ${response.statusText}`);
        }

        let config = await response.json();
        console.log("Конфигурация загружена:", config);

        if (!config.components) {
            throw new Error("Ошибка: В JSON отсутствует ключ 'components'");
        }

        let entity = document.createElement('a-entity');

        Object.entries(config.components).forEach(([key, value]) => {
            if (typeof value === 'object') {
                console.log(`Добавление объекта атрибута ${key}`, value);
                entity.setAttribute(key, value);
            } else {
                console.log(`Добавление строки атрибута ${key}: ${value}`);
                entity.setAttribute(key, value);
            }
        });

        let scene = document.querySelector('a-scene');
        if (!scene) {
            throw new Error("Ошибка: <a-scene> не найден!");
        }

        scene.appendChild(entity);
        console.log("Объект добавлен в сцену:", entity);

    } catch (error) {
        console.error("Ошибка в json-parser.js:", error);
    }
}
document.addEventListener('DOMContentLoaded', loadConfig);
