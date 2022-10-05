
var i = 0;
var txt = '</coming soon! ...>';
var txt2 = 'mohamed mouadden'
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("lol").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()