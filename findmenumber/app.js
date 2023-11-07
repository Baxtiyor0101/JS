let secretnumber = Math.floor(Math.random() * 21);
let score = 20;
// let highscore = 0;
let getnumber;
let number = document.querySelector(".number");
let check = document.querySelector(".check");
let secret = document.querySelector(".secretnumber");

function getMassage(massage) {
  document.querySelector(".massage").textContent = massage;
}

// document.querySelector(".again").addEventListener("click", (e) => {
//   console.log(e);
// });
check.addEventListener("click", () => {
  score--;
  document.querySelector(".score").textContent = score;
  if (+number.value == secretnumber) {
    getMassage("Correct!!!");
    secret.textContent = secretnumber;
    document.querySelector(".highscore").textContent = score;
    document.querySelector(".wrap").style.backgroundColor = "green";
    document.querySelector(".again").removeAttribute("hidden");
  } else {
    if (+number.value > secretnumber) {
      getMassage("too high!!!");
    } else {
      getMassage("too low");
    }
  }
  number.value = "";
  console.log(number.value);
});

document.querySelector(".again").addEventListener("click", () => {
  secret.textContent = "?";
  getMassage("Start Guessing ...");
  score = 20;
  secretnumber = Math.floor(Math.random() * 21);
  document.querySelector(".score").textContent = "20";
  document.querySelector(".wrap").style.backgroundColor = "aqua";
  document.querySelector(".again").setAttribute("hidden", "hidden");
});
