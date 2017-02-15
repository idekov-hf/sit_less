const sittingInput = document.getElementById('sitting-duration');
const standingInput = document.getElementById('standing-duration');

function duration(minutes) {
  return {
    minutes: minutes,
    seconds: 0,
  };
};

const timer = {
  sittingDuration: duration(sittingInput.value),
  standingDuration: duration(standingInput.value),

  tick: function () {
    this.sittingDuration.minutes--;
  },

  getTimes: function () {
    return [this.sittingDuration.minutes, this.standingDuration.minutes];
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
