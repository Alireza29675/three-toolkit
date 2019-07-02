export const createRef = () => {
    const ret = {
        current: null,
        set: (reference) => ret.current = reference
    }
    return ret;
}
