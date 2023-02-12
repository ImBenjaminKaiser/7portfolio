var splitBenjamin = new SplitType(".benjamin")
var splitKaiser = new SplitType(".kaiser")

// // This code registers the ScrollTrigger plugin with the GSAP library, allowing the user to create scroll-based animations with GSAP.
gsap.registerPlugin("ScrollTrigger");
// // This code creates a timeline object using the GreenSock Animation Platform (GSAP) library. The timeline object can be used to create and control animations.
var tl = gsap.timeline({});

// // This code creates a timeline (tl) which animates each list item (li) from an x
// //  position of -3000 to its original position, with a staggered delay of 0.1
// //   seconds between each item, and an easing effect of "power3.inOut".
tl.from("li", {
  x:-3000,
  stagger:-0.1,
  ease: "power3.inOut",
})

// // This code creates a timeline (tl) and animates the element with the class
// //  "me" from an x position of 1000 to its original position
// //  over a duration of 2 seconds using a power3.inOut easing.
tl.from(".me",{
  y:1000,
  opacity:0,
  duration:2,
  ease: "power3.inOut",
  // scale:0.5,
})

// // This code creates an animation that moves the element with the class
// // "hellomynameis" from its current position to a position 100px above it, fades
// //  it in, and scales it up, all over a duration of 0.6 seconds, with a delay of 0.5 seconds.
tl.from(".hello", {
  y:-100,
  opacity:0,
  scale:0,
  delay:0.5,
  duration:0.6,
})
tl.from(".mynameis", {
  y:-100,
  opacity:0,
  scale:0,
  delay:0.5,
  duration:0.6,
}, "<")


// This code uses the Timeline (tl) to animate the elements with the 
// class "char" to a y-position of 0, staggering the animation by 
// 0.05 seconds and taking a total duration of 0.1 seconds.
tl.to(".char",{
  y:0,
  stagger:.05,
  duration:.1,
})

// // This code creates a timeline (tl) which animates the element wi
// // th the class "intro" from a y-position of 50, an opacity of 0,
// // with a delay of 0.5 seconds and a duration of 0.8 seconds.
tl.from(".intro", {
  x:-150,
  opacity:0,
  delay:0.5,
  duration:0.8,
  ease: "power3.inOut",
})

// // following code was "adapted" (copied) from https://codepen.io/DariaIvK/pen/RwrBvaW

// // This code uses the ScrollTrigger library to create triggers for elements
// // with the classes "quality1" through "quality5". When the user scrolls between the top 60% an
// // d bottom 30% of the page, the elements will animate with GSAP, moving up and down and changing opacity.
// //  When the user scrolls back up, the elements will animate back to their original positions.
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



