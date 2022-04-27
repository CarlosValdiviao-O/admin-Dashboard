const icon = document.getElementsByClassName('icon');
const link = document.getElementsByClassName('link');
const arr = Array.from(link);
for (i=0; i<icon.length; i++){
    link[i].addEventListener('mouseenter', (e) =>{
    let i = arr.findIndex((element)=> element.textContent == e.target.textContent);
    icon[i].classList.add('hovered'); 
    if(i==0) icon[i].classList.remove('hovered');   
    });
    link[i].addEventListener('mouseleave', (e) =>{
    let i = arr.findIndex((element)=> element.textContent == e.target.textContent);
    icon[i].classList.remove('hovered');    
    });
};

