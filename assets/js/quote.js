/**	QUOTE FORM
*************************************************** **/

// BUILDING TYPES FUNCTIONS --------------------------------
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
    }});
        $("#number-of-apartments").change(function(){
            var numberOfApartments = $("#number-of-apartments").val();
            console.log("number-of-apartments is:", numberOfApartments);
    });
        })

        

       

// // GET DATA FROM HTML FORM
//     var numberOfApartments = document.getElementById("#number-of-apartments").value;
//     var numberOfFloors = document.getElementById("#number-of-floors").val();
//     var numberOfBasements = document.getElementById("#number-of-basements").val();
//     var numberOfCompanies = document.getElementById("#number-of-companies").val();
//     var numberOfParkingSpots = document.getElementById("#number-of-parking-spots").val();
//     var numberOfElevators = document.getElementById("#number-of-elevators").val();
//     var numberOfCorporations = document.getElementById("#number-of-corporations").val();
//     var maximumOccupancy = document.getElementById("#maximum-occupancy").val();
//     var businessHours = document.getElementById("#business-hours").val();

// console.log("numberOfApartments")


// ESTOMATE CALCULATION FUNCTIONS 
    // Variables definitions
    // var elevatorAmount = $("#elevator-amount").val()
    // var elevatorUnitPrice = $("#elevator-unit-price").val()
    // var elevatorTotalPrice = $("#elevator-total-price").val()
    // var installationFees = $("#installation-fees").val()
    // var finalPrice = $("#final-price").val()

    // console.log("elevatorAmount is:", elevatorAmount);
    // console.log("elevatorUnitPrice is:", elevatorUnitPrice);
    




// $(function() {
//     $("input[name='building-type-radio']").click(function() {
//       if ($("#commercial").is(":checked")) { 
//         $"#number-of-elevators" = elevatorAmount;
//     }
//             });
//         })