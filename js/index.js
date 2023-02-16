function getInputFieldById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldAmount = parseFloat(inputField.value); 
    inputField.value = '';
    return inputFieldAmount;
}

function couponText(couponId){
    const inputField = document.getElementById(couponId);
    const couponInputString = inputField.value;
    inputField.value = '';
    return couponInputString;
}

function getElementById(elementId)
{
    const elementField = document.getElementById(elementId);
    const elementFieldAmount = parseFloat(elementField.innerText); 
    return elementFieldAmount;
}

function getTotalBillById(elementId)
{
    const elementField = document.getElementById(elementId);
    const totalElementFieldAmount = parseFloat(elementField.innerText); 
    return totalElementFieldAmount;
}

function finalElementBillById(elementId,finalTotalBill){
    const finalElementText = document.getElementById(elementId);
    finalElementText.innerText = finalTotalBill;
}

document.getElementById('burgerAdd-btn').addEventListener('click',function(){
    const burgerItem = getInputFieldById('burgerInput');
    if( burgerItem > 0)
    {
        const burgerPerUnitPrice = getElementById('burgerPrice');
        const totalBurgerPrice = burgerItem * burgerPerUnitPrice;
        finalElementBillById('final-bill', totalBurgerPrice);
        // const discountBill = (totalBurgerPrice-((totalBurgerPrice*30)/100));
        // finalElementBillById('discount-bill',discountBill);
    }
    else if(burgerItem < 0){
        alert('quantity is not less than 1');
    }
    else{
        alert('empty is not allow');
    }
})

document.getElementById('coupon-btn').addEventListener('click',function(){
    const couponFieldValue = couponText('couponInput');
    const totalBillWithoutDisc = getElementById('final-bill');
    if(couponFieldValue === 'DESC30')
    {
        const discountBill = (totalBillWithoutDisc-((totalBillWithoutDisc*30)/100));
        finalElementBillById('discount-bill',discountBill);
    }
    else{
        alert('Coupon is not exit please try again');
    }
})

document.getElementById('nachosAdd-btn').addEventListener('click',function(){
    const nachosItem = getInputFieldById('nachosInput');
    if( nachosItem > 0)
    {
        const nachosPerUnitPrice = getElementById('nachosPrice');
        const totalNachosPrice = nachosItem * nachosPerUnitPrice;
        finalElementBillById('final-bill', totalNachosPrice);
        const discountBill = (totalNachosPrice-((totalNachosPrice*30)/100));
        finalElementBillById('discount-bill',discountBill);
    }
    else if(nachosItem < 0){
        alert('quantity is not less than 1');
    }
    else{
        alert('empty is not allow');
    }
})

document.getElementById('pizzaAdd-btn').addEventListener('click',function(){
    const pizzaItem = getInputFieldById('pizzaInput');
    if( pizzaItem > 0)
    {
        const pizzaPerUnitPrice = getElementById('pizzaPrice');
        const totalPizzaPrice = pizzaItem * pizzaPerUnitPrice;
        finalElementBillById('final-bill', totalPizzaPrice);
        const discountBill = (totalPizzaPrice-((totalPizzaPrice*30)/100));
        finalElementBillById('discount-bill',discountBill);
    }
    else if(pizzaItem < 0){
        alert('quantity is not less than 1');
    }
    else{
        alert('empty is not allow');
    }
})