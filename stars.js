const ratingStars = document.getElementById('rating-stars');
const ratingForm = document.getElementById('rating-form');

function hovering(number){
    const which=document.querySelectorAll('#rating-stars span');
    for(let i=0; i<which.length;i++){
        if(i<number){
            which[i].style.color='var(--selected-color)';
        }
        else if(i>=number){
            which[i].style.color='var(--not-selected-color)';
        }
    }
}

function turnOff(number){
    const which=document.querySelectorAll('#rating-stars span');
    for(let i=0; i<which.length;i++){
        which[i].style.color='var(--not-selected-color)';
    }
}

function submit(number){
    const request={
        method: 'POST',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded',
            'X-Sent-By':'JS',
        },
        body:`question=How satisfied are you?&rating=${number}&sentBy=js`
    };

    fetch('https://httpbin.org/post',request).then(response=>response.json()).then(data => console.log('Server response:', data));
    if(number>=parseInt(ratingForm.rating.max, 10)*0.8){
        document.getElementById('message').textContent=`Thank you for the ${number} rating!`
    }
    else{
        document.getElementById('message').textContent=`Thank you for the feedback of ${number}. We will try our best next time!`
    }  
    console.log(request);
    
}
function showStars(max){
    const ratingWidget = document.createElement('div');
    ratingWidget.id = 'stars';

  for (let i = 1; i<=max; i++) {
    const star=document.createElement('span');
    star.innerHTML ='&#9733;';
    ratingWidget.appendChild(star);

    star.addEventListener('mouseover',function(){
        hovering(i);
    });

    star.addEventListener('mouseout',function(){
        turnOff(i);
    });

    star.addEventListener('click',function(){
        submit(i);
    });
  }
  ratingStars.appendChild(ratingWidget);
}

document.addEventListener('DOMContentLoaded',function(){

if(ratingStars){
    ratingForm.style.display='none'


if (parseInt(ratingForm.rating.max, 10) >=3&& parseInt(ratingForm.rating.max, 10)<= 10) {
showStars(parseInt(ratingForm.rating.max, 10));
}
}
});

