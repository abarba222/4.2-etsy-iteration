var _ = require('underscore');
var items = require('./items.json');


//Problem #1

  var average = (_.reduce(items, function(a, b) {
    return a + b.price;
  }, 0) / items.length) .toFixed(2);

    console.log(average);

/* Gather the data from items by requiring ('./items.json').
Find the average price by usining _.reduce to add all the item
prices together. Starting from 0, take "a" which equates to the
total and add "b.price," which s the actual price of each item.
Divide the sum of these prices by items.length to get the average.
Add .toFixed(2) to the end to have the result stop at two decimal
places.*/


//Problem #2


var filterResults = _.filter(items, function(item){
  if (item.price > 14 && item.price < 18) {
    return item;
  }
});
var itemTitles = _.map(filterResults, function(item){
  return item.title;
});
console.log(itemTitles);

/* Use _.filter and an if statement to find all the items that
are between 14 and 18 dollars. Once those items are found use
_.map to change the array to show afformentioned items with
 item.title. */

 //Problem #3

 var findItem = _.filter(items, function(item){
   if (item.currency_code === "GBP"){
     return item;
   }
 });


 var foundTitle = _.pluck(findItem, 'title');

 var foundPrice = _.pluck(findItem, 'price');

 console.log(foundTitle + " " + "costs" + " " + "#BritishMoney" + " " + foundPrice + ".");


/* Use _.filter to find the item that has a currency code of
GBP. Then use _.pluck to find the title and price. In console.log
add spaces and "costs GBP." */

//Problem #4

var woodenItems = _.filter(items, function(item){
  if (_.contains(item.materials, "wood")){
    return item;
  }
});

_.each(woodenItems, function(item){
  console.log(item.title + " is " + "made " + "of " + "wood " + ".");
});



//

//Problem #5

var plus8materials = _.filter(items, function(item){
  return item.materials.length >= 8;
});

console.log(plus8materials);

//

//Problem #6

var manMade = _.filter(items, function(item){
  if (item.who_made === "i_did"){
    return item;
  }
});

console.log(manMade.length + " were made by their sellers.");

//
