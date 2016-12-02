var Checkers = (function(Checkers,$){
  ('use strict');

  var root;

  function buildBoard(boardEl){

    root = $(boardEl);

    var board =[
    [-1,-1,-1,  1, 1, 1,  -1,-1,-1],
    [-1,-1,-1,  1, 1, 1,  -1,-1,-1],
    [-1,-1,-1,  1, 1, 1,  -1,-1,-1],

    [ 1, 1, 1,  1, 1, 1,   1, 1, 1],
    [ 1, 1, 1,  1, 0, 1,   1, 1, 1],
    [ 1, 1, 1,  1, 1, 1,   1, 1, 1],

    [-1,-1,-1,  1, 1, 1,  -1,-1,-1],
    [-1,-1,-1,  1, 1, 1,  -1,-1,-1],
    [-1,-1,-1,  1, 1, 1,  -1,-1,-1],
    ];

    for (i in board){

      if(!board.hasOwnProperty(1)) continue;
      var row = board[i]

      var rowEl = $('<div>',{class:"checkers-row"});
      rowEl.appendTo(boardEl);

      for (j in row){
        if(!row.hasOwnProperty(1)) continue;
        var cell = row[j];
        var cellEl = $('<div>',{class: (cell === -1)?'checkers-border':'checkers-cell','data-state':cell,'data-x':i,'data-y':j});
        if( cell === 1){
          cellEl.append($('<div>',{class:'checkers-ball','data-x':i,'data-y':j}))
        }
        cellEl.appendTo(rowEl);
      }
    }
  }
  //prepairs draggable - wil be enabled disabled according to
  function hookDraggable(boardEl){
    $( ".checkers-ball",boardEl ).draggable({
      containment:boardEl,
      revert: true,
    });

    $('.checkers-cell').droppable( {
      accept: '.checkers-ball',
      hoverClass: 'hovered',
      drop: resolveMove,
    })
  }


  function resolveMove (e,ui){
    var ball = {
      el:$(ui.draggable),
      x:parseInt($(ui.draggable).parent().attr('data-x')),
      y:parseInt($(ui.draggable).parent().attr('data-y')),
    };
    var boardEl = ball.el.parent().parent().parent();
    var cell = {
      el:$(this),
      x:parseInt($(this).attr('data-x')),
      y:parseInt($(this).attr('data-y')),
    };

    if($('.checkers-ball',cell.el).length)
      return false;

    if(!(Math.abs( ball.x - cell.x ) === 2 && ball.y ===ball.y || Math.abs( ball.y - cell.y ) === 2 && ball.x ===ball.x))
      return false;

      console.log(ball,cell);
    var middleBall = $('.checkers-cell[data-x=' + (( ball.x + cell.x)/2) + '][data-y=' + (( ball.y + cell.y)/2) + ']>.checkers-ball',boardEl);
    if( !middleBall.length )
      return false;


    ball.el.remove();
    ball.el = $('<div>',{class:'checkers-ball','data-x':cell.x,'data-y':cell.y}).appendTo(cell.el)
    ball.el.draggable({
      containment:boardEl,
      revert: true,
    });

    middleBall.remove();

  }

  return{
    initBoard: function(boardEl){
      buildBoard(boardEl);
      hookDraggable(boardEl);
    }
}


}(Checkers,jQuery));



$(document).ready( function(event) {
  Checkers.initBoard($('#checkers'));
});
