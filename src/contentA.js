export default function A() {
    // store values
    const valuesA = document.createElement('div');

    const MenuTitle = document.createElement('h2');
    MenuTitle.textContent = 'Menu Title A';

    const MenuDescription = document.createElement('p');
    MenuDescription.textContent = 'Breakfast Served from 8AM - 10:30AM';

    const MenuItems = document.createElement('div');
    MenuItems.classList.add('menuItems')
    const MenuItemsA = ['Pancakes', 'Waffles', 'Eggs & Bacon'];
    // iterate through the MenuItemsA arr
    for (let i = 0; i < MenuItemsA.length; i++) {
        const MenuItem = document.createElement('div');
        MenuItem.classList.add('menuItem');
        MenuItem.classList.add('row');
        MenuItem.textContent = MenuItemsA[i];
        MenuItems.appendChild(MenuItem);
    }

    valuesA.appendChild(MenuTitle);
    valuesA.appendChild(MenuDescription);
    valuesA.appendChild(MenuItems);

    return valuesA
}