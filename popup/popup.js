const button = document.querySelector('.button');

button.addEventListener('click', event => {
	handleButtonClick(event);
});

function handleButtonClick(event) {
	const buttonText = button.textContent;
	buttonText === 'Start' ? button.classList.add('yellow') : button.classList.remove('yellow')
	button.textContent = buttonText === 'Start' ? 'Pause' : 'Start';

}
