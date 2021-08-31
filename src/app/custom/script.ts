import { accordionList } from './accordionList';
import { linkExterno } from './linkExterno';
import { animaScroll } from './scrollAnimation';
import { tabNav } from './tabNav';

export function script(): void {
  tabNav();
  accordionList();
  linkExterno();
  animaScroll();
}
