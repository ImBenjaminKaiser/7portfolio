gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({});
tl.set("li",{
  y:-1000,
  scale:0.75,
})

tl.to("li", {
  y:1.5,
  stagger:-0.1
})
tl.to("li", {
  scale:1,
  stagger:-0.2,
})


tl.from(".me",{
  x:1000,
  // opacity:0,
  duration:2,
  ease: "power3.inOut",
})

tl.from(".hellomynameis", {
  y:-100, 
  opacity:0,
  scale:0, 
  delay:0.5, 
  duration:0.6,
})

tl.from(".benjamin", {
  opacity:0,
  y:100,
  duration:0.6,
  ease: "power3.inOut",
})

tl.from(".kaiser", {
  opacity:0,
  y:100,
  duration:0.6,
  ease: "power3.inOut",
  delay:0.2,
})

tl.from(".intro", {
  y:50, 
  opacity:0, 
  delay:0.5, 
  duration:0.8,
})


gsap.set(".dummytext", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  overwrite: 'auto',
});

// ScrollTrigger.create({
//   trigger: ".dummytext",
//   start: 'top 60%',
//   end: 'bottom 30%',
//   markers: true,
//   onEnter: () => gsap.to(".dummytext", {
//     y: 0,
//     opacity: 1,
//     // stagger: 0.2,
//   }),
//   onLeave: () => gsap.to(".dummytext", {
//     y: -50,
//     opacity: 0,
//     // stagger: 0.2,
//   }),
//   onEnterBack: () => gsap.to(".dummytext", {
//     y: 0,
//     opacity: 1,
//     // stagger: -0.2,
//   }),
//   onLeaveBack: () => gsap.to(".dummytext", {
//     y: 50,
//     opacity: 0,
//     // stagger: -0.2,
//   }),
// })