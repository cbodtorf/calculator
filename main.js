//CALCULATOR OBJECT
var calc = {
  sum: 0,
  add: function(value) {
    this.sum += value;
  },
  sub: function(value) {
    this.sum -= value;
  },
  clr: function() {
    this.sum = 0;
  },
  mult: function(value) {
    this.sum *= value;
  },
  div: function(value) {
    this.sum /= value;
  },
  equal: function() {
    return this.sum;
  }
}

//JQUERY EVENTS

var inputNum = '';
var inputOpr = '';
$('input').on('click', function(event){
  event.preventDefault();
    inputNum += this.value;
    $('.view-finder span').append(this.value);
})

//Display Operators and clear span and inputNum
$('.operators button').on('click', function(event){
  event.preventDefault();
  inputOpr = this.name;
  $('.view-finder span').html(this.textContent + " ");
  calc.add(Number(inputNum));
  inputNum = "";
})

// Equals clears span and displays
$('#equal').on('click', function(event){
  event.preventDefault();
  calc[inputOpr](Number(inputNum));
  $('.view-finder span').html(calc.sum);
  inputNum = "";
})
// Clear it all!!!!
$('#clear').on('click', function(event){
  event.preventDefault();
  calc.sum = 0;
  $('.view-finder span').html("");
  inputNum = "";
})
