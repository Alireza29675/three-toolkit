import * as THREE from 'three'

import { EventEmitter } from 'events';

class Thing {

    // Passing Three.js as $
    $ = THREE

    constructor (props) {
        this.props = props
        this.setup()
    }

    // Event system
    eventEmitter = new EventEmitter();

    emit (label, data) {
        this.eventEmitter.emit(label, data)
        return this;
    }
    on (label, data) {
        this.eventEmitter.on(label, data)
        return this;
    }
    once (label, data) {
        this.eventEmitter.once(label, data)
        return this;
    }

    // Overriding methods
    setup () {}
}

export default Thing