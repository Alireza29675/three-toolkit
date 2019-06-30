import ThreeComponent from './ThreeComponent'
import ModelLoader from './helpers/ModelLoader'

const loader = ModelLoader()

class Model extends ThreeComponent {
    setup () {
        const { url } = this.props
        const model = loader.load(url)
        model.on('load', this.onLoad.bind(this));
        model.on('progress', this.onProgress.bind(this))
    }

    onLoad ({ object, loadTime }) {
        this.object = object;
        this.emit('load', { loadTime });
    }
}

export default Model