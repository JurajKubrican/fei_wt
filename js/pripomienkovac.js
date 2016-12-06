function pridaj_ulohu(){
	var lng = (localStorage.length/2);
	var nmb = 0;
	nmb = lng;
	var nazov_ul = prompt('Zadajte nazov ulohy','');
	var popis_ul = prompt('Zadajte popis ulohy','');
	localStorage.setItem('u'+nmb,nazov_ul);
	localStorage.setItem('p'+nmb,popis_ul);
	
	vypis();
}

function vypis(){
	//localStorage.clear();
	$("#ulohy").empty();
	var lng = (localStorage.length/2);
	for(var i = 0;i<lng;i++){
		var uloha = localStorage.getItem('u'+i);
	$("#ulohy").append('<input id="'+i+'" type="checkbox" value="uloha" onchange="check_p('+i+')"> '+uloha+'<br>');
		
	}
	
	
}

function check_p(cislo){
	if(document.getElementById(cislo).checked)
		document.getElementById("podrobnosti").innerHTML=localStorage.getItem('p'+cislo);
	else document.getElementById("podrobnosti").innerHTML="";
	
}

function vymaz_p(){
	var lng=(localStorage.length/2);
	var i=0;
	var posun=0;
	for(i=0;i<lng;i++){
		if(document.getElementById(i).checked){
			//localStorage.removeItem('u'+i);
			//localStorage.removeItem('p'+i);
			for(var j=i+1;j<lng;j++){
				localStorage.setItem('u'+(j-1),localStorage.getItem('u'+j));
				localStorage.setItem('p'+(j-1),localStorage.getItem('p'+j));

				
			}//end for(j)
			
				localStorage.removeItem('u'+(lng-1));
				localStorage.removeItem('p'+(lng-1));
		}//end if checked
		
		
	}//end for(i)
	document.getElementById("podrobnosti").innerHTML="";
	vypis();
}