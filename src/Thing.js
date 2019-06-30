import { EventEmitter } from 'events';

class Thing {

    constructor (props) {
        this.props = props
    }

    // Event system
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
}

export default Thing