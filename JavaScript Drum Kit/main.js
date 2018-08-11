/**
 * When a key corresponding to a sound is pressed, play the sound.
 */
const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  /** Add transition from black to yellow border on the pressed key*/
  key.classList.add('playing');

  /** Play the audio from the beginning */
  audio.currentTime = 0;
  audio.play();
}

/**
 * When the transition from black to yellow border on the pressed key
 * is finished, remove the yellow border and return it to the original
 * black color.
 */
const endTransition = (e) => {
  /** Ignore the events unrelated to the transition */
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

/** 
 * Add an event listener to the parent div, to detect the end of the 
 * transition on any of the child keys.
 */
const keys = document.querySelector('.keys');
keys.addEventListener('transitionend', endTransition);

document.addEventListener('keypress', playSound);
