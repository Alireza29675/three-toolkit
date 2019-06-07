class ThreeObject {

    geometry = null;
    material = null;
    object = null;
    listeners = {}

    constructor (props = {}) {

        // Define THREE as a easy-to-catch variable
        this.$ = window.THREE;
        this.props = props;
        
        this.setup();
        this.init();
    }

    on (type, cb) {
        if (type in this.listeners) {
            this.listeners[type].push(cb)
        } else {
            // TODO: show error
        }
        return this;
    }

    _dispatch (type, data) {
        if (type in this.listeners) {
            this.listeners[type].forEach((cb) => cb(data));
        }
    }

    init () {}
    setup () {}
    changes () {}

}

export default ThreeObject;