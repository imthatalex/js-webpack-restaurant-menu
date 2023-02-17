export default function Breakfast() {
    const BreakfastMenu = document.createElement('div');

    const MenuTitle = document.createElement('h2');
    MenuTitle.textContent = 'Breakfast';

    const MenuDescription = document.createElement('p');
    MenuDescription.textContent = 'Served from 8AM - 10:30AM';

    const Menu = document.createElement('div');
    Menu.classList.add('menuItems')

    const MenuItems = [];
    const MainDishes = ['Eggs & Bacon', 'Blueberry Pancakes', 'Chocolate Chip Pancakes', 'Scrambled Eggs', 'Grilled Cheese'];
    const HotDrinks = ['Coffee', 'Lemon Tea', 'Green Tea', 'Tea', 'Coco'];
    const FruitDrinks = ['Pineapple', 'Apple', 'Orange', 'Strawberry', 'Watermelon'];
    const Pastry = ['Chocolate Donuts', 'Muffins', 'Jelly Donuts', 'Chocolate Ice Cream Cones', 'Vanilla Ice Cream Cones'];
    const Salads = ['Chicken Caesar', 'Traditional', 'King Salad', 'Sea Salad', 'Low Calorie']

    // create columns and rows
    for (let i = 0; i < 6; i++) {
        const createColumn = document.createElement('div');
        // set reference
        createColumn.setAttribute('id', i);
        createColumn.classList.add('col');

        const menuItemsTitle = document.createElement('div');
        menuItemsTitle.classList.add('menuItemTitle');
        createColumn.appendChild(menuItemsTitle);

        // switch statement
        if (createColumn.id == 0) {
            menuItemsTitle.textContent = 'Main Dishes';

            for (let j = 0; j < 5; j++) {
                const createRow = document.createElement('div');
                createRow.classList.add('row');
                createRow.textContent = MainDishes[j];
                createColumn.appendChild(createRow);
            }
        }

        if (createColumn.id == 1) {
            createColumn.classList.add('breakFastMenuImage');
        }

        if (createColumn.id == 2) {
            menuItemsTitle.textContent = 'Hot Drinks';
            for (let j = 0; j < 5; j++) {
                const createRow = document.createElement('div');
                createRow.classList.add('row');
                createRow.textContent = HotDrinks[j];
                createColumn.appendChild(createRow);
            }
        }

        if (createColumn.id == 3) {
            menuItemsTitle.textContent = 'Fruit Drinks';
            for (let j = 0; j < 5; j++) {
                const createRow = document.createElement('div');
                createRow.classList.add('row');
                createRow.textContent = FruitDrinks[j];
                createColumn.appendChild(createRow);
            }
        }

        if (createColumn.id == 4) {
            menuItemsTitle.textContent = 'Pastry';
            for (let j = 0; j < 5; j++) {
                const createRow = document.createElement('div');
                createRow.classList.add('row');
                createRow.textContent = Pastry[j];
                createColumn.appendChild(createRow);
            }
        }

        if (createColumn.id == 5) {
            menuItemsTitle.textContent = 'Salads';
            for (let j = 0; j < 5; j++) {
                const createRow = document.createElement('div');
                createRow.classList.add('row');
                createRow.textContent = Salads[j];
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