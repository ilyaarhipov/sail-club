let gridViewButton = document.querySelector('.card-view-button-grid');
let listViewButton = document.querySelector('.card-view-button-list');

let cards = document.querySelector('.cards');

gridViewButton.onclick = function () {
    gridViewButton.classList.add('active');
    listViewButton.classList.remove('active');
    cards.classList.remove('list');
}

listViewButton.onclick = function () {
    gridViewButton.classList.remove('active');
    listViewButton.classList.add('active');
    cards.classList.add('list');
}