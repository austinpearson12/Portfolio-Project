$(function () {

    $("#btnFizz").click(function () {
        // Get value from input id's
        var num1 = +($("#fbn1").val());
        var num2 = +($("#fbn2").val());
        var output = "";
        // Use a loop using Java
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
        $("#factOut").text(output);

    });



    $("#btnClear").click(function () {
        $("#fbn1").val("");
        $("#fbn2").val("");
        $("#factOut").text("");
    });
});
