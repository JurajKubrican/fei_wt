var infowindow;
var dataJSON;
(function($){
  ('use strict');

  $(document).ready( function(event) {
    loadPamiatky('js/pamiatky.json');


  });


  function loadPamiatky(url){
    $.get(url,function(data){
      dataJSON = data;
      $('#timeline-wrapper').html(showPamiatky(data));
      tooltipsterize();
    });
  }
  function tooltipsterize(){
    $('.tooltipster').tooltipster({
      animation: 'fade',
      debug:true,
      trigger:'click',
      functionBefore:function(e,el){
        var id = $(el.origin).addClass('timeline-active').data('id');
        $('.timelineacrive').addClass('timeline-active')
        $('.timeline-item[data-id=' + id+ ' ]').addClass('timeline-active');
      },
      functionAfter:function(e,el){
        var id = $(el.origin).removeClass('timeline-active').data('id');
        $('.timeline-item[data-id=' + id+ ' ]').removeClass('timeline-active');
      }
    });
    $('.timeline-item').click(function(e){
      var id = $(e.target).data('id');
      console.log(id);
      $('.tooltipster[data-id=' + id + ']').tooltipster('open');
      $('.tooltipster:not([data-id=' + id + '])').tooltipster('close');
    })

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

    for(i in data){
      if(!data.hasOwnProperty(i))continue;
      var pamiatka = data[i];
      showOnMap(pamiatka,i)
      var left = ((pamiatka.rokVzniku - minYear) / (maxYear - minYear)) * 100;
      ret += '<div class="timeline-item" data-id="' + i + '" style="left:' + left +'%;"></div>';
    }

      return ret + '</div>';
  }

  function showOnMap(pamiatka,i){
    // |
    var latOffset = -0.15;
    var latMin = 47.728086 + latOffset;
    var latMax = 49.629861 + latOffset;

    // --
    var longOffset = -0.05;
    var lonMin = 16.826648 + longOffset;
    var lonMax = 22.567620 + longOffset;

    var topPos = (((latMax - parseFloat(pamiatka.sirka)) / (latMax - latMin)) * 100)
    var leftPos =  (((lonMax - parseFloat(pamiatka.dlzka)) / (lonMax - lonMin)) * 100)

    var marker = $('<div>',{class:'map-marker', style:'right:' + leftPos + '%; top:' + topPos + '%; '});
    marker.append($('<span class="glyphicon glyphicon-arrow-down tooltipster" data-id="' + i + '" title="' + (pamiatka.nazov) + '"></span>'))
    //marker.append($('<span class="glyphicon glyphicon-arrow-down"></span>'))

    $('#map-wrapper').append(marker);

    //console.log(leftPos,topPos);
  }

}(jQuery))

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 48.4350,
            lng: 19.2726
        },
        zoom: 7
    });
    infowindow = new google.maps.InfoWindow();

    $.get('js/pamiatky.json',function(data){
      for(i in data){
        //console.log(data[i]);
        var pos = new google.maps.LatLng(data[i].sirka,data[i].dlzka);
            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: data[i].nazov + "\nVznik: " + data[i].rokVzniku
            });
            marker.setMap(map);
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(data[i].nazov + " ," + data[i].rokVzniku);
                    infowindow.open(map, marker);
                }
            })(marker, i));
      }
    });

    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
}
