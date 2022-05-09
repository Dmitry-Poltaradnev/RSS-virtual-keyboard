import Control from './control.js';

class ContainerAndHeader extends Control {
  constructor(parent) {
    super(parent, 'div', 'container');
    this.titlle = new Control(this.element, 'h1', 'tittle');
    this.titlle.element.innerHTML = 'Keyboard For Windows';
    this.changeLang = new Control(this.element, 'p', 'description');
    this.changeLang.element.innerHTML = 'To change the language hold " Ctrl + Alt "';
  }
}

const createContainerAndHeader = () => new ContainerAndHeader(document.body);

export default createContainerAndHeader;
