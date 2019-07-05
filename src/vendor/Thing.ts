import THREE from '../THREE'
import { EventEmitter } from 'events'
import Schema from 'schema-js'
import { register } from './registerAgent'

abstract class Thing<P extends object = {}, S extends object = {}> {

    id?: string
    abstract object: THREE.Object3D
    children: [Thing<any, any>?]
    state?: S
    props: P

    static propTypes = null;
    static schema = (schemaObject: object) => new Schema(schemaObject);

    // Passing Three.js as $
    $ = THREE

    constructor (props: P) {
        this.render();
        this.children = [];
        this.props = props
    }
    
    render () {
        this.id = register(this);
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
}

export default Thing