const menuBtn = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  // once we click add(TOGGLE) the new class name("change") to class names list containing
  //class name (.menu-btn/ menu) in our html
  menuBtn.classList.toggle("change");
  navigation.classList.toggle("change");
});
