import ThreeComponent from "../vendor/ThreeComponent";

class Camera extends ThreeComponent {

    setup () {
        const { $ } = this;
        this.object = new $.PerspectiveCamera( 45, 1, 1, 1000 );
    }

}

export default Camera