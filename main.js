
gsap.registerPlugin("ScrollTrigger");
var splitBenjamin = new SplitType(".benjamin")
var splitKaiser = new SplitType(".kaiser")
//making this a constant breaks the code idk why
//random speeds for homepage
var randDur1 = gsap.utils.random(15,25)
var randDur2 = gsap.utils.random(26, 35)
var randDur3 = gsap.utils.random(36, 45)
var randDur4 = gsap.utils.random(46, 55)
var randDur5 = gsap.utils.random(56, 90)
//random speeds for coding speeds
var randDur1c = gsap.utils.random(15,25)
var randDur2c = gsap.utils.random(26, 35)
var randDur3c = gsap.utils.random(36, 45)
var randDur4c = gsap.utils.random(46, 55)
var randDur5c = gsap.utils.random(56, 90)

var tl = gsap.timeline({});
tl.set(".char",{y:-100,})

//for homepage 
gsap.to("#wave1",{
  x:-2600,
  duration:randDur1,
  yoyo:true,
  repeat:-1,
  ease:"none",
})
gsap.to("#wave2",{
  x:-2600,
  duration:randDur2,
  yoyo:true,
  repeat:-1,
  ease:"none",
})
gsap.to("#wave3",{
  x:-2600,
  duration:randDur3,
  yoyo:true,
  repeat:-1,
  ease:"none",
})
gsap.to("#wave4",{
  x:-2600,
  duration:randDur4,
  yoyo:true,
  repeat:-1,
  ease:"none",
})
gsap.to("#wave5",{
  x:-2600,
  duration:randDur5,
  yoyo:true,
  repeat:-1,
  ease:"none",
})
//🚧🚧🚧 Under Construction 🚧🚧🚧
// for coding progression
gsap.to("#wave1c",{
  x:-2600,
  duration:randDur1c,
  yoyo:true,
  repeat:-1,
  ease:"none",
})
gsap.to("#wave2c",{
  x:-2600,
  duration:randDur2c,
  yoyo:true,
  repeat:-1,
  ease:"none",
})
gsap.to("#wave3c",{
  x:-2600,
  duration:randDur3c,
  yoyo:true,
  repeat:-1,
  ease:"none",
})
gsap.to("#wave4c",{
  x:-2600,
  duration:randDur4c,
  yoyo:true,
  repeat:-1,
  ease:"none",
})
gsap.to("#wave5c",{
  x:-2600,
  duration:randDur5c,
  yoyo:true,
  repeat:-1,
  ease:"none",
})


tl.from(".nav-link", {
  x:-3000,
  stagger:-0.1,
  ease: "power3.inOut",
})

tl.from(".me",{
  y:300,
  opacity:0,
  duration:2,
  ease: "power3.inOut",
  // scale:0.5,
}, ">")


tl.from(".hello", {
  y:-100,
  opacity:0,
  scale:0,
  // delay:0.5,
  duration:0.6,
})
tl.from(".mynameis", {
  y:-100,
  opacity:0,
  scale:0,
  // delay:0.5,
  duration:0.6,
},)

tl.to(".char",{
  y:0,
  stagger:0.05,
})

tl.from(".intro", {
  x:-150,
  opacity:0,
  delay:0.5,
  duration:0.8,
  ease: "power3.inOut",
})

// following code was "adapted" (copied) from https://codepen.io/DariaIvK/pen/RwrBvaW
ScrollTrigger.create({
  trigger: ".quality1",
  start: 'top 60%',
  end: 'bottom 20%',
  // markers: true,
  onEnter: () => gsap.to(".quality1", {y: 0,opacity: 1,}),
  onLeave: () => gsap.to(".quality1", {y: -50,opacity: 0,}),
  onEnterBack: () => gsap.to(".quality1", {y: 0,opacity: 1,}),
  onLeaveBack: () => gsap.to(".quality1", {y: 50,opacity: 0,}),
})
ScrollTrigger.create({
  trigger: ".quality2",
  start: 'top 60%',
  end: 'bottom 20%',
  // markers: true,
  onEnter: () => gsap.to(".quality2", {y: 0,opacity: 1,}),
  onLeave: () => gsap.to(".quality2", {y: -50,opacity: 0,}),
  onEnterBack: () => gsap.to(".quality2", {y: 0,opacity: 1,}),
  onLeaveBack: () => gsap.to(".quality2", {y: 50,opacity: 0,}),
})
ScrollTrigger.create({
  trigger: ".quality3",
  start: 'top 60%',
  end: 'bottom 20%',
  // markers: true,
  onEnter: () => gsap.to(".quality3", {y: 0,opacity: 1,}),
  onLeave: () => gsap.to(".quality3", {y: -50,opacity: 0,}),
  onEnterBack: () => gsap.to(".quality3", {y: 0,opacity: 1,}),
  onLeaveBack: () => gsap.to(".quality3", {y: 50,opacity: 0,}),
})
ScrollTrigger.create({
  trigger: ".quality4",
  start: 'top 60%',
  end: 'bottom 20%',
  // markers: true,
  onEnter: () => gsap.to(".quality4", {y: 0,opacity: 1,}),
  onLeave: () => gsap.to(".quality4", {y: -50,opacity: 0,}),
  onEnterBack: () => gsap.to(".quality4", {y: 0,opacity: 1,}),
  onLeaveBack: () => gsap.to(".quality4", {y: 50,opacity: 0,}),
})
ScrollTrigger.create({
  trigger: ".quality5",
  start: 'top 60%',
  end: 'bottom 20%',
  // markers: true,
  onEnter: () => gsap.to(".quality5", {y: 0,opacity: 1,}),
  onLeave: () => gsap.to(".quality5", {y: -50,opacity: 0,}),
  onEnterBack: () => gsap.to(".quality5", {y: 0,opacity: 1,}),
  onLeaveBack: () => gsap.to(".quality5", {y: 50,opacity: 0,}),
})
// from here https://stackoverflow.com/questions/32679960/want-to-change-fonts-back-and-forth-using-javascript-button
function changeFont() {
  var fon = document.getElementById("changeable");
  if (fon.className == "raleway") {
    fon.className = 'openDyslexic';
  } else {
    fon.className = 'raleway';
  }
}