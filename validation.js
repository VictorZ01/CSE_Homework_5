const email = document.getElementById("email");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please Enter a valid email address");
  } else {
    email.setCustomValidity("");
  }
});

document.getElementById('comments').addEventListener("input",function(){
    const reg=/[^a-zA-Z0-9.,?! ]/g;
    this.value=this.value.replace(reg,'')
});
