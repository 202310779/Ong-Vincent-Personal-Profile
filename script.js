function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  const themeToggle = document.getElementById("darklight");
  if (theme === "light") {
    themeToggle.innerHTML = "🌙 Dark Mode";
  } else {
    themeToggle.innerHTML = "☀️ Light Mode";
  }
}

const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

document.getElementById("darklight").addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
});

window.onload = function () {
  alert("Welcome to my personal profile!");
};

const profilePic = document.querySelector(".profile-pic");
const overlay = document.querySelector(".overlay");
const enlargedImg = document.querySelector(".enlarged-img");

profilePic.addEventListener("click", () => {
  overlay.style.display = "block";
  setTimeout(() => {
    enlargedImg.classList.add("active");
  }, 50);
});

overlay.addEventListener("click", () => {
  enlargedImg.classList.remove("active");
  setTimeout(() => {
    overlay.style.display = "none";
  }, 500);
});
