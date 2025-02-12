import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.18.0/dist/lil-gui.esm.js';

const gui = new GUI();
const params = { text: 'Hello, A-Frame!', color: '#FF0000' };

gui.add(params, 'text').onChange(value => {
    document.querySelector('[my-custom-component]').setAttribute('my-custom-component', 'text', value);
});

gui.addColor(params, 'color').onChange(value => {
    document.querySelector('[my-custom-component]').setAttribute('my-custom-component', 'color', value);
});
