function generate(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "La tombe dit à la rose",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let poemgeneratorElement = document.querySelector("#poem-generator");
poemgeneratorElement.addEventListener("submit", generate);
