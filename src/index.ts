import gsap from "gsap";
import { Elastic, Bounce } from "gsap";
import "./styles.scss";


function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomFloat(min: number, max: number) {
  return (Math.random() * (max - min) + min)
}

const { body } = document

function createBox(left: number, top: number) {
  const boxDOMEl = document.createElement("div");
  boxDOMEl.classList.add("box")

  body.appendChild(boxDOMEl)

  gsap.set(boxDOMEl, {
    left,
    top,
  })

  gsap.to(boxDOMEl, {
    delay: 1,
  })
}

const padding = 120;
for (let x = 0; x < window.innerWidth; x += padding) {
  for (let y = 0; y < window.innerHeight; y += padding) {
    createBox(x, y)
  }
}

gsap.to(".box", {
  delay: 0.2,
  duration: 2,
  rotation: 180,
  scale: 0,
  background: "black",
  // To sequence the animations
  stagger: {
    from: "random",
    amount: 1.5
  }
})