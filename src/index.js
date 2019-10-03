module.exports = function zeros(expression) {
  var factorialArray = expression.split('*');
  var oddArray = []; //нечетный
  var evenArray = []; //четный
  var fullArray = [];
  var number;
  factorialArray.forEach(function(factorial) {
    if (factorial.includes("!!"))  {
      number = factorial.slice(0,-2);
      if (number % 2 === 0) {
        for (var i = 2; i <= number; i++) {
          if (i % 2 === 0) {
          oddArray.push(i);
          }
        }
      } else if (number % 2 !== 0) {
        for (var j = 1; j <= number; j++) {
          if (j % 2 !== 0 && j % 5 === 0) {
          evenArray.push(j);
          }
        }
      }
    } else if (factorial.includes("!"))  {
      number = factorial.slice(0,-1);
      for (var k = 1; k <= number; k++) {
        if (k % 2 === 0 || k % 5 === 0) {
        fullArray.push(k);
        }
      }
    }
  });
   var newArray = oddArray.concat(evenArray).concat(fullArray);
   var twoSum = 0;
   var fiveArray = [];
   for (var m = 0; m < newArray.length; m++) {
     if (newArray[m] % 5 === 0) {
       fiveArray.push(newArray[m]);
     }  if (newArray[m] % 2 === 0) {
       twoSum +=1;
     }
   };
    var fiveSum = 0;
   for (var t = 0; t < fiveArray.length; t++) {
    for (var n = 1;;n ++) {
      var measure = Math.pow(5, n);
     if (fiveArray[t] % measure === 0) {
       fiveSum +=1;
     } else {
       break;
     }
    }
   }
   var result;
   if (twoSum >= fiveSum) {
     result = fiveSum;
   } else if (twoSum <= fiveSum) {
     result = twoSum;
   }
   return result;
 }
