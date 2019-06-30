import Thing from "../basics/Thing";

class Loader extends Thing {
    startTime = null;
    endTime = null;
    object = null
    isLoaded = false
    start () {
        this.startTime = Date.now()
        this.emit('start', { at: this.startTime })
    }
    error () {
        this.emit('error', {
            message: `Couldn't fetch the file`
        })
    }
    progress (xhr) {
        this.emit('progress', {
            percent: (xhr.loaded / xhr.total * 100)
        })
    }
    load (object) {
        this.endTime = Date.now()
        const loadTime = this.endTime - this.startTime
        this.isLoaded = true
        this.object = object
        this.emit('load', { object, at: this.endTime, loadTime })
    }
}

class ModelLoader extends Thing {

    load (url) {
        const { $ } = this
        const extension = url.substr(url.lastIndexOf('.') + 1).toLowerCase();

        let loader = null;

        // OBJ Loader
        if (extension === 'obj') loader = new $.OBJLoader()
        // JSON Loader
        else if (extension === 'json') loader = new $.ObjectLoader()

        if (!loader) console.error(`Couldn't find any loader for .${extension} extension`);

        const model = new Loader({ url })
        loader.load(url, model.load, model.progress, model.error);
        return model;
    }

}

export { Loader }
export default ModelLoader