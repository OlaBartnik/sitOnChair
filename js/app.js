document.addEventListener(`DOMContentLoaded`, function () {

    var arrows = document.querySelectorAll(".list_arrow");

    var panelRightValue = document.querySelectorAll(".value");
    console.log(panelRightValue);
    // var panelArray = Array.from(panelRightValue);
    // var listPanel = document.querySelectorAll(".panel_right");

    var values = document.querySelectorAll(".value");
    // console.log(values);
    var valuesArray = Array.from(values);
    // console.log(valuesArray);
    // var parse = parseInt(valuesArray);
    // console.log(parse);
    var price = document.querySelectorAll("[data-price]");
    console.log(price);

    var chair = document.querySelector(".title");
    var color = document.querySelector(".color");
    var pattern = document.querySelector(".pattern");
    var transport = document.querySelector(".transport");

    var chairValue = document.querySelector(".title.value");
    var colorValue = document.querySelector(".color.value");
    var patternValue = document.querySelector(".pattern.value");
    var transportValue = document.querySelector(".transport.value");

    // chairValue.dataset.price = "0";
    // colorValue.dataset.price = "0";
    // patternValue.dataset.price = "0";
    // transportValue.dataset.price = "0";


    var chairList = document.querySelector("#chair");
    var chairItems = chairList.querySelectorAll("li");

    var colorList = document.querySelector("#color");
    var colorItem = colorList.querySelectorAll("li");

    var patternList = document.querySelector("#pattern");
    var patternItem = patternList.querySelectorAll("li");

    var transportInput = document.querySelector("#transport");

    // var sum = document.querySelector(".sum strong");


    arrows.forEach(function (arrow) {
        arrow.addEventListener("click", function () {
            if (this.nextElementSibling.style.display === "none") {
                this.nextElementSibling.style.display = "block";


                chairItems.forEach(function (item) {
                    item.addEventListener("click", function () {

                        chair.innerText = `Chair ${this.innerText}`;
                        chairValue.innerText = this.dataset.price;
                        // chairValue.dataset.price = this.dataset.price;
                        console.log(this.dataset.price);
                        // panelRightValue.forEach(function (v) {
                        //     console.log(v.dataset.price);
                        // });


                    });
                });

                colorItem.forEach(function (item) {
                    item.addEventListener("click", function () {

                        color.innerText = this.innerText;
                        color.style.fontSize = "18px";
                        colorValue.style.fontSize = "18px";
                        colorValue.innerText = this.dataset.price;
                        // colorValue.dataset.price = this.dataset.price;
                        console.log(this.dataset.price);
                        // panelRightValue.forEach(function (v) {
                        //     console.log(v.dataset.price);
                        // });


                    });
                });

                patternItem.forEach(function (item) {
                    item.addEventListener("click", function () {

                        pattern.innerText = this.innerText;
                        pattern.style.fontSize = "18px";
                        patternValue.style.fontSize = "18px";
                        patternValue.innerText = this.dataset.price;
                        // patternValue.dataset.price = this.dataset.price;
                        // panelRightValue.forEach(function (v) {
                        //     console.log(v.dataset.price);
                        // });
                        console.log(this.dataset.price);


                    });

                });


            } else {
                this.nextElementSibling.style.display = "none";
            }


        });


    });

    transportInput.addEventListener("click", function () {
        if (this.checked) {
            transport.innerText = "Transport";
            transport.style.fontSize = "18px";
            transportValue.style.fontSize = "18px";
            transportValue.innerText = this.dataset.price;
            // transportValue.dataset.price = this.dataset.price;
            console.log(this.dataset.price);


        }
        else {
            transport.innerText = "";
            transportValue.innerText = "";
            // transportValue.dataset.price = "0";
        }
        // panelRightValue.forEach(function (v) {
        //     console.log(v.dataset.price);
        // });

    });

    // panelRightValue.forEach(function (v) {
    //     console.log(v.dataset.price);
    //     price.forEach(function (pr) {
    //         pr.addEventListener("click", function () {
    //             console.log(v.dataset.price);
    //
    //         })
    //
    //     })
    // });





    // price.forEach(function (pr) {
    //     pr.addEventListener("click", function () {
    //         panelRightValue.forEach(function (v) {
    //            console.log(v.dataset.price);
    //         });
    //     });
    //
    // });


//
// var total = 0;
//     price.forEach(function (pr) {
//
//         pr.addEventListener("click", function () {
//             total += parseInt(this.dataset.price);
//             sum.innerText = total;
//
//
//         });
//
//
//
//     });

// })


});