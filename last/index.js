let title = document.querySelector(".title");
let incre = document.querySelector(".incre");
let decre = document.querySelector(".decre");

let getValue = 0;

function getValues() {
  title.textContent = getValue;
}

let increFun = () => {
  getValue++;
  title.style.backgroundColor = "#" + Math.random().toString().slice(2, 8);
  console.log("#" + Math.random().toString(2).slice(2, 8));
  getValues();
};

let decreFun = () => {
  getValue--;
  title.style.backgroundColor = "#" + Math.random().toString(16).slice(2, 8);

  getValues();
};

incre.addEventListener("click", increFun);

decre.addEventListener("click", decreFun);
