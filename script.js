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
  if(x.style.display === 'none'){
    x.style.display = "block";
  } else{
    x.style.display = "none";
  }
}
