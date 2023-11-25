const email = document.getElementById("email");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please Enter a valid email address");
  } else {
    email.setCustomValidity("");
  }
});
let regex_name= /[A-Za-z]/;
const filter=(event,regex_name)=>{
    let symbol = String.fromCharCode(event.keyCode);
  if (!regex_name.test(symbol)) {
    event.preventDefault();
  }
};

const inputEvent = (event) => {
    filter(event, regex_name);
  };

const names = document.getElementById("name");

names.addEventListener('keypress',inputEvent);