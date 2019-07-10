document.addEventListener(`DOMContentLoaded`, function () {

    const dropdownList = document.querySelectorAll(".drop_down_list");
    const li = document.querySelectorAll(".drop_down_list .list_panel li");
    const transportInput = document.querySelector("#transport");

    const price = {
        title : 0,
        color : 0,
        pattern : 0,
        transport : 0
    }

    function sum() {
        const sum = price.title + price.color + price.pattern + price.transport;
        document.querySelector('.sum').innerHTML = sum;
    }

    dropdownList.forEach(function (el) {
        el.addEventListener("click", function () {
            const next = this.querySelector('.list_panel');
            const styleComp = getComputedStyle(next);

            if (styleComp.display === "none") {
                next.style.display = "block";
            } else {
                next.style.display = "";
            }
        });
    });

    li.forEach(function(el) {
        el.addEventListener('click', function() {
            const key = el.parentElement.dataset.key;
            console.log(key);

            const targetLeft = document.querySelector('.summary_panel .panel_left .' + key);

            const targetRight = document.querySelector('.summary_panel .panel_right .' + key);

            targetLeft.innerHTML = this.innerText;
            targetRight.innerHTML = this.dataset.price;

            price[key] = parseInt(this.dataset.price)

            this.closest('.drop_down_list').querySelector('.list_label').innerText = this.innerText;

            console.log(price);
            sum();
        })
    })

    transportInput.addEventListener("click", function () {
        const value = parseInt(this.dataset.price);
        const key = this.dataset.key;
        console.log(key);

        const targetLeft = document.querySelector('.summary_panel .panel_left .' + key);
        const targetRight = document.querySelector('.summary_panel .panel_right .' + key);

        if (this.checked) {

            targetRight.innerText = "Transport";
            targetRight.style.fontSize = "18px";

            targetLeft.innerHTML = "Transport";
            targetRight.innerHTML = this.dataset.price;

            price[key] = parseInt(this.dataset.price)

        } else {
            targetLeft.innerHTML =  "";
            targetRight.innerHTML = "";
            price[key] = 0;
            console.log(price);
        }

        sum();
    });
});