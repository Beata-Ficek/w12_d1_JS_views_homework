const PubSub = require('../helper/pub_sub')

const ResultView = function(){

}

  ResultView.prototype.displayResult = function(number, result){
    const resultElement = document.querySelector('#result');
    resultElement.textContent = `The ${number} you entered is ${result}`
  }

  ResultView.prototype.bindEvents = function(){
    PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
      const number = event.detail.number;
      const result = event.detail.result;
      this.displayResult(number, result);

    })
  }

  module.exports = ResultView;
