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
    $('body>.container').prepend($('<ul>',{id:'parallax'}));
    for(var i = 0; i<20; i++){
      $('#parallax').append($('<li>',{class:'layer','data-depth' : Math.random()}));
    }
    $('#parallax > li').each(function(){
      var size = (50 + (1 - $(this).data('depth')) * 250)+'px'
      $(this).css('background-color',colors[Math.floor($(this).data('depth') * 8)])
      $(this).css('width',size)
      $(this).css('height',size)
      $(this).css('margin-top',(Math.random() * 100 - 5)+'vh')
      $(this).css('margin-left',(Math.random() * 100 - 5)+'vw')
    })
    $('#parallax').parallax();
    $('#parallax').show();
    $('body:eq(0)').remove();
  })
}(jQuery))
