export default function (component, props, ...children) {
  props = props || {}
  const element = new component({ ...props, children })
  element.mount()
  if(element.props) if (element.props.ref) {
    if ('set' in element.props.ref) element.props.ref.set(element)
  }
  for (const child of children) {
    element.append(child);
  }
  return element;
}
