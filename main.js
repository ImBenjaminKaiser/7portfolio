// This code registers the ScrollTrigger plugin with the GSAP library, allowing the user to create scroll-based animations with GSAP.
gsap.registerPlugin(ScrollTrigger);
// This code creates a timeline object using the GreenSock Animation Platform (GSAP) library. The timeline object can be used to create and control animations.
var tl = gsap.timeline({});
// This code sets the y position of the element with the id "li" to -50 and the scale to 0.75.
tl.set("li",{
  y:-50,
  scale:0.75,
})

// This code animates each "li" element to move up 1.5 units, with a
//  staggered delay of 0.1 seconds between each element, using a power3.inOut easing effect.
tl.to("li", {
  y:1.5,
  stagger:-0.1,
  ease: "power3.inOut",
})
// This code animates each list item ("li") to scale up to 1 with a 
// staggered delay of 0.2 seconds between each item, using a power3.inOut easing effect.
tl.to("li", {
  scale:1,
  stagger:-0.2,
  ease: "power3.inOut",
})


// This code creates a timeline (tl) and animates the element with the class
//  "me" from an x position of 1000 to its original position
//  over a duration of 2 seconds using a power3.inOut easing.
tl.from(".me",{
  x:1000,
  // opacity:0,
  duration:2,
  ease: "power3.inOut",
})

// This code creates an animation that moves the element with the class
// "hellomynameis" from its current position to a position 100px above it, fades
//  it in, and scales it up, all over a duration of 0.6 seconds, with a delay of 0.5 seconds.
tl.from(".hellomynameis", {
  y:-100,
  opacity:0,
  scale:0,
  delay:0.5,
  duration:0.6,
})

// This code creates a timeline (tl) and animates the element with
// the class "benjamin" from an opacity of 0 to an opacity of 1, and from
// a vertical position of 100px to its original position, over a duration
// of 0.6 seconds, using a power3.inOut easing.
tl.from(".benjamin", {
  opacity:0,
  y:100,
  duration:0.6,
  ease: "power3.inOut",
})

// This code creates a timeline (tl) which animates the element with the class
// "kaiser" from an opacity of 0 to full opacity, moves it 100px up from its original positi
// on, and takes 0.6 seconds to complete the animation
// with a power3.inOut easing effect and a delay of 0.2 seconds.
tl.from(".kaiser", {
  opacity:0,
  y:100,
  duration:0.6,
  ease: "power3.inOut",
  delay:0.2,
})

// This code creates a timeline (tl) which animates the element wi
// th the class "intro" from a y-position of 50, an opacity of 0,
// with a delay of 0.5 seconds and a duration of 0.8 seconds.
tl.from(".intro", {
  y:50,
  opacity:0,
  delay:0.5,
  duration:0.8,
})

// following code was "adapted" from https://codepen.io/DariaIvK/pen/RwrBvaW

// This code uses the ScrollTrigger library to create triggers for elements
// with the classes "quality1" through "quality5". When the user scrolls between the top 60% an
// d bottom 30% of the page, the elements will animate with GSAP, moving up and down and changing opacity.
//  When the user scrolls back up, the elements will animate back to their original positions.
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