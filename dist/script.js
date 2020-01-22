function animatedForm() {
  const nextBtns = document.querySelectorAll("button");

  nextBtns.forEach(nextbtn => {
    nextbtn.addEventListener("click", () => {
      const input = nextbtn.previousElementSibling;
      const parent = nextbtn.parentElement;
      const nextField = parent.nextElementSibling;

      if (input.type === "text" && userValidate(input)) {
        nextSlide(parent, nextField);
      } else if (input.type === "email" && validateEmail(input)) {
        nextSlide(parent, nextField);
      } else if (input.type === "password" && userValidate(input)) {
        nextSlide(parent, nextField);
      } else {
        parent.style.animation = "shake 0.5s ease";
      }
      parent.addEventListener('animationend', () => {
        parent.style.animation = ""
      })
    });
  });
}

function userValidate(user) {
  if (user.value.length < 6) {
    console.log("not enough caracter");
    error("#f9eeeb");
  } else {
    error("white");
    return true;
  }
}

function error(color) {
  document.body.style.backgroundColor = color;
}

function nextSlide(parent, nextparent) {
  parent.classList.add("notactive");
  parent.classList.remove("active");
  nextparent.classList.add("active");
  nextparent.classList.remove("notactive");
  console.log(nextparent, "Fffffffffffffffffff");
}

function validateEmail(email) {
  const validate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (validate.test(email.value)) {
    error("white");
    return true;
  } else {
    error("#f9eeeb");
  }
}
animatedForm();