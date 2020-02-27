//cloud uitrekeningen
function cloudGeel(){
	var aantal = document.getElementById("aantal-geel").value;
	document.getElementById("geel-r").innerHTML = "Prijs: €" + aantal * 4;
}
function cloudOrange(){
	var aantal = document.getElementById("aantal-orange").value;
	document.getElementById("orange-r").innerHTML = "Prijs: €" + aantal * 6;
}
function cloudGroen(){
	var aantal = document.getElementById("aantal-groen").value;
	document.getElementById("groen-r").innerHTML = "Prijs: €" + aantal * 10;
}

//hosting uitrekeningen
function hostingBrons(){
	var aantal = document.getElementById("aantal-brons").value;
	document.getElementById("brons-r").innerHTML = "Prijs: €" + aantal * 5.95;
}
function hostingSilver(){
	var aantal = document.getElementById("aantal-silver").value;
	document.getElementById("silver-r").innerHTML = "Prijs: €" + aantal * 7.95;
}
function hostingGoud(){
	var aantal = document.getElementById("aantal-goud").value;
	document.getElementById("goud-r").innerHTML = "Prijs: €" + aantal * 10.95;
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
