import JSXParser from './vendor/JSXParser'
import Renderer from './vendor/Renderer'
import { createRef } from './vendor/ThreeRef'

import Scene from './components/Scene'
import Model from './components/Model'
import Camera from './components/Camera'
import Box from './components/Box'

export default {
    parser: JSXParser,
    createRef
}

export {
    Renderer,
    createRef,    

    Scene,
    Model,
    Camera,
    Box
}