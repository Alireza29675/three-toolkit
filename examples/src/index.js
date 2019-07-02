import { Scene, Box } from '../../src'

class B extends Box {
    changes () {
        this.rotation.x += 0.02;
    }
}

class C extends B {
    changes () {
        super.changes();
        this.rotation.y += 0.02;
    }
}

class App extends Scene {
    init () {
        this.box = new C()
        this.append(this.box)
    }
    changes () {
        
    }
}

console.log(<App>
    <B>Hello</B>
</App>)

const scene = new App({ container: document.body })
scene.start();