/**	QUOTE FORM
*************************************************** **/

// BUILDING TYPES FUNCTIONS --------------------------------
$(function() { // ←←← Link Fields With Radio Buttons
    var numberOfApartments = 0;
    var numberOfBasements = 0;
    var numberOfCompanies = 0;
    var numberOfCorporations = 0;
    var numberOfElevators = 0;
    var numberOfFloors = 0;
    var numberOfParkingSpots = 0;
    var maximumOccupancy = 0;
    var businessHours = 0;
    var numberTotalOfFloors = 0;
    var totalNumberOfOccupants = 0;
    var numberOfElevatorColumns = 0;
    // Retrieve value from quote form ↓↓↓
    $("#number-of-apartments").keyup(function(){ 
        numberOfApartments = $("input[name=number-of-apartments]").val();
        console.log("number-of-apartments is:", numberOfApartments);         
    });
    $("#number-of-floors").keyup(function(){            
        numberOfFloors = $("input[name=number-of-floors]").val();
        console.log("number-of-floors is:", numberOfFloors); // OK
    });
    $("#number-of-basements").keyup(function(){            
        numberOfBasements = $("input[name=number-of-basements]").val();
        console.log("number-of-basements is:", numberOfBasements); // OK
        console.log("numberOfBasements is:", numberOfBasements) // OK
    });
    $("#number-of-companies").keyup(function(){            
        numberOfCompanies = $("input[name=number-of-companies]").val();
        console.log("number-of-companies is:", numberOfCompanies); // OK
    });
    $("#number-of-parking-spots").keyup(function(){            
        numberOfParkingSpots = $("input[name=number-of-parking-spots]").val();
        console.log("number-of-parking-spots is:", numberOfParkingSpots);
    });
    $("#number-of-elevators").keyup(function(){  // Done         
        $("output[name=elevator-amount]").val($("input[name=number-of-elevators]").val());
    });       
    $("#number-of-corporations").keyup(function(){            
        numberOfCorporations = $("input[name=number-of-corporations]").val();
        console.log("number-of-corporations is:", numberOfCorporations);
    });
    $("#maximum-occupancy").keyup(function(){            
        maximumOccupancy = $("input[name=maximum-occupancy]").val();
        console.log("maximum-occupancy is:", maximumOccupancy);
    });
    $("#business-hours").keyup(function(){            
        businessHours = $("input[name=business-hours]").val();           
        console.log("business-hours is:", businessHours);
    });
    $("#number-of-floors","#number-of-basements").keyup(function(){
        numberTotalOfFloors = +numberOfFloors + +numberOfBasements;
        console.log("numberTotalOfFloors is:", numberTotalOfFloors);
    });
       // Radio buttons Effects ↓↓↓
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
        $("input").keyup(function(){ // Hybrid & Corporate Calculations
            totalNumberOfOccupants = numberTotalOfFloors * numberOfCompanies;
                console.log("numberOfCompanies in formula is:", numberOfCompanies);
                console.log("numberTotalOfFloors in formula is:", numberTotalOfFloors);
                console.log("totalNumberOfOccupants in formula is:", totalNumberOfOccupants);
            numberOfElevators = totalNumberOfOccupants / 1000;
                console.log("numberOfElevators in formula is:", numberOfElevators);
            $("output[name=elevator-amount]").val(numberOfElevators);
                console.log("numberOfElevators in field is:", numberOfElevators);
            numberOfElevatorColumns = numberTotalOfFloors / 20;
                console.log("numberOfElevatorColumns in formula is:", numberOfElevatorColumns);
        
        
            });        
    }});       
        })

        

    
// ESTIMATE CALCULATION FUNCTIONS 
    // Variables Definitions
    // var elevatorAmount = $("input[name=elevator-amount]").val()
    // var elevatorUnitPrice = $("input[name=elevator-unit-price]").val()
    // var elevatorTotalPrice = $("input[name=elevator-total-price]").val()
    // var installationFees = $("input[name=installation-fees]").val()
    // var finalPrice = $("input[name=final-price]").val()




// PRODUCTS LINE FUNCTIONS --------------------------------
$(function() { // Elevator Unit Price & Installation Fees --------------------------------
    $("input[name='product-line-radio']").click(function() {
      if ($("#standard").is(":checked")) {
        var elevatorUnitPrice = $("output[name=elevator-unit-price]").val(7565);
        var installationFeesPercentage = $("output[name=installation-fees]").val(0.1);
    } if ($("#premium").is(":checked")) {
        var elevatorUnitPrice = $("output[name=elevator-unit-price]").val(12345);
        var installationFeesPercentage = $("output[name=installation-fees]").val(0.13);           
    } if ($("#excelium").is(":checked")) {
        var elevatorUnitPrice = $("output[name=elevator-unit-price]").val(15400);
        var installationFeesPercentage = $("output[name=installation-fees]").val(0.16);           
    }
})
});