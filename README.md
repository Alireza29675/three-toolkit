# ThreeToolkit
🏺 Three.js Toolkit for Designers

> ThreeToolkit is still under development, support ThreeToolkit by putting issues and giving advices

## Installation
```bash
yarn add three-toolkit
```
or
```bash
npm install --save three-toolkit
```

## Run current example / Contribute ThreeToolkit
- Clone the repository
    ```bash
    git clone https://github.com/Alireza29675/three-toolkit.git
    ```
- Install dependencies and start the examples
    ```bash
    cd three-toolkit/
    yarn install
    yarn start
    ```
- Example will be served at [localhost:3001](http://localhost:3001)

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
