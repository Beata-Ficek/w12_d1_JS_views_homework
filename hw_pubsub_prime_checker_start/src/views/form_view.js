const PubSub = require('../helper/pub_sub')

const FormView = function(){

}

FormView.prototype.bindEvents = function(){

  const form = document.querySelector("#prime-checker-form");
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputtedNumber = event.target.number.value;
    PubSub.publish('NumberInputView:number-submitted', inputtedNumber);
  })

}

module.exports = FormView;


// const PubSub = require('../helpers/pub_sub')
//
// const FormView = function(){
//
// }
//
// FormView.prototype.bindEvents = function(){
//
//   const form = document.querySelector("#wordcounter-form");
//   form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const typedText = event.target.text.value;
//     // console.log("typedText:"+typedText);
//     PubSub.publish('FormView:text-submitted', typedText);
//   })
// }
//
// module.exports = FormView;
