export default function Dinner() {
    const DinnerMenu = document.createElement('div');

    const MenuTitle = document.createElement('h2');
    MenuTitle.classList.add('menuTitle');
    MenuTitle.textContent = 'Dinner';

    const MenuDescription = document.createElement('p');
    MenuDescription.textContent = 'Served from 4PM - 9:30PM';

    const Menu = document.createElement('div');
    Menu.classList.add('menuItems')

    const MenuItems = [];

    const Appetizers = ['Coconut Shrimp', 'Steak Meatballs', 'Shrimp Cargot', 'Seafood Ceviche', 'Fire Roasted Octopus'];
    const AppetizersPricing = ['22', '15', '16', '14', '18'];

    const Salads = ['Traditional Caesar', 'Key Lime Crab', 'Bistro', 'Oriental Chicken', 'Chicken Quinoa'];
    const SaladsPricing = ['10', '26', '17', '15', '17'];

    const Flatbreads = ['BBQ Chicken', 'Shrimp & Goat Cheese', 'Margherita', 'Garlic & Onion', 'Classic'];
    const FlatbreadPricing = ['14', '14', '13', '12', '10'];

    const Sides = ['Asparagus', 'Daily Vegetable', 'Sweet Coleslaw', 'Wild Rice', 'French Fries']
    const SidesPricing = ['8', '8', '6', '5', '4'];

    const Entrees = ['Chilean Seabass', 'Maple Leaf Duck Confit', 'Hatfield Farm Pork Chops', 'New York Strip', 'Bone-In Ribeye'];
    const EntreesPricing = ['MKT', '25', '29', '52', '58'];



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

            for (let j = 0; j < Appetizers.length; j++) {
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
            for (let j = 0; j < Salads.length; j++) {
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
            for (let j = 0; j < Flatbreads.length; j++) {
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
            menuItemsTitle.textContent = 'Sides';
            for (let j = 0; j < Sides.length; j++) {
                const menuItemNameRow = document.createElement('div');
                menuItemNameRow.classList.add('row');
                menuItemNameRow.classList.add('menuItem');
                menuItemNameRow.classList.add('menuItemName');
                menuItemNameRow.textContent = Sides[j];
                createColumn.appendChild(menuItemNameRow);

                const menuItemPriceRow = document.createElement('div');
                menuItemPriceRow.classList.add('row');
                menuItemPriceRow.classList.add('menuItemPrice');
                menuItemPriceRow.textContent = SidesPricing[j];
                menuItemNameRow.appendChild(menuItemPriceRow);
            }
        }

        if (createColumn.id == 5) {
            menuItemsTitle.textContent = 'Entrees';
            for (let j = 0; j < Entrees.length; j++) {
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


    DinnerMenu.appendChild(MenuTitle);
    DinnerMenu.appendChild(MenuDescription);
    DinnerMenu.appendChild(Menu);

    return DinnerMenu
}