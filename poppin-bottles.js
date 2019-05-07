/* 
For every two empty bottles, you can get one free (full) bottle of pop
For every four bottle caps, you can get one free (full) bottle of pop
Each bottle of pop costs $2 to purchase
*/

// Define helper functions that fit the rules above
function getNumberOfBottlesForMoney(dollars) {
  // returns the amount of bottles one can purcahse for the given money (dollars)
  return Math.floor(dollars / 2);
}

function getFreePopCountForBottles(numBottles) {
  // returns the count of free pop per empty bottles
  return Math.floor(numBottles / 2);
}

function getFreePopCountForCaps(numCaps) {
  // returns the count of free pop for the bottle caps
  return Math.floor(numCaps / 4);
}

function getTotalBottles(investment) {
  let purchasedBottles = getNumberOfBottlesForMoney(investment);
}