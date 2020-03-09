alert("Mijn helden");
$('h1').click( function(){
$('main').hide(900).delay(600).show(1200);
});

$('#naomi p').click( function(){
    $('#naomi img').slideToggle(700);
});

$(document).ready( function(){
    $("#mohamad img").click( function(){
    $("#mohamad p").css("color"," rgb(255, 0, 200)").slideUp(2000).slideDown(2000);
    });

    $("#naruto h3").click( function(){
        $("#naruto img").css("transform","scale(1)",500).slideToggle(2000);
    });

    $("#obama h3").click( function(){
        $("#obama img").css("transform","scale(2)").slideToggle(2000).delay(500).css("transform","scale(1)");

    });
     
    $("#start").click( function(){
      $("section").slideToggle(700);
    });
$("#end").click( function(){
    $("section img").slideToggle(700);

});
$("#start").click( function(){
 $("footer").css("margin-top","-15px");
});














});
