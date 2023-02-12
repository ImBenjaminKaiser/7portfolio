gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({});
tl.set("li",{
  y:-50,
  scale:0.75,
})

tl.to("li", {
  y:1.5,
  stagger:-0.1,
  ease: "power3.inOut",
})
tl.to("li", {
  scale:1,
  stagger:-0.2,
  ease: "power3.inOut",
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

// following code "adapted" from https://codepen.io/DariaIvK/pen/RwrBvaW
ScrollTrigger.create({
  trigger: ".quality1",
  start: 'top 60%',
  end: 'bottom 30%',
  // markers: true,
  onEnter: () => gsap.to(".quality1", {y: 0,opacity: 1,}),
  onLeave: () => gsap.to(".quality1", {y: -50,opacity: 0,}),
  onEnterBack: () => gsap.to(".quality1", {y: 0,opacity: 1,}),
  onLeaveBack: () => gsap.to(".quality1", {y: 50,opacity: 0,}),
})
ScrollTrigger.create({
  trigger: ".quality2",
  start: 'top 60%',
  end: 'bottom 30%',
  // markers: true,
  onEnter: () => gsap.to(".quality2", {y: 0,opacity: 1,}),
  onLeave: () => gsap.to(".quality2", {y: -50,opacity: 0,}),
  onEnterBack: () => gsap.to(".quality2", {y: 0,opacity: 1,}),
  onLeaveBack: () => gsap.to(".quality2", {y: 50,opacity: 0,}),
})
ScrollTrigger.create({
  trigger: ".quality3",
  start: 'top 60%',
  end: 'bottom 30%',
  // markers: true,
  onEnter: () => gsap.to(".quality3", {y: 0,opacity: 1,}),
  onLeave: () => gsap.to(".quality3", {y: -50,opacity: 0,}),
  onEnterBack: () => gsap.to(".quality3", {y: 0,opacity: 1,}),
  onLeaveBack: () => gsap.to(".quality3", {y: 50,opacity: 0,}),
})
ScrollTrigger.create({
  trigger: ".quality4",
  start: 'top 60%',
  end: 'bottom 30%',
  // markers: true,
  onEnter: () => gsap.to(".quality4", {y: 0,opacity: 1,}),
  onLeave: () => gsap.to(".quality4", {y: -50,opacity: 0,}),
  onEnterBack: () => gsap.to(".quality4", {y: 0,opacity: 1,}),
  onLeaveBack: () => gsap.to(".quality4", {y: 50,opacity: 0,}),
})
ScrollTrigger.create({
  trigger: ".quality5",
  start: 'top 60%',
  end: 'bottom 30%',
  // markers: true,
  onEnter: () => gsap.to(".quality5", {y: 0,opacity: 1,}),
  onLeave: () => gsap.to(".quality5", {y: -50,opacity: 0,}),
  onEnterBack: () => gsap.to(".quality5", {y: 0,opacity: 1,}),
  onLeaveBack: () => gsap.to(".quality5", {y: 50,opacity: 0,}),
})