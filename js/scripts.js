var music, food, result, pirate, whig, other;

var calculate = function(music, food) {
  if(music === 'metal' && food === 'dog' || music === 'metal' && food === 'ethnic'){
    pirate();
  }
  else if(music === 'ambient' && food === 'dog' || music === 'ambient' && food === 'ethnic'){
    whig();
  }
  else {
    other();
  }
};

$(document).ready(function(){
  pirate = function(){
    $('.pirates').show();
    $('.whig').hide();
  };
  whig = function(){
    $('.pirates').hide();
    $('.whig').show();
  };
  other = function(){
    alert('Please make a selection!');
  };
  $('button#submit').click(function(event){
    music = $('#music').val();
    food = $('#food').val();
    calculate(music, food);
    event.preventDefault();
  });
});
