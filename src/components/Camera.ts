import ThreeComponent, { IDefaultProps } from "../vendor/ThreeComponent";

interface IProps extends IDefaultProps {}
interface IState {}

class Camera extends ThreeComponent<IProps, IState> {

    object: THREE.PerspectiveCamera

    constructor (props: IProps) {
        super(props);
        const { $ } = this;
        this.object = new $.PerspectiveCamera(45, 1, 1, 1000);
        this.object.position.z = 5;
    }
}

export default Camera