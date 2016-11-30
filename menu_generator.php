<?php

$menu = [
  (object)[
    'text'=> 'Domov',
    'url' => '/index.html',
  ],
  (object)[
    'text'=> 'Hry',
    'url' => '/games/games.html',
    'items' =>[
      (object)[
        'text'=> 'Chinese Checkers',
        'url' => '/games/checkers.html',
      ],
    ],
  ],
  (object)[
    'text'=> 'LVL1',
    'url' => '/index.html',
    'items' =>[
      (object)[
        'text'=> 'LVL2',
        'url' => '/index.html',
      ],
      (object)[
        'text'=> 'LVL2.1',
        'url' => '/index.html',
        'items' =>[
          (object)[
            'text'=> 'LVL3',
            'url' => '/index.html',
          ],
          (object)[
            'text'=> 'LVL3.1',
            'url' => '/index.html',
          ],
        ],
      ],
    ],
  ],
];

echo json_encode($menu);
?>
