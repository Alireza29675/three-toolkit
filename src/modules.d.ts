declare class Schema {
    constructor (propObject: object)
    schema (propObject: object): {
        validate (): boolean
    }
}

declare module 'schema-js' {
    export default Schema
}