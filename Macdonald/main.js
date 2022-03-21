  $(function(){
    let $firstmenu = $('nav > ul > li')
    let $header = $('header')
    
    $firstmenu.mouseenter(function(){
        $header.stop().animate({height : '500px'},300);
      
        
    })
    .mouseleave(function(){
        $header.stop().animate({height:'100px'},300)
    })
    })
      const carouselSlide = document.querySelector(".slide_list");
      const carouselContents = document.querySelectorAll(".slide_item");
      
      const prevBtn = document.querySelector(".prevBtn");
      const nextBtn = document.querySelector(".nextBtn");
      
      //counter
      let counter = 1;
      const size = carouselContents[0].clientWidth;
      
      carouselSlide.style.transform = "translateX(" + -size * (counter+1) + "px)";
    
      //Button Listeners
    nextBtn.addEventListener("click", () => {
    if (counter >= carouselContents.length - 1) return;
    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    });
    
    prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    });
    console.log(carouselContents.length);
    
    carouselSlide.addEventListener("transitionend", function () {
    if (carouselContents[counter].id === "lastClone") {
      carouselSlide.style.transition = "none";
      counter = carouselContents.length - 2;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    }
    if (carouselContents[counter].id === "firstClone") {
      carouselSlide.style.transition = "none";
      counter = carouselContents.length - counter;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    }
    });
    
        $(function(){
           $(".inner").slice(0, 1).show();
           $("#load").click(function(e){
             e.preventDefault();
             $(".inner:hidden").slice(0, 1).show(); 
             if($(".inner:hidden").length == 0){
           }
          });
        });
