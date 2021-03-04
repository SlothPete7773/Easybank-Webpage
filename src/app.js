
const hamburgerMenu = () => {
  let overlay = document.getElementById('overlay');
  let content = document.getElementById('hamburger-content');
  let menu = document.getElementById('hamburger-menu')
  let status = menu.classList.contains('isOpen')
  
  if (status) {
    menu.classList.remove('isOpen');
    overlay.classList.add('hidden');
    content.classList.add('hidden');
  } else {
    menu.classList.add('isOpen');
    overlay.classList.remove('hidden');
    content.classList.remove('hidden');
  }
}

// function hamburgerMenu() {

// }