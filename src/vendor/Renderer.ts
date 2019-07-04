import Scene from "../components/Scene";

export default {
    render: (scene: typeof Scene, container: HTMLElement) => {
        const app = new scene({ container })
        app.start();
        return app;
    }
}