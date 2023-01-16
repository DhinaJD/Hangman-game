import { Sound } from "../data/sound.js";
import Home from "./home.js";

const Game = (_ =>{

  //states
  const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const words  = ["apple", "money", "cat", "dog", "power", "flower", "ninja", "game"];
  let chosenWord;
  let guessingWord;
  let lives;
  let guesses;

  //catch the dom
  const $hangman = document.querySelector(".hangman");

  const init = _=>{
    chosenWord =  choseWord();
    guessingWord = Array(chosenWord).fill("_")
    guesses = [];
    lives = 7;
    //show initial page
    showInitPage();
    listeners();
  }

  const listeners = _ =>{
    let mainMenu = $hangman.lastElementChild;
    mainMenu.addEventListener("click", _ =>{
      Home.init();
      Sound.click.play();
    })
  }

  const showInitPage = _ =>{
    let markup = `
      <p class="hangman__stats">
        <span  class="hangman__lives">Lives: ${lives}</span>
      </p>
      <h1 class="hangman__title">Hangman</h1>
      <canvas class="hangman__board" height="155px"></canvas>
      <div class="hangman__word">${guessingWord.join(" ")}</div>
      <p class="hangman__instructions">Pick a letter below to guess the whole word.</p>
      <ul class="hangman__letters">${createLetters()}</ul>
      <button class="button hangman__trigger">Main Menu</button>
      `
    $hangman.innerHTML =  markup;
  }

  const createLetters = _ =>{
    let markup = ``;
    letters.forEach(letters =>{
      markup +=  `
        <li class="hangman__letter">${letters}</li>
      `
    })
    return markup;
  }

  const choseWord = _ =>{
    let randomNum = Math.floor((Math.random() * words.length) + 1);
    return randomNum;
  }


  return{
    init
  }
})();

export default Game;