﻿
$(function () {

    $("#btnFizz").click(function () {
        // Get value from input id's
        var num1 = +($("#fbn1").val());
        var num2 = +($("#fbn2").val());
        var output = "";
        // Use a for loop
        for (var counter = 1; counter <= 100; counter++) {
            if ((counter % num1 == 0) && (counter % num2 == 0)) {
                output += "FizzBuzz, ";
            }
            else if (counter % num1 == 0) {
                output += "Fizz, ";
            }
            else if (counter % num2 == 0) {
                output += "Buzz, ";
            }
            else {
                output += counter + ", ";
            }
        }
        //Display The Output to the User
        output = output.substr(0, output.length - 2);
        $("#fizzOut").text(output);

    });



    $("#btnClear").click(function () {
        $("#fbn1").val("");
        $("#fbn2").val("");
        $("#fizzOut").text("");
    });

    $("#code1").hide();

    $("#toggle1").click(function () {
        $("#code1").toggle();
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        }
    });

});