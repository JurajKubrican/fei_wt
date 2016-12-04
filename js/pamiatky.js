(function($){
  ('use strict');

  $(document).ready( function(event) {
    loadPamiatky('js/pamiatky.json');
  });


  function loadPamiatky(url){
    $.get(url,function(data){
      //data = JSON.parse(data);
      $('#pamiatky').html(walkMenu(data,0));
    });
  }

  function walkMenu(data,level){

  }

}(jQuery))
