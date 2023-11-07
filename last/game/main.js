let item1Random = document.querySelector(".item1Random");
let item2Random = document.querySelector(".item2Random");
let item1Score = document.querySelector(".item1Score");
let item2Score = document.querySelector(".item2Score");
let item1Btn = document.querySelector(".item1Btn");
let item2Btn = document.querySelector(".item2Btn");
let random1Number;
let random1Score = 0;
let random2Number;
let random2Score = 0;
function compareBoth() {
  if (random1Score >= 25) {
    let test = confirm("Toshmat yutdi yana oynayszmi");
    if (test) {
      random1Score = 0;
      random2Score = 0;
    }
  } else if (random2Score >= 25) {
    let test = confirm("Eshmat yutdi yana oynayszmi");
    if (test) {
      random1Score = 0;
      random2Score = 0;
    }
  }
}
item1Btn.addEventListener("click", () => {
  random1Number = Math.floor(Math.random() * 10);
  item1Random.textContent = random1Number;
  random1Score += random1Number;
  item1Score.textContent = random1Score;
  compareBoth();
});
item2Btn.addEventListener("click", () => {
  random2Number = Math.floor(Math.random() * 10);
  item2Random.textContent = random2Number;
  random2Score += random2Number;
  item2Score.textContent = random2Score;
  compareBoth();
});
