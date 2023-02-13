 // Get the carousel element
 var carousel = document.getElementById("myCarousel");

 // Get all the slides
 var slides = carousel.getElementsByClassName("carousel-item");

 // Function to select a random slide and make it active
 function selectRandomSlide() {
   // Remove the active class from all slides
   for (var i = 0; i < slides.length; i++) {
     slides[i].classList.remove("active");
   }

   // Select a random slide
   var randomSlide = Math.floor(Math.random() * slides.length);

   // Make the selected slide active
   slides[randomSlide].classList.add("active");
 }

 // Call the selectRandomSlide function when the carousel finishes sliding
 carousel.addEventListener("slid.bs.carousel", selectRandomSlide);
