const swup = new Swup({
  plugins: [new SwupBodyClassPlugin()]
});

function PlaySound(melody) {
    var path = "audio/"
    var snd = new Audio(path + melody + ".mp3");
    snd.play();
}

function showClouds(){
  var x = document.getElementById("burbujitas");
 /*  x.addEventListener("click", showMoreClouds, changeColor, changeColor2, changeColor3, changeColor4, changeColor5, changeColor6); */
  if(x.style.display === 'none'){
    x.style.display = "block";
  } else{
    x.style.display = "none";
  }

}

function showMoreClouds(n){
    var e = document.getElementById("mas-burbujitas" + n);
    if(e.style.display === 'none'){
      e.style.display = 'block';
    } else{
      e.style.display = 'none';
    }
}

function changeColor(){
  document.body.style.backgroundColor = '#ADB5BD';
}

function changeColor2(){
  document.body.style.backgroundColor = '#6C757D';
}

function changeColor3(){
  document.body.style.backgroundColor = '#495057';
}

function changeColor4(){
  document.body.style.backgroundColor = '#343A40';
}

function changeColor5(){
  document.body.style.backgroundColor = '#212529';
}

function changeColor6(){
  document.body.style.backgroundColor = 'black';
}