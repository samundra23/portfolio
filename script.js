// oggle between navbar and menu-icon


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bxs-x-circle');
  navbar.classList.toggle('active');
};

// scroll section

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
      });
      document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
    }
  });

//   sticky header

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);


//   remove nav bar on click

menuIcon.classList.remove('bxs-x-circle');
  navbar.classList.remove('active');

};



//   scrol reveal 
ScrollReveal({ 
    // reset: true,
    distance: '80px', 
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .services-continer, .portfolio-box , .contact form', {origin:'bottom'});

ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-content p, .about-img', {origin:'left'});



// typed js


const typed =new Typed('.multiple-text',{
  strings: ['Frontend Developer','Youtuber','Blogger'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,

});






function showMore() {
  var hiddenContent = document.getElementById("hidden-content");
  var toggleButton = document.getElementById("toggle-button");


  if (hiddenContent.style.display === "none") {
    hiddenContent.style.display = "block";
    toggleButton.innerHTML = "Read less";

  } else {
    hiddenContent.style.display = "none";
    toggleButton.innerHTML = "Read More";
 }

}


   

 
   