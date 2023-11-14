// Internet do’kon tuzing. 10 ta mol bo’lsin (10 ta checkbox).
// Har bittasini sotib olsa bo’ladi. Va qariyalarga 10% chegirma beriladi
// (checkboxda “men qariman” ni bosib qo’yadi). Hamda kamida 5 ta mol
// sotib olgan odamga 15% chegirma beriladi.

let inp = document.querySelector("input");
let eyes = document.querySelector(".fa-eye");
let sum = 0;
inp.addEventListener("keyup", (e) => {
  sum = e.target.value.length;
  sum <= 10 && (document.querySelector("span").textContent = sum);
  if (e.target.value.length >= 10) {
    document.querySelector("i").classList.remove("hidden");
    document.querySelector(".container").style.background = "green";
  } else {
    document.querySelector("i").classList.add("hidden");
    document.querySelector(".container").style.background = "red";
  }
});

eyes.addEventListener("click", () => {
  console.log(inp.type);
  // inp.classList.toggle("password")
  if (inp.type == "password") {
    inp.setAttribute("type", "text");
    document
      .querySelector(".fa-eye")
      .classList.replace("fa-eye", "fa-eye-slash");
  } else {
    inp.setAttribute("type", "password");
    document
      .querySelector(".fa-eye-slash")
      .classList.replace("fa-eye-slash", "fa-eye");
  }
});

