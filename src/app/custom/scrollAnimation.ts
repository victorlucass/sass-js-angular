export function animaScroll() {
  function init() {
    scrollAnimation();
  }

  function scrollAnimation() {
    const sections = document.querySelectorAll('.js-scroll');
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((element) => {
        const sectionTop = element.getBoundingClientRect().top;
        const isSectionVisible: boolean = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          element.classList.add('ativo');
        }
      });
    }

    window.addEventListener('scroll', animaScroll);
  }

  return init();
}
