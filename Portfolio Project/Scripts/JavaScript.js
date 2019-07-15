$(function () {


    //step 1: Get the data
    $("#btnPal").click(function () {
        var word = $("#palIn").val();



        //Step 2:Reverse the word
        //Use a decrementing for loop in conjunction with the substr command and the += operator to produce the reverse word.
        for (var index = word.length - 1, revword = ""; index >= 0; index--) {
            revword += word.substr(index, 1);
        }

        if (word === revword) {
            $("#palOut").text(revword + "is a Palindrome!");
        }
        else {
            $("#palOut").text(revword + "is not a Palindrome.");
        }
    });

    $("#btnClear2").click(function () {
        $("#palIn").val("");
        $("#palOut").text("");
    });

});
    //Step 3: Infrom The User
  



   