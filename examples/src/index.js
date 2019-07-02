import Toolkit, { Renderer, Scene, Box } from '../../src'
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

    componentWillMount () {
        this.state = {
            a: 1,
            b: 2
        }
    }

    componentDidMount () {
        setTimeout(() => {
            this.setState({ b: 3 })
        }, 2000)
    }
    
    render () {
        return (
            <Cube width={this.state.b}>
                <Cube />
            </Cube>
        )
    }

}

const app = Renderer.render(App, document.body);

console.log(app)