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
    'nazov'=> 'Hvezdáreň Skalnaté Pleso',
    'rokVzniku' => 1940,
    'sirka' => '49.189347',
    'dlzka' => '20.2341771',
    'img' => 'img/Observatorium_Skalnate_pleso.jpg',
    'opis' => 'Astronomické observatórium Skalnaté Pleso sa nachádza neďaleko Skalnatého plesa v nadmorskej výške 1 786 nad hladinou mora. Observatórium bolo založené v roku 1943, keď boli vykonané prvé pozorovania. V súčasnosti má hvezdáreň dva ďalekohľady. V malej kupole sa nachádza 61 cm (f/4,2) automatický ďalekohlad typu Newton , ktorý je vybavený citlivou CCD kamerou a sadou širokopásmových filtrov na fotometrické pozorovanie planétok a komét. Vo veľkej kupole observatória je 1,3m ďalekohľad typu Nasmyth-Cassegrain . V Nasmythových ohniskách sú k dispozícii viaceré postfokusové zariadenia (vysokodisperzný échelle spektrograf, veľkoformátové vizuálne CCD kamery a infračervená CCD kamera). Ďalekohľad je v súčasnosti v testovacej prevádzke a v skorej dobe bude využitý na pozorovanie objektov Slnečnej sústavy (kométy, asteroidy) ale aj stelárnych objektov (premenné hviezdy, materské hviezdy exoplanét). Pre obidva ďalekohľady slúži moderné pokovovacie zariadenie, ktoré umožňuje nanášať tenké odrazné vrstvy na zrkadlá vo vysokom vákuu.',
  ],
  (object)[
    'nazov'=> 'Mlyn Jána Maticu',
    'rokVzniku' => 1893,
    'sirka' => '48.0887117',
    'dlzka' => '17.6663053',
    'img' => 'img/Mlyn_jana_maticu.jpg',
    'opis' => 'Mlyn reprezentuje typ tzv. Pobrežného kolového mlyna. Postavený je na pilótach z agátového dreva v toku rieky na ostrohe, vytvorenej Malým Dunajom a jeho ľavobrežným prítokom Suchým potokom. Budova mlyna rámovej konštrukcie s doštenou výplňou je z brehu prístupná drevenou lávkou so zábradlím. Veľké lopatkové dvojvencové hnacie koleso na spodnú vodu je v prúde rieky upevnené na podpornej stolici s doštenou plošinou. Dominantným objektom mlyna je drevená mlynica na pilótoch, so sedlovou strechou krovovej hambálkovej konštrukcie, krytá šindľom. Zaujímavosťou je štrbinové okienko, ktorým mlynár pozoroval chod náhonového kolesa, ako aj príchod gazdov s melivom z druhého brehu rieky. Dvojvencové lopatkové koleso s drevenými ramenami má priemer 7 m, široké je 2,5m. Pobrežný kolový mlyn v Tomášikove postavil v r. 1893 mlynár Ján Matica, starý otec posledného majiteľa rovnakého mena (narodený r. 1920). Mlyn sa zachoval v pôvodnom stave, bez rušivých zásahov do konštrukcie, s uceleným prevádzkyschopným mlynským zariadením. V mlyne sa mlelo až do r. 1960. V r. 1982 bol mlyn obnovený a zariadený ako expozícia Vlastivedného múzea v Galante.',
  ],
  (object)[
    'nazov'=> 'pamiatka3',
    'rokVzniku' => 1995,
    'sirka' => '123',
    'dlzka' => '456',
  ],
];

file_put_contents('js/pamiatky.json',json_encode($pamiatky));
echo json_encode($pamiatky);
?>
