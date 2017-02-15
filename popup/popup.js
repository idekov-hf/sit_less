const sittingInput = document.getElementById('sitting-duration');
const standingInput = document.getElementById('standing-duration');

class Duration {

  constructor(minutes) {
    this.minutes = minutes;
    this.seconds = 0;
  }

  tick() {
    if (this.seconds === 0) {
      this.minutes--;
      this.seconds = 60;
    }

    this.seconds--;

  }

  asString() {
    const minutesString = this.unitToString(parseInt(this.minutes));
    const secondsString = this.unitToString(parseInt(this.seconds));
    return `${minutesString}:${secondsString}`;
  }

  unitToString(unit) {
    return unit < 10 ? `0${unit}` : unit;
  }

  isDone() {
    return this.minutes === 0 && this.seconds === 0;
  }

};

const timers = {
  durations: [
    new Duration(sittingInput.value),
    new Duration(standingInput.value),
  ],

  durationIndex: 0,

  tick: function () {
    if (this.durations[this.durationIndex].isDone()) {
      this.durationIndex++;
    }

    if (this.durationIndex > this.durations.length) {
      return;
    }

    this.durations[this.durationIndex].tick();
  },

  getTimes: function () {
    return this.durations.map(duration => duration.asString());
  },
};

const handlers = {
  handleButtonClick: function () {
    this.textContent === 'Start' ? handlers.startTimer() : handlers.stopTimer();
    view.toggleButton();
  },

  startTimer: function () {
    this.intervalID = setInterval(function () {
      timers.tick();
      view.displayTimer();
    }, 250);
  },

  stopTimer: function () {
      clearInterval(this.intervalID);
    },

};

const view = {
  startButton: document.querySelector('.button'),
  displayTimer: function () {
    // TODO: Number of inputs cannot be hard coded
    [sittingInput.value, standingInput.value] = timers.getTimes();
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
