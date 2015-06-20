
exports.Sum = function(num1, num2){

  return  num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
  sum =0;

  for(var i=0;i<arrayOfNums.length;i++)
  {
    sum += arrayOfNums[i];
  }
  return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
  var unique = arrayOfNums.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
  sum=0;
  for(var i=0;i<unique.length;i++)
  {
    sum+=unique[i];
  }
  return sum;
}

exports.ReverseString = function(str){
  return str.split("").reverse().join("");
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
  arrayOfStrings.reverse();
  return arrayOfStrings;
}
