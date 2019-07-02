import Toolkit, { Renderer, Scene, Box } from '../../src'

class Cube extends Box {
    
    componentDidMount () {
        const { speed } = this.props
        this.speed = speed || 0;
    }

    changes () {
        this.rotation.x += this.speed
        this.rotation.y += this.speed
    }
}

class App extends Scene {
    
    render () {
        return (
            <Cube width={3}>
                <Cube height={3} speed={0.03}>
                    <Cube width={2} height={2} speed={0.01}></Cube>
                </Cube>
            </Cube>
        )
    }

}

Renderer.render(App, document.body);