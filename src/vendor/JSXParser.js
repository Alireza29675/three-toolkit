import ThreeComponent from "./ThreeComponent";

export default function (component, props, ...children) {
  console.log(component)
  props = props || {}
  const element = new component({ ...props, children })
  for (const child of children) {
    if (child instanceof ThreeComponent) element.append(child);
  }
  return element;
}