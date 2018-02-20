$('.box').mouseover(function(){
$('.box').transition({ scale: [2.0, 1.5] });
});

$('.box').mouseout(function(){
  $('.box').transition({ scale: [1, 1] });
});


var randomNumber = Math.floor((Math.random() * 5) + 1);
document.getElementById('button').onclick = function(){

  if (randomNumber = 1) {
    $('.one').transition({ scale: [2.0, 1.5] });
  }
  if (randomNumber = 2) {
$('.two').transition({ scale: [5.0, 1.5] });
  }
}
