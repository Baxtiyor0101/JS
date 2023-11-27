axios.defaults.baseURL = "http://localhost:3000/";
let addBtn = document.querySelector("#add");
let content = null;
let container = document.querySelector(".container");

function fetchData() {
  axios.get("/data").then((res) => {
    res.data.forEach(({ title, info, id }) => {
      let titles = document.createElement("h1");
      let infos = document.createElement("h4");
      let delBtn = document.createElement("button");
      let editBtn = document.createElement("button");
      editBtn.innerText = "edit";
      let div = document.createElement("div");
      div.style.border = "2px solid red";
      div.style.width = "200px";
      container.style.display = "flex";
      container.style.justifyContant = "space-between";
      container.style.flexWrap = "wrap";
      container.style.gap = "20px";
      delBtn.innerText = "delete";
      titles.innerText = `${id}_${title}`;
      infos.innerText = info;
      div.append(titles, infos, delBtn, editBtn);
      container.append(div);

      delBtn.addEventListener("click", () => onDelete(id));
      editBtn.addEventListener("click", () => {
        content = id;
        changeData(id, content, { title, info, id });
      });
    });
    console.log(res.data);
  });
}

addBtn.addEventListener("click", () =>
  addBtn.textContent === "edit" ? onSave() : changeData()
);
function changeData(ids, content, data) {
  console.log(data);
  if (!content) {
    let title = document.querySelector("#title").value;
    let info = document.querySelector("#info").value;
    axios.post("/data", { title, info }).then((res) => res.data);
    console.log(title, info);
  } else {
    let title = document.querySelector("#title");
    let info = document.querySelector("#info");
    addBtn.innerText = "edit";
    title.value = data.title;
    info.value = data.info;
    // axios.put(`/data/${}`)
  }
}

function onDelete(ids) {
  axios.delete(`/data/${ids}`).then((res) => console.log(res.data));
}
function onSave(){

}
fetchData();
