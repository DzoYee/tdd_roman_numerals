var romanNumerals = function() {
};

romanNumerals.prototype.of = function(number) {
  var result = '';
  var numberTuple = [[8,'X',10],[3,'V',5]];
  var currentLetter;
  var currentNumber;
  for (var k = 0; k < numberTuple.length; k++ ) {
    if (number > numberTuple[k][0]) {
      currentLetter = numberTuple[k][1];
      currentNumber = numberTuple[k][2];
      break;
    }
  }

  if (number > 3) {
    result += currentLetter;
    if (number < currentNumber) {
      for ( var j = currentNumber - number; j > 0; j-- ) {
        result = 'I' + result;
      }
    } else {
      for ( var j = number - currentNumber; j > 0; j-- ) {
        result += 'I';
      }
    }

  } else {
    for ( var i = 0; i < number; i++ ) {
      result += 'I';
    }
  }
  return result;
};

module.exports = new romanNumerals();