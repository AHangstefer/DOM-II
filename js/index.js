// Your code goes here
const bigH4 = document.querySelectorAll('h4');
console.log(bigH4);

bigH4.forEach((h) =>{
    h.addEventListener('mouseover', (e) => {
        h.style.transform = "scale(1.5)";
        h.style.transition = "transform 2s";
        e.stopPropagation();
  });
});

bigH4.forEach((h)=>{
    h.addEventListener('mouseleave',(e) => {
        h.style.transform = "initial";
        e.stopPropagation();
    });
});

const logo = document.querySelector('.logo-heading');
console.log(logo);

document.addEventListener('keypress',(e)=> {
    // if (e.key==='f'){
     logo.style.color = 'gold';
     e.stopPropagation();
    // }
});

document.addEventListener('keyup',(e)=>{
    logo.style.color = 'initial';
    e.stopPropagation();
});




const letter =document.querySelectorAll('p');
console.log(letter);

 document.addEventListener('scroll', (e)=>{
 letter[0].style.color = 'hotpink';
 letter[1].style.color= 'gold';
 letter[2].style.color = 'gold';
 letter[3].style.color = 'teal';
 letter[4].style.color = 'teal';
 letter[5].style.color = 'hotpink';
 e.stopPropagation();
 });

 document.addEventListener("dblclick", (e)=>{
  letter[7].style.transform = 'rotateY(30deg)';
  letter[7].style.color = 'hotpink';
 //letter[7].style.transform = 'preserve-3d';
  e.stopPropagation();
 });

 
const button = document.querySelectorAll('.btn');
console.log(button);

button.forEach((b)=>{
    b.addEventListener('mousemove',(e) => {
        b.style.backgroundColor = 'gold';
        e.stopPropagation();
    });
});

button.forEach((b)=>{
    b.addEventListener('mouseleave', (e)=>{
        b.style.backgroundColor = "hotpink";
        e.stopPropagation();
    });
});

const topImg = document.querySelector('.intro img');
console.log(topImg);

window.addEventListener('resize', (e)=>{
    topImg.src = '../img/bus.jpg';
    e.stopPropagation();
});

const middleImg = document.querySelectorAll('.img-content img');
console.log(middleImg);

document.addEventListener('click', (e)=>{
    middleImg[0].src = '../img/Italy.jpg';
    e.stopPropagation();
});

document.addEventListener('drag', (e)=>{
    middleImg[1].src = '../img/Dubai.jpg';
});

//  window.addEventListener('focusin',(e)=>{
//     topImg.src = '../img/fun-bus.jpg';
// });

 

  
 