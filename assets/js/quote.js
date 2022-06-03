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
    });
    $("#number-of-floors").keyup(function(){
        numberOfFloors = $("input[name=number-of-floors]").val();
    });
    $("#number-of-basements").keyup(function(){
        numberOfBasements = $("input[name=number-of-basements]").val();
    });
    $("#number-of-companies").keyup(function(){
        numberOfCompanies = $("input[name=number-of-companies]").val();
    });
    $("#number-of-parking-spots").keyup(function(){
        numberOfParkingSpots = $("input[name=number-of-parking-spots]").val();
    });
    $("#number-of-elevators").keyup(function(){
        $("output[name=elevator-amount]").val($("input[name=number-of-elevators]").val());
    });
    $("#number-of-corporations").keyup(function(){
        numberOfCorporations = $("input[name=number-of-corporations]").val();
    });
    $("#maximum-occupancy").keyup(function(){
        maximumOccupancy = $("input[name=maximum-occupancy]").val();
    });
    $("#business-hours").keyup(function(){
        businessHours = $("input[name=business-hours]").val();
    });
    $("#number-of-basements").keyup(function(){
        numberTotalOfFloors = (+numberOfFloors + +numberOfBasements);
    });
    $("#number-of-floors").keyup(function(){
        numberTotalOfFloors = (+numberOfFloors + +numberOfBasements);
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
        $("input").keyup(function(){ // Residential Calculations
            averageOfApartmentsPerFloor = Math.ceil(numberOfApartments / numberOfFloors);
            numberOfElevators = Math.ceil(averageOfApartmentsPerFloor / 6);
            numberOfColumns = Math.ceil(numberOfFloors / 20);
            totalNumberOfElevators = Math.ceil(numberOfColumns * numberOfElevators);
            $("output[name=elevator-amount]").val(totalNumberOfElevators);
        });
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
        $("input").keyup(function(){ // Corporate Calculations
            totalNumberOfOccupants = numberTotalOfFloors * numberOfCorporations;
            numberOfElevators = Math.ceil(totalNumberOfOccupants / 1000);
            numberOfColumns = Math.ceil(numberTotalOfFloors / 20);
            numberOfElevatorsPerColumn = Math.ceil(numberOfElevators / numberOfColumns);
            totalNumberOfElevators = numberOfElevatorsPerColumn * numberOfColumns;
            $("output[name=elevator-amount]").val(totalNumberOfElevators);
            });
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
        $("input").keyup(function(){ // Hybrid Calculations
            totalNumberOfOccupants = numberTotalOfFloors * numberOfCompanies;
            numberOfElevators = Math.ceil(totalNumberOfOccupants / 1000);
            numberOfColumns = Math.ceil(numberTotalOfFloors / 20);
            numberOfElevatorsPerColumn = Math.ceil(numberOfElevators / numberOfColumns);
            totalNumberOfElevators = numberOfElevatorsPerColumn * numberOfColumns;
            $("output[name=elevator-amount]").val(totalNumberOfElevators);
        });
    }});
})

// PRODUCTS LINE FUNCTIONS
$("input").keyup(function(){
    $(function() { // Elevator Unit Price & Installation Fees
        var elevatorUnitPrice = 0;
        var elevatorAmount = 0;
        var elevatorTotalPrice = 0;
        var installationFeesPercentage = 0;
        var installationFees = 0;
        var finalPrice = 0;
        $("input[name='product-line-radio']").click(function() {
            if ($("#standard").is(":checked")) {
                    elevatorUnitPrice = 7565;
                    $("output[name=elevator-unit-price]").val(elevatorUnitPrice.toLocaleString("en-us",{minimumFractionDigits: 2, maximumFractionDigits: 2}) + " $");
                    elevatorAmount = $("output[name=elevator-amount]").val();
                    elevatorTotalPrice = elevatorUnitPrice * elevatorAmount;
                    $("output[name=elevator-total-price]").val(elevatorTotalPrice.toLocaleString("en-us",{minimumFractionDigits: 2, maximumFractionDigits: 2}) + " $");
                    installationFeesPercentage = 0.1;
                    installationFees = elevatorTotalPrice * installationFeesPercentage;
                    $("output[name=installation-fees]").val(installationFees.toLocaleString("en-us",{minimumFractionDigits: 2, maximumFractionDigits: 2}) + " $");
                    finalPrice = +elevatorTotalPrice + +installationFees;
                    $("output[name=final-price]").val(finalPrice.toLocaleString("en-us",{minimumFractionDigits: 2, maximumFractionDigits: 2}) + " $");
        }   if ($("#premium").is(":checked")) {
                    elevatorUnitPrice = 12345;
                    $("output[name=elevator-unit-price]").val(elevatorUnitPrice.toLocaleString("en-us",{minimumFractionDigits: 2, maximumFractionDigits: 2}) + " $");
                    elevatorAmount = $("output[name=elevator-amount]").val();
                    elevatorTotalPrice = elevatorUnitPrice * elevatorAmount;
                    $("output[name=elevator-total-price]").val(elevatorTotalPrice.toLocaleString("en-us",{minimumFractionDigits: 2, maximumFractionDigits: 2}) + " $");
                    installationFeesPercentage = 0.13;
                    installationFees = elevatorTotalPrice * installationFeesPercentage;
                    $("output[name=installation-fees]").val(installationFees.toLocaleString("en-us",{minimumFractionDigits: 2, maximumFractionDigits: 2}) + " $");
                    finalPrice = +elevatorTotalPrice + +installationFees;
                    $("output[name=final-price]").val(finalPrice.toLocaleString("en-us",{minimumFractionDigits: 2, maximumFractionDigits: 2}) + " $");
        }   if ($("#excelium").is(":checked")) {
                    elevatorUnitPrice = 15400;
                    $("output[name=elevator-unit-price]").val(elevatorUnitPrice.toLocaleString("en-us",{minimumFractionDigits: 2, maximumFractionDigits: 2}) + " $");
                        console.log("elevatorAmount in field is:", elevatorAmount);
                    elevatorTotalPrice = elevatorUnitPrice * elevatorAmount;
                    $("output[name=elevator-total-price]").val(elevatorTotalPrice.toLocaleString("en-us",{minimumFractionDigits: 2, maximumFractionDigits: 2}) + " $");
                    installationFeesPercentage = 0.16;
                    installationFees = elevatorTotalPrice * installationFeesPercentage;
                    $("output[name=installation-fees]").val(installationFees.toLocaleString("en-us",{minimumFractionDigits: 2, maximumFractionDigits: 2}) + " $");
                    finalPrice = +elevatorTotalPrice + +installationFees;
                    $("output[name=final-price]").val(finalPrice.toLocaleString("en-us",{minimumFractionDigits: 2, maximumFractionDigits: 2}) + " $");
        }
        });
    });
});

// DONE!! Have a nice weekend!  ＼(^_^)／　--------------