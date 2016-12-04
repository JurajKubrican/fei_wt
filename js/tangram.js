$(document).ready(function() {

       $('.block').draggable({
           containment:'window',
           stack: '.block',
           snap: true,
           snapMode: 'outer',
           snapTolerance: 2,
           grid: [ 25, 25 ],
           stop:handleDrop,
           //disabled: true,
        });

        function handleDrop(e,ui){
          leftoffset = $('#canvas').offset().left;
          topoffset = $('#canvas').offset().top;
          //console.log(leftoffset , $('#parallelogram').offset().left);
          console.log(Math.abs($('#triangle6').offset().top - topoffset ));
          console.log(Math.abs($('#triangle6').offset().left - leftoffset ));

           if (7 <= Math.abs($('#parallelogram').offset().left - leftoffset - 0)){
             return;
           }
           if (7 <= Math.abs($('#parallelogram').offset().top - topoffset - 374)){
             return;
           }
           if (7 <= Math.abs($('#square').offset().left - leftoffset - 249)){
             return;
           }
           if (7 <= Math.abs($('#square').offset().top - topoffset - 124)){
             return;
           }
           if (7 <= Math.abs($('#triangle1').offset().left - leftoffset - 250)){
             return;
           }
           if (7 <= Math.abs($('#triangle1').offset().top - topoffset - 0)){
             return;
           }
           if (7 <= Math.abs($('#triangle2').offset().left - leftoffset - 0)){
             return;
           }
           if (7 <= Math.abs($('#triangle2').offset().top - topoffset - 0)){
             return;
           }
           if (7 <= Math.abs($('#triangle3').offset().left - leftoffset - 0)){
             return;
           }
           if (7 <= Math.abs($('#triangle3').offset().top - topoffset - 0)){
             return;
           }
           if (7 <= Math.abs($('#triangle4').offset().left - leftoffset - 250)){
             return;
           }
           if (7 <= Math.abs($('#triangle4').offset().top - topoffset - 250)){
             return;
           }
           if (7 <= Math.abs($('#triangle6').offset().left - leftoffset - 125)){
             return;
           }
           if (7 <= Math.abs($('#triangle6').offset().top - topoffset - 125)){
             return;
           }
           console.log('ideto');
            $('#result').show();
        }

      //  var angle = 90;
       //
      //  $('.block').click(function() {
      //    if ($(this).attr('id' ) == 'parallelogram'){
      //      $(this).css ({
      //          '-webkit-transform': 'rotate(' + angle + 'deg) skew(-45deg)',
      //             '-moz-transform': 'rotate(' + angle + 'deg) skew(-45deg)',
      //               '-o-transform': 'rotate(' + angle + 'deg) skew(-45deg)',
      //              '-ms-transform': 'rotate(' + angle + 'deg)'
      //      });
      //    }
      //    else if ($(this).attr('id') == 'square'){
      //      angle = 45;
      //    }
       //
      //    else {
      //      $(this).css ({
      //          '-webkit-transform': 'rotate(' + angle + 'deg)',
      //             '-moz-transform': 'rotate(' + angle + 'deg)',
      //               '-o-transform': 'rotate(' + angle + 'deg)',
      //              '-ms-transform': 'rotate(' + angle + 'deg)'
      //      });
      //    }
      //    angle+=90;
      //  });
});
