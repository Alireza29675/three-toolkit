import { Scene, Box } from '../../src'

class B extends Box {
    changes () {
        this.rotation.x += 0.02;
    }
}

class App extends Scene {
    init () {
        this.box = new B()
        this.append(this.box)
    }
    changes () {
        this.box.rotation.y += 0.01
    }
}

const scene = new App({ container: document.body })
scene.start();