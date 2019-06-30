import * as THREE from 'three'
import { EventEmitter } from 'events';

class ThreeComponent {

    $ = THREE
    
    geometry = null
    material = null
    object = null

    _events = new EventEmitter();

    constructor (props = {}) {
        this.props = props
        this.setup()
        this.init()
    }

    // Events method
    emit (label, data) {
        return this._events.emit(label, data)
    }
    on (label, data) {
        return this._events.on(label, data)
    }
    once (label, data) {
        return this._events.once(label, data)
    }

    init () {}
    setup () {}
    loop () {}
}

export default ThreeComponent