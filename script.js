// Play Timer -- START BUTTON

let inputTimer = document.getElementById("inputTimer");
let timer;
let starts = document.querySelector(".start-link");
let lastAnswerWrong = document.getElementById("ends");
let lastAnswerGood = document.getElementById("end");
let song = document.getElementById("marioSong");
let goodSong       = document.getElementById("goodSong")
let wrongSong      = document.getElementById("wrongSong");
let pictureGood    = document.getElementById("marioGood");
let pictureWrong   = document.getElementById("marioWrong");

starts.addEventListener("click", starteGame => {
    timer = setInterval(chrono, 10);
    song.play();

});
let miniSecondes = 0;
let secondes     = 0;
let minutes      = 0;

let chrono = () =>{
inputTimer.value =  `${minutes} : ${secondes} : ${miniSecondes}`;
    miniSecondes++;
        if(miniSecondes == 100){
            miniSecondes = 0;
            secondes++
} 
         if(secondes == 60){
             secondes = 0;
             minutes++;
         }
}

let score = document.getElementById('showScore');

lastAnswerWrong.addEventListener("click", stop => {
    clearInterval(timer);
    song.pause();
    score.innerHTML = `Ton score est de : ${count}/9, en ${inputTimer.value} secondes`;
    if(count >= 5){
        pictureGood.style.position = "absolute";

    }
    else{
        pictureWrong.style.position = "absolute";
        

    }

})
lastAnswerGood.addEventListener("click", stop => {
    clearInterval(timer);
    song.pause();
    score.innerHTML = `Ton score est de : ${count}/9, en ${inputTimer.value} secondes`;
    if(count >= 5){
        pictureGood.style.position = "absolute";
        count.style.color = "green";
        
    }
    else{
        pictureWrong.style.position = "absolute";
        count.style.color = "red";
        

    }
});

// WRONG ANSWER SECTION

const buttonW = document.getElementsByClassName('wrong');
let x = 1;

for (let i = 0; i < buttonW.length; i++) {
    buttonW[i].addEventListener('click', event => {
        let modalW = document.getElementById(`w${x}`);
        let answerW = document.getElementById(`answerF${x}`);
        let responseBtn = document.getElementById(`responseBtn${x}`);
        let question = document.getElementById(`question${x+1}`);
        modalW.style.display = "flex";
        answerW.innerHTML = `Oups ! La bonne réponse était: ${buttonR[x-1].innerHTML}`;
        answerW.style.display = "block";
        responseBtn.style.display = "none";
        question.style.display = "block";
        wrongSong.play()
        x++;
        y++;
    });
};

//GOOD ANSWER SECTION
let count = 0;
let counter = document.getElementById('counter');
counter.innerHTML = count;
const buttonR = document.getElementsByClassName('rigth');
let y = 1;

for (let a = 0; a < buttonR.length; a++) {
    buttonR[a].addEventListener('click', event => {
        count++;
        counter.innerHTML = count;
        let modalG = document.getElementById(`g${y}`);
        let answerG = document.getElementById(`answerG${y}`);
        let responseBtn = document.getElementById(`responseBtn${y}`);
        let question = document.getElementById(`question${y+1}`);
        modalG.style.display = "flex";
        answerG.innerHTML = `Bravo ! Tu as trouvé la bonne réponse: ${buttonR[a].innerHTML}`;
        answerG.style.display = "block";
        responseBtn.style.display = "none";
        question.style.display = "block";
        goodSong.play();
        y++;
        x++;
    });
};

//Reset Gaming :
let reset = document.getElementById("resetGame")
reset.addEventListener("click", resetGame => {
    inputTimer.res;


})
//MODAL CONTACT US

const modalContact = document.getElementById("contactUs");
const buttonContact = document.getElementById("buttonContactUs");
const buttonClose = document.getElementById("hideWindows");

buttonContact.addEventListener('click', () => {
    modalContact.style.display = "block";
});

buttonClose.addEventListener('click', () => {
    modalContact.style.display = "none";
});

//SONG FUNCTION

const songOn = document.getElementById('songOn');
const songOff = document.getElementById('songOff');

songOn.addEventListener('click', () => {
    song.volume = 0;
    songOn.style.display = 'none';
    songOff.style.display = 'block';
});

songOff.addEventListener('click', () => {
    song.volume = 1;
    songOn.style.display = 'block';
    songOff.style.display = 'none';
})

// filter of mario pictures:
let input1 = document.getElementById("mario1");
let image1 = document.getElementById("image1");
let input2 = document.getElementById("mario2");
let image2 = document.getElementById("image2");
let input3 = document.getElementById("mario3");
let image3 = document.getElementById("image3");
let input4 = document.getElementById("mario4");
let image4 = document.getElementById("image4");
let input5 = document.getElementById("mario5");
let image5 = document.getElementById("image5");
let input6 = document.getElementById("mario6");
let image6 = document.getElementById("image6");
let input7 = document.getElementById("mario7");
let image7 = document.getElementById("image7");
let input8 = document.getElementById("mario8");
let image8 = document.getElementById("image8");
let input9 = document.getElementById("mario9");
let image9 = document.getElementById("image9");
let input10 = document.getElementById("mario10");
let image10= document.getElementById("image10");
//variable pour input cachés :
let mario1bis = document.getElementById("mario1bis");
let mario2bis = document.getElementById("mario2bis");
let mario3bis = document.getElementById("mario3bis");
let mario4bis = document.getElementById("mario4bis");
let mario5bis = document.getElementById("mario5bis");
let mario6bis = document.getElementById("mario6bis");
let mario7bis = document.getElementById("mario7bis");
let mario8bis = document.getElementById("mario8bis");
let mario9bis = document.getElementById("mario9bis");
let mario10bis = document.getElementById("mario10bis");

input1.addEventListener("click", display => {
    image1.style.display = "block";
    input1.style.display = "none";
    mario1bis.style.display = "block";
})
input2.addEventListener("click", display => {
    image2.style.display = "block";
    input2.style.display = "none";
    mario2bis.style.display = "block";
})
input3.addEventListener("click", display => {
    image3.style.display = "block";
    input3.style.display = "none";
    mario3bis.style.display = "block";
})
input4.addEventListener("click", display => {
    image4.style.display = "block";
    input4.style.display = "none";
    mario4bis.style.display = "block";
})
input5.addEventListener("click", display => {
    image5.style.display = "block";
    input5.style.display = "none";
    mario5bis.style.display = "block";
})
input6.addEventListener("click", display => {
    image6.style.display = "block";
    input6.style.display = "none";
    mario6bis.style.display = "block";
    })
input7.addEventListener("click", display => {
    image7.style.display = "block";
    input7.style.display = "none";
    mario7bis.style.display = "block";
    
})
input8.addEventListener("click", display => {
    image8.style.display = "block";
    input8.style.display = "none";
    mario8bis.style.display = "block";
    
})
input9.addEventListener("click", display => {
    image9.style.display = "block";
    input9.style.display = "none";
    mario9bis.style.display = "block";
    
})
input10.addEventListener("click", display => {
    image10.style.display = "block";
    input10.style.display = "none";
    mario10bis.style.display = "block";
    
    
})

// cacher l'image : 


mario1bis.addEventListener("click", cacher => {
    mario1bis.style.display = "none";
    image1.style.display = "none";
    input1.style.display = "block";


})
mario2bis.addEventListener("click", cacher => {
    mario2bis.style.display = "none";
    image2.style.display = "none";
    input2.style.display = "block";


})
mario3bis.addEventListener("click", cacher => {
    mario3bis.style.display = "none";
    image3.style.display = "none";
    input3.style.display = "block";


})
mario4bis.addEventListener("click", cacher => {
    mario4bis.style.display = "none";
    image4.style.display = "none";
    input4.style.display = "block";


})
mario5bis.addEventListener("click", cacher => {
    mario5bis.style.display = "none";
    image5.style.display = "none";
    input5.style.display = "block";


})
mario6bis.addEventListener("click", cacher => {
    mario6bis.style.display = "none";
    image6.style.display = "none";
    input6.style.display = "block";


})
mario7bis.addEventListener("click", cacher => {
    mario7bis.style.display = "none";
    image7.style.display = "none";
    input7.style.display = "block";


})
mario8bis.addEventListener("click", cacher => {
    mario8bis.style.display = "none";
    image8.style.display = "none";
    input8.style.display = "block";


})
mario9bis.addEventListener("click", cacher => {
    mario9bis.style.display = "none";
    image9.style.display = "none";
    input9.style.display = "block";


})
mario10bis.addEventListener("click", cacher => {
    mario10bis.style.display = "none";
    image10.style.display = "none";
    input10.style.display = "block";


})
