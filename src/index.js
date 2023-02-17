// loaded to be handled by bundler
import './style.css';

// import content values
import BreakfastMenu from './Breakfast';
import LunchMenu from './Lunch';
import DinnerMenu from './Dinner';

// Render Content
function renderComponent() {
    // inner core component
    const innerContent = document.createElement('div');
    innerContent.setAttribute('id', 'A');
    innerContent.classList.add('innerContent');

    // outer core component
    const outerContent = document.createElement('div');
    outerContent.classList.add('outerContent')

    // user input buttons
    const buttonA = document.createElement('button');
    buttonA.textContent = 'Button A';

    const buttonB = document.createElement('button');
    buttonB.textContent = 'Button B';

    const buttonC = document.createElement('button');
    buttonC.textContent = 'Button C';

    // user input event listeners
    buttonA.addEventListener('click', functionA);
    buttonB.addEventListener('click', functionB);
    buttonC.addEventListener('click', functionC);

    // make a multiple appendChild
    // append buttons to core component
    outerContent.appendChild(buttonA);
    outerContent.appendChild(buttonB);
    outerContent.appendChild(buttonC);

    // append core component to html document
    document.body.appendChild(outerContent);
    document.body.appendChild(innerContent);

    // append initial values to core component
    innerContent.appendChild(BreakfastMenu());

    // render component values
    function functionA() {
        innerContent.id = 'A';
        changeValues(innerContent.id);
    }

    function functionB() {
        innerContent.id = 'B';
        changeValues(innerContent.id);
    }

    function functionC() {
        innerContent.id = 'C';
        changeValues(innerContent.id);
    }

    // change component values
    function changeValues(id) {
        // switch statement
        if (id == 'A') {
            // clear value
            innerContent.textContent = '';
            innerContent.appendChild(BreakfastMenu());
        }

        if (id == 'B') {
            innerContent.textContent = '';
            innerContent.appendChild(LunchMenu());
        }

        if (id == 'C') {
            innerContent.textContent = '';
            innerContent.appendChild(DinnerMenu());
        }
    }
}


renderComponent();







// DOM Manipulation : SPA : Switching Between Content via User Input

// Assignment
// Export Content Values as Modules
