const button = {
  element: document.querySelector('.button'),
  handleClick: function () {
    const buttonText = this.textContent;
    buttonText === 'Start'
      ? this.classList.add('yellow')
      : this.classList.remove('yellow');
    this.textContent = buttonText === 'Start' ? 'Pause' : 'Start';
  },

  setUpEventListeners: function () {
    this.element.addEventListener('click', this.handleClick);
  },
};

button.setUpEventListeners();
