let messages=[

"Merhaba Nisa ❤️",

"Bugün çok özel bir gün...",

"Çünkü bugün dünyanın en güzel insanlarından biri doğdu.",

"Senin gülüşün her şeyi güzelleştiriyor.",

"Yeni yaşında tüm güzellikler seni bulsun.",

"Hayallerin gerçek olsun.",

"Mutluluğun hiç eksilmesin.",

"İyi ki varsın Nisa ❤️"


];


let index=0;



function login(){


let pass=
document.getElementById("pass").value;



if(pass==="nisa123"){



document.getElementById("login").style.display="none";



let music=
document.getElementById("music");


music.play();



startStory();



}else{


document.getElementById("error").innerHTML=
"Şifre yanlış ❤️";


}


}





function startStory(){


showText();



startRoses();


}





function showText(){


if(index>=messages.length){


setTimeout(showCake,2000);


return;

}



let text=
document.getElementById("bigText");



text.innerHTML="";



let word=messages[index];

let i=0;



let timer=setInterval(()=>{


text.innerHTML+=word[i];


i++;



if(i>=word.length){


clearInterval(timer);


index++;


setTimeout(showText,2500);


}



},80);



}





function showCake(){


document.getElementById("bigText").style.display="none";


document.getElementById("cake").style.display="block";



}





// GÜL YAĞMURU


function startRoses(){


setInterval(()=>{


let rose=document.createElement("div");


rose.className="rose";


rose.innerHTML="🌹";


rose.style.left=
Math.random()*100+"vw";


rose.style.fontSize=
(Math.random()*30+20)+"px";



rose.style.animationDuration=
(Math.random()*5+5)+"s";



document.getElementById("roses")
.appendChild(rose);



setTimeout(()=>{


rose.remove();


},10000);



},400);



}
