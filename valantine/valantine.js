const noButton=document.querySelector('.js-no-button');
const yesButton=document.querySelector('.yes-button');
const gif=document.querySelector('.img')

const text=['are you sure ','why','think about it ','why NOT','take THIS','yoo']
let index=-1;
let clickCount=0;

let scaleA=["scale(1.5,1.5)","scale(2.2)","scale(2.5,2.5)","scale(3,3)","scale(3.5,3.5)","scale(4,4)"]
let gifimg=["https://media.tenor.com/z7ZABFfLkn8AAAAj/kh%C3%B3c.gif","	https://media1.tenor.com/m/molY4aMW5uEAAAAC/thanhhuyen.gif","https://media.tenor.com/Qu6GUg0Yx90AAAAi/mocha-cry.gif","https://media.tenor.com/-2rbVbnfW24AAAAi/crying-cat-sad-kitty.gif","https://media.tenor.com/WlJsOVX2lysAAAAi/cat-tongue-cat.gif","https://media1.tenor.com/m/FLfJEQ0Q8wQAAAAd/rigby-freaky.gif"]


noButton.addEventListener('click',()=>{
    clickCount++
  index=(index+1)%text.length
 noButton.textContent=text[index]
 noButton.style.height="50px"
 yesButton.style.transform=scaleA[index]
 gif.src=gifimg[index]

 if(index==5){
    noButton.innerHTML=yesButton.innerHTML
    noButton.classList.remove('no-button')
        noButton.classList.add('yes-button')
        noButton.classList.add('js-yes-button')
        noButton.classList.remove('js-no-button')
    if (clickCount>=6){
       noButton.disabled=true
    }
    
    

 }

 })

yesButton.addEventListener('click',()=>{
     noButton.disabled=true;
   gif.src="https://media.tenor.com/2bw-Zzp-mTMAAAAi/bear-hug.gif"
   document.querySelector('.main-button').textContent=`I LOVEEE YOUUUUU ❤️❤️❤️❤️❤️❤️❤️`

})

