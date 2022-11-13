var zajak= document.getElementById("zajak");
var zhelka=document.getElementById("zhelka");
var result=document.getElementById("result");
var score=document.getElementById("score");
var game=document.getElementById("game");
var counter=0;

zajak.addEventListener("animationiteration", function()
{
    var random=((Math.floor(Math.random()*3))*130) //130 oti tolku e shirinata na elementite
    zajak.style.left=random+"px";
    counter ++;
})


zhelka.addEventListener("animationiteration", function()
{
    var random=((Math.floor(Math.random()*3))*130) //130 oti tolku e shirinata na elementite
    zhelka.style.left=random+"px";
    counter ++;
})



setInterval(function Gameover(){
    var zajakTop= parseInt(window.getComputedStyle(zajak).getPropertyValue("top"));
    var zhelkaTop=parseInt(window.getComputedStyle(zhelka).getPropertyValue("top"));
    var zajakLeft=parseInt(window.getComputedStyle(zajak).getPropertyValue("left"));

    if((zajakLeft===zhelkaLeft)&&(zajakTop>250)&&(zajakTop<250))
    {
        result.style.display ="block";
        game.style.display="none";// da ne ja pokazhuva igrata
        score.innerHTML=` Time: ${counter} `;
        counter = 0;//da se restarira brojachot
    }

},10)//posle 10ms
