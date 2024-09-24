document.getElementById('btn-donate')
.addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueById('input-amount');
    if(addMoney > 0 && typeof addMoney == 'number'){
        const addBalance = getInputFieldValueById('add-balance');
        const newBalance = addBalance + addMoney;
        document.getElementById('add-balance').innerText = newBalance;
        
    }
    else{
        alert('Fail to donate money')
    }
})