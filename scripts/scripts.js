// Toggle Donation and History Button
const historyContainer = document.getElementById("history-container");
const donationBtn = document.getElementById("donation-btn");

const donationContainer = document.getElementById("donation-container");
const historyBtn = document.getElementById("history-btn");

historyBtn.addEventListener("click", () => {
  donationContainer.classList.add("hidden");
  historyContainer.classList.remove("hidden");
});
donationBtn.addEventListener("click", () => {
  historyContainer.classList.add("hidden");
  donationContainer.classList.remove("hidden");
});

//Obtain Existing Amount
