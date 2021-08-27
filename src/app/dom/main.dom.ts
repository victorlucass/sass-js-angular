export class Main {
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
