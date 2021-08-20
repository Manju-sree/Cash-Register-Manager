const billAmt = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const message = document.querySelector("#error-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.addEventListener('click', ValidateBillAndCashAmount);

function ValidateBillAndCashAmount() {
    hideMsg();
    if (billAmt.value > 0) {
        if (cashGiven.value > billAmt.value) {
            const amountToBeReturned = cashGiven.value - billAmt.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Do you wanna wash plates?👿")
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
    if (cashGiven.value == billAmt.value) {
        showMessage("Thank you!! , for providing exact bill amount🙂");
    }
}

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}


function hideMsg() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerHTML = msg;
}