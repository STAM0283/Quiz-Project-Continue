//chooix de backgroudbody

// Add name and age for the gamer :

let name = document.getElementById("name");
let age = document.getElementById("age");
let nameVariable = document.getElementById("nameVariable");
let validateName = document.getElementById("validateName");
let blue = document.getElementById("blue");
let black = document.getElementById("black");
let pink = document.getElementById("pink");

validateName.addEventListener("click", (submite) => {
  nameVariable.innerHTML = `${name.value}, à ${age.value} ans, on peut largement gagner le jeux`;
});
black.addEventListener("click", (changeBakgroudColor) => {
  document.body.style.backgroundImage = "url('img/black-wall.png')";
  document.body.style.color = "white";
});
blue.addEventListener("click", (changeBakgroudColor) => {
  document.body.style.backgroundImage = "url('img/wall-body.png')";
  document.body.style.color = "white";
});
pink.addEventListener("click", (changeBakgroudColor) => {
  document.body.style.backgroundImage = "url('img/purple-wall.png')";
  document.body.style.color = "white";
});
//Ajout d'heure et date actuelle :

let newDate = document.getElementById("time");

function afficher() {
  let date = new Date().toDateString();
  let heure = new Date().toLocaleTimeString("fr", "FR");
  newDate.innerHTML = ` ${date} : ${heure}`;
  setInterval(afficher, 1000);
}
afficher();

// Play Timer -- START BUTTON -- counter:

let horloge = document.getElementById("horloge");
let inputTimer = document.getElementById("inputTimer");
let timer;
let starts = document.querySelector(".start-link");
let goodSong = document.getElementById("goodSong");
let wrongSong = document.getElementById("wrongSong");
let counters = document.getElementById("counter");
let counter = 0;

//function of Timer :

let miniSeconde = 0;
let seconde = 0;
let miniute = 0;

let chrono = () => {
  inputTimer.value = miniute + seconde + miniSeconde;
  miniSeconde++;
  if (miniSeconde == 100) {
    miniSeconde = 0;
    seconde++;
    if (seconde == 60) {
      seconde = 0;
      miniute++;
    }
    timer = clearInterval();
    horloge.pause();
  }
};

starts.addEventListener("click", (starteGame) => {
  timer = setInterval(chrono, 100);
  question1.style.display = "block";
  horloge.play();
  song.play();
});

//SONG FUNCTION :

let song = document.getElementById("marioSong");
let songOn = document.getElementById("songOn");
let songOff = document.getElementById("songOff");
let clockOn = document.getElementById("clockOn");
let clockOff = document.getElementById("clockOff");

clockOn.addEventListener("click", (off) => {
  horloge.volume = 0;
  clockOn.style.display = "none";
  clockOff.style.display = "block";
});
clockOff.addEventListener("click", (off) => {
  horloge.volume = 1;
  clockOff.style.display = "none";
  clockOn.style.display = "block";
});

songOn.addEventListener("click", () => {
  song.volume = 0;
  songOn.style.display = "none";
  songOff.style.display = "block";
});

songOff.addEventListener("click", () => {
  song.volume = 1;
  songOn.style.display = "block";
  songOff.style.display = "none";
});

// Button next-introduction :

let firstNextBtn = document.getElementById("introNext");
let introduction = document.getElementById("introduction");
firstNextBtn.addEventListener("click", (nextIntroduction) => {
  introduction.style.display = "flex";
});

// variable declaration for the first question :

let buttonGoog1 = document.getElementById("blue-rigth1");
let buttonWrongA_1 = document.getElementById("green-wrong1");
let buttonWrongB_1 = document.getElementById("red-wrong1");
let buttonWrongC_1 = document.getElementById("yellow-wrong1");
let modalGood1 = document.getElementById("modalGood1");
let modalWrongA_1 = document.getElementById("modalWrongA_1");
let modalWrongB_1 = document.getElementById("modalWrongB_1");
let modalWrongC_1 = document.getElementById("modalWrongC_1");
let responseBtn1 = document.getElementById("responseBtn1");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");
let result4 = document.getElementById("result4");
let result5 = document.getElementById("result5");
let result6 = document.getElementById("result6");
let result7 = document.getElementById("result7");
let result8 = document.getElementById("result8");
let result9 = document.getElementById("result9");

// the functions for the first question :

buttonGoog1.addEventListener("click", (eventGood1) => {
  responseBtn1.style.display = "none";
  result1.style.display = "block";
  result1.style.backgroundColor = "#38e304";
  result1.innerHTML =
    "1) Yes c'est la bonne réponse, effectivement c'est Donkey Kong Jr";
  modalGood1.style.display = "block";
  goodSong.play();
  counters.innerHTML = ++counter;
});
buttonWrongA_1.addEventListener("click", (eventWrong1_1) => {
  responseBtn1.style.display = "none";
  result1.style.display = "block";
  result1.style.backgroundColor = "#f72747";
  result1.innerHTML =
    "1) Mauvaise réponse : la bonne réponse c'est Donkey Kong Jr";
  modalWrongA_1.style.display = "block";

  wrongSong.play();
});
buttonWrongB_1.addEventListener("click", (eventWrong1_2) => {
  responseBtn1.style.display = "none";
  result1.style.display = "block";
  result1.style.backgroundColor = "#f72747";
  result1.innerHTML =
    "1) Mauvaise réponse : la bonne réponse c'est Donkey Kong Jr";
  modalWrongB_1.style.display = "block";
  wrongSong.play();
});

buttonWrongC_1.addEventListener("click", (eventWrong1_3) => {
  responseBtn1.style.display = "none";
  result1.style.display = "block";
  result1.style.backgroundColor = "#f72747";
  result1.innerHTML =
    "1) Mauvaise réponse : la bonne réponse c'est Donkey Kong Jr";
  modalWrongC_1.style.display = "block";

  wrongSong.play();
});
// Button to the next question(2) :

let question2 = document.getElementById("question2");
let nextQuestionA_2 = document.getElementById("nextQuestionA_2");
let nextQuestionB_2 = document.getElementById("nextQuestionB_2");
let nextQuestionC_2 = document.getElementById("nextQuestionC_2");
let nextQuestionD_2 = document.getElementById("nextQuestionD_2");

nextQuestionA_2.addEventListener("click", (nextA_2) => {
  question2.style.display = "block";
});
nextQuestionB_2.addEventListener("click", (nextB_2) => {
  question2.style.display = "block";
});
nextQuestionC_2.addEventListener("click", (nextC_2) => {
  question2.style.display = "block";
});
nextQuestionD_2.addEventListener("click", (nextD_2) => {
  question2.style.display = "block";
});
//variable declaration for the seconde question :

let buttonGood2 = document.getElementById("yellow-rigth2");
let buttonWrongA_2 = document.getElementById("blue-wrong2");
let buttonWrongB_2 = document.getElementById("green-wrong2");
let buttonWrongC_2 = document.getElementById("red-wrong2");

let modalGood2 = document.getElementById("modalGood2");
let modalWrongA_2 = document.getElementById("modalWrongA_2");
let modalWrongB_2 = document.getElementById("modalWrongB_2");
let modalWrongC_2 = document.getElementById("modalWrongC_2");

// the functions for the seconde question :

let responseBtn2 = document.getElementById("responseBtn2");
buttonGood2.addEventListener("click", (eventGood2) => {
  responseBtn2.style.display = "none";
  result2.style.display = "block";
  result2.style.backgroundColor = "#38e304";
  result2.innerHTML = "2) Yes c'est la bonne réponse, effectivement c'est Link";
  modalGood2.style.display = "block";
  goodSong.play();
  counters.innerHTML = ++counter;
});
buttonWrongA_2.addEventListener("click", (eventWrong2_1) => {
  responseBtn2.style.display = "none";
  result2.style.display = "block";
  result2.style.backgroundColor = "#f72747";
  result2.innerHTML = "2) Mauvaise réponse : la bonne réponse c'était Link";
  modalWrongA_2.style.display = "block";
  wrongSong.play();
});
buttonWrongB_2.addEventListener("click", (eventWrong2_2) => {
  responseBtn2.style.display = "none";
  result2.style.display = "block";
  result2.style.backgroundColor = "#f72747";
  result2.innerHTML = "2) Mauvaise réponse : la bonne réponse c'était Link";
  modalWrongB_2.style.display = "block";
  wrongSong.play();
});

buttonWrongC_2.addEventListener("click", (eventWrong2_3) => {
  responseBtn2.style.display = "none";
  result2.style.display = "block";
  result2.style.backgroundColor = "#f72747";
  result2.innerHTML = "2) Mauvaise réponse : la bonne réponse c'était Link";
  modalWrongC_2.style.display = "block";
  wrongSong.play();
});

// Button to the next question(3) :

let question3 = document.getElementById("question3");
let nextQuestionA_3 = document.getElementById("nextQuestionA_3");
let nextQuestionB_3 = document.getElementById("nextQuestionB_3");
let nextQuestionC_3 = document.getElementById("nextQuestionC_3");
let nextQuestionD_3 = document.getElementById("nextQuestionD_3");

nextQuestionA_3.addEventListener("click", (nextA_3) => {
  question3.style.display = "block";
});
nextQuestionB_3.addEventListener("click", (nextB_3) => {
  question3.style.display = "block";
});
nextQuestionC_3.addEventListener("click", (nextC_3) => {
  question3.style.display = "block";
});
nextQuestionD_3.addEventListener("click", (nextD_3) => {
  question3.style.display = "block";
});
//variable declaration for the third question :

let buttonGood3 = document.getElementById("red-rigth3");
let buttonWrongA_3 = document.getElementById("blue-wrong3");
let buttonWrongB_3 = document.getElementById("green-wrong3");
let buttonWrongC_3 = document.getElementById("yellow-wrong3");
let modalGood3 = document.getElementById("modalGood3");
let modalWrongA_3 = document.getElementById("modalWrongA_3");
let modalWrongB_3 = document.getElementById("modalWrongB_3");
let modalWrongC_3 = document.getElementById("modalWrongC_3");

// the functions of the third question :

let responseBtn3 = document.getElementById("responseBtn3");
buttonGood3.addEventListener("click", (eventGood3) => {
  result3.style.display = "block";
  result3.style.backgroundColor = "#38e304";
  result3.innerHTML = "3) Yes c'est la bonne réponse, effectivement c'est";
  responseBtn3.style.display = "none";
  modalGood3.style.display = "block";
  goodSong.play();
  counters.innerHTML = ++counter;
});
buttonWrongA_3.addEventListener("click", (eventWrong3_1) => {
  responseBtn3.style.display = "none";
  result3.style.display = "block";
  result3.style.backgroundColor = "#f72747";
  result3.innerHTML =
    "3) Mauvaise réponse : la bonne réponse c'était Mortal combat";
  modalWrongA_3.style.display = "block";
  wrongSong.play();
});
buttonWrongB_3.addEventListener("click", (eventWrong3_2) => {
  responseBtn3.style.display = "none";
  result3.style.display = "block";
  result3.style.backgroundColor = "#f72747";
  result3.innerHTML =
    "3) Mauvaise réponse : la bonne réponse c'était Mortal combat";
  modalWrongB_3.style.display = "block";
  wrongSong.play();
});

buttonWrongC_3.addEventListener("click", (eventWrong3_3) => {
  responseBtn3.style.display = "none";
  result3.style.display = "block";
  result3.style.backgroundColor = "#f72747";
  result3.innerHTML =
    "3) Mauvaise réponse : la bonne réponse c'était Mortal combat";
  modalWrongC_3.style.display = "block";
  wrongSong.play();
});

// Button to the next question(4) :

let question4 = document.getElementById("question4");
let nextQuestionA_4 = document.getElementById("nextQuestionA_3");
let nextQuestionB_4 = document.getElementById("nextQuestionB_3");
let nextQuestionC_4 = document.getElementById("nextQuestionC_3");
let nextQuestionD_4 = document.getElementById("nextQuestionD_3");

nextQuestionA_4.addEventListener("click", (nextA_4) => {
  question4.style.display = "block";
});
nextQuestionB_4.addEventListener("click", (nextB_4) => {
  question4.style.display = "block";
});
nextQuestionC_4.addEventListener("click", (nextC_4) => {
  question4.style.display = "block";
});
nextQuestionD_4.addEventListener("click", (nextD_4) => {
  question4.style.display = "block";
});

//variable declaration for the fourth question :

let buttonGood4 = document.getElementById("red-rigth4");
let buttonWrongA_4 = document.getElementById("blue-wrong4");
let buttonWrongB_4 = document.getElementById("green-wrong4");
let buttonWrongC_4 = document.getElementById("yellow-wrong4");

let modalGood4 = document.getElementById("modalGood4");
let modalWrongA_4 = document.getElementById("modalWrongA_4");
let modalWrongB_4 = document.getElementById("modalWrongB_4");
let modalWrongC_4 = document.getElementById("modalWrongC_4");

// the functions for the fourth question :

let responseBtn4 = document.getElementById("responseBtn4");
buttonGood4.addEventListener("click", (eventGood4) => {
  result4.style.display = "block";
  result4.style.backgroundColor = "#38e304";
  result4.innerHTML = "4) Yes c'est la bonne réponse, effectivement c'est";
  responseBtn4.style.display = "none";
  modalGood4.style.display = "block";
  goodSong.play();
  counters.innerHTML = ++counter;
});
buttonWrongA_4.addEventListener("click", (eventWrong4_1) => {
  responseBtn4.style.display = "none";
  result4.style.display = "block";
  result4.style.backgroundColor = "#f72747";
  result4.innerHTML = "4) Mauvaise réponse : la bonne réponse c'était Rock man";
  modalWrongA_4.style.display = "block";
  wrongSong.play();
});
buttonWrongB_4.addEventListener("click", (eventWrong4_2) => {
  responseBtn4.style.display = "none";
  result4.style.display = "block";
  result4.style.backgroundColor = "#f72747";
  result4.innerHTML = "4) Mauvaise réponse : la bonne réponse c'était Rock man";
  modalWrongB_4.style.display = "block";
  wrongSong.play();
});

buttonWrongC_4.addEventListener("click", (eventWrong4_3) => {
  responseBtn4.style.display = "none";
  result4.style.display = "block";
  result4.style.backgroundColor = "#f72747";
  result4.innerHTML = "4) Mauvaise réponse : la bonne réponse c'était Rock man";
  modalWrongC_4.style.display = "block";
  wrongSong.play();
});

// Button to the next question(5) :

let question5 = document.getElementById("question5");
let nextQuestionA_5 = document.getElementById("nextQuestionA_5");
let nextQuestionB_5 = document.getElementById("nextQuestionB_5");
let nextQuestionC_5 = document.getElementById("nextQuestionC_5");
let nextQuestionD_5 = document.getElementById("nextQuestionD_5");

nextQuestionA_5.addEventListener("click", (nextA_5) => {
  question5.style.display = "block";
});
nextQuestionB_5.addEventListener("click", (nextB_5) => {
  question5.style.display = "block";
});
nextQuestionC_5.addEventListener("click", (nextC_5) => {
  question5.style.display = "block";
});
nextQuestionD_5.addEventListener("click", (nextD_5) => {
  question5.style.display = "block";
});

//variable declaration for the fifth question :

let buttonGood5 = document.getElementById("blue-rigth5");
let buttonWrongA_5 = document.getElementById("red-wrong5");
let buttonWrongB_5 = document.getElementById("green-wrong5");
let buttonWrongC_5 = document.getElementById("yellow-wrong5");

let modalGood5 = document.getElementById("modalGood5");
let modalWrongA_5 = document.getElementById("modalWrongA_5");
let modalWrongB_5 = document.getElementById("modalWrongB_5");
let modalWrongC_5 = document.getElementById("modalWrongC_5");

// the functions for the fifth question :

let responseBtn5 = document.getElementById("responseBtn5");
buttonGood5.addEventListener("click", (eventGood5) => {
  result5.style.display = "block";
  result5.style.backgroundColor = "#38e304";
  result5.innerHTML = "5) Yes c'est la bonne réponse, effectivement c'est";
  responseBtn5.style.display = "none";
  modalGood5.style.display = "block";
  goodSong.play();
  counters.innerHTML = ++counter;
});
buttonWrongA_5.addEventListener("click", (eventWrong5_1) => {
  responseBtn5.style.display = "none";
  result5.style.display = "block";
  result5.style.backgroundColor = "#f72747";
  result5.innerHTML = "5) Mauvaise réponse : la bonne réponse c'était Mega Man";
  modalWrongA_5.style.display = "block";
  wrongSong.play();
});
buttonWrongB_5.addEventListener("click", (eventWrong5_2) => {
  responseBtn5.style.display = "none";
  result5.style.display = "block";
  result5.style.backgroundColor = "#f72747";
  result5.innerHTML = "5) Mauvaise réponse : la bonne réponse c'était Mega Man";
  modalWrongB_5.style.display = "block";
  wrongSong.play();
});

buttonWrongC_5.addEventListener("click", (eventWrong5_3) => {
  responseBtn5.style.display = "none";
  result5.style.display = "block";
  result5.style.backgroundColor = "#f72747";
  result5.innerHTML = "5) Mauvaise réponse : la bonne réponse c'était Mega Man";
  modalWrongC_5.style.display = "block";
  wrongSong.play();
});

// Button to the next question(6) :

let question6 = document.getElementById("question6");
let nextQuestionA_6 = document.getElementById("nextQuestionA_6");
let nextQuestionB_6 = document.getElementById("nextQuestionB_6");
let nextQuestionC_6 = document.getElementById("nextQuestionC_6");
let nextQuestionD_6 = document.getElementById("nextQuestionD_6");

nextQuestionA_6.addEventListener("click", (nextA_6) => {
  question6.style.display = "block";
});
nextQuestionB_6.addEventListener("click", (nextB_6) => {
  question6.style.display = "block";
});
nextQuestionC_6.addEventListener("click", (nextC_6) => {
  question6.style.display = "block";
});
nextQuestionD_6.addEventListener("click", (nextD_6) => {
  question6.style.display = "block";
});

//variable declaration for the sixth question :

let buttonGood6 = document.getElementById("red-wrong6");
let buttonWrongA_6 = document.getElementById("blue-wrong6");
let buttonWrongB_6 = document.getElementById("green-rigth6");
let buttonWrongC_6 = document.getElementById("yellow-wrong6");

let modalGood6 = document.getElementById("modalGood6");
let modalWrongA_6 = document.getElementById("modalWrongA_6");
let modalWrongB_6 = document.getElementById("modalWrongB_6");
let modalWrongC_6 = document.getElementById("modalWrongC_6");

// the functions for the sixth question :

let responseBtn6 = document.getElementById("responseBtn6");
buttonGood6.addEventListener("click", (eventGood6) => {
  result6.style.display = "block";
  result6.style.backgroundColor = "#38e304";
  result6.innerHTML =
    "6) Yes c'est la bonne réponse, effectivement c'est Capcom";
  responseBtn6.style.display = "none";
  modalGood6.style.display = "block";
  goodSong.play();
  counters.innerHTML = ++counter;
});
buttonWrongA_6.addEventListener("click", (eventWrong6_1) => {
  responseBtn6.style.display = "none";
  result6.style.display = "block";
  result6.style.backgroundColor = "#f72747";
  result6.innerHTML = "6) Mauvaise réponse : la bonne réponse c'était Capcom";
  modalWrongA_6.style.display = "block";
  wrongSong.play();
});
buttonWrongB_6.addEventListener("click", (eventWrong6_2) => {
  responseBtn6.style.display = "none";
  result6.style.display = "block";
  result6.style.backgroundColor = "#f72747";
  result6.innerHTML = "6) Mauvaise réponse : la bonne réponse c'était Capcom";
  modalWrongB_6.style.display = "block";
  wrongSong.play();
});

buttonWrongC_6.addEventListener("click", (eventWrong6_3) => {
  responseBtn6.style.display = "none";
  result6.style.display = "block";
  result6.style.backgroundColor = "#f72747";
  result6.innerHTML = "6) Mauvaise réponse : la bonne réponse c'était Capcom";
  modalWrongC_6.style.display = "block";
  wrongSong.play();
});

// Button to the next question(7) :

let question7 = document.getElementById("question7");
let nextQuestionA_7 = document.getElementById("nextQuestionA_7");
let nextQuestionB_7 = document.getElementById("nextQuestionB_7");
let nextQuestionC_7 = document.getElementById("nextQuestionC_7");
let nextQuestionD_7 = document.getElementById("nextQuestionD_7");

nextQuestionA_7.addEventListener("click", (nextA_7) => {
  question7.style.display = "block";
});
nextQuestionB_7.addEventListener("click", (nextB_7) => {
  question7.style.display = "block";
});
nextQuestionC_7.addEventListener("click", (nextC_7) => {
  question7.style.display = "block";
});
nextQuestionD_7.addEventListener("click", (nextD_7) => {
  question7.style.display = "block";
});

//variable declaration for the seventh question :

let buttonGood7 = document.getElementById("yellow-rigth7");
let buttonWrongA_7 = document.getElementById("blue-wrong7");
let buttonWrongB_7 = document.getElementById("green-wrong7");
let buttonWrongC_7 = document.getElementById("red-wrong7");

let modalGood7 = document.getElementById("modalGood7");
let modalWrongA_7 = document.getElementById("modalWrongA_7");
let modalWrongB_7 = document.getElementById("modalWrongB_7");
let modalWrongC_7 = document.getElementById("modalWrongC_7");

// the functions for the seventh question :

let responseBtn7 = document.getElementById("responseBtn7");
buttonGood7.addEventListener("click", (eventGood7) => {
  result7.style.display = "block";
  result7.style.backgroundColor = "#38e304";
  result7.innerHTML =
    "7) Yes c'est la bonne réponse, effectivement c'est Game Cube";
  responseBtn7.style.display = "none";
  modalGood7.style.display = "block";
  goodSong.play();
  counters.innerHTML = ++counter;
});
buttonWrongA_7.addEventListener("click", (eventWrong7_1) => {
  responseBtn7.style.display = "none";
  result7.style.display = "block";
  result7.style.backgroundColor = "#f72747";
  result7.innerHTML =
    "7) Mauvaise réponse : la bonne réponse c'était Game Cube";
  modalWrongA_7.style.display = "block";
  wrongSong.play();
});
buttonWrongB_7.addEventListener("click", (eventWrong7_2) => {
  responseBtn7.style.display = "none";
  result7.style.display = "block";
  result7.style.backgroundColor = "#f72747";
  result7.innerHTML =
    "7) Mauvaise réponse : la bonne réponse c'était Game Cube";
  modalWrongB_7.style.display = "block";
  wrongSong.play();
});

buttonWrongC_7.addEventListener("click", (eventWrong7_3) => {
  responseBtn7.style.display = "none";
  result7.style.display = "block";
  result7.style.backgroundColor = "#f72747";
  result7.innerHTML =
    "7) Mauvaise réponse : la bonne réponse c'était Game Cube";
  modalWrongC_7.style.display = "block";
  wrongSong.play();
});

// Button to the next question(8) :

let question8 = document.getElementById("question8");
let nextQuestionA_8 = document.getElementById("nextQuestionA_8");
let nextQuestionB_8 = document.getElementById("nextQuestionB_8");
let nextQuestionC_8 = document.getElementById("nextQuestionC_8");
let nextQuestionD_8 = document.getElementById("nextQuestionD_8");

nextQuestionA_8.addEventListener("click", (nextA_8) => {
  question8.style.display = "block";
});
nextQuestionB_8.addEventListener("click", (nextB_8) => {
  question8.style.display = "block";
});
nextQuestionC_8.addEventListener("click", (nextC_8) => {
  question8.style.display = "block";
});
nextQuestionD_8.addEventListener("click", (nextD_8) => {
  question8.style.display = "block";
});

//variable declaration for the eighth question :

let buttonGood8 = document.getElementById("blue-rigth8");
let buttonWrongA_8 = document.getElementById("yellow-wrong8");
let buttonWrongB_8 = document.getElementById("green-wrong8");
let buttonWrongC_8 = document.getElementById("red-wrong8");

let modalGood8 = document.getElementById("modalGood8");
let modalWrongA_8 = document.getElementById("modalWrongA_8");
let modalWrongB_8 = document.getElementById("modalWrongB_8");
let modalWrongC_8 = document.getElementById("modalWrongC_8");

// the functions for the eighth question :

let responseBtn8 = document.getElementById("responseBtn8");
buttonGood8.addEventListener("click", (eventGood8) => {
  result8.style.display = "block";
  result8.style.backgroundColor = "#38e304";
  result8.innerHTML =
    "8) Yes c'est la bonne réponse, effectivement c'est Puck Man";
  responseBtn8.style.display = "none";
  modalGood8.style.display = "block";
  goodSong.play();
  counters.innerHTML = ++counter;
});
buttonWrongA_8.addEventListener("click", (eventWrong8_1) => {
  responseBtn8.style.display = "none";
  result8.style.display = "block";
  result8.style.backgroundColor = "#f72747";
  result8.innerHTML = "8) Mauvaise réponse : la bonne réponse c'était Puck Man";
  modalWrongA_8.style.display = "block";
  wrongSong.play();
});
buttonWrongB_8.addEventListener("click", (eventWrong8_2) => {
  responseBtn8.style.display = "none";
  result8.style.display = "block";
  result8.style.backgroundColor = "#f72747";
  result8.innerHTML = "8) Mauvaise réponse : la bonne réponse c'était Puck Man";
  modalWrongB_8.style.display = "block";
  wrongSong.play();
});

buttonWrongC_8.addEventListener("click", (eventWrong8_3) => {
  responseBtn8.style.display = "none";
  result8.style.display = "block";
  result8.style.backgroundColor = "#f72747";
  result8.innerHTML = "8) Mauvaise réponse : la bonne réponse c'était Puck Man";
  modalWrongC_8.style.display = "block";
  wrongSong.play();
});

// Button to the next question(9) :

let question9 = document.getElementById("question9");
let nextQuestionA_9 = document.getElementById("nextQuestionA_9");
let nextQuestionB_9 = document.getElementById("nextQuestionB_9");
let nextQuestionC_9 = document.getElementById("nextQuestionC_9");
let nextQuestionD_9 = document.getElementById("nextQuestionD_9");

nextQuestionA_9.addEventListener("click", (nextA_9) => {
  question9.style.display = "block";
});
nextQuestionB_9.addEventListener("click", (nextB_9) => {
  question9.style.display = "block";
});
nextQuestionC_9.addEventListener("click", (nextC_9) => {
  question9.style.display = "block";
});
nextQuestionD_9.addEventListener("click", (nextD_9) => {
  question9.style.display = "block";
});

//variable declaration for the ninth question :

let buttonGood9 = document.getElementById("red-rigth9");
let buttonWrongA_9 = document.getElementById("yellow-wrong9");
let buttonWrongB_9 = document.getElementById("green-wrong9");
let buttonWrongC_9 = document.getElementById("blue-wrong9");

let modalGood9 = document.getElementById("modalGood9");
let modalWrongA_9 = document.getElementById("modalWrongA_9");
let modalWrongB_9 = document.getElementById("modalWrongB_9");
let modalWrongC_9 = document.getElementById("modalWrongC_9");

// the functions for the ninth question :

let responseBtn9 = document.getElementById("responseBtn9");
buttonGood9.addEventListener("click", (eventGood9) => {
  result9.style.display = "block";
  result9.style.backgroundColor = "#38e304";
  result9.innerHTML =
    "9) Yes c'est la bonne réponse, effectivement c'est Minecraft";
  responseBtn9.style.display = "none";
  modalGood9.style.display = "block";
  goodSong.play();
  counters.innerHTML = ++counter;
});
buttonWrongA_9.addEventListener("click", (eventWrong9_1) => {
  responseBtn9.style.display = "none";
  result9.style.display = "block";
  result9.style.backgroundColor = "#f72747";
  result9.innerHTML =
    "9) Mauvaise réponse : la bonne réponse c'était Minecraft";
  modalWrongA_9.style.display = "block";
  wrongSong.play();
});
buttonWrongB_9.addEventListener("click", (eventWrong9_2) => {
  responseBtn9.style.display = "none";
  result9.style.display = "block";
  result9.style.backgroundColor = "#f72747";
  result9.innerHTML =
    "9) Mauvaise réponse : la bonne réponse c'était Minecraft";
  modalWrongB_9.style.display = "block";
  wrongSong.play();
});

buttonWrongC_9.addEventListener("click", (eventWrong9_3) => {
  responseBtn9.style.display = "none";
  result9.style.display = "block";
  result9.style.backgroundColor = "#f72747";
  result9.innerHTML =
    "9) Mauvaise réponse : la bonne réponse c'était Minecraft";
  modalWrongC_9.style.display = "block";
  wrongSong.play();
});

// boutton voir les resultat :

//let picturesGalerie  = document.getElementById("picturesGalerie");
let badges = document.getElementById("badges");
let score = document.getElementById("showScore");
let pictureGood = document.getElementById("answerGood");
let pictureWrong = document.getElementById("aswerWrong");
let result = document.getElementById("result");
let nextResultA = document.getElementById("nextResultA");
let nextResultB = document.getElementById("nextResultB");
let nextResultC = document.getElementById("nextResultC");
let nextResultD = document.getElementById("nextResultD");

nextResultA.addEventListener("click", (nextA) => {
  //picturesGalerie.style.display  = "block";
  result.style.display = "block";
  badges.style.display = "block";
  clearInterval(timer);
  song.pause();
  score.innerHTML = `Ton score est de : ${counter}/9, en ${inputTimer.value} secondes`;
  if (counter >= 5) {
    pictureGood.style.position = "absolute";
    pictureGood.style.display = "block";
  } else {
    pictureWrong.style.position = "absolute";
    pictureWrong.style.display = "block";
  }
});
nextResultB.addEventListener("click", (nextB) => {
  //picturesGalerie.style.display  = "block";
  result.style.display = "block";
  badges.style.display = "block";
  clearInterval(timer);
  song.pause();
  score.innerHTML = `Ton score est de : ${counter}/9, en ${inputTimer.value} secondes`;
  if (counter >= 5) {
    pictureGood.style.position = "absolute";
    pictureGood.style.display = "block";
  } else {
    pictureWrong.style.position = "absolute";
    pictureWrong.style.display = "block";
  }
});

nextResultC.addEventListener("click", (nextC) => {
  // picturesGalerie.style.display  = "block";
  result.style.display = "block";
  badges.style.display = "block";
  clearInterval(timer);
  song.pause();
  score.innerHTML = `Ton score est de : ${counter}/9, en ${inputTimer.value} secondes`;
  if (counter >= 5) {
    pictureGood.style.position = "absolute";
    pictureGood.style.display = "block";
  } else {
    pictureWrong.style.position = "absolute";
    pictureWrong.style.display = "block";
  }
});

nextResultD.addEventListener("click", (nextD) => {
  //picturesGalerie.style.display = "block";
  result.style.display = "block";
  badges.style.display = "block";
  clearInterval(timer);
  song.pause();
  score.innerHTML = `Ton score est de : ${counter}/9, en ${inputTimer.value} secondes`;

  if (counter >= 5) {
    pictureGood.style.position = "absolute";
    pictureGood.style.display = "block";
  } else {
    pictureWrong.style.position = "absolute";
    pictureWrong.style.display = "block";
  }
});

// //MODAL CONTACT US

const modalContact = document.getElementById("contactUs");
const buttonContact = document.getElementById("buttonContactUs");
const buttonClose = document.getElementById("hideWindows");

buttonContact.addEventListener("click", () => {
  modalContact.style.display = "block";
});

buttonClose.addEventListener("click", () => {
  modalContact.style.display = "none";
});

// profile character video games :

let profilTortue = document.getElementById("profil1");
let profilLion = document.getElementById("profil2");
let profilCat = document.getElementById("profil3");
let profilDolphin = document.getElementById("profil4");
let profilAigle = document.getElementById("profil5");
let profilTurtle = document.getElementById("profil6");

let displayProfil = document.getElementById("butonAnimal");

displayProfil.addEventListener("click", (profilGame) => {
  if (counter >= 0 && counter <= 2) {
    profilTortue.style.display = "block";
  }
  if (counter > 2 && counter <= 4) {
    profilCat.style.display = "block";
  }
  if (counter >= 5 && counter < 7) {
    profilTortue.style.display = "block";
  }
  if (counter == 7) {
    profilDolphin.style.display = "block";
  }
  if (counter == 8) {
    profilAigle.style.display = "block";
  }
  if (counter == 9) {
    profilLion.style.display = "block";
  }
});
