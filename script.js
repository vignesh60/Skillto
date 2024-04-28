var count = 1;
var list = document.getElementById("list");
document.querySelector(".fa-solid").addEventListener("click", function () {
  if (count % 2 == 0) {
    list.style.transform = "translateY(0%)";
    list.style.opacity = "1";
    count++;
  } else {
    list.style.transform = "translateX(-150%)";
    list.style.opacity = "0";
    count++;
  }
});

window.addEventListener("resize", function () {
  if (this.innerWidth > 800) {
    list.style.transform = "translateX(0%)";
    list.style.opacity = "1";
  }
});
