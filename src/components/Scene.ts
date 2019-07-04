import ThreeComponent from '../vendor/ThreeComponent'
import Camera from './Camera'

interface IProps {
    container: HTMLElement
}
interface IState {}

class Scene extends ThreeComponent<IProps, IState> {

    object: THREE.Scene
    _camera?: Camera
    renderer: THREE.WebGLRenderer
    time: number = 0
    shouldUpdateNextFrame: boolean = false

    constructor (props: IProps) {
        super(props)
        const { $ } = this
        const { container } = this.props
        const containerIsBody = (container === document.body)
        this.object = new $.Scene()
        this.camera = new Camera({})

        // Making renderer
        this.renderer = new $.WebGLRenderer()
        container.appendChild(this.renderer.domElement)

        // Sizing and scaling
        if (containerIsBody) window.addEventListener('resize', this.fixSize.bind(this))
        this.fixSize()
    }

    set camera (camera) {
        this._camera = camera
        if (this._camera) this.append(this._camera)
    }
    get camera () {
        return this._camera
    }

    start () {
        this.shouldUpdateNextFrame = true
        this.mount();
        this.loop()
    }

    pause () {
        this.shouldUpdateNextFrame = false
    }
    
    loop () {
        if (this.shouldUpdateNextFrame) {
            window.requestAnimationFrame(() => this.loop())
        }
        if (this.camera && this.object) {
            this.renderer.render(this.object, this.camera.object)
        }
        this.time++
        this._changes()
    }

    fixSize () {
        const { container } = this.props
        const containerIsBody = (container === document.body)
        const W = containerIsBody ? window.innerWidth : container.offsetWidth
        const H = containerIsBody ? window.innerHeight : container.offsetHeight
        const ratio = W / H
        this.renderer.setSize(W, H)
        if (this.camera) {
            this.camera.object.aspect = ratio
            this.camera.object.updateProjectionMatrix()
        }
    }
}

export default Scene
