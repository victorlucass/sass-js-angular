export function myDom(): void {
  const x = new InitTabNav();
  const y = new AccordionList();
  const w = new LinkExterno();
  const r = new AnimaScroll();
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
    this.accordionList[0].nextElementSibling?.classList.add('ativo');
    this.initAccordion();
  }

  initAccordion() {
    function activeAccordion(event: any) {
      const element = event.currentTarget; //Pega o dt
      element.nextElementSibling.classList.toggle('ativo');
      element.classList.toggle('ativo');
    }
    this.accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}

class LinkExterno {
  linkInterno = document.querySelectorAll('.js-menu a[href^="#"]');
  constructor() {
    this.initScroll();
  }

  initScroll() {
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
    this.linkInterno.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
}

class AnimaScroll {
  constructor() {
    this.init();
  }

  init() {
    const sections = document.querySelectorAll('.js-scroll');
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((element) => {
        const sectionTop = element.getBoundingClientRect().top;
        const isSectionVisible: boolean = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          element.classList.add('ativo');
          console.log(sectionTop - windowMetade);
        }
      });
    }

    window.addEventListener('scroll', animaScroll);
  }
}
