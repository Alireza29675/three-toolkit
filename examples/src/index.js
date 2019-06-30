import { Scene, Model } from '../../src'

const scene = new Scene({
    container: document.body
})

console.log(scene.object)

const model = new Model({ url: 'a.json' })

scene.append(model)