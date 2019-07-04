import Thing from "../vendor/Thing"

class Loader extends Thing {

    startTime: number = 0
    endTime: number = 0;

    object?: THREE.Object3D;
    isLoaded: boolean = false

    start () {
        this.startTime = Date.now()
        this.emit('start', { at: this.startTime })
    }
    error () {
        this.emit('error', {
            message: `Couldn't fetch the file`
        })
    }
    progress (xhr: $IntentionalAny) {
        this.emit('progress', {
            percent: (xhr.loaded / xhr.total * 100)
        })
    }
    load (object: THREE.Object3D) {
        this.endTime = Date.now()
        const loadTime = this.endTime - this.startTime
        this.isLoaded = true
        this.object = object
        this.emit('load', { object, at: this.endTime, loadTime })
    }
}

class ModelLoader extends Thing {

    load (url: string) {
        const { $ } = this
        const extension = url.substr(url.lastIndexOf('.') + 1).toLowerCase();

        let loader = null;

        // OBJ Loader
        if (extension === 'obj') loader = new ($ as any).OBJLoader()
        // JSON Loader
        else if (extension === 'json') loader = new $.ObjectLoader()

        if (!loader) console.error(`Couldn't find any loader for .${extension} extension`);

        const model = new Loader({ url })
        if (loader) loader.load(
            url,
            (object: $FixMe) => model.load(object),
            (xhr: $FixMe) => model.progress(xhr),
            () => model.error()
        );
        return model;
    }

}

export { Loader }
export default ModelLoader