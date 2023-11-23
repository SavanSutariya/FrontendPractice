document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        x: dets.x-10,
        y: dets.y-10,
        stagger: -0.1,
    });
    gsap.to("#cursor-blur",{
        x: dets.x-150,
        y: dets.y-150,
        scrub: 1,
    });
});
gsap.to("#nav",{
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
});

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -30%",
        end: "top -70%",
        scrub: 1,
    }
})