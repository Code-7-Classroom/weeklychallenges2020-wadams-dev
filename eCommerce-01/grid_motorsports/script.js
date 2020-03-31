var slideNumber = 1;

showSlide(slideNumber);

function nextSlide(x) {
  showSlide(slideNumber += x);
}

function showSlide(x) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (x > slides.length) {slideNumber = 1}
  if (x < 1) {slideNumber = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideNumber-1].style.display = "block";
}

function emailValidator() {
  var x, text;

  x = document.getElementById("email").value;

  if (x.includes('@')) {
    text = "Email accepted";
  } else {
    text = "Enter a valid email address";
  }
  document.getElementById("validatorText").innerHTML = text;
}