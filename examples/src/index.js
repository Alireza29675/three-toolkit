import Toolkit, { Renderer, Scene, Cube } from '../../src'

class App extends Scene {
    changes () {
        const { cube } = this.refs;
        cube.rotation.y += 0.01;
    }
    render () {
        return (<Cube ref="cube" />)
    }
}

const app = Renderer.render(App, document.body);