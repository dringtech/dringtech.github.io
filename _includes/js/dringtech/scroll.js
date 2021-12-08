const header = document.querySelector('#site-nav');
const scrollTrigger = 25;
const scrollClass = 'shrink-nav';

function checkScroll() {
  if (window.scrollY > scrollTrigger) {
    header.classList.add(scrollClass);
  } else {
    header.classList.remove(scrollClass);
  }
}

checkScroll();
window.addEventListener('scroll', checkScroll);
