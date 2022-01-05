// ID
const incomeInput   = document.getElementById('totalIncome');
const foodInput     = document.getElementById('foodCost');
const rentInput     = document.getElementById('rentCost');
const clothInput    = document.getElementById('clothCost');

const savingInput   = document.getElementById('saveInput');

// Event listeners for button
document.getElementById('calculateCost').addEventListener('click', calculateCost);
document.getElementById('Savings-btn').addEventListener('click', calculateSavingAmount);
document.getElementById('reset-value').addEventListener('click', function(){
    window.location.reload();
});


// Functions
function calculateCost(){
    if(isNaN(incomeInput.value) || isNaN(foodInput.value) || isNaN(rentInput.value) || isNaN(clothInput.value)){
        // validation message for string error
        const stingError = document.getElementById('validationtext');
        stingError.style.display = 'block';
    }
    else if (incomeInput.value < 0 || foodInput.value < 0 || rentInput.value < 0 || clothInput.value < 0){
        // validation message for negative value
        const stingError = document.getElementById('nagativeValidationtext');
        stingError.style.display = 'block';
    }
    else{
        CalculateTotalExpense();

        //calculating balance.
        const totalIncome = parseFloat(incomeInput.value);
        if (parseFloat(totalExpense.innerText) > totalIncome){
            //Handling error for extra Expense
            const stingError = document.getElementById('expenseValidationtext');
            stingError.style.display = 'block';
        }
        else{
            const balance =  totalIncome - parseFloat(totalExpense.innerText);
            document.getElementById('balance').innerText = balance;

            // clearing validation text
            document.getElementById('validationtext').innerHTML = ``;
            return balance;
        }
    }

};

// Calculating total expense
function CalculateTotalExpense(){
    // converting input value
    const foodCost  = parseFloat(foodInput.value);
    const rentCost  = parseFloat(rentInput.value);
    const clothCost = parseFloat(clothInput.value);

    const totalExpense = foodCost + rentCost + clothCost;
    document.getElementById('totalExpense').innerText = totalExpense;

    return totalExpense; 
};

function calculateSavingAmount(){
    // converting input value
    const savingInputNum    = parseFloat(savingInput.value);
    const totalIncome       = parseFloat(incomeInput.value);

    if(savingInputNum < 0){
        //Handling error for negative savings value
        errorMsg('validationtext-save-amount');
    }
    else{
        calculateCost();
        balanceAmount = parseFloat(balance.innerText);
        
        //calculating savingAmount
        const savingAmount =  (totalIncome / 100) * savingInputNum;

        if (savingAmount > balanceAmount){
            // handing error for savings amount
            const stingError = document.getElementById('validationtext-save-amount');
            stingError.style.display = 'block';
        }
        else{
            //Updating Savings Amount
            document.getElementById('saving-balance').innerText = savingAmount;

            //calculating Remaining Balance
            const remainingBalance =  balanceAmount - savingAmount;
            document.getElementById('remaining-balance').innerText = remainingBalance;

            document.getElementById('validationtext-save-amount').innerHTML = ``;
        }
    }
};