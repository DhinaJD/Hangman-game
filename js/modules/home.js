import Game from "./game.js";
import instruction from "./how.js";
import { Sound } from "../data/sound.js";

const Home = (_=>{

  //catch the dom
  const $hangman =  document.querySelector(".hangman");

  const init = _ =>{
    render();
    listeners();
  }


  const render = _ =>{
    let markup = "";
    markup +=  `
      <h1 class="hangman__title">Hangman</h1>
      <button class="button start">New Game</button>
      <button class="button instruction">Instruction</button>
    `
    $hangman.innerHTML = markup;
  }

  const listeners = _ =>{
    document.querySelector(".start").addEventListener("click", _ =>{
      console.log("start");
      Sound.click.play()
      Game.init();
    })
    document.querySelector(".instruction").addEventListener("click", _ =>{
      console.log("instruction");
      Sound.click.play()
    })
  }


  return{
    init
  }
})();

export default Home;

