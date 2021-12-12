var HudPerso1 = document.getElementById("ActionPerso1");
var HudPerso2 = document.getElementById("ActionPerso2");
var AttaquePerso1 = document.getElementById("AttaquePerso1");
var AttaquePerso2 = document.getElementById("AttaquePerso2");
var AttaquePerso3 = document.getElementById("AttaquePerso3");
var AttaquePerso3 = document.getElementById("AttaquePerso4");
var DefensePerso1 = document.getElementById("DefensePerso1");
var DefensePerso2 = document.getElementById("DefensePerso2");
var DefensePerso3 = document.getElementById("DefensePerso3");
var DefensePerso4 = document.getElementById("DefensePerso4");
var AttaqueSpePerso1 = document.getElementById("AttaqueSpePerso1");
var AttaqueSpePerso2 = document.getElementById("AttaqueSpePerso2");
var AttaqueSpePerso3 = document.getElementById("AttaqueSpePerso3");
var AttaqueSpePerso4 = document.getElementById("AttaqueSpePerso4");
var Perso1 = document.getElementById("perso1");
var Perso2 = document.getElementById("perso2");
var Perso3 = document.getElementById("perso3");
var Perso4 = document.getElementById("perso4");
var Ennemie1 = document.getElementById("ennemie1");
var Ennemie2 = document.getElementById("ennemie2");
var Ennemie3 = document.getElementById("ennemei3");
var nomperso1 = document.getElementById("nomperso1");
var nomperso2 = document.getElementById("nomperso2");
var nomperso3 = document.getElementById("nomperso3");
var nomperso4 = document.getElementById("nomperso4");
var nomennemie1 = document.getElementById("nomennemie1");
var nomennemie2 = document.getElementById("nomennemie2");
var nomennemie3 = document.getElementById("nomennemie3");
var HpMonstre1HTML = document.getElementById("hpmonstre1");
var HpMonstre2HTML = document.getElementById("hpmonstre2");
var HpMonstre3HTML = document.getElementById("hpmonstre3");
var HpPerso1HTML = document.getElementById("hpperso1");
var HpPerso2HTML = document.getElementById("hpperso2");
var HpPerso3HTML = document.getElementById("hpperso3");
var HpPerso4HTML = document.getElementById("hpperso4");
var MpPerso1HTML = document.getElementById("mpperso1");
var MpPerso2HTML = document.getElementById("mpperso1");
var MpPerso3HTML = document.getElementById("mpperso1");
var MpPerso4HTML = document.getElementById("mpperso1");
var hpmonstre3 = "250";
var hpmonstre2 = "200";
var hpmonstre1 = "300";
var hpperso2 = "200";
var hpperso3 = "150";
var hpperso4 = "150";
var hpperso1 = "100";
var DamagePerso1 = Math.floor(Math.random()*15);
var DamagePerso2 = Math.floor(Math.random()*15);
var DamagePerso3 = Math.floor(Math.random()*15);
var DamagePerso4 = Math.floor(Math.random()*15);
var MushroomImage = document.getElementById("mushroomimage");
var GouleImage = document.getElementById("gouleimage");
var HarpieImage = document.getElementById("harpieimage");
var damagemonstre3 =  Math.floor(Math.random()*40);
var damagemonstre2 =  Math.floor(Math.random()*70);
var damagemonstre1 =  Math.floor(Math.random()*35);

ennemie1.onmouseover = function(){
    nomennemie1.style.visibility = "visible";     
}
ennemie1.onmouseout = function(){
    nomennemie1.style.visibility = "hidden";
}
ennemie2.onmouseover = function(){
    nomennemie2.style.visibility = "visible";     
}
ennemie2.onmouseout = function(){
    nomennemie2.style.visibility = "hidden";
}
ennemie3.onmouseover = function(){
    nomennemie3.style.visibility = "visible";     
}
ennemie3.onmouseout = function(){
    nomennemie3.style.visibility = "hidden";
}

AttaquePerso1.onclick = Attaque1
function Attaque1(){
    MushroomImage.onclick = degatsurmonstre
}

function degatsurperso3(){
    damagemonstre3 =  Math.floor(Math.random()*40);
    HpPerso1HTML.innerHTML = hpperso1 -= damagemonstre3
}
function degatsurperso2(){
    damagemonstre2 =  Math.floor(Math.random()*70);
    HpPerso1HTML.innerHTML = hpperso1 -= damagemonstre2
}
function degatsurperso1(){
    damagemonstre1 =  Math.floor(Math.random()*35);
    HpPerso1HTML.innerHTML = hpperso1 -= damagemonstre1
}




function degatsurmonstre(){
    DamagePerso1 = Math.floor(Math.random()*60);
    HpMonstre3HTML.innerHTML = hpmonstre3 -= DamagePerso1
    MushroomImage.onclick = null
    setTimeout(degatsurperso, 1000)
}
