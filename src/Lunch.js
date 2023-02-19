export default function Lunch() {
    const LunchMenu = document.createElement('div');

    const MenuTitle = document.createElement('h2');
    MenuTitle.classList.add('menuTitle');
    MenuTitle.textContent = 'Lunch';

    const MenuDescription = document.createElement('p');
    MenuDescription.textContent = 'Served from 10:30AM - 4PM';

    const Menu = document.createElement('div');
    Menu.classList.add('menuItems')

    const MenuItems = [];

    const Appetizers = ['Brussel Sprouts', 'Sweet Ginger Calamari', 'Tomato Mozarella Sticks', 'Guacamole & Chips', 'Tuna Tartare'];
    const AppetizersPricing = ['14', '16', '13', '15', '17'];

    const Salads = ['Traditional Caesar', 'Key Lime Crab', 'Bistro', 'Oriental Chicken', 'Chicken Quinoa'];
    const SaladsPricing = ['10', '26', '17', '15', '17'];

    const Flatbreads = ['BBQ Chicken', 'Shrimp & Goat Cheese', 'Margherita', 'Garlic & Onion', 'Classic'];
    const FlatbreadPricing = ['14', '14', '13', '12', '10'];

    const Sandwiches = ['Veggie Burger', 'Cheeseburger', 'Chicken Club', 'Prime Rib Burger', 'Colorado Lamb Burger'];
    const SandwichesPricing = ['15', '15', '13', '20', '18'];

    const Entrees = ['Grilled Salmon', 'Danish Ribs', 'Filet Mignon', 'Pork Chops', 'Grilled Shrimp Tacos'];
    const EntreesPricing = ['19', '24', '39', '21', '19'];


    // create columns and rows
    for (let i = 0; i < 6; i++) {
        const createColumn = document.createElement('div');
        // set reference
        createColumn.setAttribute('id', i);
        createColumn.classList.add('col');

        const menuItemsTitle = document.createElement('div');
        menuItemsTitle.classList.add('menuItemTitle');
        menuItemsTitle.classList.add('row');
        createColumn.appendChild(menuItemsTitle);

        if (createColumn.id == 0) {
            menuItemsTitle.textContent = 'Appetizers';

            for (let j = 0; j < Entrees.length; j++) {
                const menuItemNameRow = document.createElement('div');
                menuItemNameRow.classList.add('row');
                menuItemNameRow.classList.add('menuItem');
                menuItemNameRow.classList.add('menuItemName');
                menuItemNameRow.textContent = Appetizers[j];
                createColumn.appendChild(menuItemNameRow);

                const menuItemPriceRow = document.createElement('div');
                menuItemPriceRow.classList.add('row');
                menuItemPriceRow.classList.add('menuItemPrice');
                menuItemPriceRow.textContent = AppetizersPricing[j];
                menuItemNameRow.appendChild(menuItemPriceRow);
            }
        }

        if (createColumn.id == 1) {
            createColumn.classList.add('logo');
        }

        if (createColumn.id == 2) {
            menuItemsTitle.textContent = 'Salads';
            for (let j = 0; j < 5; j++) {
                const menuItemNameRow = document.createElement('div');
                menuItemNameRow.classList.add('row');
                menuItemNameRow.classList.add('menuItem');
                menuItemNameRow.classList.add('menuItemName');
                menuItemNameRow.textContent = Salads[j];
                createColumn.appendChild(menuItemNameRow);

                const menuItemPriceRow = document.createElement('div');
                menuItemPriceRow.classList.add('row');
                menuItemPriceRow.classList.add('menuItemPrice');
                menuItemPriceRow.textContent = SaladsPricing[j];
                menuItemNameRow.appendChild(menuItemPriceRow);
            }
        }

        if (createColumn.id == 3) {
            menuItemsTitle.textContent = 'Flatbreads';
            for (let j = 0; j < 5; j++) {
                const menuItemNameRow = document.createElement('div');
                menuItemNameRow.classList.add('row');
                menuItemNameRow.classList.add('menuItem');
                menuItemNameRow.classList.add('menuItemName');
                menuItemNameRow.textContent = Flatbreads[j];
                createColumn.appendChild(menuItemNameRow);

                const menuItemPriceRow = document.createElement('div');
                menuItemPriceRow.classList.add('row');
                menuItemPriceRow.classList.add('menuItemPrice');
                menuItemPriceRow.textContent = FlatbreadPricing[j];
                menuItemNameRow.appendChild(menuItemPriceRow);
            }
        }

        if (createColumn.id == 4) {
            menuItemsTitle.textContent = 'Sandwiches';
            for (let j = 0; j < 5; j++) {
                const menuItemNameRow = document.createElement('div');
                menuItemNameRow.classList.add('row');
                menuItemNameRow.classList.add('menuItem');
                menuItemNameRow.classList.add('menuItemName');
                menuItemNameRow.textContent = Sandwiches[j];
                createColumn.appendChild(menuItemNameRow);

                const menuItemPriceRow = document.createElement('div');
                menuItemPriceRow.classList.add('row');
                menuItemPriceRow.classList.add('menuItemPrice');
                menuItemPriceRow.textContent = SandwichesPricing[j];
                menuItemNameRow.appendChild(menuItemPriceRow);
            }
        }

        if (createColumn.id == 5) {
            menuItemsTitle.textContent = 'Entrees';
            for (let j = 0; j < 5; j++) {
                const menuItemNameRow = document.createElement('div');
                menuItemNameRow.classList.add('row');
                menuItemNameRow.classList.add('menuItem');
                menuItemNameRow.classList.add('menuItemName');
                menuItemNameRow.textContent = Entrees[j];
                createColumn.appendChild(menuItemNameRow);

                const menuItemPriceRow = document.createElement('div');
                menuItemPriceRow.classList.add('row');
                menuItemPriceRow.classList.add('menuItemPrice');
                menuItemPriceRow.textContent = EntreesPricing[j];
                menuItemNameRow.appendChild(menuItemPriceRow);
            }
        }


        MenuItems.push(createColumn);
        Menu.appendChild(MenuItems[i]);
    }


    LunchMenu.appendChild(MenuTitle);
    LunchMenu.appendChild(MenuDescription);
    LunchMenu.appendChild(Menu);

    return LunchMenu
}