// loaded to be handled by bundler
import './style.css';

// import content values
import LunchMenu from './Lunch';
import DinnerMenu from './Dinner';

// Render Content
function renderComponent() {
    // inner core component
    const innerContent = document.createElement('div');
    innerContent.setAttribute('id', 'Lunch');
    innerContent.classList.add('innerContent');

    // outer core component
    const outerContent = document.createElement('div');
    outerContent.classList.add('outerContent')

    // user input buttons
    const lunchButton = document.createElement('button');
    lunchButton.classList.add('button-89');
    lunchButton.textContent = 'Lunch';

    const dinnerButton = document.createElement('button');
    dinnerButton.classList.add('button-89');
    dinnerButton.textContent = 'Dinner';

    // user input event listeners
    lunchButton.addEventListener('click', renderLunchMenu);
    dinnerButton.addEventListener('click', renderDinnerMenu);

    // make a multiple appendChild
    // append buttons to outer core component
    outerContent.appendChild(lunchButton);
    outerContent.appendChild(dinnerButton);

    // append core components to html document
    document.body.appendChild(outerContent);
    document.body.appendChild(innerContent);

    // append initial values to inner core component
    innerContent.appendChild(LunchMenu());

    // render component values
    function renderLunchMenu() {
        innerContent.id = 'Lunch';
        changeValues(innerContent.id);
    }

    function renderDinnerMenu() {
        innerContent.id = 'Dinner';
        changeValues(innerContent.id);
    }

    // change component values
    function changeValues(id) {
        if (id == 'Lunch') {
            innerContent.textContent = '';
            innerContent.appendChild(LunchMenu());
        }

        if (id == 'Dinner') {
            innerContent.textContent = '';
            innerContent.appendChild(DinnerMenu());
        }
    }
}


renderComponent();