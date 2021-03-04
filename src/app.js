
const hamburgerMenu = () => {
  let overlay = document.getElementById('overlay');
  let content = document.getElementById('hamburger-content');
  let menu = document.getElementById('hamburger-menu')
  let body = document.querySelector('body');
  let status = menu.classList.contains('isOpen')
  
  if (status) {
    menu.classList.remove('isOpen');
    overlay.classList.add('hidden');
    content.classList.add('hidden');
    body.classList.remove('overflow-hidden');
  } else {
    menu.classList.add('isOpen');
    overlay.classList.remove('hidden');
    content.classList.remove('hidden');
    body.classList.add('overflow-hidden');
  }
}

// function hamburgerMenu() {

// }