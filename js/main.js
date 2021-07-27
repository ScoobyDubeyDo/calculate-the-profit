let button = document.querySelector(".btn");
let purchase = document.querySelector("#purchase-price");
let quantity = document.querySelector("#stock-quantity");
let current = document.querySelector("#current-price");
let image = document.querySelector("#img");
let msg = document.querySelector(".message");

button.addEventListener("click", () => {
    // console.log(quantity.value);
    // console.log(current.value);
    // current.disabled = false;
    blank(purchase);
});

function blank(field) {
    if (field.value > 0) {
        if (field.id == "purchase-price") {
            console.log(purchase.value);
        } else if (condition) {
        } else if (condition) {
        } else {
        }
    } else {
        image.src = "./images/error.jpg";
        msg.innerText =
            "Please do not leave the field blank. Enter at least one positive number.";
    }
}
