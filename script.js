// LIGHT & DARK THEME
const lightButton = document.getElementById('light');
const darkButton = document.getElementById('dark');
const themeElements = document.querySelectorAll('.light-theme');
const themes = ['light-theme', 'dark-theme'];

// Clear any theme currently applied
const clearTheme = () => {
    themes.forEach(theme => {
        themeElements.forEach(themeElements => {
        if (themeElements.classList.contains(theme)) {
        themeElements.classList.remove(theme);
        }})
    })}

// Applies new theme
const handleTheme = (theme) => {
    clearTheme();

    themeElements.forEach(themeElements => {
    if (themeElements.classList.contains(theme)) {
    return;
    } else {
    themeElements.classList.add(theme);
    }
    })}

lightButton.addEventListener('click', function() {handleTheme('light-theme')});
darkButton.addEventListener('click', function() {handleTheme('dark-theme')});


// ACCENT COLOURS
const blueButton = document.getElementById('blue');
const greenButton = document.getElementById('green');
const coralButton = document.getElementById('coral');
const purpleButton = document.getElementById('purple');
const clearButton = document.getElementById('clear');
const buttons = document.querySelectorAll('button');

// Array of available accent colours
const accentColours = ['blue', 'green', 'coral', 'purple'];

// Clears any accent colour currently applied
const clearAccent = () => {
    accentColours.forEach(accentColour => {
        buttons.forEach(buttons => {
        if (buttons.classList.contains(accentColour)) {
        buttons.classList.remove(accentColour);
        }})
    })
}

// Applies accent colour
const handleAccent = (colour) => {
    clearAccent();

    buttons.forEach(buttons => {
        if (buttons.classList.contains(colour)) {
        return;
        } else {
        buttons.classList.add(colour);
        }
    })}


blueButton.addEventListener('click', function() {handleAccent('blue')});
greenButton.addEventListener('click', function() {handleAccent('green')});
coralButton.addEventListener('click', function() {handleAccent('coral')});
purpleButton.addEventListener('click', function() {handleAccent('purple')});
clearButton.addEventListener('click', clearAccent);