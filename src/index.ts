import gsap from "gsap";
import { Elastic, Bounce, Power2 } from "gsap";
import "./styles.scss";

const w = window.innerWidth;
const h = window.innerHeight;
const w2 = w / 2
const h2 = h / 2


function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomFloat(min: number, max: number) {
  return (Math.random() * (max - min) + min)
}

const { body } = document

function createBox() {
  const boxDOMEl = document.createElement("div");
  boxDOMEl.classList.add("box")

  body.appendChild(boxDOMEl)

  gsap.set(boxDOMEl, {
    scale: 1,
    left: w2 - 50,
    top: h2 - 50,
  })

  const labels = {
    toYellow: "toYellow",
    fadeout: "fadeout"
  }

  const tl1 = gsap.timeline()
  // .timeScale(3)
  .to(".box", {
    scale: 3,
    duration: 2,
    delay: 1,
    rotation: 90,
    ease: Power2.easeIn
  })
  .addLabel(labels.toYellow)
  .to(".box", {
    background: "#9bc1bc",
  })
  .addLabel(labels.fadeout)
  .to(".box", {
    opacity: 0,
    delay: 1
  })

  // tl1.seek(labels.toYellow)
}

createBox()
