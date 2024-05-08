"use strict";

/*
    Author: Jaisung Singh Lidder
    ID: T00710750
*/

//adds an event listener to the "load" event of the window. It will execute the function when the entire page has finished loading

//Syntax: object.addEventListener("event", function() {func_body }); 
window.addEventListener("load", function() {
   //retrieves the HTML form with the name "orderForm" from the document and stores it in the variable orderForm
   var orderForm = document.forms.orderForm;
   //orderForm.elements.orderDate.value = new Date("September 14, 2018").toDateString();
   /*orderForm.elements.orderDate.value = new Date().toDateString();*/
   orderForm.elements.model.focus();  //focus on the "model" input field when the page loads
   
   // Calculate the cost of the order
   calcOrder();
   
   // Event handlers for the web form 
   //onchange event
   orderForm.elements.model.onchange = calcOrder;
   orderForm.elements.qty.onchange = calcOrder;


   var planOptions = document.querySelectorAll('input[name="protection"]');
   for (var i = 0; i < planOptions.length; i++) {
      planOptions[i].onclick = calcOrder;
   }
  
});


function calcOrder() {
   var orderForm = document.forms.orderForm;
   
   // Calculate the initial cost of the order
   var mIndex = orderForm.elements.model.selectedIndex; //selectIndex gives the Index number of currently selected option
   var mCost = orderForm.elements.model.options[mIndex].value; //selects the value of currently selected option using .value
   var qIndex = orderForm.elements.qty.selectedIndex;
   var quantity = orderForm.elements.qty[qIndex].value;
   
   // Initial cost = model cost x quantity 
   var initialCost = mCost*quantity;
   orderForm.elements.initialCost.value = formatUSCurrency(initialCost);
   
   
   // Calculate the order subtotal
    orderForm.elements.subtotal.value = formatNumber(initialCost, 2); 
   
   // Calculate the sales tax
   var salesTax = 0.05*(initialCost);
   orderForm.elements.salesTax.value = formatNumber(salesTax, 2);
   
   // Calculate the cost of the total order
   var totalCost = initialCost + salesTax;
   orderForm.elements.totalCost.value = formatUSCurrency(totalCost);
   
   // Store the order details
   orderForm.elements.modelName.value =  
      orderForm.elements.model.options[mIndex].text; //extracted text (model name) is assigned to the value property of the input field with the name "modelName."
   
}

//formats a numeric value with a specified number of decimal places using the local numeric format. 
//undefined means to use the default locale of the user's browser.
function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}