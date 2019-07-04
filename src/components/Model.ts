import SyncThreeComponent from '../vendor/SyncThreeComponent'
import ModelLoader from '../helpers/ModelLoader'

const loader = new ModelLoader({})

interface IProps {
    url: string
}
interface IState {}

class Model extends SyncThreeComponent<IProps, IState> {
    constructor (props: IProps) {
        super(props);
        const { url } = this.props
        const model = loader.load(url)
        model.on('load', this.onLoad.bind(this));
        model.on('progress', this.onProgress.bind(this))
        model.on('error', this.onError.bind(this))
    }
    onLoad ({ object, loadTime }: { object: THREE.Object3D, loadTime: number}) {
        this.object = object;
        this.emit('load', { loadTime });
    }
    onProgress (data: number) {
        this.emit('progress', data)
    }
    onError (data: Error) {
        this.emit('error', data)
    }
}

export default Model