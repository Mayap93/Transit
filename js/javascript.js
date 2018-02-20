$('.box').mouseover(function(){
$('.box').transition({ scale: [2.0, 1.5] });
});

$('.box').mouseout(function(){
  $('.box').transition({ scale: [1, 1] });
});
