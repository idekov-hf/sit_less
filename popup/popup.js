const sittingInput = document.getElementById('sitting-duration');
const standingInput = document.getElementById('standing-duration');

class Duration {

  constructor(minutes) {
    this.minutes = minutes;
    this.seconds = 0;
  }

  setMinutes(minutes) {
    this.minutes = minutes;
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
  originalDurationValues: [],
  activeDurationObjects: [],
  currentTimerIndex: 0,

  setup: function () {
    const durationInputs = document.querySelectorAll('input.duration');
    durationInputs.forEach(input => {
      this.originalDurationValues.push(parseInt(input.value));
      const duration = new Duration(input.value);
      this.activeDurationObjects.push(duration);
    });
    console.log(this.originalDurationValues);
  },

  reset: function () {
    this.originalDurationValues.forEach((value, index) => {
      this.activeDurationObjects[index].setMinutes(value);
    });
  },

  tick: function () {
    if (this.activeDurationObjects[this.currentTimerIndex].isDone()) {
      this.currentTimerIndex++;
    }

    if (this.currentTimerIndex === this.activeDurationObjects.length) {
      this.currentTimerIndex = 0;
      this.reset();
    }

    this.activeDurationObjects[this.currentTimerIndex].tick();
  },

  getTimes: function () {
    return this.activeDurationObjects.map(duration => duration.asString());
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
    }, 50);
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
timers.setup();
