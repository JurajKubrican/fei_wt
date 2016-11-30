var Checkers = (function(Checkers,$){
  ('use strict');


  function buildBoard(boardEl){
    var board =[
    [ -1,-1,-1,  1, 1, 1,  -1,-1,-1,],
    [ -1,-1,-1,  1, 1, 1,  -1,-1,-1,],
    [ -1,-1,-1,  1, 1, 1,  -1,-1,-1,],

    [  1, 1, 1,  1, 1, 1,   1, 1, 1,],
    [  1, 1, 1,  1, 0, 1,   1, 1, 1,],
    [  1, 1, 1,  1, 1, 1,   1, 1, 1,],

    [ -1,-1,-1,  1, 1, 1,  -1,-1,-1,],
    [ -1,-1,-1,  1, 1, 1,  -1,-1,-1,],
    [ -1,-1,-1,  1, 1, 1,  -1,-1,-1,],
    ];

    for (i in board){

      if(!board.hasOwnProperty(1)) continue;
      var row = board[i]

      var rowEl = $('<div>',{class:"checkers-row"});
      rowEl.appendTo(boardEl);

      for (j in row){
        if(!row.hasOwnProperty(1)) continue;
        var cell = row[j];
        var cellEl=$('<div>',{class:"checkers-cell",'data-state':cell,'data-x':i,'data-y':j});
        if( cell === 1){
          cellEl.append($('<div>',{class:"checkers-ball"}))
        }
        cellEl.appendTo(rowEl);

      }
    }
  }

  function hookDraggable(boardEl){
    $( ".checkers-ball",boardEl ).draggable({
      containment:boardEl,
      revert: true,
      start:function(e){
        console.log(
          $(e.currentTarget));
      }
    });

    $('.checkers-cell').droppable( {
      accept: '.checkers-ball',
      hoverClass: 'hovered',
      drop: function(e){
        console.log(e);
      }
    })
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
