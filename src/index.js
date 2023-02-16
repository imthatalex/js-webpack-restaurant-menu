// Render Content

function renderComponent() {
    // if tab a is clicked render function a else if b is clicked...


    const divElement = document.createElement('div');
    divElement.textContent = 'Hello World';


    function functionA() {
        divElement.textContent = 'A';
    }

    function functionB() {
        divElement.textContent = 'B';
    }

    function functionC() {
        divElement.textContent = 'C';
    }

    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    const buttonA = document.createElement('button');
    buttonA.textContent = 'Button A';

    const buttonB = document.createElement('button');
    buttonB.textContent = 'Button B';

    const buttonC = document.createElement('button');
    buttonC.textContent = 'Button C';


    buttonA.addEventListener('click', functionA);
    buttonB.addEventListener('click', functionB);
    buttonC.addEventListener('click', functionC);


    // make a multiple appendChild
    content.appendChild(divElement);
    content.appendChild(buttonA);
    content.appendChild(buttonB);
    content.appendChild(buttonC);


    document.body.appendChild(content);
}


renderComponent();







// DOM Manipulation : SPA : Switching Between Content via User Input