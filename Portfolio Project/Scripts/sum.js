


    $("btnSum4").click(function () {
        //Set an empty Array
        var sumArray = new Array();

        //Get the Input Numbers
        sumArray.push(+$("$sumNum1").val());
        sumArray.push(+$("$sumNum21").val());
        sumArray.push(+$("$sumNum31").val());
        sumArray.push(+$("$sumNum41").val());
        sumArray.push(+$("$sumNum51").val());
        sumArray.push(+$("$sumNum61").val());

        var kValue = +$("#kValue").val();

        for (index = 0, found = false; index < sumArray.length - 1; index++) {
            var position = sumArray.indexOf(kValue1 - sumArray[index], index + 1);
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
        $("#clearBtn5").click(function () {
            $("#factOut4").text("");
            $("#sumNum12").text("");
            $("#sumNum21").text("");
            $("#sumNum31").text("");
            $("#sumNum41").text("");
            $("#sumNum51").text("");
            $("#sumNum61").text("");
            $("#kValue").text("");
        });

    });
