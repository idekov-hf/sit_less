const timer = {
  sittingInput: document.getElementById('sitting-duration'),
  standingInput: document.getElementById('standing-duration'),
  handleStart: function() {
    setInterval(function() {
        console.log(sittingInput.value);
        this.sittingInput.value = sittingInput.value - 1;
      },
      1000
    );
  },
};

const button = {
  element: document.querySelector('.button'),
  handleClick: function() {
    const buttonText = this.textContent;

    buttonText === 'Start'
      ? this.classList.add('yellow')
      : this.classList.remove('yellow');

    buttonText === 'Start' ? timer.handleStart() : '';

    this.textContent = buttonText === 'Start' ? 'Pause' : 'Start';
  },

  setUpEventListeners: function() {
    this.element.addEventListener('click', this.handleClick);
  },
};

button.setUpEventListeners();
