export interface ThreeRef<T> {
    current: T | null,
    set: (reference: T) => void
}

export function createRef<T> (): ThreeRef<T> {
    const ret: ThreeRef<T> = {
        current: null,
        set: (reference) => ret.current = reference
    }
    return ret;
}