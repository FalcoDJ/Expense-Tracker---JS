const expenseName = document.querySelector('#expense-name');
const expenseCost = document.querySelector('#expense-cost');
const expenseDate = document.querySelector('#expense-date');
const submitButton = document.querySelector('.submit-button');
const todoSection = document.querySelector('#expenses');
const errorArea = document.querySelector('#error-area');
const outputArea = document.querySelector('#expendature-output');

submitButton.addEventListener('click', onSubmit);

function calcExpendature() {
    let totalExpendature = 0;
    document.querySelectorAll('.cost').forEach((cost) => {
        const expendature = Number(cost.innerText);
        totalExpendature += expendature
    });

    outputArea.innerText = `$ ${totalExpendature}`;
}

function onSubmit(e) {
    if (expenseName.value === '' || expenseCost === '' || expenseDate === '') {
        errorArea.innerText = 'Please fill out field ^'
        errorArea.className = 'error-on';
        setTimeout(function() {
            errorArea.innerText = '';
            errorArea.className = '';
        }, 3000);
    } else {
        const tr = document.createElement('tr');
        tr.classList = 'item';
        tr.innerHTML = `<button>X</button><td>${expenseName.value}</td><td class="cost">${expenseCost.value}</td><td>${expenseDate.value}</td>`;
        todoSection.appendChild(tr);
        tr.querySelector('button').addEventListener('click', (e) => {
            tr.remove();
            calcExpendature();
        });

        calcExpendature();
        expenseCost.value = '';
        expenseName.value = '';
        expenseDate.value = '';
    }
}