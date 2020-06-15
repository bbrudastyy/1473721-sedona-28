var interest_btn = document.querySelector(".interest-btn");
var modal = document.querySelector(".interest-form");
var date_start = modal.querySelector(".input-date-start");
var date_end = modal.querySelector(".input-date-end");
var adults = modal.querySelector(".amount-adults");
var children = modal.querySelector(".amount-children");

var am = modal.querySelector(".minus-adults");
var ap = modal.querySelector(".plus-adults");
var cm = modal.querySelector(".minus-children");
var cp = modal.querySelector(".plus-children");
var count_adults = 2;
var count_children = 0;

var isStorageSupport = true;
var storage_adults = "";
var storage_children = "";

modal.classList.add("interest-form-hidden");

try {
    storage_adults = localStorage.getItem("Amount-Adults");
    storage_children = localStorage.getItem("Amount-Children");
} catch (err) {
    isStorageSupport = false;
}
am.addEventListener("click", function () {
    count_adults = parseInt(adults.value);
    count_adults = count_adults - 1;
    if (count_adults < 0) {
        count_adults = 0;
    }
    adults.value = count_adults;
})

ap.addEventListener("click", function () {
    count_adults = parseInt(adults.value);
    count_adults = count_adults + 1;
    adults.value = count_adults;

})
cm.addEventListener("click", function () {
    count_children = parseInt(children.value);
    count_children = count_children - 1;
    if (count_children < 0) {
        count_children = 0;
    }
    children.value = count_children;
})
cp.addEventListener("click", function () {
    count_children = parseInt(children.value);
    count_children = count_children + 1;
    children.value = count_children;
})


interest_btn.addEventListener("click", function (evt) {
    if (modal.classList.contains("interest-form-hidden")) {
        evt.preventDefault();
        modal.classList.remove("interest-form-hidden");
        modal.classList.remove("modal-error");
        if (storage_adults || storage_children) {
            adults.value = storage_adults;
            children.value = storage_children;
        }

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
            modal.classList.remove("modal-error");
        }
    }
});

modal.addEventListener("submit", function (evt) {
    if ((!date_start.value || !date_end.value) || (parseInt(adults.value) == 0 && parseInt(children.value) == 0) || (parseInt(adults.value) < 0 || parseInt(children.value) < 0)) {
        modal.classList.remove("modal-error");
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add("modal-error");
        evt.preventDefault();
    }
    else {
        if (isStorageSupport) {
            localStorage.setItem("Amount-Adults", adults.value);
            localStorage.setItem("Amount-Children", children.value);
        }
    }
});



