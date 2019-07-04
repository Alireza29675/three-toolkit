import ThreeComponent from "./ThreeComponent"

class SyncThreeComponent<P extends object = {}, S extends object = {}> extends ThreeComponent<P, S> {
    isSync = true
}

export default SyncThreeComponent