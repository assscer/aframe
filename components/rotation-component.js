AFRAME.registerComponent('rotation-component', {
    schema: {
        speed: { type: 'number', default: 0.5 }
    },
    tick: function (time, timeDelta) {
        this.el.object3D.rotation.y += this.data.speed * (timeDelta / 1000);
    }
});
