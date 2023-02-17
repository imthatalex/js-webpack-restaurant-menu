export default function A() {
    const valuesA = document.createElement('div');

    const MenuTitle = document.createElement('h2');
    MenuTitle.textContent = 'Menu Title A';

    const MenuDescription = document.createElement('p');
    MenuDescription.textContent = 'Breakfast Served from 8AM - 10:30AM';

    const MenuItems = document.createElement('div');
    MenuItems.classList.add('menuItems')


    const Items = [];

    const BItems = ['text1', 'text2', 'tex3t', 'text4', 'text5', 'text6']

    // create columns and rows
    for (let i = 0; i < 3; i++) {
        const createColumn = document.createElement('div');
        createColumn.classList.add('col');


        for (let i = 0; i < 6; i++) {
            const createRow = document.createElement('div');
            createRow.classList.add('row');
            createRow.textContent = BItems[i];
            createColumn.append(createRow);
        }


        Items.push(createColumn);
        MenuItems.appendChild(Items[i]);

    }





    valuesA.appendChild(MenuTitle);
    valuesA.appendChild(MenuDescription);
    valuesA.appendChild(MenuItems);

    return valuesA
}