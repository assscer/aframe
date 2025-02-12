AFRAME.registerComponent('my-custom-component', {
    schema: {
        text: { type: 'string', default: 'Hello, A-Frame!' },
        color: { type: 'color', default: '#EF2D5E' }
    },
    init: function () {
        console.log("my-custom-component инициализирован!", this.el);

        let el = this.el;
        let data = this.data;

        if (!el) {
            console.error("Ошибка: элемент не найден!");
            return;
        }

        // Создаём a-text
        this.textEntity = document.createElement('a-text');
        this.textEntity.setAttribute('value', data.text);
        this.textEntity.setAttribute('color', data.color);
        this.textEntity.setAttribute('position', '0 2 0');

        el.appendChild(this.textEntity);
    },
    update: function () {
        // Обновляем текст и цвет при изменении атрибута
        if (this.textEntity) {
            this.textEntity.setAttribute('value', this.data.text);
            this.textEntity.setAttribute('color', this.data.color);
        }
    }
});
