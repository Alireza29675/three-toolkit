import Toolkit, { Renderer, Scene, Box } from '../../src'

class B extends Box {
    changes () {
        this.rotation.x += 0.02;
    }
}

class App extends Scene {
    init () {

    }
    changes () {
        
    }
    render () {
        return (
            <B />
        )
    }
}

Renderer.render(App, document.body);