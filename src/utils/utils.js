function isClassComponent(component) {
  return (
    typeof component === 'function' &&
    !!component.prototype.isReactComponent
  );
}

function isFunctionComponent(component) {
  return (
    typeof component === 'function' &&
    String(component).includes('createElement')
  );
}

export default class Utils {

  constructor(){
    this.isReactComponent = this.isReactComponent.bind(this);
  }

  static isReactComponent(component) {
    return (
      isClassComponent(component) ||
      isFunctionComponent(component)
    )
  }

}