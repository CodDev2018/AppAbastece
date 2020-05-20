import Observer from "./Observer.js";

class Binding {
  constructor(object, propert) {
    this._object = object;
    this._propert = propert;
    this._observers = new Observer();
    this._value = object[propert];

    this.init();
  }

  init() {
    const self = this;
    Object.defineProperty(this._object, this._propert, {
      get: () => {
        return self._value;
      },
      set: (value) => {
        self._value = self._value;
        self._observers.notify(self._value);
      },
    });
  }

  addBinding(element, attribute, event, setter) {
    this._observers.subscribe((data) => {
      this.setValueInElement(element, attribute, data, setter);
    });

    if (event) {
      element.addEventListener(event, () => {
        this._value = element[attribute];
        this._observers.notify(this._value);
      });
    }

    this.setValueInElement(element, attribute, this._value, setter);

    return this;
  }

  setValueInElement(element, attribute, data, setter) {
    if (setter) {
      setter(element, data);
    } else {
      element[attribute] = data;
    }
  }
}

export default Binding;
