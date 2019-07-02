export default function (component, props, ...children) {
  props = props || {}
  const element = new component({ ...props, children })
  for (const child of children) {
    element.append(child);
  }
  return element;
}
