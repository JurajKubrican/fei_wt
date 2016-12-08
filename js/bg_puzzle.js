(function($) {
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
    var arrayImg = new Array();
    arrayImg[0] = "BA.png";
    arrayImg[1] = "BB.png";
    arrayImg[2] = "TN.png";
    arrayImg[3] = "TT.png";
    arrayImg[4] = "ZA.png";
    arrayImg[5] = "KE.png";
    arrayImg[6] = "PO.png";
    arrayImg[7] = "NR.png";


    $(document).ready(function() {
        $('#body').prepend($('<ul>', {
            id: 'parallax'
        }));
        for (var i = 0; i < 20; i++) {
            var num = Math.floor(Math.random() * arrayImg.length);
            var img = arrayImg[num];
            //console.log(img);
            // $('#parallax').append($('<li> <img src="img/' + img + '" alt = "obrascok">', {
            //     class: 'layer',
            //     'data-depth': Math.random()
            // }));
            $('#parallax').append($('<li>',{class:'layer','data-depth' : Math.random()}));

        }
        $('#parallax > li').each(function() {
             var size = (50 + (1 - $(this).data('depth')) * 250) + 'px'
             $(this).css('background-color', colors[Math.floor($(this).data('depth') * 8)])
             $(this).css('width', size)
            $(this).css('height', size)
            $(this).css('margin-top', (Math.random() * 50 - 5) + 'vh')
            $(this).css('margin-left', (Math.random() * 50 - 5) + 'vw')
        })
        $('#parallax').parallax();
        $('#parallax').show();

    })
}(jQuery))
