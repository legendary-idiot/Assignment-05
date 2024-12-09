const historyContainer = document.getElementById("history-container");
const donationBtn = document.getElementById("donation-btn");

const donationContainer = document.getElementById("donation-container");
const historyBtn = document.getElementById("history-btn");

// Toggle Donation and History Button
function classModifier(
  primaryContainer,
  secondaryContainer,
  primaryBtn,
  secondaryBtn
) {
  // Container Toggle
  primaryContainer.classList.remove("hidden");
  secondaryContainer.classList.add("hidden");

  // Button Background Color Toggle
  primaryBtn.classList.add("bg-[#b4f461]", "text-[#111111]");
  primaryBtn.classList.remove("border");
  secondaryBtn.classList.remove("bg-[#b4f461]", "text-[#111111]");
  secondaryBtn.classList.add("text-[#111111B2]", "border");
}
// Event Listener on the Buttons
historyBtn.addEventListener("click", () => {
  classModifier(historyContainer, donationContainer, historyBtn, donationBtn);
});
donationBtn.addEventListener("click", () => {
  classModifier(donationContainer, historyContainer, donationBtn, historyBtn);
});

// Obtain Existing Balance
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
  noakhali: [
    "donatedAmountNoakhali",
    "donate-noakhali-btn",
    currentNoakhaliBalance,
  ],
  feni: ["donatedAmountFeni", "donate-feni-btn", currentFeniBalance],
  quota: ["donatedAmountQuota", "donate-quota-btn", currentQuotaBalance],
};

for (const donateNow in donateNowChoices) {
  const inputID = document.getElementById(donateNowChoices[donateNow][0]);
  const btnID = document.getElementById(donateNowChoices[donateNow][1]);
  const selectedEvent = donateNowChoices[donateNow][2];
  btnID.addEventListener("click", () => {
    const inputAmount = inputID.value;
    const isNumberValid = numberChecker(inputAmount);

    if (isNumberValid) {
      const donatedAmount = parseInt(inputAmount);
      const currentBalance = parseInt(currentTotalBalance.innerText);
      const selectedEventBalance = parseInt(selectedEvent.innerText);
      if (donatedAmount > currentBalance) {
        alert("Sorry, You don't have sufficient balance!!");
      } else {
        const newBalance = currentBalance - donatedAmount;
        currentTotalBalance.innerText = newBalance;
        selectedEvent.innerText = selectedEventBalance + donatedAmount;
        my_modal_5.showModal();
        inputID.value = "";
      }
    }
  });
}
