console.log('DOM');

const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Click me!',
}

// My code: 
const sectionForButton = document.querySelector('.parent-for-button');

// First method (with template)
const template = `
    <button class="${buttonSettings.attr?.className}" title="${buttonSettings.attr?.title}">${buttonSettings.text}</button>
`;
sectionForButton.innerHTML += template;

// Second method (without template)
const button2 = document.createElement('button');
button2.classList.add(`${buttonSettings.attr.className}`);
button2.setAttribute('title' , buttonSettings.attr.title);

button2.style.border = `${buttonSettings.css.border}`;
button2.style.padding = `${buttonSettings.css.padding}`;
button2.style.color = `${buttonSettings.css.color}`;

button2.innerHTML += `${buttonSettings.text}`;

sectionForButton.appendChild(button2);

// Third method (for in loop)