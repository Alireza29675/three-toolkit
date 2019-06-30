import SyncThreeComponent from '../vendor/SyncThreeComponent'
import ModelLoader from '../helpers/ModelLoader'

const loader = new ModelLoader()

class Model extends SyncThreeComponent {

    static propTypes = SyncThreeComponent.schema({
        url: { name: 'url', type: String, required: true }
    })

    setup () {
        const { url } = this.props
        const model = loader.load(url)
        model.on('load', this.onLoad.bind(this));
        model.on('progress', this.onProgress.bind(this))
        model.on('error', this.onError.bind(this))
    }
    onLoad ({ object, loadTime }) {
        this.object = object;
        this.emit('load', { loadTime });
    }
    onProgress (data) {
        this.emit('progress', data)
    }
    onError (data) {
        this.emit('error', data)
    }
}

export default Model