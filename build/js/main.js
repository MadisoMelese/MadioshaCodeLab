const initApp = () =>{
  const humburgerBtn = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  const toggleMenu = () =>{
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    humburgerBtn.classList.toggle('toggle-btn')
  }
  humburgerBtn.addEventListener('click', toggleMenu);
  mobileMenu.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded',initApp);