$(function () {
    $("#btnFact5").click(function () {
        $(".output").text("");
        var fear = [+$("#fears1").val(), +$("#fears2").val(), +$("#fears3").val(), +$("#fears4").val(), +$("#fears5").val(), +$("#fears6").val()];
        var k = +$("#kValue").val();
        var kTrue = false;
        for (var i = 0; i < fear.length - 1; i++) {
            for (var j = i + 1; j <= fear.length - 1; j++) {
                if (fear[i] + fear[j] === k) {
                    kTrue = true;
                    $("#kResponse").text("K has been found!");
                    $("#kEquation").text(fear[i] + " + " + fear[j] + " = " + k);
                    break;
                }
            }
            if (kTrue) {
                break;
            }
        }
        if (!kTrue) {
            $("#kResponse").text("K was not found in this array.");
        }
    });

    //Clearing Sum Of All Fears Input and Output Fields
    $("#clearBtn4").click(function () {
        $(".input").val("");
        $(".output").text("");
    });

    // SOAF "Show/Hide Code" Button Operations
    $("#code4").hide();
    $("#toggle4").click(function () {
        $("#code4").toggle();
        if ($(this).text() === "Show Code") {
            $(this).text("Hide Code");
        } else {
            $(this).text("Show Code");
        }
    });
});

