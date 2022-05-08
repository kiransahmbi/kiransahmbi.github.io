
// Change nav-bar colour
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      var $navtext = $(".navbar a");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $navtext.toggleClass('scrolled-text', $(this).scrollTop() > $nav.height());
    });
  });

// About Me Moving
const toObserveAboutMe = document.querySelectorAll(".to-observe-about-me");

let options = {
    rootMargin: '0px',
    threshold: [0.5, 1]
  }
  
const observerAboutMe = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("showAboutMe", entry.isIntersecting)
            if (entry.isIntersecting) observerAboutMe.unobserve(entry.target)
        })
    }, options);

toObserveAboutMe.forEach(item => {
    observerAboutMe.observe(item)
})

// Header Moving
const toObserveHeader = document.querySelectorAll(".header .row");

const observerHeader = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("showHeader", entry.isIntersecting)
            if (entry.isIntersecting) observerHeader.unobserve(entry.target)
        })
    }, {rootMargin: '0px', threshold: 0});

toObserveHeader.forEach(item => {
    observerHeader.observe(item)
})

// Projects Moving
const toObserveProjects = document.querySelectorAll("#projects .container");
  
const observerProjects = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("showProjects", entry.isIntersecting)
            if (entry.isIntersecting) observerProjects.unobserve(entry.target)
        })
    }, {threshold: 0.20});

toObserveProjects.forEach(item => {
    observerProjects.observe(item)
})