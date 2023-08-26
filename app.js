const mediaQuery = window.matchMedia('(min-width: 480px)')
var hamClick = false;
var nav4Click=false;
var nav1Click=false;
if (mediaQuery.matches) {
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
        document.querySelectorAll(".parallax").forEach(function (move) {
            var moving_value = move.getAttribute("data-value");
            var x = (e.clientX * moving_value) / 250;
            var y = (e.clientY * moving_value) / 250;
            move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
        });
    }
    $(".bt1").on("click", function () {
        if (nav1Click==false && nav4Click==false){
            $(".front-layer").addClass("frontAnimation");
            $(".parallax").removeClass("parallax");
            setTimeout(function () { $(".front-layer").fadeToggle() }, 300)
            $(".middle-layer").addClass("middleAnimation");
            $(".name").fadeTo("slow", 0);
            $(".nav1").addClass("nav1Animation");
            nav1Click=true;
        }
        else if ((nav4Click==true)){
            $(".nav4Content").addClass("nav4AnimationRev");
            $(".nav4Content").removeClass("nav4Animation");
            $(".nav1").addClass("nav1Animation");
            $(".nav1").removeClass("nav1AnimationRev");
            nav1Click=true;
            nav4Click=false;
        }
    })
    $(".bt4").on("click",function(){
        if (nav4Click==false && nav1Click==false){
            $(".front-layer").addClass("frontAnimation");
            $(".parallax").removeClass("parallax");
            setTimeout(function () { $(".front-layer").fadeToggle() }, 300)
            $(".middle-layer").addClass("middleAnimation");
            $(".name").fadeTo("slow", 0);
            $(".nav4Content").addClass("nav4Animation");
            nav4Click=true;
        }
        else if ((nav1Click==true)){
            $(".nav1").addClass("nav1AnimationRev");
            $(".nav1").removeClass("nav1Animation");
            $(".nav4Content").addClass("nav4Animation");
            $(".nav4Content").removeClass("nav4AnimationRev");
            nav4Click=true;
            nav1Click=false;
        }
    })
}
else {
    $(".navbar__menu").fadeOut();
    $(".bt1").on("click", function () {
        if (nav1Click==false && nav4Click==false){
            $(".middle-layer").addClass("middleAnimation");
            $(".name").fadeTo("slow", 0);
            $(".nav1").addClass("nav1Animation");
            nav1Click=true;
        }
        else if ((nav4Click==true)){
            $(".nav4Content").addClass("nav4AnimationRev");
            $(".nav4Content").removeClass("nav4Animation");
            $(".nav1").addClass("nav1Animation");
            $(".nav1").removeClass("nav1AnimationRev");
            nav1Click=true;
            nav4Click=false;
        }
    })
    $(".bt4").on("click",function(){
        if (nav4Click==false && nav1Click==false){
            $(".middle-layer").addClass("middleAnimation");
            $(".name").fadeTo("slow", 0);
            $(".nav4Content").addClass("nav4Animation");
            nav4Click=true;
        }
        else if ((nav1Click==true)){
            $(".nav1").addClass("nav1AnimationRev");
            $(".nav1").removeClass("nav1Animation");
            $(".nav4Content").addClass("nav4Animation");
            $(".nav4Content").removeClass("nav4AnimationRev");
            nav4Click=true;
            nav1Click=false;
        }
    })
    $(".circle").on("click", function () {
        $(".navbar__menu").fadeToggle();
        if (hamClick == false) {
            $(".cross1").addClass("cross1Animation1");
            $(".cross2").addClass("cross2Animation1");
            $(".cross1").removeClass("cross1Animation2");
            $(".cross2").removeClass("cross2Animation2");
            $(".hamburger").addClass("hamburgerAnimation");
            setTimeout(function () { $(".hamburger").removeClass("hamburgerAnimation") }, 100);
            hamClick = true;
        }
        else if (hamClick == true) {
            $(".cross1").addClass("cross1Animation2");
            $(".cross2").addClass("cross2Animation2");
            $(".cross1").removeClass("cross1Animation1");
            $(".cross2").removeClass("cross2Animation1");
            $(".hamburger").addClass("hamburgerAnimation");
            setTimeout(function () { $(".hamburger").removeClass("hamburgerAnimation") }, 100);
            hamClick = false;
        }
    })
    $(".buttons").on("click", function () {
        $(".cross1").addClass("cross1Animation2");
        $(".cross2").addClass("cross2Animation2");
        $(".cross1").removeClass("cross1Animation1");
        $(".cross2").removeClass("cross2Animation1");
        $(".hamburger").addClass("hamburgerAnimation");
        setTimeout(function () { $(".hamburger").removeClass("hamburgerAnimation") }, 100);
        $(".navbar__menu").fadeToggle();
        hamClick = false;
    })
}
$(".bt3").on("click", function () {
    location.reload(true);
})