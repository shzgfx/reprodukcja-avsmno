export class mirrorCanvas {

  constructor(fakeCanvas, originalCanvas) {
    this.fakeCanvas = getDocumentElement(fakeCanvas);
    this.originalCanvas = getDocumentElement(originalCanvas);
    this.redSquareIndex = [];
  }
 
  getDocumentElement(element) {
    return document.querySelector(element);
  }

  
}
