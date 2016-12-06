<?php

$pamiatky = [
  (object)[
    'nazov'=> 'Starý most Františka Jozefa I.',
    'rokVzniku' => 1891,
    'sirka' => '48.138470',
    'dlzka' => '17.117284',
    'img' => 'img/stary_most.jpg',
    'opis' => 'Starý most Františka Jozefa I. bol prvým železným mostom, ktorý spojil Petržalku s Bratislavou. O jeho výstavbe rozhodli poslanci 9. apríla 1877. Následne ju schválila uhorská vláda a Bratislava. Výstavba začala 12. augusta 1889 a most bol 30. decembra 1890 za prítomnosti cisára Františka Jozefa I. slávnostne odovzdaný do užívania. Most mal dlžku 458,4 metrov, bol tvorený 7 poliami, z ktorých stredné pole bolo najväcšie, dlhé 92 metrov. Piliere mali kesónové základy, ktoré siahali do hĺbky 14 m pod normálnou hladinou vody, boli murované z lomového kameňa a obložené žulovými kvádrami. Horná nosná konštrukcia vo všetkých poliach bola železná, stredná časť mosta bola zavesená na mohutný železný oblúk. Šírka mosta bola 6,5 m pre vozovú premávku a 3 m pre chodcov. Na bratislavskej a petržalskej strane boli postavené murované colnice na vyberanie mýta, na petržalskej strane aj skrinka prvej pomoci. Výstavba mosta stála 1 milión 780 tisíc zlatých.',
  ],
  (object)[
    'nazov'=> 'Solivar Prešov',
    'rokVzniku' => 1925,
    'sirka' => '48.977783',
    'dlzka' => '21.275803',
    'img' => 'img/solivar.jpg',
    'opis' => 'Solivar v Prešove, národná kultúrna pamiatka patrí medzi najvýznamnejšie technické pamiatky na Slovensku. Je to unikátny komplex technických objektov na čerpanie a varenie soli zo soľanky, pochádzajúci zo 17. storočia. K objektom na ťažbu kamennej soli a čerpanie soľanky v Solivare patrí najmä šachta Leopold, četerne (rezervoáre soľanky), huta , varňa , sklad soli (komory), kováčske dielne a klopačka (turňa).',
  ],

  (object)[
    'nazov'=> 'Trenčiansky hrad hradná studňa',
    'rokVzniku' => 1557/8-1570,
    'sirka' => '48.89429166666667',
    'dlzka' => '18.044444444444448',
    'img' => 'img/studna.jpeg',
    'opis' =>'K hradnej studni sa viaže povesť o láske tureckého šľachtica Omara ku krásnej Fatime, zajatkyni trenčianskeho hradného pána Štefana Zápoľského.Aby Fatimu vyslobodil, prisľúbil Omar, že vykope na Trenčianskom hrade v tvrdej skale studňu. Po tri roky kopal so svojimi druhmi, až skala skutočne vydala vodu, z kopáčov však prežili iba nemnohí. Prvú čašu vody Omar podal Zápoľskému so slovami: "Vodu máš Zápoľský, ale srdce nemáš". Keď Omar odvážal oslobodenú Fatimu na koni z hradu, zachytil sa jej závoj na šípovom kríku. Na tom mieste dodnes stojí najstarší hostinec v Trenčíne, nazývaný "Fatima", alebo v skorších časoch i "Závoj".',
  ],
  (object)[
    'nazov'=> 'Tre.Teplice železničná stanica',
    'rokVzniku' => '40.roky 20.st.',
    'sirka' => '48.9097626',
    'dlzka' => '18.171751500000028',
    'img' => 'img/studna.jpeg',
    'opis' =>'Na trati Trenčianske Teplice – Trenčianske Teplá a späť, pravidelne premáva vláčik, ktorý bežne nazývame „električkou“. Je raritou medzi slovenskými železničnými traťami, pretože bola prvou verejne prevádzkovanou elektrifikovanou železničnou traťou na území Slovenska. Budova železničnej stanice v Trenčianskych Tepliciach bola postavená v roku 1941. Dodnes slúži pôvodnému účelu a je považovaná za kultúrnu pamiatku. Pôvodná železničná trať, na ktorej bola zahájená prevádzka 27. júla 1909, sa výstavbou stanice skrátila o 400 m.',
  ]
];

file_put_contents('js/pamiatky.json',json_encode($pamiatky));
echo json_encode($pamiatky);
?>
