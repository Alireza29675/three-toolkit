import * as THREE from 'three'
import { EventEmitter } from 'events';

class ThreeComponent {

    // Passing Three.js as $
    $ = THREE
    
    // Basics
    geometry = null
    material = null
    object = null

    children = []

    constructor (props = {}) {
        this.props = props
        this.setup()
        this.init()
    }
    
    // Events method
    eventEmitter = new EventEmitter();

    emit (label, data) {
        return this.eventEmitter.emit(label, data)
    }
    on (label, data) {
        return this.eventEmitter.on(label, data)
    }
    once (label, data) {
        return this.eventEmitter.once(label, data)
    }

    // Three.js 
    add (object) {
        this.object.add(object)
    }
    append (component) {
        if (child instanceof ThreeComponent) {
            this.add(component.object);
            this.children.push(component);
        } else {
            console.error(`Only ThreeComponents can be appended to ThreeComponents`)
        }
    }
    _changes () {
        this.changes()
        for (let child of this.children) {
            if (child instanceof ThreeComponent) {
                child._changes()
            }
        }
    }

    // Overriding methods
    init () {}
    setup () {}
    changes () {}
}

export default ThreeComponent