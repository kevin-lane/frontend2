
// Börja labba när nedan...
//Lektion 5 
//Övning 2 delövning 1
$("#exercice-1").replaceWith("Ok, detta är ny text som via jQuery ersätter texten som är definierad i HTML");

//2 - 2
$("#exercice-2").html($("#exercice-2").text().replace("HTML" , "HyperText Markup Language")); //Hjälp med att få ett ord fetstilad

//2-3
$("#exercice-3").click(function(){
    $("#toggleMe").toggle();
});

//2-4
$(document).ready(function(){
    $("#exercice-4").click(function(){
        $(".navbar").fadeTo(1000, 0.5); //50% svart
    });

});

//2-5
$(document).ready(function(){
    $("#exercice-5").click(function(){
        $("#exercice-5-color").css("background-color" , "red");
    });
});

//2-6
$(document).ready(function(){
    $("#exercice-6").click(function(){
        $("#exercice-6-SP").toggleClass("xyz");
    });
});

//2-7
$(document).ready(function(){
    $("#exercice-7").click(function(){
        $(".navbar").addClass("addedClass");
    });
});

//2-8
$(document).ready(function(){
    $("#exercice-8").click(function(){
        $(".navbar").removeClass("navbar-inverse");
    });
});

//2-9
function myRandomFunction(){
    $(document).ready(function(){
        $("#exercice-9").click(function(){
            $("#randomNumber").text("Det magiska numret är: " + Math.floor(Math.random() * 100) + 1); //Använd floor för att få ut heltal
        });   //Varför blir det större än trots att jag definierar mellan 1 - 100. Det står på W3Schools att * 100 betyder slutvärdet och + 1 är start
    });
}

//2-10
var citat = ["SharePoint är skoj" , "Front-End är roligt" , "SharePoint is exciting"];
var citatAmount = citat.length;
var citatRandom = citat[Math.floor(Math.random() * citatAmount)]
$(document).ready(function(){
    $("#quoteGenerator").click(function(){
        $("#quotes").text(citatRandom);
    });
});