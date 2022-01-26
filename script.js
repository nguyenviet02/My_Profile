const profile_card = document.querySelector(".profile_card");
const menu = document.querySelector(".menu");
const profile_avatar = document.querySelector(".profile_avatar");
const my_intro = document.querySelector(".intro");
const profile_container = document.querySelector(".profile_container");
const btn = document.querySelector(".button-effect");

profile_card.addEventListener("mouseover", () => {
  menu.classList.add("active");
  profile_container.classList.add("active");
})
profile_avatar.addEventListener("click", () => {
  menu.classList.toggle("active");
  profile_container.classList.toggle("active");
})
profile_card.addEventListener("mouseleave", () => {
  menu.classList.remove("active");
  profile_container.classList.remove("active");
})
menu.addEventListener("mouseover", () => {
  menu.classList.add("active");
  profile_container.classList.add("active");
})
menu.addEventListener("mouseleave", () => {
  menu.classList.remove("active");
  profile_container.classList.remove("active");
})
btn.addEventListener("click", () => {
  window.location = "my_CV.html";
})

const txt = "Hello ! My name is Nguyen Viet" + "\n" + "I'm Frontend Developer !";
let index = 0;
function autoWrite(txt){
  my_intro.innerText = txt.slice(0, index);
  index ++;
  if (index > txt.length + 5){
    clearInterval(intro);
    profile_container.classList.remove("hide");
    my_intro.classList.add("hide");
  }
}
const intro = setInterval(() => {
  autoWrite(txt)
}, 100);