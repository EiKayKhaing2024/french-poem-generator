function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");
  let apiKey = "81a6fa4co08122d988ca3t732b0bd522";
  let prompt = `User instructions:Generate a french poem about ${instructionInput.value}`;
  let context =
    "You are a romatic poem expert and love to write short poems. Your mission is to generate a 4 lines poem in basic HTML and separte each line with a </br>. Make sure to follow the user instructions. Don't include the title of the poem. Sign the poem with `SheCodes AI` inside a <strong> element at the end of the poem and Not at the beginning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Generating poem");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);

  axios.get(apiUrl).then(displayPoem);
}
let poemgeneratorElement = document.querySelector("#poem-generator");
poemgeneratorElement.addEventListener("submit", generatePoem);
