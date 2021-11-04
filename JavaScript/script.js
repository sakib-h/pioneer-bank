let loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  let loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  let transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
})

let depositBtn = document.getElementById("deposit")
depositBtn.addEventListener("click", function (deposit) {

  let depositAmount = document.getElementById("deposit-amount").value;
  let depositNumber = parseFloat(depositAmount);

  let currentDeposit = document.getElementById("current-deposit").innerText;

  let currentDepositNumber = parseFloat(currentDeposit);

  let totalDeposit = currentDepositNumber + depositNumber;

  document.getElementById("current-deposit").innerText = totalDeposit;

  document.getElementById("deposit-amount").value = "";

  let currentBalance = document.getElementById("balance").innerText;
  let balanceNumber = parseFloat(currentBalance);

  let newBalance = totalDeposit + balanceNumber;

  document.getElementById("balance").innerText = newBalance;




})



let withdrawBtn = document.getElementById("withdraw");
withdrawBtn.addEventListener("click", function () {
  let withdrawAmount = document.getElementById("withdraw-amount").value;
  let withdrawAmountNum = parseFloat(withdrawAmount);

  let totalWithdraw = document.getElementById("total-withdraw").innerText;

  let totalWithdrawNum = parseFloat(totalWithdraw);

  let totalWithdrawAmount = withdrawAmountNum + totalWithdrawNum;

  document.getElementById("total-withdraw").innerText = totalWithdrawAmount;

  document.getElementById("withdraw-amount").value = "";

  let currentBalance = document.getElementById("balance").innerText;
  let balanceNumber = parseFloat(currentBalance);

  let newCurrentBalance = balanceNumber - totalWithdrawAmount;

  document.getElementById("balance").innerText = newCurrentBalance;

})








