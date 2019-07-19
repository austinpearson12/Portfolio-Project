
$("#mathBtn").click(function () {
    //Step 1: Grab the value inside input id
    var number1 = Number($("#mathnum1").val());
    var number2 = Number($("#mathnum2").val());
    var number3 = Number($("#mathnum3").val());
    var number4 = Number($("#mathnum4").val());
    var number5 = Number($("#mathnum5").val());

    //Step 2: Do something with it (javascript)
    var min = Math.min(number1, number2, number3, number4, number5);
    var max = Math.max(number1, number2, number3, number4, number5);
    var sum = number1 + number2 + number3 + number4 + number5;
    var mean = sum / 5;
    var product = number1 * number2 * number3 * number4 * number5;

    //Step 3: Output the results to the screen (jquery)
    $("#min").text("Your smallest number is " + min + ".");
    $("#max").text("Your largest number is " + max + ".");
    $("#mean").text("The average of the five is " + mean + ".");
    $("#sum").text("The sum of the five is " + sum + ".");
    $("#product").text("And the product of everything is " + product + ".");
});

    $("#clearBtn").click(function () {
    $("#sum").text("");
    $("#product").text("");
    $("#mean").text("");
    $("#min").text("");
    $("#max").text("");
    $("#mathnum1, #mathnum2, #mathnum3, #mathnum4, #mathnum5").val("");
   
});
$("#code").hide();
$("#codeBtn").click(function () {
    $("#code").toggle();
    if ($(this).text == "Show Code") {
        $(this).text("Hide Code");
    } else {
        $(this).text("Show Code");
    }
});


