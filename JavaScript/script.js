let loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  let loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  let transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
})

let depositBtn = document.getElementById("deposit")
depositBtn.addEventListener("click", function () {

  let depositAmount = document.getElementById("deposit-amount").value;
  let depositNumber = parseFloat(depositAmount);

  let currentDeposit = document.getElementById("current-deposit").innerText;

  let currentDepositNumber = parseFloat(currentDeposit);

  let totalDeposit = currentDepositNumber + depositNumber;

  document.getElementById("current-deposit").innerText = totalDeposit;
})





