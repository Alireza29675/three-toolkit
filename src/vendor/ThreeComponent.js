import Thing from './Thing';
import { register } from './registerAgent'

class ThreeComponent extends Thing {

    constructor (props = {}) {
        super(props)
        
        this.material = this.material || null
        this.geometry = this.geometry || null
        this.isSync = this.isSync || false
    }

    register () {
        this.id = register(this, { lastRenderStage: 0 })
    }

    mount () {
        this.componentWillMount()

        const tree = this.render()
        if (tree) {
            this.append(tree);
        }

        this.componentDidMount()
    }
    unMount () {
        // TODO: make unMount
    }

    // Three.js 
    add (object) {
        this.object.add(object)
    }
    append (component) {
        if (component instanceof ThreeComponent) {
            if (this.isSync) {
                component.on('load', () => {
                    this.add(component.object)
                    this.children.push(component)
                    component.parent = this;
                })
            } else {
                this.add(component.object)
                this.children.push(component)
                component.parent = this;
            }
        } else {
            console.error(`Only ThreeComponents can be appended to ThreeComponents`)
        }
    }
    _changes () {
        this.changes()
        for (const child of this.children) {
            if (child instanceof ThreeComponent) {
                child._changes()
            }
        }
    }

    get position () { return this.object.position || {} }
    get rotation () { return this.object.rotation || {} }

    // position setters and getters
    set x (value) { this.position.x = value }
    set y (value) { this.position.y = value }
    set z (value) { this.position.z = value }
    get x () { return this.position.x }
    get y () { return this.position.x }
    get z () { return this.position.x }

    // Overriding methods
    componentDidMount () {}
    componentWillMount () {}
    changes () {}
    render () {}
}

export default ThreeComponent