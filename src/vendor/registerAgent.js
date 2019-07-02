import uuid from 'uuid/v4'

export const components = {};

export const identify = (id) => {
    return components[id];
}

export const register = (component, info) => {
    if (component.id) throw Error(`Component was registered before`)
    let id
    do { id = uuid() } while (components[id])
    components[id] = { component, ...info }
    return id
}
