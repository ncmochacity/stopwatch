var i;
var timer;
var divide;
i=0;
divide=100;
function startNow(){
    timer=setInterval("increment()",(1000/divide))
}
//every 10 milliseconds will run the increment
function increment(){
    i++;
    document.getElementById("time").innerHTML=(i/divide);
}
function stop(){
    clearInterval(timer);
    timer=null;
}
function reset(){
    stop();
    i=0;
    document.getElementById("time").innerHTML=(i/divide);
}
$(document).ready(function(){
    $("#timer").click(function(el){
        el.stopPropagation();
        $("#timer").removeClass("clicked");
        $(this).addClass("clicked");
        $("body").addClass("showing-item");
    })
    $("#timer").click(function(){
        $(this).hide().fadeIn(2000);
    })
    $("html").click(function(){
        $("#timer").removeClass("clicked");
        $("body").removeClass("showing-item")
    })
});