import THREE from '../THREE'
import { EventEmitter } from 'events';
import { register } from './registerAgent'

import Schema from 'schema-js';
class Thing {

    static propTypes = null;
    static schema = (schemaObject) => new Schema(schemaObject);

    // Passing Three.js as $
    $ = THREE

    constructor (props) {
        const propTypesSchema = this.constructor.propTypes
        if (propTypesSchema instanceof Schema) {
            try {
                propTypesSchema.validate(props)
            } catch (err) {
                throw {
                    message: `Failed to load '${this.constructor.name}' because of invalid props`,
                    errors: err.errors.map(item => item.stack.split('\n')[0])
                }
            }
        }
        this.register();
        this.object = null;
        this.children = [];
        this.props = props
        this.setup()
    }

    register () {
        this.id = register(this);
    }

    setState (object) {
        Object.assign(this.state, object);
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