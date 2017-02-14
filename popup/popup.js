const timer = {
  sittingTime: document.getElementById('sitting-duration').value,
  standingTime: document.getElementById('standing-duration').value,

  tick: function () {
    this.sittingTime--;
  },

  getTimes: function () {
    return [this.sittingTime, this.standingTime];
  },
};

const handlers = {
  handleButtonClick: function () {
    this.textContent === 'Start' ? handlers.startTimer() : handlers.stopTimer();
    view.toggleButton();
  },

  startTimer: function () {
    this.intervalID = setInterval(function () {
      timer.tick();
      view.displayTimer();
    }, 1000);
  },

  stopTimer: function () {
      clearInterval(this.intervalID);
    },

};

const view = {
  startButton: document.querySelector('.button'),
  displayTimer: function () {
    const sittingInput = document.getElementById('sitting-duration');
    const standingInput = document.getElementById('standing-duration');
    [sittingInput.value, standingInput.value] = timer.getTimes();
  },

  toggleButton: function () {
    const buttonText = this.startButton.textContent;
    this.startButton.classList.toggle('paused');
    this.startButton.textContent = buttonText === 'Start' ? 'Pause' : 'Start';
  },

  setUpEventListeners: function () {
    this.startButton.addEventListener('click', handlers.handleButtonClick);
  },
};

view.setUpEventListeners();
