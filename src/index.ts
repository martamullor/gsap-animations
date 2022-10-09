import gsap from "gsap";
import "./styles.scss";


function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const boxDOMEl = document.createElement("div");
boxDOMEl.classList.add("box")

const { body } = document

body.appendChild(boxDOMEl)

gsap.to(boxDOMEl, {
  rotate: 90,
  duration: 3,
  background: "green",
  xPercent: "+=100",
  onComplete: () => {
    alert("done")
  }
})
