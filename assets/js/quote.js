/**	QUOTE FORM
*************************************************** **/

$(function() {
    $("input[name='building-type-radio']").click(function() {
      if ($("#residential").is(":checked")) {
        $("#number-of-apartments").show();
        $("#number-of-floors").show();
        $("#number-of-basements").show();
        $("#number-of-companies").hide();
        $("#number-of-parking-spots").hide();
        $("#number-of-elevators").hide();
        $("#number-of-corporations").hide();
        $("#maximum-occupancy").hide();
        $("#business-hours").hide();
    } if ($("#commercial").is(":checked")) {
        $("#number-of-companies").show();
        $("#number-of-floors").show();
        $("#number-of-basements").show();
        $("#number-of-parking-spots").show();
        $("#number-of-elevators").show();
        $("#number-of-apartments").hide();
        $("#number-of-corporations").hide();
        $("#maximum-occupancy").hide();
        $("#business-hours").hide();
    } if ($("#corporate").is(":checked")) {
        $("#number-of-corporations").show();
        $("#number-of-floors").show();
        $("#number-of-basements").show();
        $("#number-of-parking-spots").show();
        $("#maximum-occupancy").show();
        $("#number-of-apartments").hide();
        $("#number-of-companies").hide();
        $("#number-of-elevators").hide();
        $("#business-hours").hide();
    } if ($("#hybrid").is(":checked")) {
        $("#number-of-companies").show();
        $("#number-of-floors").show();
        $("#number-of-basements").show();
        $("#number-of-parking-spots").show();
        $("#maximum-occupancy").show();
        $("#business-hours").show();
        $("#number-of-corporations").hide();
        $("#number-of-elevators").hide();
        $("#number-of-apartments").hide();        
    }
            });
        })

 