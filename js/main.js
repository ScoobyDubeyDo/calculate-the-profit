let button = document.querySelector(".btn");
let purchase = document.querySelector("#purchase-price");
let quantity = document.querySelector("#stock-quantity");
let current = document.querySelector("#current-price");
let image = document.querySelector("#img");
let msg = document.querySelector(".message");

button.addEventListener("click", () => {
    calculate(purchase, quantity, current);
});

function calculate(pp, sq, cp) {
    if (
        parseInt(pp.value) > 0 &&
        parseInt(sq.value) > 0 &&
        parseInt(cp.value) > 0
    ) {
        if (pp.value === cp.value) {
            image.src = "./images/error.jpg";
            msg.innerText =
                "Even Steven";
        } else if (parseInt(cp.value) < parseInt(pp.value)) {
            let lossAmt, lossPer;
            lossAmt =
                (parseInt(pp.value) - parseInt(cp.value)) * parseInt(sq.value);
            lossPer =
                ((parseInt(pp.value) - parseInt(cp.value)) * 100) /
                parseInt(pp.value);
            image.src = "./images/loss.jpg";
            msg.innerText = `You lost  ${lossPer.toFixed(
                2
            )}%. Your total loss is ₹${lossAmt}.`;
        } else if (parseInt(cp.value) > parseInt(pp.value)) {
            let profitAmt, profitPer;
            profitAmt =
                (parseInt(cp.value) - parseInt(pp.value)) * parseInt(sq.value);
            profitPer =
                ((parseInt(cp.value) - parseInt(pp.value)) * 100) /
                parseInt(pp.value);
            image.src = "./images/profit.jpg";
            msg.innerText = `You gained ${profitPer.toFixed(
                2
            )}%. Your total profit is ₹${profitAmt}.`;
        }
    } else if (pp.value === "" || sq.value === "" || cp.value === "") {
        image.src = "./images/error.jpg";
        msg.innerText =
            "Please do not leave the fields blank. Enter at least one positive number.";
    } else if (
        parseInt(pp.value) < 0 ||
        parseInt(sq.value) < 0 ||
        parseInt(cp.value) < 0
    ) {
        image.src = "./images/error.jpg";
        msg.innerText =
            "Please enter a positive number, values below 0 are not accepted.";
    }
}
