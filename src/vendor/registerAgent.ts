import uuid from 'uuid/v4'

type $ThreeComponent = $FixMe;

export const components: {[key: string]: $ThreeComponent} = {};

export const identify = (id: string): $ThreeComponent => {
    return components[id];
}

export const register = (component: $ThreeComponent, info?: object) => {
    if (component.id) throw Error(`Component was registered before`)
    let id
    do { id = uuid() } while (components[id])
    components[id] = { component, ...info }
    return id
}
