AFRAME.registerComponent('my-custom-component', {
    schema: {
        text: { type: 'string', default: 'Hello, A-Frame!' },
        color: { type: 'color', default: '#EF2D5E' }
    },
    init: function () {
        let el = this.el;
        let data = this.data;

        let textEntity = document.createElement('a-text');
        textEntity.setAttribute('value', data.text);
        textEntity.setAttribute('color', data.color);
        textEntity.setAttribute('position', '0 2 0');

        el.appendChild(textEntity);
    }
});
