(function($){
  ('use strict');

  $(document).ready( function(event) {
    loadPamiatky('js/pamiatky.json');
  });


  function loadPamiatky(url){
    $.get(url,function(data){
      $('#timeline-wrapper').html(showPamiatky(data));

    });
  }

  function showPamiatky(data){
    console.log(data);
    var ret = '<div class="timeline">';
    var minYear = 9999, maxYear = 0;
    for(i in data){
      if(!data.hasOwnProperty(i))continue;

      minYear = Math.min(minYear,parseInt(data[i].rokVzniku));
      maxYear = Math.max(maxYear,parseInt(data[i].rokVzniku));
    }
    console.log(minYear,maxYear);

    for(i in data){
      if(!data.hasOwnProperty(i))continue;
      var pamiatka = data[i];

      var left = ((pamiatka.rokVzniku - minYear) / (maxYear - minYear)) * 100;
      ret += '<div class="timeline-item" style="left:' + left +'%;"></div>';

    }
    return ret + '</div>';
  }

}(jQuery))
