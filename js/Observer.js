class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(f) {
    this.observers.push(f);
  }

  unsubscribe(f) {
    const index = this.observers.indexOf(f);
    this.observers.splice(index, 1);
  }

  notify(data) {
    console.log(data)
    this.observers.forEach((observer) => observer(data));
  }
}

export default Observer;
