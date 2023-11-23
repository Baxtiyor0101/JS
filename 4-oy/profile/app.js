// // document.querySelector("input").addEventListener("change", handeImage);

// // function handeImage() {
// //   const input = document.querySelector("input");
// //   const file = input.files[0];
// //   if (file) {
// //     const reader = new FileReader();
// //     reader.onload = function (e) {
// //       document.querySelector("img").src = e.target.result;
// //     //   console.log(e.target.result);
// //     };
// //     console.log(reader);
// //     reader.readAsDataURL(file);
// //   }
// //   //   console.log(file);
// // }
// let data = [];
// localStorage.setItem("massages", data);
// function setData(datas) {
//   localStorage.setItem("massages", JSON.stringify(datas));
// }
// function getData() {
//   let res = localStorage.getItem("massages");
//   return JSON.parse(res);
// }
// data.push("olma");
// setData(data);
// // console.log(res);
// data.push("limon");
// setData(data);
// // setData([]);
// data.push("anor");
// console.log(data);
// data.push("behi")
// data.shift()

// setData(data)
// let i = 0;
// function a() {
//   console.log(++i);
//   a();
// }
// a();
// document.querySelector("button").addEventListener("click", () => {
//   setInterval(() => {
//     console.log("worked");
//   }, 1000);
// });

// fetch("https://jsonplaceholders.typicode.com/users")
//   .then((res) => res.json())
//   .then((e) => {
//     console.log(e);
//   })
//   .catch((e) => {
//     console.log("bu link notogri"+ e);
//   });
let data;
async function getUser() {
  try {
    console.log("sending request");
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log("response");
    // console.log("convert to json");
    // console.time("json");
    data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
  data.forEach((val) => {
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    let item = document.createElement("div");
    h1.innerText = val.name;
    h2.innerText = val.username;
    item.append(h1, h2);
    document.querySelector(".container").append(item); 
  });
}
getUser();
// console.log(data);
