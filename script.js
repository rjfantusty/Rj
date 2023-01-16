
var profession=["Raj.","a python developer.","a c++ developer.","a web developer."]

tl=gsap.timeline();

tl.
from("#white h1",{
    x:60,
    duration:1,
})
.to("#white h1 ",{
    y:-60,
    duration:1,
    opacity:0,
    display:"none"
})

.to("#white",{
    height:0,
    duration:1,
    
    ease:"easeInOut"

})
.to("#green",{
    height:0,
    duration:1.1,
    delay:-.7,
    ease:"easeInOut"

})
 .from("#lftxt",{
     x:"-20vw",
     duration:1,
     opacity:0,
     ease:"ease.in"
 },"sm")
 .from("#rgtxt",{
     x:"20vh",
     duration:1,
     opacity:0,
     ease:"ease.in"

 },"sm")
.to("#lftxt",{
   
    top:"0%",
    duration:1,
    delay:.5,
    opacity:0,
    ease:Power1.easeInOut,

    
},"sam")
.to("#rgtxt",{
   
    right:"0%",
    duration:1,
    delay:.5,

    ease:Power1.easeInOut,
    opacity:0,

   
},"sam")
.to("#crd",{
   
    minHeight:0,
    duration:1,
    ease:"easeInOut"

   
})
 .to("#nv",{
     position:"fixed",
     top:"0%",
     zIndex:333
 })
.to("#contact",{
    display:"flex",
    zIndex:333
})

.to("#nums",{
    top:"-440%",
    duration:1,
    scrollTrigger:{
        trigger:"#main",
        start:"top top",
        end:"bottom top",
        scrub:1
    }
    
},"txt")
.to("#txt",{
    
    top:0,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#crd",
        start:"top top",
        end:"bottom top",
        scrub:1
    }
   
   
},"txt")
.to("#box",{
    
    left:-10,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#crd",
        start:"top top",
        end:"bottom top",
        scrub:1
    }
   
   
},"txt")
.to("#cv",{
    
    left:"20vw",
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#crd",
        start:"top top",
        end:"bottom top",
        scrub:1,
    }
   
   
},"txt")

.to("#img1",{
    
    left:"10.5vw",
    rotate:"-30deg",
    duration:1,
    scrollTrigger:{
        trigger:"#crd",
        start:"30% top",
        end:"bottom top",
        scrub:1
    }
   
   
},"txt")
.to("#img2",{
    
    left:"14vw",
    rotate:"-20deg",
    duration:1,
    scrollTrigger:{
        trigger:"#crd",
        start:"30% top",
        end:"bottom top",
        scrub:1
    }
   
   
},"txt")
.to("#img3",{
    
    left:"18vw",
    rotate:"-10deg",
    duration:1,
    scrollTrigger:{
        trigger:"#crd",
        start:"30% top",
        end:"bottom top",
        scrub:1
    }
   
   
},"txt")
.from("#stxt",{
    top:"80vh",
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#crd",
        start:"50% top",
        end:"bottom top",
        scrub:1
    }
   
   
},"txt")
mstl=gsap.timeline({repeat:-1});

tl.add(mstl)


profession.forEach(element => {
    let nl=gsap.timeline({repeat:1, yoyo:true,repeatDelay:.5});
    nl.to("#anitxt",{
        color:"#23f7b4",
        text:element,
        duration:1.5,
        ease:"circ.out"
    })
    mstl.add(nl)

});

tl.to("#stxt",{
    left:"-50vw",
    duration:1,
    scrollTrigger:{
        trigger:"#first",
        start:"20% top",
        end:"bottom top",
        scrub:1
    }
   
   
},"sgayab")

.to(".simg",{
    top:"-10vh",
    rotate:"0deg",
    duration:2,
    stagger:1,
    opacity:0,

    scrollTrigger:{
        trigger:"#first",
        start:"30% top",
        end:"bottom 50% ",
        scrub:1,

    
    }
},"sgayab")
.from("#trupr",{
    left:"50vh",
    scrollTrigger:{
        trigger:"#first",
        start:"20% top",
        end:"bottom top ",
        scrub:1,

    
    }
},"sgayab")
.from(".tani",{
    bottom:"-20vh",
    scrollTrigger:{
        trigger:"#first",
        start:"20% top",
        end:"bottom top ",
        scrub:1,

    
    }
},"sgayab")
.from("#trlwr",{
    bottom:"-70vh",
    scrollTrigger:{
        trigger:"#first",
        start:"20% top",
        end:"bottom top ",
        scrub:1,

    
    }
},"sgayab")
.to("#trupr",{
    top:"-30vh",
    opacity:0,
    scrollTrigger:{
        trigger:"#sec",
        start:"10% top",
        end:"bottom top ",
        scrub:1,

    
    }
},"tgayab")
.to(".tani",{
    left:"-30vh",
    opacity:0,
    scrollTrigger:{
        trigger:"#sec",
        start:"10% top",
        end:"bottom top ",
        scrub:1,
    
    }
},"tgayab")
.to("#trlwr",{
    left:"60vh",
    opacity:0,
    scrollTrigger:{
        trigger:"#sec",
        start:"10% top",
        end:"bottom top ",
        scrub:1,

    
    }
},"tgayab")
.from("#forrgt",{
    left:"60vh",
    opacity:0,
    scrollTrigger:{
        trigger:"#sec",
        start:"30% top",
        end:"bottom top ",
        scrub:1,

    
    }
},"tgayab")
.from("#ctxt",{
    top:"50vh",
    opacity:0,
    scrollTrigger:{
        trigger:"#sec",
        start:"30% top",
        end:"bottom top ",
        scrub:1,

    
    }
},"tgayab")



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active"; }