gsap.timeline()

.to(".text", {y:"0", duration: 1, stagger: 0.2})
.to(".slider", {y:"-100%", duration: 1.5, delay: 0.5})
.to(".intro", {y:"-100%", duration: 1}, "-=1")
.from("header, main", {opacity: 0, duration:1})
.from(".big-text", {duration:1, opacity: 0}, "-=1")

