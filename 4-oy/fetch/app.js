const postContainer = document.getElementById("post-container");
const paginationContainer = document.getElementById("pagination-container");

let currentPage = 1;

async function FetchPosts(page) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
  );
  const data = await response.json();
  //   console.log(data);
  return data;
}
function renderPosts(posts) {
  postContainer.innerHTML = "";
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `<h3>${post.title}</h3> <p>${post.id} _ ${post.body}</p>`;
    postContainer.append(postElement);
    let randomColor = Math.random().toString(16).slice(2, 8);

    postElement.style.background = "#" + randomColor;
    postElement.style.width = "300px";
    postElement.style.height = "200px";
  });
}
postContainer.style.display = "flex";
postContainer.style.flexWrap = "wrap";
postContainer.style.justifyContent = "space-between";
async function loadPost(direction) {
  if (direction === "prev" && currentPage > 1) {
    currentPage--;
  } else if (direction === "next") {
    currentPage++;
  }
  const posts = await FetchPosts(currentPage);
  renderPosts(posts);
  let pagesNumber = await fetch("https://jsonplaceholder.typicode.com/posts");
  let lastNumbers = await pagesNumber.json();
  console.log(lastNumbers);
  paginationContainer.innerHTML = `<button class="btn" onclick='loadPost("prev")'>prev</button>
  
  
  ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((val) => {
    // let btn = document.createElement("button");
    // btn.innerText = val;
    // console.log(btn);
    // // <span>${currentPage}</span>
    // document.querySelector(".btnwrapper").append(btn);
    let btnwrap = document.querySelector(".btnwrapper");
    btnwrap.innerHTML = `<button>${val}</button>`;
  })}
  <button class="btn" onclick='loadPost("next")'>next</button>
  `;
}
loadPost();

// https://jsonplaceholder.typicode.com/posts
