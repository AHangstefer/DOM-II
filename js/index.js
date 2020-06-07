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

 document.addEventListener("dblclick", ()=>{
  letter[6].transform = 'rotate(5';
 })




