const burgerImage = <HTMLDivElement>document.querySelector('.burger');
const menu = <HTMLDivElement>document.querySelector('.sources_container');
const body = <HTMLBodyElement>document.querySelector('body');
export let menuItem = <NodeListOf<HTMLElement>>document.querySelectorAll('.source__item');
export let menuItemName = <NodeListOf<HTMLElement>>document.querySelectorAll('.source__item-name');
const overlay = <HTMLDivElement>document.querySelector('.overlay');

export function loadMenuItems(): void {
    menuItem = document.querySelectorAll('.source__item');
    menuItemName = document.querySelectorAll('.source__item-name');
    menuItem.forEach((element: Node): void => element.addEventListener('click', openOrCloseBurger));
}

function openOrCloseBurger(): void {
    const styleOfOverlay = getComputedStyle(overlay);
    if (!menu.classList.contains('burger-open') && window.innerWidth <= 900 && styleOfOverlay.display === 'none') {
        overlay.style.display = 'block';
        menu.classList.toggle('burger-open');
        menu.style.right = '0%';
        burgerImage.style.transform = 'rotate(90deg)';
        body.style.overflow = 'hidden';
    } else {
        menu.classList.toggle('burger-open');
        overlay.style.display = 'none';
        menu.style.right = '-100%';
        burgerImage.style.transform = 'rotate(0deg)';
        body.style.overflow = 'auto';
    }
}

burgerImage.addEventListener('click', openOrCloseBurger);
burgerImage.addEventListener('click', loadMenuItems);
overlay.addEventListener('click', openOrCloseBurger);
