$(document).ready(function() {
  
  $("#hide").click(function(){
    $("ul").fadeOut(800);
  });
  
  $("#show").click(function(){
    $("ul").fadeIn(800);
  });

  $("#hide-field").click(function(){
    $("#text-img").fadeOut(800);
    $("#text-img2").fadeOut(800);

  })

  $("#show-field").click(function(){
    $("#text-img").fadeIn(800);
    $("#text-img2").fadeIn(800);
  })

  $("#hide-info").click(function(){
    $("#text-img3").fadeOut(800);
  })

  $("#show-info").click(function(){
    $("#text-img3").fadeIn(800);
  })


  $("#hide-more").click(function(){
    $("#text2").fadeOut(800);
    $("#text1").fadeOut(800);
  })

  $("#show-more").click(function(){
    $("#text2").fadeIn(800);
    $("#text1").fadeIn(800);
    
  })
});