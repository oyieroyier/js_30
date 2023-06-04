document.addEventListener('keydown', playSound);

function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	if (!audio) return; // This will prevent the function from returning null if the key is not among the ones in our file.

	// In audio elements, this resets/rewinds the time to 0 if you hit play many times.
	audio.currentTime = 0;

	// By default, an audio element will not restart playing if it's already playing unless you set the current time to 0 like above.
	audio.play();

	key.classList.add('playing');
}

// Removing the .playing class when the keys are released.
const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
	key.addEventListener('transitionend', removeTransition);
});

function removeTransition(e) {
	if (e.propertyName !== 'transform') return; // Skip if the property name was not transform.

	this.classList.remove('playing');
}
