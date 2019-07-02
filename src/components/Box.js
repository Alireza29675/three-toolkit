import ThreeComponent from "../vendor/ThreeComponent";
import defaultNormalMaterial from '../utils/defaultNormalMaterial'

class Box extends ThreeComponent {

    propTypes = new ThreeComponent.schema({
        width: { type: Number, default: 1 },
        height: { type: Number, default: 1 },
        depth: { type: Number, default: 1 }
    })

    setup () {
        const { $ } = this;
        const { width, height, depth } = this.props;
        this.geometry = new $.BoxGeometry(depth, width, height);
        this.material = new $.MeshNormalMaterial();
        this.object = new $.Mesh(this.geometry, this.material);
    }
}

export default Box