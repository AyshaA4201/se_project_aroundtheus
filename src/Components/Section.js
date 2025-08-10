export default class Section {
  constructor({ items = [], renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  // Renders all saved items once on page load
  renderItems() {
    this._items.forEach((item) => this._renderer(item));
  }

  // Adds a single DOM element to the container
  addItem(element) {
    this._container.prepend(element);
  }
}
