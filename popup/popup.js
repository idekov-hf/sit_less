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
  startTimer: function () {
    setInterval(function () {
      console.log('hello');
      timer.tick();
      view.displayTimer();
    }, 1000);
  },

  start: function () {
    console.log('hello');
  },
};

const view = {
  displayTimer: function () {
    const sittingInput = document.getElementById('sitting-duration');
    const standingInput = document.getElementById('standing-duration');
    [sittingInput.value, standingInput.value] = timer.getTimes();
  },

  setUpEventListeners: function () {
    const startButton = document.querySelector('.button');
    startButton.addEventListener('click', function () {
      console.log('button clicked');
      handlers.startTimer();
    });
  },
};

view.setUpEventListeners();
