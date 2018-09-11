const PubSub = require('../helper/pub_sub.js');

const PrimeChecker = function() {

};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('NumberInputView:number-submitted', (event) => {
    const inputtedNumber = event.detail;
    const result = this.numberIsPrime(inputtedNumber);
    PubSub.publish('PrimeChecker:result-calculated', {number:inputtedNumber, result:result});
  });
};

PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return "not valid"
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return "not a prime number";
    }
  }
  return "a prime number"
};

module.exports = PrimeChecker;
