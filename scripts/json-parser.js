async function loadConfig() {
    let response = await fetch('config.json');
    let config = await response.json();

    let entity = document.createElement('a-entity');
    Object.entries(config.components).forEach(([key, value]) => {
        entity.setAttribute(key, value);
    });

    document.querySelector('a-scene').appendChild(entity);
}

document.addEventListener('DOMContentLoaded', loadConfig);
