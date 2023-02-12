// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input field
    // For input field use .value to the the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositsAmountString = depositField.value;
    const newDepositsAmount = parseFloat(newDepositsAmountString);
    // console.log(typeof newDepositsAmount);
    // console.log(depositAmount);

    // step-3: get the current deposit total
    // for non-input(element other than input, textarea) use innerText to get the text 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log(typeof previousDepositTotal);
    // step-4: add numbers to set the total deposit 
    const currentDepositTotal = previousDepositTotal + newDepositsAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get ballance current total
    const ballanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = ballanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositsAmount;
    // set the balance total
    ballanceTotalElement.innerText = currentBalanceTotal;

// step=7: clear the deposit field
depositField.value = '';
})