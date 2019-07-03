import THREE from '../THREE'
import { EventEmitter } from 'events'
import Schema from 'schema-js'
import { register } from './registerAgent'

class Thing<S extends object = {}, P extends object = {}> {

    id: string
    object?: THREE.Object3D
    children: [] | [Thing]
    state?: S
    props: P

    static propTypes = null;
    static schema = (schemaObject: object) => new Schema(schemaObject);

    // Passing Three.js as $
    $ = THREE

    constructor (props: P) {
        this.id = register(this);
        this.children = [];
        this.props = props
        this.setup()
    }

    setState (stateChanges: Partial<S>) {
        Object.assign(this.state, stateChanges);
    }

    // Event system
    eventEmitter = new EventEmitter();

    emit (label: string, data: any) {
        this.eventEmitter.emit(label, data)
        return this;
    }
    on (label: string, data: any) {
        this.eventEmitter.on(label, data)
        return this;
    }
    once (label: string, data: any) {
        this.eventEmitter.once(label, data)
        return this;
    }

    // Overriding methods
    setup () {}
}

export default Thing