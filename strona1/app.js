let aktywnySlideNumer = 1;

let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');

let hideActiveSlide = () => {
    let activeElement = document.querySelector('.active'); //działa od tego aktywnego zdjecia
    activeElement.classList.remove('active'); //wylacza to aktywne zdjecie

}

let uruchomSlide = (slideNumber) => {
    hideActiveSlide();
    document.querySelector('#slide'+slideNumber).classList.add('active');
}

let nastepnySlide = () => {
    if(aktywnySlideNumer === 8) {
        aktywnySlideNumer = 1;
    } else {
        aktywnySlideNumer = aktywnySlideNumer + 1;
    }
    uruchomSlide(aktywnySlideNumer);
}
let nastepnySlide1 = () => {
    if(aktywnySlideNumer === 1) {
        aktywnySlideNumer = 8;
    } else {
        aktywnySlideNumer = aktywnySlideNumer - 1;
    }
    uruchomSlide(aktywnySlideNumer);
}

for(let i = 1; i<=8; i++ ) {
        let uruchomSlideI = () => {
            aktywnySlideNumer = i;
            uruchomSlide(i);
        };
        document.querySelector('#dot'+ i).addEventListener('click', uruchomSlideI)
    }

arrowRight.addEventListener('click', nastepnySlide);
arrowLeft.addEventListener('click', nastepnySlide1);










    
