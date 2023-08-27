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
            setTimeout(function () { $(".front-layer").fadeToggle() }, 300);
            $(".middle-layer").addClass("middleAnimation");
            $(".name").fadeTo("slow", 0);
            $(".nav1").addClass("nav1Animation");
            nav1Click=true;
        }
        else if ((nav4Click==true)){
            $(".nav4Content").addClass("nav4AnimationRev");
            $(".team-heading").animate({opacity:"0"},"slow");
            $(".nav4Content").removeClass("nav4Animation");
            $(".nav1").addClass("nav1Animation");
            $(".nav1").removeClass("nav1AnimationRev");
            nav1Click=true;
            nav4Click=false;
        }
    })
    $(".bt4").on("click",function(){
        $(".team-heading").animate({opacity:"1"},"slow");
        if (nav4Click==false && nav1Click==false){
            $(".front-layer").addClass("frontAnimation");
            $(".parallax").removeClass("parallax");
            setTimeout(function () { $(".front-layer").fadeToggle() }, 300);
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
    var hover=false;
    $(".Yograj").hover(function(){
        if(hover==false){
            $(".col1").removeClass("notOnHover");
            $(".col1").addClass("onHover");
            $(".Yograj").css("border-bottom-right-radius","0rem");
            $(".col2").css("filter","blur(0.2rem)")
            $(".col3").css("filter","blur(0.2rem)")
            $(".col4").css("filter","blur(0.2rem)")
            $(".info1").css("opacity","1");
            $(".info1").css("border-bottom-right-radius","4rem");
            hover=true;
        }
        else{
            $(".col1").removeClass("onHover");
            $(".col1").addClass("notOnHover");
            $(".Yograj").css("border-bottom-right-radius","7rem");
            $(".col2").css("filter","blur(0)");
            $(".col3").css("filter","blur(0)");
            $(".col4").css("filter","blur(0)");
            $(".info1").css("opacity","0");
            $(".info1").css("border-bottom-right-radius","0");
            hover=false;
        }
    })
    $(".Rohan").hover(function(){
        if(hover==false){
            $(".col2").removeClass("notOnHover");
            $(".col2").addClass("onHover");
            $(".Rohan").css("border-bottom-right-radius","0rem");
            $(".col1").css("filter","blur(0.2rem)");
            $(".col3").css("filter","blur(0.2rem)");
            $(".col4").css("filter","blur(0.2rem)");
            $(".info2").css("opacity","1");
            $(".info2").css("border-bottom-right-radius","4rem");
            hover=true;
        }
        else{
            $(".col2").removeClass("onHover");
            $(".col2").addClass("notOnHover");
            $(".Rohan").css("border-bottom-right-radius","7rem");
            $(".col1").css("filter","blur(0)");
            $(".col3").css("filter","blur(0)");
            $(".col4").css("filter","blur(0)");
            $(".info2").css("opacity","0");
            $(".info2").css("border-bottom-right-radius","0");
            hover=false;
        }
    })
    $(".Mohit").hover(function(){
        if(hover==false){
            $(".col3").removeClass("notOnHover");
            $(".col3").addClass("onHover");
            $(".Mohit").css("border-bottom-right-radius","0rem");
            $(".col2").css("filter","blur(0.2rem)");
            $(".col1").css("filter","blur(0.2rem)");
            $(".col4").css("filter","blur(0.2rem)");
            $(".info3").css("opacity","1");
            $(".info3").css("border-bottom-right-radius","4rem");
            hover=true;
        }
        else{
            $(".col3").removeClass("onHover");
            $(".col3").addClass("notOnHover");
            $(".Mohit").css("border-bottom-right-radius","7rem");
            $(".col2").css("filter","blur(0)");
            $(".col1").css("filter","blur(0)");
            $(".col4").css("filter","blur(0)");
            $(".info3").css("opacity","0");
            $(".info3").css("border-bottom-right-radius","0");
            hover=false;
        }
    })
    $(".Shubham").hover(function(){
        if(hover==false){
            $(".col4").removeClass("notOnHover");
            $(".col4").addClass("onHover");
            $(".Shubham").css("border-bottom-right-radius","0rem");
            $(".col2").css("filter","blur(0.2rem)");
            $(".col3").css("filter","blur(0.2rem)");
            $(".col1").css("filter","blur(0.2rem)");
            $(".info4").css("opacity","1");
            $(".info4").css("border-bottom-right-radius","4rem");
            hover=true;
        }
        else{
            $(".col4").removeClass("onHover");
            $(".col4").addClass("notOnHover");
            $(".Shubham").css("border-bottom-right-radius","7rem");
            $(".col2").css("filter","blur(0)");
            $(".col3").css("filter","blur(0)");
            $(".col1").css("filter","blur(0)");
            $(".info4").css("opacity","0");
            $(".info4").css("border-bottom-right-radius","0");
            hover=false;
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