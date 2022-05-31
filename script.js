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
  var y = document.getElementById("color-changing");
  x.addEventListener("click", showMoreClouds);
  if(x.style.display === 'none'){
    x.style.display = "block";
    y.style.backgroundColor = x.style.backgroundColor;
    
  } else{
    x.style.display = "none";
  }

}

function showMoreClouds(){
   document.getElementById("mas-burbujitas").style.display += "block";
}


