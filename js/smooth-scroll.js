$(document).ready(function() {

  function smoothScroll(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash && this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 16
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  }

  // Add smooth scrolling to all links
  $('a.home__arrow').on('click', smoothScroll, event);
  $('a.navbar-item').on('click', smoothScroll, event);

});
