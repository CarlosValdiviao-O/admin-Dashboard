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

let star = document.getElementsByClassName('star');
for (i=0; i<star.length; i++)
star[i].addEventListener('click', toggle);
let starAux;
let starInd = [];

let cards = document.getElementsByClassName('card');

const arrStar = Array.from(cards);

for(i=0; i<cards.length; i++) {
    cards[i].addEventListener('mouseenter', (e) => {
        starAux = arrStar.findIndex((element)=> element.textContent == e.path[0].textContent);
    });
    starInd[i]= 0;
}

function toggle() {
    if (starInd[starAux] == 0){
        star[starAux].src = 'icons/star.svg';
        starInd[starAux]++;
    }
    else {
        star[starAux].src = 'icons/star-outline.svg';
        starInd[starAux]--;
    }
}

