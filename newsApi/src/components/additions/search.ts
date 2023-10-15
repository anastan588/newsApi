import { menuItem, menuItemName, loadMenuItems } from './burger';

const searchInput = <HTMLInputElement>document.querySelector('.search_input');
const searchButton = <HTMLDivElement>document.querySelector('.search_submit');

function makeSearch(): void {
    const inputValue: string = searchInput.value;
    const valueForSearching: string = inputValue.trim();
    for (let i: number = 0; i < menuItemName.length; i++) {
        const menuItemNameText: string = menuItemName[i].innerHTML;
        const menuItemNameTextToLowerCase: string = menuItemNameText.toString().toLocaleLowerCase();
        if (
            !menuItemNameTextToLowerCase.includes(valueForSearching) &&
            !menuItem[i].classList.contains('display_none')
        ) {
            menuItem[i].classList.add('display_none');
        } else if (menuItemNameTextToLowerCase.includes(valueForSearching)) {
            menuItem[i].classList.remove('display_none');
        }
    }
}

searchInput.addEventListener('focus', loadMenuItems);
searchInput.addEventListener('blur', makeSearch);
searchInput.addEventListener('input', makeSearch);
searchButton.addEventListener('click', makeSearch);
