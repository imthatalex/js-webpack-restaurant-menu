export default function Breakfast() {
    const BreakfastMenu = document.createElement('div');

    const MenuTitle = document.createElement('h2');
    MenuTitle.textContent = 'Menu Title A';

    const MenuDescription = document.createElement('p');
    MenuDescription.textContent = 'Breakfast Served from 8AM - 10:30AM';

    const Menu = document.createElement('div');
    Menu.classList.add('menuItems')

    const MenuItems = [];
    const MainDishes = ['Eggs & Bacon', 'Blueberry Pancakes', 'Chocolate Chip Pancakes', 'Scrambled Eggs', 'Grilled Cheese']
    const HotDrinks = ['Coffee', 'Lemon Tea', 'Green Tea', 'Tea', 'Coco']
    const FruitDrinks = ['Pineapple', 'Apple', 'Orange', 'Strawberry', 'Watermelon']

    // create columns and rows
    for (let i = 0; i < 3; i++) {
        const createColumn = document.createElement('div');
        // set reference
        createColumn.setAttribute('id', i);
        createColumn.classList.add('col');

        if (createColumn.id == 0) {
            for (let j = 0; j < 5; j++) {
                const createRow = document.createElement('div');
                createRow.classList.add('row');
                createRow.textContent = MainDishes[j];
                createColumn.appendChild(createRow);
            }
        }
        if (createColumn.id == 1) {
            createColumn.classList.add('menuImage')
        }
        if (createColumn.id == 2) {
            for (let j = 0; j < 5; j++) {
                const createRow = document.createElement('div');
                createRow.classList.add('row');
                createRow.textContent = FruitDrinks[j];
                createColumn.appendChild(createRow);
            }
        }


        MenuItems.push(createColumn);
        Menu.appendChild(MenuItems[i]);
    }


    BreakfastMenu.appendChild(MenuTitle);
    BreakfastMenu.appendChild(MenuDescription);
    BreakfastMenu.appendChild(Menu);

    return BreakfastMenu
}