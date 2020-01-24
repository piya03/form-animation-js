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
      parent.addEventListener("animationend", () => {
        parent.style.animation = "";
      });
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
  nextparent.children[1].focus();
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

window.addEventListener("keydown", handleKeyPress);
function handleKeyPress(event) {
  if (event.keyCode === 13) {
    event.target.nextElementSibling.click();
  }
}

const inputs = document.querySelectorAll("input");
inputs.forEach(eachInput => {
  eachInput.addEventListener("focus", event => {
    eachInput.previousElementSibling.style.position = "relative";
    eachInput.previousElementSibling.style.left = "0px";
    eachInput.previousElementSibling.style.top = "-5px";
    eachInput.previousElementSibling.style.transition = "all .2s";
    eachInput.previousElementSibling.style.fontSize = "16px";
    eachInput.parentElement.style.boxShadow = "0px 0px 8px grey";
  });
});

inputs.forEach(eachInput => {
  eachInput.addEventListener("blur", event => {
    console.log(
      `document.querySelector("input:valid")`,
      document.querySelector("input:valid")
    );
    if (eachInput.value === "") {
      eachInput.previousElementSibling.style.position = "absolute";
      eachInput.previousElementSibling.style.left = "";
      eachInput.previousElementSibling.style.top = "";
      eachInput.previousElementSibling.style.fontSize = "";
      eachInput.parentElement.style.boxShadow = "";
    }
   
  }); 
});

animatedForm();
