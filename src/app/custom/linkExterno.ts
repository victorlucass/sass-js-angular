export function linkExterno() {
  const linkInterno = document.querySelectorAll('.js-menu a[href^="#"]');
  function init() {
    initScroll();
  }

  function initScroll() {
    function scrollToSection(event: any) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      /*
      const top = section.offsetTop; //Pega o valor do topo da section
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      })
      // console.log(section.offsetTop)
    */
    }
    linkInterno.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
  return init();
}
