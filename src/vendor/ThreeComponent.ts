import THREE from '../THREE'
import Thing from './Thing';
import { register } from './registerAgent'
import { TParsedJSX } from './JSXParser';

class ThreeComponent<P extends object = $IntentionalAny, S extends object = $IntentionalAny> extends Thing<P, S> {

    refs: {[key: string]: ThreeComponent} = {}
    material?: THREE.Material
    geometry?: THREE.Geometry
    isSync: boolean = false
    parent?: ThreeComponent

    constructor (props: P) {
        super(props)
    }

    register (): void {
        this.id = register(this, { lastRenderStage: 0 })
    }

    mount (): void {
        this.componentWillMount()

        const tree = this.render()
        if (tree) {
            this.append(tree.element);
            this.refs = tree.stringRefs;
        }

        this.componentDidMount()
    }
    unMount (): void {
        // TODO: make unMount
    }

    add (object: THREE.Object3D) {
        if (this.object) this.object.add(object)
    }

    append (component: ThreeComponent) {
        if (this.isSync) {
            component.on('load', () => {
                if (component.object) {
                    this.add(component.object)
                    this.children.push(component)
                    component.parent = this;
                }
            })
        } else {
            if (component.object) {
                this.add(component.object)
                this.children.push(component)
                component.parent = this;
            }
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

    get position (): THREE.Vector3 | null {
        if (!this.object) return null
        return this.object.position;
    }
    get rotation (): THREE.Euler | null {
        if (!this.object) return null
        return this.object.rotation;
    }

    // position setters and getters
    set x (value) { if (this.position) this.position.x = value }
    set y (value) { if (this.position) this.position.y = value }
    set z (value) { if (this.position) this.position.z = value }
    get x () { return this.position ? this.position.x : NaN }
    get y () { return this.position ? this.position.x : NaN }
    get z () { return this.position ? this.position.x : NaN }

    // Overriding methods
    componentDidMount () {}
    componentWillMount () {}
    changes () {}
    render (): TParsedJSX | void {}
}

export default ThreeComponent