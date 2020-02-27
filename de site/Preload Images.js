var images = new Array();

function preloadImages(){

    for (i=0; i < preloadImages.arguments.length; i++){

         images[i] = new Image();

        images[i].src = preloadImages.arguments[i];

    }

}

preloadImages("Afbeeldingen/Background.jpg", "Afbeeldingen/Home img1.png", "Afbeeldingen/Home img2.png", "Afbeeldingen/Home img3.png", "Afbeeldingen/Home img4.png");
