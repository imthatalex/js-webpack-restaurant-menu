export default function A() {
    const valuesA = document.createElement('div');

    const MenuTitle = document.createElement('h2');
    MenuTitle.textContent = 'Menu Title A';

    const MenuDescription = document.createElement('p');
    MenuDescription.textContent = 'Breakfast Served from 8AM - 10:30AM';

    const MenuItems = document.createElement('div');
    MenuItems.classList.add('menuItems')

    const ROWS = [];

    for (let k = 0; k < 6; k++) {
        const MenuItemRow = document.createElement('div');
        MenuItemRow.classList.add('row');
        ROWS.push(MenuItemRow);
    }

    valuesA.appendChild(MenuTitle);
    valuesA.appendChild(MenuDescription);
    valuesA.appendChild(MenuItems);

    return valuesA
}