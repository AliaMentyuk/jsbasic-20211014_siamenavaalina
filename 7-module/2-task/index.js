import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render();
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('modal');
    this.elem.innerHTML = `
    <div class="modal__overlay"></div>
      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
          <h3 class="modal__title">Вот сюда нужно добавлять заголовок</h3>
        </div>
        <div class="modal__body">A сюда нужно добавлять содержимое тела модального окна</div>
      </div>`;
  }

  open() {
    this.elem.querySelector('.modal__close').addEventListener('click', () => this.close());
    document.body.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        this.close();
      }
    });
    document.body.classList.add('is-modal-open');
    document.body.innerHTML = '';
    document.body.append(this.elem);
  }

  setTitle(parametr) {
    this.elem.querySelector('.modal__title').innerHTML = parametr;
  }

  setBody(param) {
    this.elem.querySelector('.modal__body').innerHTML = '';
    this.elem.querySelector('.modal__body').append(param);
  }

  close() {
    document.body.innerHTML = '';
    document.body.classList.remove('is-modal-open');
  }

}
