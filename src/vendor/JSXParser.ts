import ThreeComponent from "./ThreeComponent"

export type TParsedJSX = {
  element: ThreeComponent,
  stringRefs: {[key: string]: ThreeComponent<$IntentionalAny, $IntentionalAny>}
}

const parser = function (component: $FixMe, props: $FixMe, ...children: $IntentionalAny): TParsedJSX {
  const stringRefs: {[key: string]: ThreeComponent} = {};
  props = props || {}
  const element = new component({ ...props })
  element.mount()
  if(element.props) if (element.props.ref) {
    if ((typeof element.props.ref == 'string') && element.props.ref) {
      stringRefs[element.props.ref] = element;
    }
    else if ('set' in element.props.ref) {
      element.props.ref.set(element)
    }
  }
  for (const child of children) {
    Object.assign(stringRefs, child.stringRefs);
    element.append(child.element);
  }
  return { element, stringRefs };
}

export default parser