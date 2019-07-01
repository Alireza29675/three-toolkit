import ThreeComponent from "../vendor/ThreeComponent";
import defaultNormalMaterial from '../utils/defaultNormalMaterial'

class Box extends ThreeComponent {
    setup () {
        const { $ } = this;
        this.geometry = new $.BoxGeometry(1, 1, 1);
        this.material = new $.MeshNormalMaterial();
        this.object = new $.Mesh(this.geometry, this.material);
    }
}

export default Box