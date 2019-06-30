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
    isSync = false

    constructor (props = {}) {
        super(props)
        this.init()
    }

    // Three.js 
    add (object) {
        this.object.add(object)
    }
    append (component) {
        if (child instanceof ThreeComponent) {
            if (this.isSync) {
                component.on('load', () => {
                    this.add(component.object);
                    this.children.push(component);
                })
            } else {
                this.add(component.object);
                this.children.push(component);
            }
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
    changes () {}
}

export default ThreeComponent