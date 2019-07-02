import Scene from "../components/Scene";

export default {
    render: (scene, container) => {
        if (!(scene.prototype instanceof Scene)) throw Error(`.render 1st argument must be a class extended from 'Scene'`);
        const app = new scene({ container })
        return app;
    }
}