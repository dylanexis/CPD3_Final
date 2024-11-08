var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("Carousel");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}


document.querySelectorAll('img').forEach(img => {
    console.log("runs");
    img.onerror = function() {
        this.onerror = null;
        this.src = "../js/placeholder-image.jpg";
        this.alt = "Placeholder image for missing photo";
    };
});