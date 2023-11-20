// map
// let map = new Map([
//   [1, 12],
//   ["{}", "text"],
//   ["2", "true"],
// ]);
// set
// get
// has
// map.set("2", "test");
// map.set({}, "test");
// console.log(map);
// console.log(map.get("2"));
// console.log(map.get("{}"));
// {}==={}
// set
// console.log(map.has("2"));

// delete
// map.delete("2");

// clear()
// map.clear()
// console.log(map);

// size
// console.log(map.size);

// let set = new Set(["test", "text"]);
// set.add(12);
// set.add(1);
// set.add(12);
// set.add("apple");
// set.add("limon");
// set.add("limon");
// set.delete(12);
// // set.clear()

// console.log(set.size);

// let obj = {
//   fName: "Sardor",
//   sName: "Botirov",
//   age: 23,
// };

// let s = Object.keys(obj);
// let f = Object.values(obj);
// let r = Object.entries(obj);
// // let res =  map.set(...r)
// // // console.log(res);

// let map = new Map(r);
// // let map2 = new Map(...map);
// console.log(...map);
// let arr = [1, 2, 3, 4, 5];
// let [bir, ikki, uch, tort, besh] = arr;
// let bir = arr[0];
// let ikki = arr[1];
// console.log(ikki);
// let obj = {
//   fNameofCustomerofcompany: "sardor",
//   age: 23,
//   address: "tashkent",
// };
// let { age:a,fNameofCustomerofcompany:ismi,address:add } = obj;
// console.log(a);
// console.log(ismi);
// console.log(fNameofCustomerofcompany);
// console.log(address);

let arr = [1, 2, 34, 55, [6, 23, [89]]];
let [a, b, c, d, [y, w, [t]]] = arr;
console.log(t);

let obj = {
  fName: "Sardor",
  sName: "Botirov",
  age: 23,
  address: {
    city: "Samarkand",
    street: "Amur temur",
    location: [
      {
        long: 123.12312312,
        lat: 3423423.35235245,
      },
      "Uzbekistan",
      { num: 12 },
    ],
  },
};
console.log(uynomeri);