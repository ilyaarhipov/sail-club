let mainPhoto = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');

for (let activePhoto of previews) {
    activePhoto.onclick = function (evt) {
        evt.preventDefault();

        let currentActive = document.querySelector('.preview-list .active-item');
        currentActive.classList.remove('active-item');
        activePhoto.classList.add('active-item');
        mainPhoto.src = activePhoto.href;
    }
}