let imgs = ["01.jpg", "landing.jpg", "03.jpg"];
let icons = document.querySelectorAll(".changebg .change-background");
let changeBackground = document.querySelector(".landing-page");
let bullets = document.querySelectorAll(".bullets li");
let currentIndex = 0;

function changeBackground2(direction) {
  if (direction === "next") {
    currentIndex = (currentIndex + 1 + imgs.length) % imgs.length;
  } else if (direction === "previous") {
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
  }

  let imageUrl = imgs[currentIndex];
  changeBackground.style.backgroundImage = "url(images/" + imageUrl + ")";

  bullets.forEach((bullet, index) => {
    if (index === currentIndex) {
      bullet.classList.add("active");
    } else {
      bullet.classList.remove("active");
    }
  });
}

icons[0].addEventListener("click", function () {
  changeBackground2("previous");
});

icons[1].addEventListener("click", function () {
  changeBackground2("next");
});

bullets.forEach(function (bullet, index) {
  bullet.addEventListener("click", function () {
    changeBackground.style.backgroundImage =
      "url(images/" + imgs[index] + ")";
    currentIndex = index;
    bullets.forEach((ele) => {
      ele.classList.remove("active");
    });
    bullet.classList.add("active");
  });
});
let btn = document.querySelector(".btn");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
