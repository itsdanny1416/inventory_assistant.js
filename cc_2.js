// Pricing & Profit Calculator — Wireless Bluetooth Speaker (unique example)

const productName = "Wireless Bluetooth Speaker";
const costPerUnit = 28.75;        
const discountRate = 0.10;    
const salesTaxRate = 0.08;     
const fixedMonthlyCosts = 2200; 


const discountedPrice = basePrice * (1 - discountRate);
const finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
const profitPerUnit = finalPriceWithTax - costPerUnit;


const breakEvenUnits = profitPerUnit > 0
  ? Math.ceil(fixedMonthlyCosts / profitPerUnit)
  : Infinity;

const isProfitablePerUnit = profitPerUnit > 0;


console.log("Product:", productName);
console.log("Discounted Price (before tax): $" + discountedPrice.toFixed(2));
console.log("Final Price (with tax): $" + finalPriceWithTax.toFixed(2));
console.log("Profit per Unit: $" + profitPerUnit.toFixed(2));
console.log("Break-even Units:", Number.isFinite(breakEvenUnits) ? breakEvenUnits : "Infinity");
console.log("Profitable per Unit?:", isProfitablePerUnit);