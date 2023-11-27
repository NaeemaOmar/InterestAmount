let amountInput = document.querySelector('[data-amountInput]');
let interestInput = document.querySelector('[data-interestInput]');
let result = document.querySelector('#result');

function findInterest(a, b){
    interest = a*(b/100)
    total = eval(a) + eval(a*(b/100))
    return result.textContent = `The amount of interest you will pay on the principal amount of R${a} is R${interest}. As a result, you must pay a total of R${total}`
}

let convertBtn = document.querySelector('#convertBtn');

convertBtn.addEventListener('click', ()=> findInterest(amountInput.value, interestInput.value));