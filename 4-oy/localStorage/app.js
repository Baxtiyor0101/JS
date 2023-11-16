let theme = document.querySelector("#theme");
let size = document.querySelector("#fontSize");

let save = document.querySelector("#save");
let clear = document.querySelector("#clear");

let mode, fontSize;

theme.addEventListener("change", (e) => {
  mode = e.target.value;
  console.log(mode);
  localStorage.setItem("mode", mode);
});
size.addEventListener("change", (e) => {
  fontSize = e.target.value;
  console.log(fontSize);
  localStorage.setItem("fontSize", fontSize);
});

save.addEventListener("click", () => {
  document.body.classList.add(localStorage.getItem("mode") || "light");
  document.body.classList.add(localStorage.getItem("fontSize") || "small");
  localStorage.setItem("mode", mode);
  localStorage.setItem("fontSize", fontSize);
});

size.value = localStorage.getItem("fontSize") || "small";
theme.value = localStorage.getItem("mode") || "light";
document.body.classList.add(localStorage.getItem("fontSize"));
document.body.classList.add(localStorage.getItem("mode"));
