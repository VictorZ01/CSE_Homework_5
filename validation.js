const email = document.getElementById("email");
var flash = document.querySelector('.flash');

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please Enter a valid email address");
  } else {
    email.setCustomValidity("");
  }
});
let regex_name= /[A-Za-z]/;

let regex_email= /[A-Za-z@._]/;

const filter=(event,regex_name)=>{
    let symbol = String.fromCharCode(event.keyCode);
  if (!regex_name.test(symbol)) {
    event.preventDefault();
    flash.classList.add('flash-is-showing');
    document.getElementById('errorOutput').textContent = 'Illegal character entered';
  }
};

flash.addEventListener('animationend', function(){
    flash.classList.remove('flash-is-showing');
  });
const inputEvent = (event) => {
    filter(event, regex_name);
  };

document.getElementById('comments').addEventListener('input',function(){
    const max=20;
    const current=document.getElementById('comments').value.length;
    const remaining=20-current;
    if (remaining<5){
        document.getElementById('comments').style.borderColor="red";
    }
    else{
        document.getElementById('comments').style.borderColor="black";
    }
    document.getElementById('infoOutput').textContent=`Characters remaining:${remaining}`;
});

const names = document.getElementById("name");

names.addEventListener('keypress',inputEvent);