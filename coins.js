/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter (inputNum) {
    // Initialize a JavaScript object to hold the coins
    var coinPurse = {};
    //Make the change input into a whole number
    // For some reason my math kept being super long decimals like '3.9999999998' instead of '4', until i multiplied the inputNum by 100 and made the division equations into whole numbers as well (ex: '.25' is now '25'). This fixed that somehow. 
    inputNum = inputNum * 100;
    
    coinPurse.quarters = Math.floor(inputNum/25);
    inputNum -= coinPurse.quarters * 25;
    // console.log(inputNum); // these are here for testing purposes
    coinPurse.dimes = Math.floor(inputNum/10);
    inputNum -= coinPurse.dimes * 10;
    // console.log(inputNum);
    coinPurse.nickels = Math.floor(inputNum/5);
    inputNum -= coinPurse.nickels * 5;
    // console.log(inputNum);
    coinPurse.pennies = Math.floor(inputNum/1);
    // console.log(inputNum);
    return coinPurse;
  }
  


  var coins = coinCounter(.70);
  console.log(coins);