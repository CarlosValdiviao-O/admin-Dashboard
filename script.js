const icon = document.getElementsByClassName('icon');
const link = document.getElementsByClassName('link');
const arr = Array.from(link);
for (i=0; i<link.length; i++){
    arr[i].addEventListener('mouseenter', (e) =>{
    let i = arr.findIndex((element)=> element.textContent == e.target.textContent);
    icon[i].classList.add('hovered'); 
    if(i==0) icon[i].classList.remove('hovered');   
    });
    link[i].addEventListener('mouseleave', (e) =>{
    let i = arr.findIndex((element)=> element.textContent == e.target.textContent);
    icon[i].classList.remove('hovered');    
    });
};

let bell = document.getElementById('bell');
bell.addEventListener('click', toggleBell);
let bellAux = 0;

function toggleBell() {
    if (bellAux == 0){
    bell.lastChild.src = 'icons/bell.svg';
    bellAux++;
    }
    else {
    bell.lastChild.src = 'icons/bell-outline.svg';
    bellAux--;
    }
}
