import { Sound } from "../data/sound.js";
import End from "./end.js";
// import Home from "./home.js";

const Game = (_ =>{

  //states
  const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const words  = ["apple", "money", "cat", "dog", "power", "flower", "ninja", "game"];
  let chosenWord;
  let guessingWord;
  let lives;
  let guesses;

  //catch the dom
  const $hangman = document.querySelector(".hangman");

  const init = _=>{
    chosenWord =  choseWord();
    console.log("chosenWord : " + chosenWord);
    guessingWord = Array(chosenWord.length).fill("_");
    guesses = [];
    lives = 7;
    //show initial page
    showInitPage();
    listeners();
  }

  const listeners = _ =>{
    $hangman.addEventListener("click", event =>{
      if(event.target.matches(".hangman__letter")){
        Sound.click.play();
        check(event.target.innerHTML);
      }
      if(event.target.matches(".hangman__trigger")){
        Sound.click.play();
        // Home.init();
      }
    })
  }

  const isAlreadyTaken = letter =>{
    return guesses.includes(letter);
  }
  const updateGuessingWord = guess =>{
    chosenWord.split("").forEach((elem, index) => {
      if(elem === guess){
        guessingWord[index] = guess;
      }
    });
  }
1

  const check = userGuess =>{
    if(isAlreadyTaken(userGuess)) return;

    guesses.push(userGuess);
    
    if(chosenWord.includes(userGuess)){
      updateGuessingWord(userGuess)
    }else{
      if(lives == 0){return}
      lives--;
    }
    render();
    //game over function
    isGameOver();
  }


  const hasWon = _ => guessingWord.join("") === chosenWord;
  const hasLose = _ => lives <= 0;
  const isGameOver = _ =>{
    if(hasWon()){
      Sound.win.play();
      End.setState({
        chosenWord:chosenWord,
        result:"Win"
      })
    }

    if(hasLose()){
      Sound.lose.play()
      End.setState({
        chosenWord:chosenWord,
        result:"Win"
      })
    }
  }

  const render = _ =>{
    document.querySelector(".hangman__word").innerHTML = guessingWord.join("");
    document.querySelector(".hangman__lives").innerHTML = lives;
    document.querySelector(".hangman__letters").innerHTML = createLetters();
  }
  
  const showInitPage = _ =>{
    let markup = `
      <p class="hangman__stats">
        <span  class="hangman__lives">Lives: ${lives}</span>
      </p>
      <h1 class="hangman__title">Hangman</h1>
      <canvas class="hangman__board" height="155px"></canvas>
      <div class="hangman__word">${guessingWord.join("")}</div>
      <p class="hangman__instructions">Pick a letter below to guess the whole word.</p>
      <ul class="hangman__letters">${createLetters()}</ul>
      <button class="button hangman__trigger">Main Menu</button>
      `
    $hangman.innerHTML =  markup;
  }

  const createLetters = _ =>{
    let markup = ``;
    letters.forEach(letters =>{
      const isActive = isAlreadyTaken(letters) ? "hangman__letter--active" : "";
      markup +=  `
        <li class="hangman__letter ${isActive}">${letters}</li>
      `
    })
    return markup;
  }

  const choseWord = _ =>{
    let randomNum = Math.floor(Math.random() * words.length);
    return words[randomNum];
  }


  return{
    init
  }
})();

export default Game;