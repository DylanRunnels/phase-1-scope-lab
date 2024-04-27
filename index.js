var customerName = 'bob';
console.log(customerName);

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  console.log(customerName);
}

function setBestCustomer() {
    bestCustomer = 'not bob';
  }
  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    console.log(bestCustomer); 
  }
  
  const leastFavoriteCustomer = 'initial value';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; 
}

console.log(leastFavoriteCustomer); 
changeLeastFavoriteCustomer(); 
console.log(leastFavoriteCustomer);