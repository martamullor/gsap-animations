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
    background: `rgba(${randomInt(131, 197)}, 190, 1)`
  })

  gsap.to(boxDOMEl, {
    delay: 1,
  })
}

const padding = 120;
for (let x = -padding; x < window.innerWidth; x += padding) {
  for (let y = -padding; y < window.innerHeight; y += padding) {
    createBox(x, y)
  }
}

gsap.to(".box", {
  delay: 0.2,
  duration: 5,
  rotation: 180,
  ease: Elastic.easeOut,
  scale: 0.2,
  background: "red",
  repeat: -1,
  yoyo: true,
  // To sequence the animations
  stagger: {
    amount: 4,
    from: "random",
    grid: "auto"
  }
})