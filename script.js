const tabs = document.querySelectorAll(".tab-content");

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-target");
    tabs.forEach((tab) => {
      if (tab.getAttribute("id") === target) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
  });
});

document.getElementById("exploreBtn").addEventListener("click", function () {
  document
    .getElementById("tabs-section")
    .scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactBtn").addEventListener("click", function () {
  document.getElementById("contactUs").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("donateBtn").addEventListener("click", function () {
  document.getElementById("popupContainer").style.display = "block";
});

window.onclick = function (event) {
  var popup = document.getElementById("popupContainer");
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

document.getElementById("submitBtn").addEventListener("click", function () {
  document.getElementById("thankYouPopup").style.display = "block";
  window.onclick = function (event) {
    var thankYouPopup = document.getElementById("thankYouPopup");
    if (event.target == thankYouPopup) {
      thankYouPopup.style.display = "none";
    }
  };
});

const mainImage = document.querySelector(".main-image");
const sideImages = document.querySelectorAll(".side-image");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

function updateMainImage(index) {
  mainImage.src = sideImages[index].src;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + sideImages.length) % sideImages.length;
  updateMainImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % sideImages.length;
  updateMainImage(currentIndex);
});

sideImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    updateMainImage(currentIndex);
  });
});

updateMainImage(currentIndex);

let autoChangeInterval = setInterval(() => {
  currentIndex = (currentIndex + 1) % sideImages.length;
  updateMainImage(currentIndex);

  if (currentIndex === sideImages.length - 1) {
    currentIndex = 0;
  }
}, 3000);