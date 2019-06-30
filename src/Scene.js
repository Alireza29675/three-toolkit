import ThreeComponent from './ThreeComponent'

class Scene extends ThreeComponent {
    time = 0;
    _render = this.render.bind(this)
    setup () {
        const { $ } = this;
        const { container } = this.props;
        const containerIsBody = (container === document.body)
        this.object = new $.Scene()
        this.camera = new $.PerspectiveCamera(45, 1, 0.1, 1000)
        this.renderer = new $.WebGLRenderer()
        this.add(this.camera);
        container.appendChild(this.renderer.domElement);
        if (containerIsBody) {
            window.addEventListener('resize', this.fixSize.bind(this))
        }
        this.fixSize();
    }
    render () {
        requestAnimationFrame(this._render)
        this.time++;
        this._changes();
    }
    fixSize () {
        const { container } = this.props
        const containerIsBody = (container === document.body)
        const W = containerIsBody ? window.innerWidth : container.offsetWidth;
        const H = containerIsBody ? window.innerHeight : container.offsetHeight;
        const ratio = W / H;
        this.renderer.setSize(W, H);
        this.camera.aspect = ratio;
        this.camera.updateProjectionMatrix()
    }
}

export default Scene;
