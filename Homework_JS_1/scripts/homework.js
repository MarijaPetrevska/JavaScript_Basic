// I defined phonePrice, taxRate and quantity of phones
let phonePrice=119.95;
// The tax rate is 5%, the tax will be 0.05 (5/100=0.05)
let taxRate=0.05;
let quantity=30;

// The tax amount for one phone
let taxAmountForOnePhone=phonePrice*taxRate;
console.log("The tax amount for one phone is: ");
console.log(taxAmountForOnePhone);

let priceOfOnePhoneWithTax=phonePrice+taxAmountForOnePhone;
//  The price of one phone
console.log("The price of one phone is:");
console.log(phonePrice);
//  The price of one phone including tax
console.log("The price of one phone with tax amount is:")
console.log(priceOfOnePhoneWithTax);


let totalPrice=quantity*phonePrice;
let totalPriceWithTax=quantity*priceOfOnePhoneWithTax;
// The price(total) of 30 phones with no tax amount
console.log("The price of 30 phone with no tax amount is: ");
console.log(totalPrice);

// The price of 30 phones including the tax amount
console.log("The price of 30 Phones including the tax amount is:")
console.log(totalPriceWithTax);