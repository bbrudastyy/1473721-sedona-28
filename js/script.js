var interest_btn = document.querySelector(".interest-btn");
var modal = document.querySelector(".interest-form");
var date_start = modal.querySelector(".date-start");
var date_end = modal.querySelector(".date-end");


interest_btn.addEventListener("click", function (evt) {
    if (modal.classList.contains("interest-form-hidden")) {
        evt.preventDefault();
        modal.classList.remove("interest-form-hidden");

    }
    else {
        evt.preventDefault();
        modal.classList.add("interest-form-hidden");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (!modal.classList.contains("interest-form-hidden")) {
            evt.preventDefault();
            modal.classList.add("interest-form-hidden");
        }
    }
});

modal.addEventListener("submit", function (evt) {
    if ((date_start.value == '') || (date_end.value == '')) {
        alert("Введите дату");
        evt.preventDefault();
    }
    else {
        alert("Отправлено");
        evt.preventDefault();
    }
});


