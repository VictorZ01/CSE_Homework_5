const email = document.getElementById("email");
var flash = document.querySelector('.flash');
const array= [];
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
    array.push("Illegal Character");
    const formErrorsJSON = JSON.stringify(array);
    console.log(formErrorsJSON)
    document.getElementById('errors').setAttribute('value',formErrorsJSON);
  }
};

flash.addEventListener('animationend', function(){
    flash.classList.remove('flash-is-showing');
  });
const inputEvent = (event) => {
    filter(event, regex_name);
  };

document.getElementById('comments').addEventListener('input',function(){
    const max=document.getElementById('comments').maxLength;
    const current=document.getElementById('comments').value.length;
    const remaining=max-current;
    if (remaining<5){
        document.getElementById('comments').style.color="red";
    }
    else{
        document.getElementById('comments').style.color="black";
    }
    if (remaining==0){
        array.push("0 characters left");
        const formErrorsJSON = JSON.stringify(array);
        console.log(formErrorsJSON)
        document.getElementById('errors').setAttribute('value',formErrorsJSON);
    }
    document.getElementById('infoOutput').textContent=`Characters remaining:${remaining}`;
});


const names = document.getElementById("name");

names.addEventListener('keypress',inputEvent);

function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
};

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('light');
        document.getElementById("page").style.background=white;
    } else {
        setTheme('dark');
        document.getElementById("page").style.background=black;
    }
};

(function () {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('dark');
        document.getElementById("page").style.background=black;
        document.getElementById('slider').checked = false;
    } else {
        setTheme('light');
        document.getElementById("page").style.background=white;
      document.getElementById('slider').checked = true;
    }
})();