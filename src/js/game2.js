var clickedTime, createdTime, reactionTime, JogoIniciado, timeOut;


function makeboxGame2() {
  if (cont > 5) {
    makeSoundGame3();
  }
  else {
    const box1 = document.getElementById('game1');
    box1.style.display = 'none';

    const box2 = document.getElementById('game2');
    box2.style.display = 'block';

    JogoIniciado = new Date();

    randomBackground();

    var random = getRandomArbitrary(3000, 7000);
    console.log("Tempo até a imagem mudar de cor: " + random);
    timeOut = setTimeout(mudaFundo, random);
  }
}

function randomBackground() {
  var color = ["red", "blue", "green", "yellow"];
  var codColor;
  codColor = Math.random();
  codColor = codColor * 4;
  codColor = Math.floor(codColor);
  document.getElementById("divbox2").style.backgroundColor = color[codColor];
}

function mudaFundo() {
  document.getElementById("divbox2").style.display = 'block';
  createdTime = new Date();
}

function mudaClicouCedo() {
  document.getElementById("ClicouCedo").innerHTML = "";
}

function demasiadoCedoGame2() {
  ClickCedo = new Date();

  if (ClickCedo - JogoIniciado != 0) { // Depois de o jogo é iniciado após se acertar na resposta, ClickCedo - JogoIniciado = 0, pois JogoIniciado > ClickCedo
    console.log("Clicou demasiado cedo.");

    document.getElementById("ClicouCedo").innerHTML = "Ciclou Cedo!!! -> Restarting";
    setTimeout(mudaClicouCedo, 2000);

    clearTimeout(timeOut);
    makeboxGame2();
  }
}

function divClickGame2() {
  cont++;
  clickedTime = new Date();
  reactionTime = (clickedTime - createdTime) / 1000;
  console.log("O tempo de reação foi de -> " + reactionTime + "ms!");

  document.getElementById("reactionTime2").innerHTML = reactionTime + "ms";
  document.getElementById("divbox2").style.display = 'none';

  makeboxGame2();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}