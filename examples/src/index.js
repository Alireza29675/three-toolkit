import { Scene, Box } from '../../src'

const scene = new Scene({
    container: document.body
})

const box = new Box();
box.rotation.x = 2;
box.rotation.z = 2;

scene.append(box)