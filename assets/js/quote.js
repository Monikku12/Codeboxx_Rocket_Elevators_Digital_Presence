/**********************	QUOTE FORM **********************/



// BUILDING TYPES FUNCTIONS --------------------------------
$(function() { // ←←← Link Fields With Radio Buttons
    $("#step2").hide();
    $("#arrows").hide();
    $("#step3").hide();
    $("#step4").hide();
    $("#number-of-apartments").hide();
    $("#number-of-floors").hide();
    $("#number-of-basements").hide();
    $("#number-of-companies").hide();
    $("#number-of-parking-spots").hide();
    $("#number-of-elevators").hide();
    $("#number-of-corporations").hide();
    $("#maximum-occupancy").hide();
    $("#business-hours").hide();
    var numberOfApartments;
    var numberOfBasements;
    var numberOfCompanies;
    var numberOfCorporations;
    var numberOfElevators;
    var numberOfFloors;
    var numberTotalOfFloors;
    var totalNumberOfOccupants;
    var numberOfColumns;
    var numberOfElevatorsPerColumn;
    var totalNumberOfElevators;
    var averageOfApartmentsPerFloor;
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
        $("#step2").show();
        $("#arrows").show();
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
            $("#step3").show();
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
        $("input").keyup(function(){
            $("#step3").show();
            });
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
            $("#step3").show();
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
            $("#step3").show();
        });
    }
    // $("totalNumberOfElevators.val()").change(function() {
    //     $("#step3").show();
    // });
});
})

// PRODUCTS LINE FUNCTIONS
$("input").keyup(function(){
    $(function() { // Elevator Unit Price & Installation Fees
        $("output[name=elevator-amount]").css("background-color","#7FDBFF");
        $("output[name=elevator-unit-price]").css("background-color","#7FDBFF");
        $("output[name=elevator-total-price]").css("background-color","#7FDBFF");
        $("output[name=installation-fees]").css("background-color","#7FDBFF");
        $("output[name=final-price]").css("background-color","#7FDBFF");
        $("output[name=elevator-amount]").css("background-color","#7FDBFF",);
        var elevatorUnitPrice = 0;
        var elevatorAmount = 0;
        var elevatorTotalPrice = 0;
        var installationFeesPercentage = 0;
        var installationFees = 0;
        var finalPrice = 0;
        $("input[name='product-line-radio']").click(function() {
            $("#step4").show();
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