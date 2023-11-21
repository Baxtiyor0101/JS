// document.querySelector("input").addEventListener("change", handeImage);

// function handeImage() {
//   const input = document.querySelector("input");
//   const file = input.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function (e) {
//       document.querySelector("img").src = e.target.result;
//     //   console.log(e.target.result);
//     };
//     console.log(reader);
//     reader.readAsDataURL(file);
//   }
//   //   console.log(file);
// }
let data = [];
localStorage.setItem("massages", data);
function setData(datas) {
  localStorage.setItem("massages", JSON.stringify(datas));
}
function getData() {
  let res = localStorage.getItem("massages");
  return JSON.parse(res);
}
data.push("olma");
setData(data);
// console.log(res);
data.push("limon");
setData(data);
// setData([]);
data.push("anor");
console.log(data);
data.push("behi")
data.shift()



setData(data)