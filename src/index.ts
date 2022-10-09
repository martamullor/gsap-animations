import "./styles.scss";

import { Elastic } from "gsap/all";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap
  .timeline()
  .to(".box.a", {
    top: "-100vh",
    duration: 1
  })
  .to(".box.b", {
    left: "100vw",
    duration: 2,
    scale: 1.5
    // rotation: 180
  })
  .to(".box.c", {
    // left: "100vw",
    duration: 3,
    opacity: 0
  });

ScrollTrigger.create({
  animation: tl,
  trigger: "#container",
  start: "top top",
  end: "+=10000",
  scrub: true,
  pin: true,
  markers: true
});
