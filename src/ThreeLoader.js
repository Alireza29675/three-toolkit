import ThreeObject from './ThreeObject';

const THREE = window.THREE;
const TYPES = {
    OBJECT: 'obj',
    TEXTURE: 'texture'
}

class ThreeLoader {

    constructor () {
        this.listeners = {
            started: [],
            loaded: [],
            progress: [],
            error: []
        }
        this.manager = new THREE.LoadingManager(object => {
            this._dispatch('loaded', object)
        });
        this.manager.onStart = (url, itemsLoaded, itemsTotal) => {
            this._dispatch('started', { url, itemsLoaded, itemsTotal })
        };
        this.manager.onProgress = ( url, itemsLoaded, itemsTotal ) => {
            this._dispatch('progress', { url, itemsLoaded, itemsTotal })
        };
        this.manager.onError = (url) => {
            this._dispatch('error', { url })
        };
    }
    
    load (url) {
        const { manager } = this;
        return new ThreeModel({ url, manager });
    }

    on (type, cb) {
        if (type in this.listeners) {
            this.listeners[type].push(cb)
        } else {
            // TODO: show error
        }
        return this;
    }

    _dispatch (type, data) {
        if (type in this.listeners) {
            this.listeners[type].forEach((cb) => cb(data));
        }
    }

}

class ThreeModel extends ThreeObject {

    listeners = {
        progress: [],
        loaded: [],
        error: []
    }

    setup () {
        this._objectType = null;
        const $ = this.$;
        const { url, manager } = this.props;
        const splitted = url.split('.')
        this.ext = splitted[splitted.length - 1].toLowerCase();
        switch (this.ext) {
            case 'obj':
                this._objectType = TYPES.OBJECT;
                this.loader = new $.OBJLoader(manager);
                break;
            case 'jpg':
            case 'png':
                this._objectType = TYPES.TEXTURE;
                this.loader = new $.TextureLoader(manager);
                break;
            default:
                this.loader = null;
                // TODO: throw errors here
                break;
        }
    }

    onProgress (xhr) {
        if (xhr.lengthComputable) {
            const percent = xhr.loaded / xhr.total * 100;
            this._dispatch('progress', { percent });
        }
    }

    onError (err) {
        this._dispatch('error', err);
    }

    onLoad (object) {
        this._dispatch('loaded', object);
        this.object = object;
    }

    init () {
        const { url } = this.props;
        this.loader.load(url, this.onLoad.bind(this), this.onProgress.bind(this), this.onError.bind(this))
    }

}

export default ThreeLoader;