document.addEventListener(`DOMContentLoaded`, function () {

    var boxArticles = document.querySelectorAll(".box");


    boxArticles.forEach(function (boxArticle) {
        boxArticle.addEventListener("mouseover", function () {
            var boxTitle = this.querySelector(".box_title");
            boxTitle.classList.add("visuallyhidden");
        });
        boxArticle.addEventListener("mouseout", function () {
            var boxTitle = this.querySelector(".box_title");
            boxTitle.classList.remove("visuallyhidden");
        });

    });


});