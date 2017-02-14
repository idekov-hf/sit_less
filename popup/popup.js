class Duration {
  constructor(minutes) {
    this.minutes = minutes;
    this.seconds = 0;
  }
};

const timer = {
  sittingDuration: new Duration(view.sittingInput.value),
  standingDuration: new Duration(view.standingInput.value),

  tick: function () {
    this.sittingDuration--;
  },

  getTimes: function () {
    return [this.sittingDuration, this.standingDuration];
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
  sittingInput: document.getElementById('sitting-duration'),
  standingInput: document.getElementById('standing-duration'),
  displayTimer: function () {
    [this.sittingInput.value, this.standingInput.value] = timer.getTimes();
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
