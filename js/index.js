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
    // }
});
