let blogArticles = document.querySelectorAll('.blog-article.short');

for (let blogArticle of blogArticles) {
    let moreButton = blogArticle.querySelector('.more');
    moreButton.onclick = function () {
        blogArticle.classList.remove('short');
    }
}

