let darkThemButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');
let serifFontButton = document.querySelector('.font-button-serif');

darkThemButton.onclick = function () {
    darkThemButton.classList.add('active');
    lightThemeButton.classList.remove('active');
    document.body.classList.add('dark');
}

lightThemeButton.onclick = function () {
    darkThemButton.classList.remove('active');
    lightThemeButton.classList.add('active');
    document.body.classList.remove('dark');
}

serifFontButton.onclick = function () {
    sansSerifFontButton.classList.remove('active');
    serifFontButton.classList.add('active');
    document.body.classList.add('serif');
}

sansSerifFontButton.onclick = function () {
    sansSerifFontButton.classList.add('active');
    serifFontButton.classList.remove('active');
    document.body.classList.remove('serif');
}