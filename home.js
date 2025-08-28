//heart icon click event to increment the count
document.querySelectorAll(".heart-icon-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const heartIcon = document.getElementById("heart-icon");
    let currentCount = parseInt(heartIcon.innerText);
    currentCount += 1;
    heartIcon.innerText = currentCount;
    console.log("Heart icon clicked, count updated to:", currentCount);
  });
});

//call button click event to alert the number
// Select all call buttons
document.querySelectorAll(".call-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    // Get current coin balance
    const coinBalanceClass = document.querySelector(".coin-balance");
    let coinBalance = parseInt(coinBalanceClass.innerText);

    if (coinBalance < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    // Deduct 20 coins
    coinBalance -= 20;
    coinBalanceClass.innerText = coinBalance;
    // Get the parent card
    const card = this.closest(".service-container");

    // Extract service name and number from this card
    const serviceName = card.querySelector(".service-name").innerText;
    const number = card.querySelector(".service-number").innerText;

    // Get local time
    const currentTime = new Date().toLocaleTimeString();

    // Create new history item
    const historyItem = document.createElement("div");
    historyItem.className =
      "flex justify-between items-center bg-[#FAFAFA] p-2 mb-2 rounded-md";
    historyItem.innerHTML = `
      <div class="flex flex-col">
        <span class="font-semibold text-sm text-[#111111]">${serviceName}</span>
        <span class="text-xs text-[#5C5C5C]">${number}</span>
      </div>
      <span class="text-xs text-[#111111]">${currentTime}</span>
    `;

    // Append to history
    historyList.prepend(historyItem);

    // Show alert
    alert(`Calling ${serviceName} at ${number}`);
  });
});

// Clear button
const historyList = document.getElementById("call-history-list");
document.getElementById("clear-history").addEventListener("click", function () {
  historyList.innerHTML = ""; // remove all history items
});

//copy button

// For each card copy button
document.querySelectorAll(".copy-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const copyCountEl = document.getElementById("copy-count");
    let copyCount = parseInt(copyCountEl.innerText) || 0;
    // Find the parent card
    const card = this.closest(".service-container");
    const number = card.querySelector(".service-number").innerText;

    // Copy to clipboard
    navigator.clipboard.writeText(number).then(function () {
      // Increase count
      copyCount += 1;
      copyCountEl.innerText = copyCount;
      // Show alert
      alert(`Hotline Number ${number} copied to clipboard!`);
    });
  });
});
