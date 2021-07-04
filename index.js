window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
const navbar = document.querySelector('.navbar');
const hamburerMenue = document.querySelector('.hamburger-menue');

hamburerMenue.addEventListener("click", () => {
  navbar.classList.toggle('change')
  hamburerMenue.classList.toggle('change')
})

function myFunction() {
  
secretary.document.querySelector('hamburger-menue').classList.add('change');
    console.log(sticky);
    console.log(window.pageYOffset)

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  // menue.classList.add("sticky_bar");
  } else {
    header.classList.remove("sticky");
   // menue.classList.remove("sticky_bar")
  }
}
