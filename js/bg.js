(function($){
  ('use strict');

  // var colors = [
  //   'rgba(157, 59, 198, 0.5)',
  //   'rgba(255, 82, 100, 0.5)',
  //   'rgba(255, 98, 42, 0.5)',
  //   'rgba(255, 216, 67, 0.5)',
  //   'rgba(0, 169, 191, 0.5)',
  //   'rgba(136, 205, 78, 0.5)',
  //   'rgba(127, 141, 144, 0.5)',
  //   'rgba(60, 128, 228, 0.5)',
  // ]

  $(document).ready(function(){
    $('body>.container').prepend($('<ul>',{id:'parallax'}));
    loadPamiatky('js/pamiatky.json');
  })

  function makeParallax(){
    $('#parallax > li').each(function(){
      var size = (50 + (1 - $(this).data('depth')) * 250)+'px'
      $(this).css('margin-top',(Math.random() * 60 )+'vh')
      $(this).css('margin-left',(Math.random() * 60 )+'vw')
    })
    $('#parallax').parallax();
    $('#parallax').show();
    $('body:eq(0)').remove();
  }


  function loadPamiatky(url){
    $.get(url,function(data){
      data = typeof(data) === 'string' ? JSON.parse(data):data ;
      for(var i in data){
        var img = $('<img>',{src:data[i].img,alt:data[i].meno});
        var li = $('<li>',{class:'layer','data-depth' : Math.random()});
        li.append(img);
        $('#parallax').append(li);
      }
      makeParallax();
    });
  }
}(jQuery))
