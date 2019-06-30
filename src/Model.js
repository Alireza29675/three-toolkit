import ThreeComponent from './ThreeComponent'

class Model extends ThreeComponent {
    setup () {
        const { url } = this.props
        const extension = url.substr(url.lastIndexOf('.') + 1).toLowerCase();
        if (extension === 'obj') {
            
        }
    }
}

export default Model