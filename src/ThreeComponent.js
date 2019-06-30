import * as THREE from 'three'
import Thing from './Thing';

class ThreeComponent extends Thing {

    // Passing Three.js as $
    $ = THREE
    
    // Basics
    geometry = null
    material = null
    object = null

    children = []

    constructor (props = {}) {
        super(props)
        this.setup()
        this.init()
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
    setup () {}
    init () {}
    changes () {}
}

export default ThreeComponent