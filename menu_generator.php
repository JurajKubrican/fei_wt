<?php

$menu = [
  (object)[
    'text'=> 'Domov',
    'url' => 'index.html',
  ],
  (object)[
    'text'=> 'Hry',
    'url' => 'games.html',
    'items' =>[
      (object)[
        'text'=> 'Chinese Checkers',
        'url' => 'game-checkers.html',
      ],
      (object)[
        'text'=> 'Tangram',
        'url' => 'game-tangram.html',
      ],
    ],
  ],
  (object)[
    'text'=> 'Pamiatky',
    'url' => 'pamiatky.html',
    'items' =>[
      (object)[
        'text'=> 'Zoznam',
        'url' => 'pamaiatky.html',
      ],
      (object)[
        'text'=> 'Mapa/Casova OS',
        'url' => 'pamaiatky-os.html',
      ],
    ],
  ],
  (object)[
    'text'=> 'LVL1',
    'url' => 'index.html',
    'items' =>[
      (object)[
        'text'=> 'LVL2',
        'url' => 'index.html',
      ],
      (object)[
        'text'=> 'LVL2.1',
        'url' => 'index.html',
        'items' =>[
          (object)[
            'text'=> 'LVL3',
            'url' => 'index.html',
          ],
          (object)[
            'text'=> 'LVL3.1',
            'url' => 'index.html',
          ],
        ],
      ],
    ],
  ],
];

echo json_encode($menu);
?>
