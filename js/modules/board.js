const Board = (_ => {

  let canvas;
  let newLives = null;
  let context;

  const init = _ => {
    canvas = document.querySelector(".hangman__board");
    console.log(canvas);
    context = canvas.getContext("2d");
    console.log(context);
    context.lineWidth = 2;
    context.strokeStyle = "white";
    base();
  }

  const draw = (startX, startY, endX, endY) => {
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();
  }

  const head = _ =>{
    context.beginPath();
    context.arc(60,25,10,0,Math.PI * 2);
    context.stroke()
  }
  const base = _ => {
    line1();
    line2();
    line3();
  }

  let line1 = _ => draw(0, 150, 150, 150);

  let line2 = _ => draw(10, 0, 10, 300);

  let line3 = _ => draw(0, 5, 70, 5);

  let rope = _ => draw(60, 5, 60, 15);

  let torso = _ => draw(60, 36, 60, 70);

  let leftArm = _ => draw(60, 46, 20, 50);

  let rightArm = _ => draw(60, 46, 100, 50);

  let leftLeg = _ => draw(60, 70, 20, 100);

  let rightLeg = _ => draw(60, 70, 100, 100);
 
  let parts = [rightLeg, leftLeg, rightArm, leftArm, torso, head, rope];

  const render = _ =>{
    parts[newLives]();
    console.log(parts[newLives]);
  }

  const setLive = lives => {
    newLives = lives
  }

  return {
    init,
    setLive,
    render
  }
})();

export default Board;