const panels = document.querySelector('.panels');

/** Target only the panels, not the paragraphs */
const getElem = (target) => {
  if (target.tagName === "P") {
    return target.parentElement;
  } else {
    return target;
  }   
}

/** When a panel is clicked, make it larger */
const toggleOpen = (e) => {
  const target = getElem(e.target);
  target.classList.toggle('open');
}

/** After the panel opened, slide in the top and bottom text */
const toggleActive = (e) => {
  const target = getElem(e.target);
  if (e.propertyName.includes('flex')) {
    target.classList.toggle('open-active');
  }
}

panels.addEventListener('click', toggleOpen);
panels.addEventListener('transitionend', toggleActive);
