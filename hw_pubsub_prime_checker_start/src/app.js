const FormView = require('./views/form_view')
const ResultView = require('./views/result_view')
const PrimeChecker = require('./models/prime_checker')


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const formView = new FormView();
  formView.bindEvents();
  const primeChecker = new PrimeChecker();
  primeChecker.bindEvents();
  const resultView = new ResultView();
  resultView.bindEvents();

});
