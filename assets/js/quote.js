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
    var numberTotalOfFloors = 0;
    var totalNumberOfOccupants = 0;
    var numberOfColumns = 0;
    var numberOfElevatorsPerColumn = 0;
    var totalNumberOfElevators = 0;
    var averageOfApartmentsPerFloor = 0;
    // Retrieve value from quote form ↓↓↓
    $("#number-of-apartments").keyup(function(){ 
        numberOfApartments = $("input[name=number-of-apartments]").val();
        // console.log("number-of-apartments is:", numberOfApartments);         
    });
    $("#number-of-floors").keyup(function(){            
        numberOfFloors = $("input[name=number-of-floors]").val();
        // console.log("number-of-floors is:", numberOfFloors); // OK
        // console.log("numberOfFloors is:", numberOfFloors);
    });
    $("#number-of-basements").keyup(function(){            
        numberOfBasements = $("input[name=number-of-basements]").val();
        // console.log("number-of-basements is:", numberOfBasements); // OK
        // console.log("numberOfBasements is:", numberOfBasements); // OK
    });
    $("#number-of-companies").keyup(function(){            
        numberOfCompanies = $("input[name=number-of-companies]").val();
        // console.log("number-of-companies is:", numberOfCompanies); // OK
    });
    $("#number-of-parking-spots").keyup(function(){            
        numberOfParkingSpots = $("input[name=number-of-parking-spots]").val();
        // console.log("number-of-parking-spots is:", numberOfParkingSpots);
    });
    $("#number-of-elevators").keyup(function(){  // Done         
        $("output[name=elevator-amount]").val($("input[name=number-of-elevators]").val());
    });       
    $("#number-of-corporations").keyup(function(){            
        numberOfCorporations = $("input[name=number-of-corporations]").val();
        // console.log("number-of-corporations is:", numberOfCorporations);
    });
    $("#maximum-occupancy").keyup(function(){            
        maximumOccupancy = $("input[name=maximum-occupancy]").val();
        // console.log("maximum-occupancy is:", maximumOccupancy);
    });
    $("#business-hours").keyup(function(){            
        businessHours = $("input[name=business-hours]").val();           
        // console.log("business-hours is:", businessHours);
    });
    $("#number-of-basements").keyup(function(){        
        // console.log("numberOfBasements is:", numberOfBasements);        
        numberTotalOfFloors = (+numberOfFloors + +numberOfBasements);
        // console.log("numberOfFloors is:", numberOfFloors);
        // console.log("numberTotalOfFloors is:", numberTotalOfFloors);        
    });
    $("#number-of-floors").keyup(function(){    
        // console.log("numberOfFloors is:", numberOfFloors);
        numberTotalOfFloors = (+numberOfFloors + +numberOfBasements);
        // console.log("numberOfBasements is:", numberOfBasements);
        // console.log("numberTotalOfFloors is:", numberTotalOfFloors);        
    });
       // Radio buttons Effects ↓↓↓
    $("input[name='building-type-radio']").click(function() {
      if ($("#residential").is(":checked")) { // Done
        $("#number-of-apartments").show();
        $("#number-of-floors").show();
        $("#number-of-basements").show();
        $("#number-of-companies").hide();
        $("#number-of-parking-spots").hide();
        $("#number-of-elevators").hide();
        $("#number-of-corporations").hide();
        $("#maximum-occupancy").hide();
        $("#business-hours").hide();
        $("input").keyup(function(){ // Residential Calculations : Done
            averageOfApartmentsPerFloor = Math.ceil(numberOfApartments / numberOfFloors); // 15 = 300 / 20)
                // console.log("numberOfFloors in formula is:", numberOfFloors);
                // console.log("numberOfApartments in formula is:", numberOfApartments);
                // console.log("averageOfApartmentsPerFloor in formula is:", averageOfApartmentsPerFloor);
            numberOfElevators = Math.ceil(averageOfApartmentsPerFloor / 6); // 3 (2.5) = 15 / 6
                // console.log("averageOfApartmentsPerFloor in formula is:", averageOfApartmentsPerFloor);
                // console.log("numberOfElevators in formula is:", numberOfElevators);
            numberOfColumns = Math.ceil(numberOfFloors / 20); // 1 = 20 / 20
                // console.log("numberOfFloors in formula is:", numberOfFloors);
                // console.log("numberOfColumns in formula is:", numberOfColumns);
            totalNumberOfElevators = Math.ceil(numberOfColumns * numberOfElevators); // 3 = 1 * 3
                // console.log("numberOfElevators in formula is:", numberOfElevators);
                // console.log("numberOfColumns in formula is:", numberOfColumns);
                // console.log("totalNumberOfElevators in formula is:", totalNumberOfElevators);
            $("output[name=elevator-amount]").val(totalNumberOfElevators);
                // console.log("totalNumberOfElevators in field is:", totalNumberOfElevators);  
        });  
    } if ($("#commercial").is(":checked")) { // Done
        $("#number-of-companies").show();
        $("#number-of-floors").show();
        $("#number-of-basements").show();
        $("#number-of-parking-spots").show();
        $("#number-of-elevators").show();
        $("#number-of-apartments").hide();
        $("#number-of-corporations").hide();
        $("#maximum-occupancy").hide();
        $("#business-hours").hide();
    } if ($("#corporate").is(":checked")) { // Done
        $("#number-of-corporations").show();
        $("#number-of-floors").show();
        $("#number-of-basements").show();
        $("#number-of-parking-spots").show();
        $("#maximum-occupancy").show();
        $("#number-of-apartments").hide();
        $("#number-of-companies").hide();
        $("#number-of-elevators").hide();
        $("#business-hours").hide();
        $("input").keyup(function(){ // Corporate Calculations : Done
            totalNumberOfOccupants = numberTotalOfFloors * numberOfCorporations;
                // console.log("numberOfCorporations in formula is:", numberOfCorporations);
                // console.log("numberTotalOfFloors in formula is:", numberTotalOfFloors);
                // console.log("totalNumberOfOccupants in formula is:", totalNumberOfOccupants);
            numberOfElevators = Math.ceil(totalNumberOfOccupants / 1000); // 6 = 6000 / 1000
                // console.log("numberOfElevators in formula is:", numberOfElevators);
            numberOfColumns = Math.ceil(numberTotalOfFloors / 20); // 2 = 40 / 20
                // console.log("numberOfColumns in formula is:", numberOfColumns);
            numberOfElevatorsPerColumn = Math.ceil(numberOfElevators / numberOfColumns);
                // console.log("numberOfElevators in formula is:", numberOfElevators);
                // console.log("numberOfColumns in formula is:", numberOfColumns);
                // console.log("numberOfElevatorsPerColumn in formula is:", numberOfElevatorsPerColumn);
            totalNumberOfElevators = numberOfElevatorsPerColumn * numberOfColumns;
                // console.log("numberOfColumns in formula is:", numberOfColumns);
                // console.log("numberOfElevatorsPerColumn in formula is:", numberOfElevatorsPerColumn);
                // console.log("totalNumberOfElevators in formula is:", totalNumberOfElevators);
            $("output[name=elevator-amount]").val(totalNumberOfElevators);
                // console.log("totalNumberOfElevators in field is:", totalNumberOfElevators);
            });        
    } if ($("#hybrid").is(":checked")) { // Done
        $("#number-of-companies").show();
        $("#number-of-floors").show();
        $("#number-of-basements").show();
        $("#number-of-parking-spots").show();
        $("#maximum-occupancy").show();
        $("#business-hours").show();
        $("#number-of-corporations").hide();
        $("#number-of-elevators").hide();
        $("#number-of-apartments").hide();
        $("input").keyup(function(){ // Hybrid Calculations : Done
            totalNumberOfOccupants = numberTotalOfFloors * numberOfCompanies;
                // console.log("numberOfCompanies in formula is:", numberOfCompanies);
                // console.log("numberTotalOfFloors in formula is:", numberTotalOfFloors);
                // console.log("totalNumberOfOccupants in formula is:", totalNumberOfOccupants);
            numberOfElevators = Math.ceil(totalNumberOfOccupants / 1000); // 6 = 6000 / 1000
                // console.log("numberOfElevators in formula is:", numberOfElevators);
            numberOfColumns = Math.ceil(numberTotalOfFloors / 20); // 2 = 40 / 20
                // console.log("numberOfColumns in formula is:", numberOfColumns);
            numberOfElevatorsPerColumn = Math.ceil(numberOfElevators / numberOfColumns);
                // console.log("numberOfElevators in formula is:", numberOfElevators);
                // console.log("numberOfColumns in formula is:", numberOfColumns);
                // console.log("numberOfElevatorsPerColumn in formula is:", numberOfElevatorsPerColumn);
            totalNumberOfElevators = numberOfElevatorsPerColumn * numberOfColumns;
                // console.log("numberOfColumns in formula is:", numberOfColumns);
                // console.log("numberOfElevatorsPerColumn in formula is:", numberOfElevatorsPerColumn);
                // console.log("totalNumberOfElevators in formula is:", totalNumberOfElevators);
            $("output[name=elevator-amount]").val(totalNumberOfElevators);
                // console.log("totalNumberOfElevators in field is:", totalNumberOfElevators);
            });        
    }});       
        })

     



// PRODUCTS LINE FUNCTIONS
$(function() { // Elevator Unit Price & Installation Fees
    var elevatorUnitPrice = 0;
    var elevatorAmount = 0;
    var elevatorTotalPrice = 0;
    var installationFeesPercentage = 0;
    var installationFees = 0;
    var finalPrice = 0;
    $("input[name='product-line-radio']").click(function() {
        if ($("#standard").is(":checked")) { // Done
            // $("output").keyup(function(){
                elevatorUnitPrice = 7565;
                $("output[name=elevator-unit-price]").val(elevatorUnitPrice);
                elevatorAmount = $("output[name=elevator-amount]").val();
                    // console.log("elevatorAmount in field is:", elevatorAmount);
                elevatorTotalPrice = elevatorUnitPrice * elevatorAmount;
                    // console.log("elevatorUnitPrice in field is:", elevatorUnitPrice);
                    // console.log("elevatorAmount in field is:", elevatorAmount);
                    // console.log("elevatorTotalPrice in field is:", elevatorTotalPrice);
                $("output[name=elevator-total-price]").val(elevatorTotalPrice);
                installationFeesPercentage = 0.1;
                installationFees = elevatorTotalPrice * installationFeesPercentage;
                    // console.log("installationFeesPercentage is:", installationFeesPercentage);
                    // console.log("elevatorTotalPrice in field is:", elevatorTotalPrice);
                    // console.log("installationFees in field is:", installationFees);
                $("output[name=installation-fees]").val(installationFees);
                finalPrice = +elevatorTotalPrice + +installationFees;
                    // console.log("elevatorTotalPrice is:", elevatorTotalPrice);
                    // console.log("installationFees in field is:", installationFees);
                    // console.log("finalPrice in field is:", finalPrice);
                $("output[name=final-price]").val(finalPrice);
            // });
    }   if ($("#premium").is(":checked")) { // Done
            // $("output").keyup(function(){
                elevatorUnitPrice = 12345;
                $("output[name=elevator-unit-price]").val(elevatorUnitPrice);
                elevatorAmount = $("output[name=elevator-amount]").val();
                    // console.log("elevatorAmount in field is:", elevatorAmount);
                elevatorTotalPrice = elevatorUnitPrice * elevatorAmount;
                    // console.log("elevatorUnitPrice in field is:", elevatorUnitPrice);
                    // console.log("elevatorAmount in field is:", elevatorAmount);
                    // console.log("elevatorTotalPrice in field is:", elevatorTotalPrice);
                $("output[name=elevator-total-price]").val(elevatorTotalPrice);
                installationFeesPercentage = 0.13;
                installationFees = elevatorTotalPrice * installationFeesPercentage;
                    // console.log("installationFeesPercentage is:", installationFeesPercentage);
                    // console.log("elevatorTotalPrice in field is:", elevatorTotalPrice);
                    // console.log("installationFees in field is:", installationFees);
                $("output[name=installation-fees]").val(installationFees);
                finalPrice = +elevatorTotalPrice + +installationFees;
                    // console.log("elevatorTotalPrice is:", elevatorTotalPrice);
                    // console.log("installationFees in field is:", installationFees);
                    // console.log("finalPrice in field is:", finalPrice);
                $("output[name=final-price]").val(finalPrice);
            // });    
    }   if ($("#excelium").is(":checked")) { // Done
            // $("output").keyup(function(){
                elevatorUnitPrice = 15400;
                $("output[name=elevator-unit-price]").val(elevatorUnitPrice);
                elevatorAmount = $("output[name=elevator-amount]").val();
                    // console.log("elevatorAmount in field is:", elevatorAmount);
                elevatorTotalPrice = elevatorUnitPrice * elevatorAmount;
                    // console.log("elevatorUnitPrice in field is:", elevatorUnitPrice);
                    // console.log("elevatorAmount in field is:", elevatorAmount);
                    // console.log("elevatorTotalPrice in field is:", elevatorTotalPrice);
                $("output[name=elevator-total-price]").val(elevatorTotalPrice);
                installationFeesPercentage = 0.16;
                installationFees = elevatorTotalPrice * installationFeesPercentage;
                    // console.log("installationFeesPercentage is:", installationFeesPercentage);
                    // console.log("elevatorTotalPrice in field is:", elevatorTotalPrice);
                    // console.log("installationFees in field is:", installationFees);
                $("output[name=installation-fees]").val(installationFees);
                finalPrice = +elevatorTotalPrice + +installationFees;
                    // console.log("elevatorTotalPrice is:", elevatorTotalPrice);
                    // console.log("installationFees in field is:", installationFees);
                    // console.log("finalPrice in field is:", finalPrice);
                $("output[name=final-price]").val(finalPrice);
            // });        
    }
    });
});