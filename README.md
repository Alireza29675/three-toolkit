# ThreeToolkit
Three.js Toolkit for Designers

## Installation
```bash
yarn add three-toolkit
```
or
```bash
npm install --save three-toolkit
```

## Simple usage
```javascript
import Toolkit, {
    Scene,
    Cube,
    Renderer
} from 'three-toolkit'

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
```

**More instructions and documentations will be added**
