export default function B() {
    // component values
    const MenuTitle = document.createElement('h2');
    MenuTitle.textContent = 'Menu Title B';

    const MenuItem = document.createElement('h4');
    MenuItem.textContent = 'Menu Item B';

    return (
        MenuTitle,
        MenuItem
    )
}