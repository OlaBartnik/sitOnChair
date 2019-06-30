document.addEventListener(`DOMContentLoaded`, function () {

    var arrows = document.querySelectorAll(".list_arrow");
    var list = document.querySelectorAll(".list_panel");
    var panelLeft = document.querySelector(".panel_left");

    var chairValue = document.querySelector(".title");
    var colorValue = document.querySelector(".color");
    var patternValue = document.querySelector(".pattern");


    var chair = document.querySelector("#chair");
    var chairItems = chair.querySelectorAll("li");

    var color = document.querySelector("#color");
    var colorItem = color.querySelectorAll("li");

    var pattern = document.querySelector("#pattern");
    var patternItem = pattern.querySelectorAll("li");

    arrows.forEach(function (arrow) {
        arrow.addEventListener("click", function () {
            if (this.nextElementSibling.style.display === "none") {
                this.nextElementSibling.style.display = "block";


                chairItems.forEach(function (item) {
                    item.addEventListener("click", function () {

                        chairValue.innerText = `Chair ${this.innerText}`;

                    });
                });


                colorItem.forEach(function (item) {
                    item.addEventListener("click", function () {

                        colorValue.innerText = this.innerText;
                        colorValue.style.fontSize ="20px";

                    });
                });

                patternItem.forEach(function (item) {
                    item.addEventListener("click", function () {

                        patternValue.innerText = this.innerText;
                        patternValue.style.fontSize ="20px";

                    });
                });






                // forEach(function (li) {
                //     li.addEventListener("click", function () {
                //         chair.appendChild(li);
                //     })
                // });

            } else {
                this.nextElementSibling.style.display = "none";
            }
        });


    });
});