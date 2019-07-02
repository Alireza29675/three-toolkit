import Toolkit, { Renderer, Scene, Box, createRef } from '../../src'
class Cube extends Box {
    componentDidMount () {
        const { speed } = this.props
        this.speed = speed || Math.random() / 30;
    }
    changes () {
        this.rotation.x += this.speed
        this.rotation.y += this.speed
    }
}

class App extends Scene {

    cube1 = createRef()
    cube2 = createRef()

    componentDidMount () {
        
    }
    
    render () {
        return (
            <Cube ref={this.cube1}>
                <Cube ref={this.cube2} />
            </Cube>
        )
    }

}

const app = Renderer.render(App, document.body);

console.log(app)