//Initialize necessary boolean variables
var win = false;
var lost = false;
var start = false;

//Code for Game
$(function(){
    $("#start").mouseover(function(){
        lost = false;
        start = true;
        win = false;
        $("#status").text("Find the end!");
        $(".boundary").removeClass("youlose");
    });
    $("#end").mouseover(function(){
        if (!lost && start){
                $("#status").text("You win! :-)");
                win = true;
                start = false;
        }
    });
    $(".boundary").mouseover(function(){
        if(start){
            lost = true;
            $("#status").text("You lose! :'-(");
            $("#maze div.boundary").addClass("youlose");
        }
    });
    $("#maze").mouseleave(function(){
        if(start && !win){
            lost = true;
            $("#status").text("You lose! :'-(");
            $("#maze div.boundary").addClass("youlose");    
        }
    });
});

