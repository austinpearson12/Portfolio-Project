$(function () {

//I need a click event handler for the button
        $("#btnFact3").click(function () {
            //Step:1 Get the User Data
            var number = +$("#factIn").val();

            if (number > 170) {
                alert("I told you...");
                $("#factIn").val("");

            }

            //Step2: Calculate the Factorial
            for (var loop = number - 1; loop > 1; loop--) {
                //How do we claculate the factorial
                //numer=number*loop
                number *= loop;
            }

            //Step 3: Show the results
            $("#factOut").text(number);
        });
        $("#btnClear3").click(function () {
            $("#factIn").val("");
            $("#factOut").text("");
        });
});
         