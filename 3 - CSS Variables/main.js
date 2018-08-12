/** Select the block of controls */
const controls = document.querySelector('.controls');

const updateInput = (e) => {
  const el = e.target;
  /** 
    * The block of controls contains both labels and input elements.
    * Thus, ignore the labels and act only on the input elements.
    */
  if (el.tagName === "INPUT") {
    const suffix = el.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${el.name}`, 
                                                    el.value + suffix);
  }
}

/** Listen for changes in values and for mouse dragging */
controls.addEventListener('change', updateInput);
controls.addEventListener('mousemove', updateInput);
