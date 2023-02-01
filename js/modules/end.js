const End = (_ =>{

  const state = {
    chosenWord:null,
    winOrLose:null
  }

  //catch the dom
  const $hangman = document.querySelector(".hangman");  

  const setState = Obj =>{
    state.chosenWord = Obj.chosenWord;
    state.winOrLose = Obj.result;
    render();
  }

  const render =  _ =>{
    let markup = `
        <h1 class="hangman__title">GAME OVER</h1>
        <p class="result">You${state.winOrLose.toUpperCase()} <br>
        The word is ${state.chosenWord.toUpperCase()}!.
        </p>
        <button class="button hangman__trigger">Main Menu</button>
    `
    $hangman.innerHTML =  markup;
  }

  return{
    setState
  }
})();


export default End;