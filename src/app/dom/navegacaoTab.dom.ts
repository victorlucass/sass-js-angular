export class Main {
  constructor() {
    const x = new InitTabNav();
    const y = new AccordionList();
  }
}
class InitTabNav {
  tabMenu = document.querySelectorAll('.js-tabmenu li');
  tabContent = document.querySelectorAll('.js-tabcontent section');
  constructor() {
    this.tabContent[0].classList.add('ativo');
    this.navegacaoPorTab();
  }
  private navegacaoPorTab() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.activeTab(index);
        // console.log(index);
      });
    });
  }
  private activeTab(index: number | any) {
    this.tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    this.tabContent[index].classList.add('ativo');
  }
}

class AccordionList {
  accordionList = document.querySelectorAll('.js-accordion dt');
  constructor() {
    this.accordionList[0].classList.add('ativo');
    this.accordionList[0].nextElementSibling?.classList.add('ativo')
    this.initAccordion();
  }

  initAccordion() {
    function activeAccordion(event: any) {
      const element = event.currentTarget; //Pega o dt
      element.nextElementSibling.classList.toggle('ativo');
      element.classList.toggle('ativo')
    }
    this.accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}
