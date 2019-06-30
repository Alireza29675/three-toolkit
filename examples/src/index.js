import ThreeComponent from '../../src'

class Obj extends ThreeComponent {

    setup () {
        setTimeout(() => {
            this.emit('loaded', 'hello')
        }, 2000)
    }

}  

const obj = new Obj()

obj.on('loaded', (a) => {
    console.log(a)
})