export function accordionList() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  function init() {
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling?.classList.add('ativo');
    initAccordion();
  }

  function initAccordion() {
    function activeAccordion(event: any) {
      const element = event.currentTarget; //Pega o dt
      element.nextElementSibling.classList.toggle('ativo');
      element.classList.toggle('ativo');
    }
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
  return init();
}
