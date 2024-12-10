// OFFCANVAS

// let offcanvas = document.getElementById("offcanvas-opentext");

// let offcanvasclose = document.getElementById("canvas-close");



// let offcanvastl = gsap.timeline();

// offcanvastl.to("#canvasopen", {
//     height: "200vh",
//     width: "200%",
//     duration: 1.5,
//     scale: 2,
//     zIndex: 10000,
// })

// offcanvastl.to("#canvasopen", {
//     height: "100vh",
//     width: "100%",
//     borderRadius: 0,
//     scale: 1,
// })

// offcanvastl.pause();


// offcanvas.addEventListener("click", function() {
//     offcanvastl.play();
// })



// offcanvasclose.addEventListener("click", function() {
//     offcanvastl.reverse();
// })

// offcanvasclose.from("#canvas-close", {
//     x: 20,
//     duration: 0.5,
// })



// var tl = gsap.timeline();

gsap.from(".gsap1", {
    y: -40,
    duration: 1.5,
    stagger: 0.4,
    opacity: 0,
})

gsap.from(".heading-name", {
    y: -100,
    duration: 1,
    delay: 1.8,
    opacity: 0,
    ease: "power1",
})

gsap.from(".header-video", {
    y: 100,
    duration: 1,
    delay: 2.3,
    opacity: 0,
    ease: "power1",
})

gsap.from(".header-video video", {
    y: "-80%",
    scale: .5,
    scrollTrigger:{
        trigger:".hero-mainbox",
        start: "top top",
        end: "bottom 100%",
        scrub: 2,
        // markers: true,
    }
});


gsap.from(".aboutbox2 img", {
    x: "-70%",
    y: "-100%",
    scale: .2,
    opacity: 0,
    scrollTrigger:{
        trigger:".aboutsec-main",
        start: "top 60%",
        end: "bottom 100%",
        scrub: 2,
        // markers: true,
    }
});

gsap.from(".about-heading1", {
    x: "-50%",
    opacity: 0,
    scrollTrigger:{
        trigger:".aboutsec-main",
        start: "top 30%",
        end: "bottom 100%",
        scrub: 2,
        // markers: true,
    }
}); 

gsap.from(".about-para1", {
    x: "50%",
    scale: .2,
    opacity: 0,
    scrollTrigger:{
        trigger:".aboutsec-main",
        start: "top 30%",
        end: "bottom 100%",
        scrub: 2,
        // markers: true,
    }
})


// let mm = gsap.matchmedia.add("max-width: ")


