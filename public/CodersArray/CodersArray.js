class CodersArray {
  elements;

  constructor(...elements) {
    this.elements = elements;
  }

  length() {
    return this.elements.length;
  }

  push(...elements) {
    const newArray = [...this.elements, ...elements];
    return newArray;
  }
}

export default CodersArray;
