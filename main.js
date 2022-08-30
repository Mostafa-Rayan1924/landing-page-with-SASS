let body = document.getElementById("body");
let dark = document.querySelector(".dark");
dark.onclick = function (eo) {
  dark.innerHTML = `light <i class="fa-solid fa-sun"></i>`;
  body.classList.toggle("darking");
  body.classList.toggle("ss");
  if (body.classList.contains("ss")) {
    dark.innerHTML = `Dark <i class="fa-solid fa-moon"></i>`;
  }
};

let preloader = document.getElementById("preloader");
preloader.style.display = "block";
console.log(preloader);
window.onload = function () {
  preloader.style.display = "block";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 3000);
};

let up = document.getElementById("up");
window.addEventListener("scroll", function () {
  if (scrollY >= 400) {
    up.classList.add("block");
  } else {
    up.classList.remove("block");
  }
});
up.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
