// const button = document.querySelector('.button');
//
// button.addEventListener('click', event => {
// 	handleButtonClick(event);
// });
//
// function handleButtonClick(event) {
// 	const buttonText = button.textContent;
// 	buttonText === 'Start' ? button.classList.add('yellow') : button.classList.remove('yellow')
// 	button.textContent = buttonText === 'Start' ? 'Pause' : 'Start';
// }

const button = {
	element: document.querySelector('.button'),
	handleClick: function() {
		const buttonText = this.textContent;
		buttonText === 'Start' ? this.classList.add('yellow') : this.classList.remove('yellow')
		this.textContent = buttonText === 'Start' ? 'Pause' : 'Start';
	},
	setUpEventListeners: function() {
		this.element.addEventListener('click', this.handleClick);
	}
};

button.setUpEventListeners();
