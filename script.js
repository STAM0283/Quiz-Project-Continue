//Ajout d'heure et date actuelle : 

let newDate = document.getElementById("time");

function afficher(){
    let date = new Date().toDateString();
    let heure = new Date().toLocaleTimeString();
    newDate.innerHTML = ` ${date} : ${heure}`;
    setInterval(afficher, 1000);
    
} 
afficher();

// Play Timer -- START BUTTON -- counter:

let inputTimer     = document.getElementById("inputTimer");
let timer;
let starts         = document.querySelector(".start-link");
let goodSong       = document.getElementById("goodSong");
let wrongSong      = document.getElementById("wrongSong");
let counters       = document.getElementById("counter");
let counter        = 0; 

//function of Timer :

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

starts.addEventListener("click", starteGame => {
    timer = setInterval(chrono, 10);
    question1.style.display = "block";
    song.play();
});

//SONG FUNCTION :

let song           = document.getElementById("marioSong");
let songOn         = document.getElementById("songOn");
let songOff        = document.getElementById("songOff");

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

// Button next-introduction :

let firstNextBtn = document.getElementById("introNext");
let introduction = document.getElementById("introduction");
firstNextBtn.addEventListener("click", nextIntroduction => {
    introduction.style.display = "flex";

});

// declaration de variable pour la premiere question : 

let buttonGoog1 = document.getElementById("blue-rigth1");
let buttonWrongA_1 = document.getElementById("green-wrong1");
let buttonWrongB_1 = document.getElementById("red-wrong1");
let buttonWrongC_1 = document.getElementById("yellow-wrong1");

let modalGood1    = document.getElementById("modalGood1");
let modalWrongA_1 = document.getElementById("modalWrongA_1");
let modalWrongB_1 = document.getElementById("modalWrongB_1");
let modalWrongC_1 = document.getElementById("modalWrongC_1");

// les fonctions pour la premiere question : 

buttonGoog1.addEventListener("click", eventGood1 => {
    modalGood1.style.display = "block";
    goodSong.play();
    counters.innerHTML   = ++counter; 

})
buttonWrongA_1.addEventListener("click", eventWrong1_1 => {
    modalWrongA_1.style.display = "block";
    wrongSong.play();
});
buttonWrongB_1.addEventListener("click", eventWrong1_2 => {
    modalWrongB_1.style.display = "block";
    wrongSong.play();
});

buttonWrongC_1.addEventListener("click", eventWrong1_3 => {
    modalWrongC_1.style.display = "block";
    wrongSong.play();
});
// Button next question2 : 

let question2 = document.getElementById("question2");
let nextQuestionA_2 = document.getElementById("nextQuestionA_2");
let nextQuestionB_2 = document.getElementById("nextQuestionB_2");
let nextQuestionC_2 = document.getElementById("nextQuestionC_2");
let nextQuestionD_2 = document.getElementById("nextQuestionD_2");

nextQuestionA_2.addEventListener("click", nextA_2 => {   
question2.style.display = "block";
});
nextQuestionB_2.addEventListener("click", nextB_2 => {   
    question2.style.display = "block";
    });
nextQuestionC_2.addEventListener("click", nextC_2 => {   
    question2.style.display = "block";
    });
nextQuestionD_2.addEventListener("click", nextD_2 => {   
    question2.style.display = "block";
    });  
//declaration de variable pour la deuxieme question : 
let buttonGood2 = document.getElementById("yellow-rigth2");
let buttonWrongA_2    = document.getElementById("blue-wrong2");
let buttonWrongB_2 = document.getElementById("green-wrong2");
let buttonWrongC_2 = document.getElementById("red-wrong2");


let modalGood2     = document.getElementById("modalGood2");
let modalWrongA_2  = document.getElementById("modalWrongA_2");
let modalWrongB_2  = document.getElementById("modalWrongB_2");
let modalWrongC_2  = document.getElementById("modalWrongC_2");

// les fonctions pour la deuxieme question : 

buttonGood2.addEventListener("click", eventGood2 => {
    modalGood2.style.display = "block";
    goodSong.play();
    counters.innerHTML   = ++counter; 

});
buttonWrongA_2.addEventListener("click", eventWrong2_1 => {
    modalWrongA_2.style.display = "block";
    wrongSong.play();
});
buttonWrongB_2.addEventListener("click", eventWrong2_2 => {
    modalWrongB_2.style.display = "block";
    wrongSong.play();
});

buttonWrongC_2.addEventListener("click", eventWrong2_3 => {
    modalWrongC_2.style.display = "block";
    wrongSong.play();
});


// Button next question3 : 

let question3 = document.getElementById("question3");
let nextQuestionA_3 = document.getElementById("nextQuestionA_3");
let nextQuestionB_3 = document.getElementById("nextQuestionB_3");
let nextQuestionC_3 = document.getElementById("nextQuestionC_3");
let nextQuestionD_3 = document.getElementById("nextQuestionD_3");

nextQuestionA_3.addEventListener("click", nextA_3 => {   
question3.style.display = "block";
});
nextQuestionB_3.addEventListener("click", nextB_3 => {   
    question3.style.display = "block";
    });
nextQuestionC_3.addEventListener("click", nextC_3 => {   
    question3.style.display = "block";
    });
nextQuestionD_3.addEventListener("click", nextD_3 => {   
    question3.style.display = "block";
    });
//declaration de variable pour la troisieme question : 

let buttonGood3 = document.getElementById("red-rigth3");
let buttonWrongA_3    = document.getElementById("blue-wrong3");
let buttonWrongB_3 = document.getElementById("green-wrong3");
let buttonWrongC_3 = document.getElementById("yellow-wrong3");


let modalGood3     = document.getElementById("modalGood3");
let modalWrongA_3  = document.getElementById("modalWrongA_3");
let modalWrongB_3  = document.getElementById("modalWrongB_3");
let modalWrongC_3  = document.getElementById("modalWrongC_3");

// les fonctions pour la troisieme question : 

buttonGood3.addEventListener("click", eventGood3 => {
    modalGood3.style.display = "block";
    goodSong.play();
    counters.innerHTML   = ++counter; 

})
buttonWrongA_3.addEventListener("click", eventWrong3_1 => {
    modalWrongA_3.style.display = "block";
    wrongSong.play();
});
buttonWrongB_3.addEventListener("click", eventWrong3_2 => {
    modalWrongB_3.style.display = "block";
    wrongSong.play();
});

buttonWrongC_3.addEventListener("click", eventWrong3_3 => {
    modalWrongC_3.style.display = "block";
    wrongSong.play();
});


// Button next question4 : 

let question4 = document.getElementById("question4");
let nextQuestionA_4 = document.getElementById("nextQuestionA_3");
let nextQuestionB_4 = document.getElementById("nextQuestionB_3");
let nextQuestionC_4 = document.getElementById("nextQuestionC_3");
let nextQuestionD_4 = document.getElementById("nextQuestionD_3");

nextQuestionA_4.addEventListener("click", nextA_4 => {   
question4.style.display = "block";
});
nextQuestionB_4.addEventListener("click", nextB_4 => {   
    question4.style.display = "block";
    });
nextQuestionC_4.addEventListener("click", nextC_4 => {   
    question4.style.display = "block";
    });
nextQuestionD_4.addEventListener("click", nextD_4 => {   
    question4.style.display = "block";
    });

//declaration de variable pour la quatrieme question : 

let buttonGood4 = document.getElementById("red-rigth4");
let buttonWrongA_4    = document.getElementById("blue-wrong4");
let buttonWrongB_4 = document.getElementById("green-wrong4");
let buttonWrongC_4 = document.getElementById("yellow-wrong4");


let modalGood4     = document.getElementById("modalGood4");
let modalWrongA_4  = document.getElementById("modalWrongA_4");
let modalWrongB_4  = document.getElementById("modalWrongB_4");
let modalWrongC_4  = document.getElementById("modalWrongC_4");

// les fonctions pour la quatrieme question : 

buttonGood4.addEventListener("click", eventGood4 => {
    modalGood4.style.display = "block";
    goodSong.play();
    counters.innerHTML   = ++counter; 

})
buttonWrongA_4.addEventListener("click", eventWrong4_1 => {
    modalWrongA_4.style.display = "block";
    wrongSong.play();
});
buttonWrongB_4.addEventListener("click", eventWrong4_2 => {
    modalWrongB_4.style.display = "block";
    wrongSong.play();
});

buttonWrongC_4.addEventListener("click", eventWrong4_3 => {
    modalWrongC_4.style.display = "block";
    wrongSong.play();
});


// Button next question5 : 

let question5 = document.getElementById("question5");
let nextQuestionA_5 = document.getElementById("nextQuestionA_5");
let nextQuestionB_5 = document.getElementById("nextQuestionB_5");
let nextQuestionC_5 = document.getElementById("nextQuestionC_5");
let nextQuestionD_5 = document.getElementById("nextQuestionD_5");

nextQuestionA_5.addEventListener("click", nextA_5 => {   
question5.style.display = "block";
});
nextQuestionB_5.addEventListener("click", nextB_5 => {   
    question5.style.display = "block";
    });
nextQuestionC_5.addEventListener("click", nextC_5 => {   
    question5.style.display = "block";
    });
nextQuestionD_5.addEventListener("click", nextD_5 => {   
    question5.style.display = "block";
    });

 //declaration de variable pour la cinquime question : 

let buttonGood5 = document.getElementById("blue-rigth5");
let buttonWrongA_5    = document.getElementById("red-wrong5");
let buttonWrongB_5 = document.getElementById("green-wrong5");
let buttonWrongC_5 = document.getElementById("yellow-wrong5");


let modalGood5     = document.getElementById("modalGood5");
let modalWrongA_5  = document.getElementById("modalWrongA_5");
let modalWrongB_5  = document.getElementById("modalWrongB_5");
let modalWrongC_5  = document.getElementById("modalWrongC_5");

// les fonctions pour la cinquime question : 

buttonGood5.addEventListener("click", eventGood5 => {
    modalGood5.style.display = "block";
    goodSong.play();
    counters.innerHTML   = ++counter; 

})
buttonWrongA_5.addEventListener("click", eventWrong5_1 => {
    modalWrongA_5.style.display = "block";
    wrongSong.play();
});
buttonWrongB_5.addEventListener("click", eventWrong5_2 => {
    modalWrongB_5.style.display = "block";
    wrongSong.play();
});

buttonWrongC_5.addEventListener("click", eventWrong5_3 => {
    modalWrongC_5.style.display = "block";
    wrongSong.play();
});


// Button next question6 : 

let question6 = document.getElementById("question6");
let nextQuestionA_6 = document.getElementById("nextQuestionA_6");
let nextQuestionB_6 = document.getElementById("nextQuestionB_6");
let nextQuestionC_6 = document.getElementById("nextQuestionC_6");
let nextQuestionD_6 = document.getElementById("nextQuestionD_6");

nextQuestionA_6.addEventListener("click", nextA_6 => {   
    question6.style.display = "block";
});
nextQuestionB_6.addEventListener("click", nextB_6 => {   
    question6.style.display = "block";
    });
nextQuestionC_6.addEventListener("click", nextC_6 => {   
    question6.style.display = "block";
    });
nextQuestionD_6.addEventListener("click", nextD_6 => {   
    question6.style.display = "block";
    });
   
//declaration de variable pour la sixieme question : 

let buttonGood6 = document.getElementById("red-wrong6");
let buttonWrongA_6    = document.getElementById("blue-wrong6");
let buttonWrongB_6 = document.getElementById("green-rigth6");
let buttonWrongC_6 = document.getElementById("yellow-wrong6");


let modalGood6     = document.getElementById("modalGood6");
let modalWrongA_6  = document.getElementById("modalWrongA_6");
let modalWrongB_6  = document.getElementById("modalWrongB_6");
let modalWrongC_6  = document.getElementById("modalWrongC_6");

// les fonctions pour la sixieme question : 

buttonGood6.addEventListener("click", eventGood6 => {
    modalGood6.style.display = "block";
    goodSong.play();
    counters.innerHTML   = ++counter; 

})
buttonWrongA_6.addEventListener("click", eventWrong6_1 => {
    modalWrongA_6.style.display = "block";
    wrongSong.play();
});
buttonWrongB_6.addEventListener("click", eventWrong6_2 => {
    modalWrongB_6.style.display = "block";
    wrongSong.play();
});

buttonWrongC_6.addEventListener("click", eventWrong6_3 => {
    modalWrongC_6.style.display = "block";
    wrongSong.play();
});


// Button next question7 : 

let question7 = document.getElementById("question7");
let nextQuestionA_7 = document.getElementById("nextQuestionA_7");
let nextQuestionB_7 = document.getElementById("nextQuestionB_7");
let nextQuestionC_7 = document.getElementById("nextQuestionC_7");
let nextQuestionD_7 = document.getElementById("nextQuestionD_7");

nextQuestionA_7.addEventListener("click", nextA_7 => {   
    question7.style.display = "block";
});
nextQuestionB_7.addEventListener("click", nextB_7 => {   
    question7.style.display = "block";
    });
nextQuestionC_7.addEventListener("click", nextC_7 => {   
    question7.style.display = "block";
    });
nextQuestionD_7.addEventListener("click", nextD_7 => {   
    question7.style.display = "block";
    });
   
//declaration de variable pour la septieme question : 

let buttonGood7 = document.getElementById("yellow-rigth7");
let buttonWrongA_7    = document.getElementById("blue-wrong7");
let buttonWrongB_7 = document.getElementById("green-wrong7");
let buttonWrongC_7 = document.getElementById("red-wrong7");


let modalGood7     = document.getElementById("modalGood7");
let modalWrongA_7  = document.getElementById("modalWrongA_7");
let modalWrongB_7  = document.getElementById("modalWrongB_7");
let modalWrongC_7  = document.getElementById("modalWrongC_7");

// les fonctions pour la septieme question : 

buttonGood7.addEventListener("click", eventGood7 => {
    modalGood7.style.display = "block";
    goodSong.play();
    counters.innerHTML   = ++counter; 

})
buttonWrongA_7.addEventListener("click", eventWrong7_1 => {
    modalWrongA_7.style.display = "block";
    wrongSong.play();
});
buttonWrongB_7.addEventListener("click", eventWrong7_2 => {
    modalWrongB_7.style.display = "block";
    wrongSong.play();
});

buttonWrongC_7.addEventListener("click", eventWrong7_3 => {
    modalWrongC_7.style.display = "block";
    wrongSong.play();
});


// Button next question8 : 

let question8 = document.getElementById("question8");
let nextQuestionA_8 = document.getElementById("nextQuestionA_8");
let nextQuestionB_8 = document.getElementById("nextQuestionB_8");
let nextQuestionC_8 = document.getElementById("nextQuestionC_8");
let nextQuestionD_8 = document.getElementById("nextQuestionD_8");

nextQuestionA_8.addEventListener("click", nextA_8 => {   
    question8.style.display = "block";
});
nextQuestionB_8.addEventListener("click", nextB_8 => {   
    question8.style.display = "block";
    });
nextQuestionC_8.addEventListener("click", nextC_8 => {   
    question8.style.display = "block";
    });
nextQuestionD_8.addEventListener("click", nextD_8 => {   
    question8.style.display = "block";
    });
   



// let lastAnswerWrong = document.getElementById("ends");
// let lastAnswerGood = document.getElementById("end");

// let pictureGood    = document.getElementById("marioGood");
// let pictureWrong   = document.getElementById("marioWrong");





// let score = document.getElementById('showScore');

// lastAnswerWrong.addEventListener("click", stop => {
//     clearInterval(timer);
//     song.pause();
//     score.innerHTML = `Ton score est de : ${count}/9, en ${inputTimer.value} secondes`;
//     if(count >= 5){
//         pictureGood.style.position = "absolute";

//     }
//     else{
//         pictureWrong.style.position = "absolute";
        

//     }

// })
// lastAnswerGood.addEventListener("click", stop => {
//     clearInterval(timer);
//     song.pause();
//     score.innerHTML = `Ton score est de : ${count}/9, en ${inputTimer.value} secondes`;
//     if(count >= 5){
//         pictureGood.style.position = "absolute";
//         count.style.color = "green";
        
//     }
//     else{
//         pictureWrong.style.position = "absolute";
//         count.style.color = "red";
        

//     }
// });

// // WRONG ANSWER SECTION

// // const buttonW = document.getElementsByClassName('wrong');
// // let x = 1;

// // for (let i = 0; i < buttonW.length; i++) {
// //     buttonW[i].addEventListener('click', event => {
// //         let modalW = document.getElementById(`w${x}`);
// //         let answerW = document.getElementById(`answerF${x}`);
// //         let responseBtn = document.getElementById(`responseBtn${x}`);
// //         let question = document.getElementById(`question${x+1}`);
// //         modalW.style.display = "flex";
// //         answerW.innerHTML = `Oups ! La bonne réponse était: ${buttonR[x-1].innerHTML}`;
// //         answerW.style.display = "block";
// //         responseBtn.style.display = "none";
// //         question.style.display = "block";
// //         
// //         x++;
// //         y++;
// //     });
// // };

// // //GOOD ANSWER SECTION
// // let count = 0;
// // let counter = document.getElementById('counter');
// // counter.innerHTML = count;
// // const buttonR = document.getElementsByClassName('rigth');
// // let y = 1;

// // for (let a = 0; a < buttonR.length; a++) {
// //     buttonR[a].addEventListener('click', event => {
// //         count++;
// //         counter.innerHTML = count;
// //         let modalG = document.getElementById(`g${y}`);
// //         let answerG = document.getElementById(`answerG${y}`);
// //         let responseBtn = document.getElementById(`responseBtn${y}`);
// //         let question = document.getElementById(`question${y+1}`);
// //         modalG.style.display = "flex";
// //         answerG.innerHTML = `Bravo ! Tu as trouvé la bonne réponse: ${buttonR[a].innerHTML}`;
// //         answerG.style.display = "block";
// //         responseBtn.style.display = "none";
// //         question.style.display = "block";
// //        
// //         y++;
// //         x++;
// //     });
// // };

// //Reset Gaming :
// let reset = document.getElementById("resetGame")
// reset.addEventListener("click", resetGame => {
//     inputTimer.res;


// })


//MODAL CONTACT US

// const modalContact = document.getElementById("contactUs");
// const buttonContact = document.getElementById("buttonContactUs");
// const buttonClose = document.getElementById("hideWindows");

// buttonContact.addEventListener('click', () => {
//     modalContact.style.display = "block";
// });

// buttonClose.addEventListener('click', () => {
//     modalContact.style.display = "none";
// });

// // filter of mario pictures:
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

// profil animal :
let profilDog = document.getElementById("profil1");
let profilLion = document.getElementById("profil2");
let profilCat = document.getElementById("profil3");
let profilDolphin = document.getElementById("profil4");
let profilAigle = document.getElementById("profil5");
let profilTurtle = document.getElementById("profil6");

let displayProfil = document.getElementById("butonAnimal");

displayProfil.addEventListener("click", profilGame => {
    if(count >=0 && count <=2){
        profilTurtle.style.display = "block";

    }
    if(count >2 && count <=4){
        profilCat.style.display = "block";
              
    }
    if(count >=5 && count <7){
        profilDog.style.display = "block";             
    }
    if(count == 7){
        profilDolphin.style.display = "block";
    }
    if(count == 8){
        profilAigle.style.display = "block";
    }
    if(count == 9){
        profilLion.style.display = "block";
    }

})



    
