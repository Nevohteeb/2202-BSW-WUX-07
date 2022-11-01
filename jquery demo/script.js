$(document).ready(function(){

    //  ALL OUR JQUERRY GOES IN HERE

    // JQuery Onclick
    $("#paraButton").click(function(){
        $("p").hide();
    });

    // Double Click 
    $("#firstPara").dblclick(function(){
        alert('Clever cookie!');
    });

    // Mouse Enter
    $('#secondPara').mouseenter(function(){
        alert('you entered the second paragraph');
    })

    // Mouse Leave
    $('#secondPara').mouseleave(function(){
        alert('bye- from the second para');
    })

    //Hover
    $("#thirdPara").hover(function(){
        // mouse enter action goes here!!
    }, function (){
        // mouse leave action goes here!!
    });

});