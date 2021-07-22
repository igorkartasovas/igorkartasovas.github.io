$(document).ready(function() {
  
    $("#hide-list").click(function(){
      $("#info-list").fadeOut(600);
    });

    $("#hide-list").dblclick(function(){
        $("#info-list").fadeIn(600);
    });

    $("#img2").click(function(){
        $("#show-numPeople2").fadeOut(800);
        $("#astroNames").fadeOut(800);
        $("#button2").fadeOut(800);
        $("#crew").fadeOut(800);
    });

    $("#img2").dblclick(function(){
        $("#show-numPeople2").fadeIn(800);
        $("#astroNames").fadeIn(800);
        $("#button2").fadeIn(800);
    });

    $("#button").click(function(){
       $("#button2").fadeIn(800);
       $("#crew").fadeOut(800);
    });


    
    $(document).ready(function(){
        $("#crew").hide;

        $("#button2").dblclick(function(){
            $("#crew").fadeIn(800);
            $("#button2").fadeOut(600);
        })

        $("#button2").click(function(){
            $("#crew").fadeOut(800);
        })
    });
});

$.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
    var number = data['number'];
    $('#SpacePeople').html(number);

    data['people'].forEach(function (d) {
        $('#astroNames').append('<li>' + d['name']+ '</li>');
    });
});
