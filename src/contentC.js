export default function C() {
    // component values
    const MenuTitle = document.createElement('h2');
    MenuTitle.textContent = 'Menu Title C';

    const MenuItem = document.createElement('h4');
    MenuItem.textContent = 'Menu Item C';

    return (
        MenuTitle,
        MenuItem
    )
}