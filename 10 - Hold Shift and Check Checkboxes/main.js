const inbox = document.querySelector('.inbox');

let boxesChecked = [];

const handleClick = (e) => {
  /** The list element */
  const parent = e.target.parentNode;
  /** The inbox element */
  const grandparent = parent.parentNode;
  /** Find the index of the current list element */
  const index = [...grandparent.children].indexOf(parent);

  /** 
   * If the element clicked is a checkbox and the checkbox is being
   * checked, then check if the shift key was pressed. If the shift key
   * was pressed and at least one checkbox was already checked, then
   * check all elements between the two checked elements.
   */
  if (e.target.type === 'checkbox' && e.target.checked) {
    boxesChecked.push(index);
    if (e.shiftKey && boxesChecked.length > 1) {
      let start = Math.min(...boxesChecked);
      const end = Math.max(...boxesChecked);
      while (start < end) {
        /** 
         * children[start] is the element in the list that holds the
         * checkbox to be checked, children[0] is the checkbox itself
         */
        inbox.children[start].children[0].checked = true;
        start += 1;
      }
      boxesChecked = [];
    }
  }
}
  

inbox.addEventListener('click', handleClick);
