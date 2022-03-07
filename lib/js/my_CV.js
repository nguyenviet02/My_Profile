const load = document.querySelector(".load");
const loader = document.querySelector(".loader");


const cv = document.querySelector(".cv");
const btn_to_top = document.querySelector(".btn_to_top");
const body = document.querySelector("body");
const nav = document.querySelector(".nav");

const cv_left = document.querySelector(".cv_main-left");
const icon = document.querySelector(".icon");
const cv_top = document.querySelectorAll(".top");
const home = document.querySelectorAll(".home");
const more_btn = document.querySelector(".more_btn");

const intro_btn = document.querySelector(".intro_btn");
const summary_btn = document.querySelector(".summary_btn");
const object_btn = document.querySelector(".object_btn");
const skills_btn = document.querySelector(".skills_btn");
const p_skill_btn = document.querySelector(".p_skill_btn");

const summary = document.querySelector(".summary");
const objective = document.querySelector(".objective");
const skills = document.querySelector(".skills");
const p_skill = document.querySelector(".personal_skill");


const contact_btn = document.querySelector(".contact_btn");
const education_btn = document.querySelector(".education_btn");
const language_btn = document.querySelector(".language_btn");
const certificate_btn = document.querySelector(".certificate_btn");
const hobby_btn = document.querySelector(".hobby_btn");

const contact = document.querySelector(".contact");
const education = document.querySelector(".education");
const language = document.querySelector(".language");
const certificate = document.querySelector(".certificate");
const hobby = document.querySelector(".hobby");

const menu_toggle = document.querySelector(".menu_toggle");
const menu = document.querySelector(".menu");

var bodyRect = document.body.getBoundingClientRect();

// Get position introduction
let cv_left_Rect = cv_left.getBoundingClientRect();
let cv_left_offset = cv_left_Rect.top - bodyRect.top;
// Get position summary
let summary_Rect = summary.getBoundingClientRect();
let summary_offset = summary_Rect.top - bodyRect.top;
console.log(summary);
// Get position objective
let objective_Rect = objective.getBoundingClientRect();
let objective_offset = objective_Rect.top - bodyRect.top;
// Get position skills
let skills_Rect = skills.getBoundingClientRect();
let skills_offset = skills_Rect.top - bodyRect.top - 50;
// Get position personal skill
let p_skill_Rect = p_skill.getBoundingClientRect();
let p_skill_offset = p_skill_Rect.top - bodyRect.top;

// Get position contact
let contact_Rect = contact.getBoundingClientRect();
let contact_offset = contact_Rect.top - bodyRect.top;
// Get position education
let education_Rect = education.getBoundingClientRect();
let education_offset = education_Rect.top - bodyRect.top;
// Get position language
let language_Rect = language.getBoundingClientRect();
let language_offset = language_Rect.top - bodyRect.top;
// Get position certificate
let certificate_Rect = certificate.getBoundingClientRect();
let certificate_offset = certificate_Rect.top - bodyRect.top;
// Get position hobby
let hobby_Rect = hobby.getBoundingClientRect();
let hobby_offset = hobby_Rect.top - bodyRect.top;

var posY = window.pageYOffset;

// sticky introduction
document.addEventListener("scroll", () => {
  if (window.pageYOffset > 800) {
    cv_left.classList.add("active");
  }
  if (window.pageYOffset > 400) {
    btn_to_top.classList.remove("hide");
    nav.classList.add("hide");
  }
  else {
    btn_to_top.classList.add("hide");
    nav.classList.remove("hide");
  }
  posY = window.pageYOffset;
})
// Get back home
home.forEach(ele => {
  ele.addEventListener("click", (e) => {
    window.location = "index.html"
  })
});
// Go to top
cv_top.forEach(ele => {
  ele.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })
});
//Go to introduction
intro_btn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: cv_left_offset - 50 - 15,
    behavior: 'smooth'
  });
})
//Go to summary
summary_btn.addEventListener("click", (e) => {
  e.preventDefault();
  gotoElement(summary);
})
//Go to objective
object_btn.addEventListener("click", (e) => {
  e.preventDefault();
  gotoElement(objective);
})
//Go to skills
skills_btn.addEventListener("click", (e) => {
  e.preventDefault();
  gotoElement(skills);
})
// Go to personal_skill
p_skill_btn.addEventListener("click", (e) => {
  e.preventDefault();
  gotoElement(p_skill);
})
// Menu More
more_btn.addEventListener("click", (e) => {
  e.preventDefault();
  more_btn.querySelector("ul").classList.toggle("active");
  if (posY >= 300) {
    more_btn.querySelector("ul").classList.add("active_bot");
  }
  else {
    more_btn.querySelector("ul").classList.remove("active_bot");
  }
})

// Go to contact
contact_btn.addEventListener("click", (e) => {
  e.preventDefault();
  gotoElement(contact);
})
// Go to education
education_btn.addEventListener("click", (e) => {
  e.preventDefault();
  gotoElement(education);
})
// Go to language
language_btn.addEventListener("click", (e) => {
  e.preventDefault();
  gotoElement(language);
})
// Go to certificate
certificate_btn.addEventListener("click", (e) => {
  e.preventDefault();
  gotoElement(certificate);
})
// Go to hobby
hobby_btn.addEventListener("click", (e) => {
  e.preventDefault();
  gotoElement(hobby);
})

menu_toggle.addEventListener("click", (e) => {
  menu.classList.add("active");
})
menu.querySelector(".fa-times").addEventListener("click", (e) => {
  menu.classList.remove("active");
})
menu_toggle.addEventListener("touchstart", (e) => {
  menu.classList.add("active");
})
menu.querySelector(".fa-times").addEventListener("touchstart", (e) => {
  menu.classList.remove("active");
})


function gotoElement(element) {
  element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

// Load animation
setTimeout(() => {
  body.style.overflowY = "auto";
}, 3400);

