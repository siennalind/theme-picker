// LIGHT & DARK THEME
const lightButton = document.getElementById('light');
const darkButton = document.getElementById('dark');
const h1 = document.getElementsByTagName('h1');
const main = document.getElementsByTagName('main');
const body = document.getElementsByTagName('body');
const themeElements = document.querySelectorAll('.light-theme');

const clearTheme = () => {
    themeElements.forEach(themeElements => {
    if (themeElements.hasAttribute('class')) {
    themeElements.removeAttribute('class');
    }
    })
}

const handleTheme = (theme) => {
    clearTheme();

    themeElements.forEach(themeElements => {
    if (themeElements.classList.contains(theme)) {
    return;
    } else {
    themeElements.classList.add(theme);
    }
    })
}

lightButton.addEventListener('click', function() {handleTheme('light-theme')});
darkButton.addEventListener('click', function() {handleTheme('dark-theme')});

// const clearTheme = () => {
//     if (document.body.hasAttribute('class')) {
//     document.body.removeAttribute('class');
//     }
// }

// const handleLightTheme = () => {
//     clearTheme();

//     if (document.body.classList.contains('light-theme')) {
//     return
//     } else {
//     document.body.classList.add('light-theme');
//     }}

// const handleDarkTheme = () => {
//     clearTheme();

//     if (document.body.classList.contains('dark-theme')) {
//     return;
//     } else {
//     document.body.classList.add('dark-theme');
//     }}


// CLEAR BUTTON COLOURS
const clearAccent = () => {
    buttons.forEach(buttons => {
        if (buttons.hasAttribute('class')) {
        buttons.removeAttribute('class');
        }})
}

const handleAccent = (colour) => {
    clearAccent();

    buttons.forEach(buttons => {
        if (buttons.classList.contains(colour)) {
        return;
        } else {
        buttons.classList.add(colour);
        }
    })}

// COLOR THEMES
const blueButton = document.getElementById('blue');
const greenButton = document.getElementById('green');
const coralButton = document.getElementById('coral');
const purpleButton = document.getElementById('purple');
const buttons = document.querySelectorAll('button');


blueButton.addEventListener('click', function() {handleAccent('blue')});
greenButton.addEventListener('click', function() {handleAccent('green')});
coralButton.addEventListener('click', function() {handleAccent('coral')});
purpleButton.addEventListener('click', function() {handleAccent('purple')});