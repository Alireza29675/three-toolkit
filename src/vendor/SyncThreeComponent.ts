import ThreeComponent from "./ThreeComponent"

abstract class SyncThreeComponent<P extends object = {}, S extends object = {}> extends ThreeComponent<P, S> {
    isSync = true
}

export default SyncThreeComponent