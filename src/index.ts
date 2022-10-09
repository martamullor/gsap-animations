import gsap from "gsap";
import { Elastic, Bounce } from "gsap";
import "./styles.scss";


function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const { body } = document

function createBox(left: number, top: number) {
  const boxDOMEl = document.createElement("div");
  boxDOMEl.classList.add("box")

  body.appendChild(boxDOMEl)

  gsap.set(boxDOMEl, {
    left,
    top
  })

  gsap.to(boxDOMEl, {
    rotate: 90,
    duration: 3,
    background: "#e94f37",
    xPercent: "+=100",
    // onComplete: () => {
    //   alert("done")
    // }, 
    delay: 1,
    /* GreenSock visualizer https://greensock.com/ease-visualizer/ */
    ease: Bounce.easeInOut
  })
}

const padding = 120;
for (let x = -padding; x < window.innerWidth; x += padding) {
  for (let y = -padding; y < window.innerHeight; y += padding) {
    createBox(x, y)
  }
}
