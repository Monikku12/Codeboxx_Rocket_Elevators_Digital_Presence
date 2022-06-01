/**	QUOTE FORM
*************************************************** **/

// BUILDING TYPES FUNCTIONS --------------------------------
$(function() { // Link Fields With Radio Buttons
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
        $("#number-of-apartments").change(function(){ // Retrieve data from quote form
            var numberOfApartments = $("input[name=number-of-apartments]").val();
            console.log("number-of-apartments is:", numberOfApartments);         
        });
        $("#number-of-floors").change(function(){            
            var numberOfFloors = $("input[name=number-of-floors]").val();
            console.log("number-of-floors is:", numberOfFloors);
        });
        $("#number-of-basements").change(function(){            
            var numberOfBasements = $("input[name=number-of-basements]").val();
            console.log("number-of-basements is:", numberOfBasements);
        });
        $("#number-of-companies").change(function(){            
            var numberOfCompanies = $("input[name=number-of-companies]").val();
            console.log("number-of-companies is:", numberOfCompanies);  
        });
        $("#number-of-parking-spots").change(function(){            
            var numberOfParkingSpots = $("input[name=number-of-parking-spots]").val();
            console.log("number-of-parking-spots is:", numberOfParkingSpots);
        });
        $("#number-of-elevators").change(function(){            
            var numberOfElevators = $("input[name=number-of-elevators]").val();
            console.log("number-of-elevators is:", numberOfElevators);
        });
        $("#number-of-corporations").change(function(){            
            var numberOfCorporations = $("input[name=number-of-corporations]").val();
            console.log("number-of-corporations is:", numberOfCorporations);
        });
        $("#maximum-occupancy").change(function(){            
            var maximumOccupancy = $("input[name=maximum-occupancy]").val();
            console.log("maximum-occupancy is:", maximumOccupancy);
        });
        $("#business-hours").change(function(){            
            var businessHours = $("input[name=business-hours]").val();           
            console.log("business-hours is:", businessHours);
        });
        })

        

    
// ESTIMATE CALCULATION FUNCTIONS 
    // Variables Definitions
    // var elevatorAmount = $("input[name=elevator-amount]").val()
    // var elevatorUnitPrice = $("input[name=elevator-unit-price]").val()
    // var elevatorTotalPrice = $("input[name=elevator-total-price]").val()
    // var installationFees = $("input[name=installation-fees]").val()
    // var finalPrice = $("input[name=final-price]").val()

    // Commercial Elevator Cages Calculation
    // $("input[name='building-type-radio']").click(function() {
    //      if ($("#commercial").is(":checked")) { 
    //     commercialElevatorAmount = numberOfElevators;




// $(function() {
//     $("input[name='building-type-radio']").click(function() {
//       if ($("#commercial").is(":checked")) { 
//         $"#number-of-elevators" = elevatorAmount;
//     }
//             });
//         })


// PRODUCTS LINE FUNCTIONS --------------------------------
$(function() { // Link Fields With Radio Buttons
    $("input[name='product-line-radio']").click(function() {
      if ($("#standard").is(":checked")) {
            $("#elevator-unit-price").show(val(7565));
    }
})
});