/**	QUOTE FORM
*************************************************** **/

$(document).ready(function () {
    $('input[type="radio"]').click(function () {
        if ($(this).attr("value") == "red") {
            $(".box").hide();
            $(".red").show();
        }
        if ($(this).attr("value") == "green") {
            $(".box").hide();
            $(".green").show();
        }
        if ($(this).attr("value") == "blue") {
            $(".box").hide();
            $(".blue").show();
        }
    });
});