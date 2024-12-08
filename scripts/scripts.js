const historyContainer = document.getElementById("history-container");
const donationBtn = document.getElementById("donation-btn");

const donationContainer = document.getElementById("donation-container");
const historyBtn = document.getElementById("history-btn");

// Toggle Donation and History Button
historyBtn.addEventListener("click", () => {
  donationContainer.classList.add("hidden");
  historyContainer.classList.remove("hidden");
});
donationBtn.addEventListener("click", () => {
  historyContainer.classList.add("hidden");
  donationContainer.classList.remove("hidden");
});

//Obtain Existing Balance
let currentTotalBalance = document.getElementById("account-balance");
let currentNoakhaliBalance = document.getElementById("balance-noakhali");
let currentFeniBalance = document.getElementById("balance-feni");
let currentQuotaBalance = document.getElementById("balance-quota");

// Check Input Number
function numberChecker(testCase) {
  const validNumberRegex = /^[0-9]+$/; // Regular Expression for Positive Numbers
  if (!validNumberRegex.test(testCase)) {
    alert(
      "Invalid input! Only positive numbers are allowed. No negative numbers, special characters, or spaces."
    );
    return false;
  }
  return true;
}

const donateNowChoices = {
  noakhali: ["donatedAmountNoakhali", "donate-noakhali-btn"],
  feni: ["donatedAmountFeni", "donate-feni-btn"],
  quota: ["donatedAmountQuota", "donate-quota-btn"],
};

for (const donateNow in donateNowChoices) {
  const inputID = document.getElementById(donateNowChoices[donateNow][0]);
  const btnID = document.getElementById(donateNowChoices[donateNow][1]);
  btnID.addEventListener("click", (e) => {
    const inputAmount = inputID.value;
    const isNumberValid = numberChecker(inputAmount);

    if (isNumberValid) {
      const donatedAmount = parseInt(inputAmount);
      const currentBalance = parseInt(currentTotalBalance.innerText);
      if (donatedAmount > currentBalance) {
        alert("Sorry, You don't have sufficient balance!!");
      } else {
        const newBalance = currentBalance - donatedAmount;
        currentTotalBalance.innerText = newBalance;
        my_modal_5.showModal();
      }
    }
  });
}
