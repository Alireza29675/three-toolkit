import Toolkit, { Renderer, Scene, Box, createRef } from '../../src'
class Cube extends Box {
    componentDidMount () {
        const { speed } = this.props
        this.speed = speed || Math.random() / 30
    }
    changes () {
        this.rotation.x += this.speed
        this.rotation.y += this.speed
    }
}

class App extends Scene {

    componentDidMount () {
        const { hello, hi, hi2 } = this.refs
        hi2.z = 2;
    }
    
    render () {
        return (
            <Cube ref="hello">
                <Cube ref="hi" />
                <Cube ref="hi2" />
            </Cube>
        )
    }

}

const app = Renderer.render(App, document.body);