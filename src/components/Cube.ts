import ThreeComponent, { IDefaultProps } from "../vendor/ThreeComponent";
import defaultNormalMaterial from '../utils/defaultNormalMaterial'

interface IProps extends IDefaultProps {
    width?: number
    height?: number
    depth?: number
}
interface IState {}

class Cube extends ThreeComponent<IProps, IState> {

    object: THREE.Mesh

    constructor (props: IProps) {
        super(props)
        const { $ } = this;
        const { width, height, depth } = this.props;
        this.geometry = new $.BoxGeometry(width || 1, height || 1, depth || 1);
        this.material = defaultNormalMaterial;
        this.object = new $.Mesh(this.geometry, this.material);
    }
}

export default Cube