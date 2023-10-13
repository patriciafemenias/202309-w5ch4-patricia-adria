class CodersArray {
  elements;

  constructor(...elements) {
    this.elements = elements;
  }

  length() {
    return this.elements.length;
  }

  push(newElement) {
    const newArray = [...this.elements, newElement];
    return newArray;
  }
}

export default CodersArray;
