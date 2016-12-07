(function($){
  ('use strict');

  var colors = [
    'rgba(157, 59, 198, 0.5)',
    'rgba(255, 82, 100, 0.5)',
    'rgba(255, 98, 42, 0.5)',
    'rgba(255, 216, 67, 0.5)',
    'rgba(0, 169, 191, 0.5)',
    'rgba(136, 205, 78, 0.5)',
    'rgba(127, 141, 144, 0.5)',
    'rgba(60, 128, 228, 0.5)',
  ]

  $(document).ready(function(){
    for(var i = 0; i<20; i++){
      $('#parallax').append($('<li>',{class:'layer','data-depth' : Math.random()}));
    }
    $('#parallax > li').each(function(){
      var size = (50 + Math.random() * 100)+'px'
      $(this).css('background-color',colors[Math.floor(Math.random() * 8)])
      $(this).css('width',size)
      $(this).css('height',size)
      $(this).css('margin-top',(Math.random() * 100)+'vh')
      $(this).css('margin-left',(Math.random() * 100)+'vw')
    })
    $('#parallax').parallax();
    $('#parallax').show();
  })
}(jQuery))
