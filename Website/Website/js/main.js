//Mobile Nav
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

//Dark Mode
const dark = document.getElementById("dark");
dark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

//Slider Donut
let i = 0;
let images = [];
let time = 1000;

// Image List
images[0] = "img/Donuts-with-chocolate-filling.jpg";
images[1] = "img/Donut-in-the-kitchen.jpg";
images[2] = "img/Donut-for-breakfast.jpg";
images[3] = "img/Donuts-shop.jpg";

function changeImg() {
  const index = i % images.length;
  document.slide.src = images[index];

  i = index + 1;

  setTimeout(changeImg, time);
}

window.onload = changeImg;

//Slider Testimonial
let testSlide = document.querySelectorAll(".testItem");
let dots = document.querySelectorAll(".dot");

let counter = 0;

function switchTest(currentTest) {
  currentTest.classList.add("active");
  let testId = currentTest.getAttribute("attr");
  if (testId > counter) {
    testSlide[counter].style.animation = "next1 0.5s ease-in forwards";
    counter = testId;
    testSlide[counter].style.animation = "next2 0.5s ease-in forwards";
  } else if (testId == counter) {
    return;
  } else {
    testSlide[counter].style.animation = "prev1 0.5s ease-in forwards";
    counter = testId;
    testSlide[counter].style.animation = "prev2 0.5s ease-in forwards";
  }
  indicators();
}

function indicators() {
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[counter].className += " active";
}

function slideNext() {
  testSlide[counter].style.animation = "next1 0.5s ease-in forwards";
  if (counter >= testSlide.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  testSlide[counter].style.animation = "next2 0.5s ease-in forwards";
  indicators();
}
function autoSliding() {
  deleteInterval = setInterval(timer, 4000);
  function timer() {
    slideNext();
    indicators();
  }
}
autoSliding();

const container = document.querySelector(".indicators");
container.addEventListener("mouseover", pause);
function pause() {
  clearInterval(deleteInterval);
}

container.addEventListener("mouseout", autoSliding);

//Contact-form validation

const contactForm = document.getElementById("contact-form");
const messageInput = document.getElementById("message-input");
const fullNameInput = document.getElementById("full-name-input");
const emailInput = document.getElementById("email-input");

// Setting error message
function displayError(input, error) {
  const inputContainer = input.parentElement;
  const errorEl = inputContainer.querySelector(".input-error");

  errorEl.innerText = error;
}

// Clearing out error message / setting success message
function displaySuccess(input) {
  const inputContainer = input.parentElement;
  const errorEl = inputContainer.querySelector(".input-error");

  errorEl.innerText = "";
}

// Checking emailInput for valid email adress
function validateEmail() {
  const emailValue = emailInput.value.trim();
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let isValid = regex.test(String(emailValue).toLowerCase());

  if (!emailValue) {
    displayError(emailInput, "please enter your email");
  } else if (!isValid) {
    displayError(emailInput, "please enter a valid email");
  } else {
    displaySuccess(emailInput);
  }
}

// Checking fullName for valid input
function validateFullName() {
  const fullNameValue = fullNameInput.value;

  if (!fullNameValue) {
    displayError(fullNameInput, "please enter your name");
  } else {
    displaySuccess(fullNameInput);
  }}

  // Checking message for valid input
function validateMessage() {
  const messageValue = messageInput.value;

  if (!messageValue) {
    displayError(messageInput, "please enter your message");
  } else {
    displaySuccess(messageInput);
  }
}

// Handling validation on submitting form
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateMessage();
  validateFullName();
  validateEmail();
});

// Handling validation on changing inputs
fullNameInput.addEventListener("focusout", validateFullName);
emailInput.addEventListener("focusout", validateEmail);
messageInput.addEventListener("focusout", validateMessage);

//FAG
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

// Back to the Top Button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let button = document.getElementById("topBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
