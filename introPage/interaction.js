$(document).ready(function(){

  // FULLPAGE EFFECT   
  $('#fullpage').fullpage({
    anchors: ['welcome', 'about'],
    menu: '#menu'
  });

  // TEXT TYPE EFFECT
  $("#section0").animate({'background-color': 'white'}, 500, function(){
    $("#section0, h1").delay(500).fadeIn(1000, function(){
      $("h2").typed({
        strings: ["^800 Coming soon."],
        typeSpeed: 30,
        backDelay: 700, // pause before backspacing
        backSpeed: 30
      });
    });
  });

  $("#footer").delay(1000).animate({'opacity': 1}, 500);

  })