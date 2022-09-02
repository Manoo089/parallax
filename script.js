const parallax = document.querySelector(".parallax");
const content = document.querySelector(".content-outer");
document.addEventListener("scroll", handleScroll);

const value = 0.1;

function handleScroll() {
  const newValue = value - window.scrollY;

  parallax.style.setProperty("--marginTop", `${newValue}px`);
}
