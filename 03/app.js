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

// First option (with template)
const template = `
    <button class="${buttonSettings.attr?.className}" title="${buttonSettings.attr?.title}">${buttonSettings.text}</button>
`;
sectionForButton.innerHTML += template;

// Second option (without template but with for in loop)
