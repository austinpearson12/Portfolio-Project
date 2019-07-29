$(function () {
    $("btnFact5").click(function () {
        //Set an empty Array
        var sumArray = new Array();

        //Get the Input Numbers
        sumArray.push(+$("$val1").val());
        sumArray.push(+$("$val2").val());
        sumArray.push(+$("$val3").val());
        sumArray.push(+$("$val4").val());
        sumArray.push(+$("$val5").val());
        sumArray.push(+$("$val6").val());

        var kValue = +$("#kValue").val();

        for (index = 0, found = false; index < sumArray.length - 1; index++) {
            var position = sumArray.indexOf(kValue - sumArray[index], index + 1);
            if (position > 0) {
                found = true;
                $("#factOut4").text("Congrats! K has been found!");
                $("#mathEquation").text(index + "+" + sumArray + "=" + kValue);
                break;
            }
        }
        if (found) {
            $("#factOut4").text("K is not in this Array.");
        }
        $("#clearBtn4").click(function () {
            $("#factOut4").text("");
            $("#val1").text("");
            $("#val2").text("");
            $("#val3").text("");
            $("#val4").text("");
            $("#val5").text("");
            $("#val6").text("");
            $("#kValue").text("");
        });
        $("#code").hide();
        $("#codeBtn4").click(function () {
            $("#code").toggle();
            if ($(this).text == "Show Code") {
                $(this).text("Hide Code");
            } else {
                $(this).text("Show Code");
            }
        });

    });
});
