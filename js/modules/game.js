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
  }

  const choseWord = _ =>{
    let randomNum = Math.floor(Math.random() * words.length);
    return randomNum;
  }


  return{
    init
  }
})();

export default Game;