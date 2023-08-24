




let selectedOption = -1; // Initialize the selected option as -1 (no option selected)
let selectedDivCopy = null; // Track the duplicated div
let selectedSecondOption = -1; // Initialize the selected option as -1 (no option selected)
let selectedSecondDivCopy = null; // Track the duplicated div
let selectedFirstOption = -1; // Initialize the selected option as -1 (no option selected)
let selectedFirstDivCopy = null; // Track the duplicated div
var price = 0;






console.log('lml',selectedOption)
function selectSecondOption(optionId) {
  document.getElementById("floorSpanCheck").textContent = optionId  
  if (selectedSecondOption !== -1) {
    // If an option is already selected, remove the background color
    const selectedSecondElement = document.getElementsByClassName("selectedTwo")[0];
    selectedSecondElement.classList.remove("bg-gray-400");
    selectedSecondElement.classList.add("bg-gray-300");
    selectedSecondElement.classList.remove("selectedTwo");
    if (selectedSecondDivCopy) {
      selectedSecondDivCopy.remove();
      selectedSecondDivCopy = null;
    }
  }

  // Update the selected option and apply the background color
  selectedSecondOption = optionId;
  const selectedSecondElement =
    document.getElementsByClassName("grid-cols-2")[0].children[optionId];
  selectedSecondElement.classList.add("bg-gray-400");
  selectedSecondElement.classList.remove("bg-gray-300");
  selectedSecondElement.classList.add("selectedTwo");

  
  // Divide the contentDiv into two using grid
  const contentDiv = document.getElementById("rightDiv");
  contentDiv.style.display = "grid";
  contentDiv.style.gridTemplateColumns = "1fr 1fr 1fr";
  contentDiv.style.gap = "10px"; // Add gap between the grids



  // Duplicate the selected div and append it to the contentDiv
  const selectedDiv = document.getElementsByClassName("selectedTwo  ")[0];
  selectedSecondDivCopy = selectedDiv.cloneNode(true);
  selectedSecondDivCopy.classList.remove("bg-gray-400"); // Remove background color
  selectedSecondDivCopy.classList.add(
    "p-5",
    "border",
    "border-green-500",
    "rounded",
    "mt-4"
  ); // Add the classes

  // Update the image height and width
  const image = selectedSecondDivCopy.querySelector("img");
  image.classList.remove("max-w-[25px]"); // Remove the previous width class
  image.classList.add("h-50", "w-auto"); // Add the height and width classes

  contentDiv.appendChild(selectedSecondDivCopy);

   // Update range display when option is selected
   updateRangeValue(document.getElementById("myRange").value);


  // Save the selected option as JSON with IDs and names
  const options = ["Elevator", "StairCase"];
  const selectedOptionJson = JSON.stringify({
    id: optionId,
    name: options[optionId],
  });
  // console.log(selectedOptionJson);


   // Update the selected option and apply the green background color
   selectedSecondOption = optionId;
   console.log('doji',selectedOption)
      updateRangeValue(document.getElementById("myRange").value);

 
   const nextButtonFour = document.getElementById("tab-next-staircase");
   // Check if selectedOptionJson is not empty
     if (selectedSecondOption !=='' || selectedSecondOption !== 0) {
     nextButtonFour.style.display = "flex"; // Show the button

     const tab5 = document.getElementById("tab-5"); 
     console.log('tab5', tab5)
     tab5.classList.remove("disabled");
       
     } else {
       nextButtonFour.style.display = "none"; // Hide the button
     }



    

  // Check if StairCase is chosen and multiply rangeDisplay_1 with floor level
  // if (options[optionId] === "StairCase") {
  //   const floorValue = parseInt(document.getElementById("rangeFloor").textContent);
  //   const priceValue = parseFloat(document.getElementById("rangeDisplay_1").textContent.replace("$", ""));
  //   console.log('priceValue', priceValue)
  //   const totalPrice = floorValue * priceValue;
  //   console.log("StairCase is chosen. Total Price: $" + totalPrice.toFixed(2));
    
  //  // Update range display when option is selected
  //  document.getElementById("rangeDisplay_1").textContent =
  //   "$" + totalPrice.toFixed(2);

  // }
  // if (options[optionId] === "Elevator") {
  //   // const floorValue = parseInt(document.getElementById("rangeFloor").textContent);
  //   const priceValue = parseFloat(document.getElementById("rangeDisplay_1").textContent.replace("$", ""));
  //   console.log('priceValue', priceValue)
  //   // const totalPrice = floorValue * priceValue;
  //   console.log("StairCase is chosen. Total Price: $" + priceValue.toFixed(2));
    
  //  // Update range display when option is selected
  //  document.getElementById("rangeDisplay_1").textContent =
  //   "$" + totalPrice.toFixed(2);

  // }
  // updateRangeValue() 

}
function selectFirstOption(optionId){
  if (selectedOption !== -1) {
    // If an option is already selected, remove the green background color
    const selectedElement = document.getElementsByClassName("selected")[0];
    selectedElement.classList.remove("bg-gray-400");
    selectedElement.classList.add("bg-gray-300");
    selectedElement.classList.remove("selected");
    if (selectedDivCopyOne) {
      selectedDivCopyOne.remove();
      selectedDivCopyOne = null;
    }
  }
  // Update the selected option and apply the green background color
  selectedOption = optionId;
  const selectedElement =
    document.getElementsByClassName("md:grid-cols-3 ")[0].children[optionId];
  selectedElement.classList.add("bg-gray-400");
  selectedElement.classList.remove("bg-gray-300");
  selectedElement.classList.add("selected");

   // Divide the contentDiv into two using grid
   const contentDiv = document.getElementById("rightDiv");
   contentDiv.style.display = "grid";
   contentDiv.style.gridTemplateColumns = "1fr 1fr 1fr";
   contentDiv.style.gap = "10px"; // Add gap between the grids

   // Duplicate the selected div and append it to the contentDiv
  const selectedDivOne = document.getElementsByClassName("selected")[0];
  selectedDivCopyOne = selectedDivOne.cloneNode(true);
  selectedDivCopyOne.classList.remove("bg-gray-400"); // Remove background color
  selectedDivCopyOne.classList.add(
    "p-5",
    "border",
    "border-green-500",
    "rounded",
    "mt-4"
  ); // Add the classes

  // Update the image height and width
  const image = selectedDivCopyOne.querySelector("img");
  image.classList.remove("max-w-[25px]"); // Remove the previous width class
  image.classList.add("h-50", "w-auto"); // Add the height and width classes

  contentDiv.appendChild(selectedDivCopyOne);

  // Save the selected option as JSON with IDs and names
  const options = ["Normal", "Strong", "Extreme"];
  const selectedOptionJson = JSON.stringify({
    id: optionId,
    name: options[optionId],
  });
  console.log(selectedOptionJson);

 


  const nextButton = document.getElementById("nextButton");

  // Check if selectedOptionJson is not empty
  console.log('selectedOptionJson',selectedOptionJson)
  if (selectedOptionJson !=='' || selectedOptionJson !== null ) {
    nextButton.style.display = "flex"; // Show the button
    
    const tab2 = document.getElementById("tab-2"); // Use the ID to target Tab 2
    tab2.classList.remove("disabled");


  } else {
    nextButton.style.display = "none"; // Hide the button
  }
  // toggleButtonState(document.getElementById("nextButton"), document.querySelectorAll(".left-tab-tab-content.selected"));
}
function selectOption(optionId) {

  document.getElementById("conditionSpanCheck").textContent = optionId  
  if (selectedOption !== -1) {
    // If an option is already selected, remove the green background color
    const selectedElement = document.getElementsByClassName("selected")[0];
    selectedElement.classList.remove("bg-gray-400");
    selectedElement.classList.add("bg-gray-300");
    selectedElement.classList.remove("selected");
    if (selectedDivCopy) {
      selectedDivCopy.remove();
      selectedDivCopy = null;
    }
  } 
  const selectedElement =
    document.getElementsByClassName("grid-cols-3")[0].children[optionId];
  selectedElement.classList.add("bg-gray-400");
  selectedElement.classList.remove("bg-gray-300");
  selectedElement.classList.add("selected");

  // Divide the contentDiv into two using grid
  const contentDiv = document.getElementById("rightDiv");
  contentDiv.style.display = "grid";
  contentDiv.style.gridTemplateColumns = "1fr 1fr 1fr";
  contentDiv.style.gap = "10px"; // Add gap between the grids


   // Update range display when option is selected
   updateRangeValue(document.getElementById("myRange").value);

   // This function is for the right side of calculator Adding Price
   updateValues();


  //  come here
  // Duplicate the selected div and append it to the contentDiv
  const selectedDiv = document.getElementsByClassName("selected")[0];
  selectedDivCopy = selectedDiv.cloneNode(true);
  selectedDivCopy.classList.remove("bg-gray-400"); // Remove background color
  selectedDivCopy.classList.add(
    "p-5",
    "border",
    "border-green-500",
    "rounded",
    "mt-4"
  ); // Add the classes

  // Update the image height and width
  const image = selectedDivCopy.querySelector("img");
  image.classList.remove("max-w-[25px]"); // Remove the previous width class
  image.classList.add("h-50", "w-auto"); // Add the height and width classes

  contentDiv.appendChild(selectedDivCopy);

  const options = ["Normal", "Strong", "Extreme"];
  const selectedOptionJson = JSON.stringify({
    id: optionId,
    name: options[optionId],
  });


  // Update the condition rate display
  const conditionRateDisplay = document.getElementById("conditionRateDisplay");
  
  if (selectedOptionJson === '') {
    console.log()
    conditionRateDisplay.textContent = ""; // Clear the content
    
  } else {
    if (selectedOptionJson === 'Normal') {
      conditionRateDisplay.textContent = "Normal: x1.0";
    } else if (selectedOptionJson === 'Strong') {
      conditionRateDisplay.textContent = "Strong: x1.5";
    } else if (selectedOptionJson === 'Extreme') {
      conditionRateDisplay.textContent = "Extreme: x3.4";
    }
  }





  function updateConditionRateDisplay(optionId) {
    const options = ["Normal", "Strong", "Extreme"];
    const selectedOption = options[optionId];
    const conditionRateDisplay = document.getElementById("conditionRateDisplay");
    const conditionRateDisplayTwo = document.getElementById("ConditionRateDisplay_2");
    const priceDisplayForCondition = document.getElementById("pricePriceDisplay");
    // conditionRateDisplayThree displays the price with the multplication of 1.0 or 1.3 or 3.4
    let conditionRateDisplayThree = document.getElementById("ConditionRateDisplay_3");
  
    if (!selectedOption) {
      conditionRateDisplay.textContent = ""; // Clear the content
      conditionRateDisplayTwo.textContent = ""; // Clear the content
      conditionRateDisplayThree.textContent = ""; // Clear the content
    } else {
      if (selectedOption === "Normal") {
        conditionRateDisplay.textContent = "Normal ";
        conditionRateDisplayTwo.textContent = "Surface Area x1.0";
      // Remove the euro sign from the price text and convert it to a number
      const priceValue = parseFloat(priceDisplayForCondition.textContent.replace("€", ""));
      conditionRateDisplayThree.textContent = '€'+(priceValue * 1.0).toFixed(2);

      } else if (selectedOption === "Strong") {
        conditionRateDisplay.textContent = "Strong";
        conditionRateDisplayTwo.textContent = "Surface Area x1.3";
        const priceValue = parseFloat(priceDisplayForCondition.textContent.replace("€", ""));
      
        conditionRateDisplayThree.textContent = '€'+(priceValue * 1.3).toFixed(2) ;
        console.log('condition', conditionRateDisplayThree);
  
      } else if (selectedOption === "Extreme") {
        conditionRateDisplay.textContent = "Extreme";
        conditionRateDisplayTwo.textContent = "Surface Area x3.4";
        const priceValue = parseFloat(priceDisplayForCondition.textContent.replace("€", ""));
      
        conditionRateDisplayThree.textContent = '€'+(priceValue * 3.4).toFixed(2) ;
        console.log('condition', conditionRateDisplayThree);
  
      }
    }
  }
  
  // Call this function with the appropriate optionId whenever needed
  // For example, after selecting an option:
  updateConditionRateDisplay(optionId);

  



  
  
  const nextButtonThree = document.getElementById("next-btn-surface");
  // Check if selectedOptionJson is not empty
  if (selectedOptionJson ==='' || selectedOptionJson === 0) {
    nextButtonThree.style.display = "block"; // Show the button
  } else {
    nextButtonThree.style.display = "flex"; // Hide the button

    const tab4 = document.getElementById("tab-4"); 
    console.log('tab4', tab4)
    tab4.classList.remove("disabled");

  
  }

  // Get the "Next" button element
  
}  

function updateFloorValue(value) {

  document.getElementById("rangeFloor").textContent = value;
  const floorLevelDisplay = document.getElementById("floorLevelDisplay");
  floorLevelDisplay.textContent = value;


 
  // if (selectedSecondOption === 1) {
    // ... your existing code to calculate price based on the multiperss
    // Multiply the price with the multiperss
    // console.log('pricec',multiperss);
    // price *= multiperss;
    // localStorage.setItem("price", price);

    // Update range display when the option is selected
    updateRangeValue(document.getElementById("myRange").value);
}

// come here for updateRangeValue

function updateRangeValue(value) {
  document.getElementById("rangeDisplay").textContent = value;
  const rangeDisplay2 = document.getElementById("rangeDisplay_2");
  rangeDisplay2.innerHTML = `<span class="font-bold"> </span><span class="">${value}sqm</span>`;
  console.log(value);

  updateTotalPrice();

  // const priceRateDisplay = document.getElementById("rangeDisplay_2");

  const values = value;
  const nextButton = document.getElementById("tab-next-two");
  // Check if selectedOptionJson is not empty
  if (values ==='' || values === 50) {
    nextButton.style.display = "block"; // Show the button
  } else {
    nextButton.style.display = "flex"; // Hide the button
    const tab3 = document.getElementById("tab-3"); 
    console.log('tab3', tab3)
    tab3.classList.remove("disabled");
  }

  var multiplier = 1.0; // Default multiplier


  // Check the selected option and set the multiplier accordingly
  if (selectedOption === 0) {
    multiplier = 1.0;
    console.log('multiplier = 1.0')
  } else if (selectedOption === 1) {
    multiplier = 1.5;
    console.log('multiplier = 1.5')
  } else if (selectedOption === 2) {
    multiplier = 3.4;
    console.log('multiplier = 3.4')
  }

  // Calculate the price based on the value range and selected multiplier
  if (value >= 20 && value <= 29) {
    price = value * 24.5 * multiplier;
    console.log('value * 24.5 * multiplier')
    console.log('value',value)
    console.log('multiiplier',multiplier)
    console.log('price',price)
  } else if (value >= 30 && value <= 47) {
    price = value * 23 * multiplier;
    console.log('value * 23 * multiplier')
  } else if (value >= 48 && value <= 97) {
    price = value * 22 * multiplier;
    console.log('value * 22 * multiplier')    
  } else if (value >= 98 && value <= 297) {
    price = value * 20 * multiplier;
    console.log('value * 20 * multiplier')
  } else if (value >= 298 && value <= 300) {
    price = value * 19.5 * multiplier;
    console.log('value * 19.5 * multiplier')
  }


  // Determine the rate based on the selected value range
  let rate;
  if (value >= 20 && value <= 29) {
    rate = 24.5;
    console.log('rate',rate)
  } else if (value >= 30 && value <= 47) {
    rate = 23;
  } else if (value >= 48 && value <= 97) {
    rate = 22;
  } else if (value >= 98 && value <= 297) {
    rate = 20;
  } else if (value >= 298 && value <= 300) {
    rate = 19.5;
  }

  // Set the rate content in the priceRateDisplay element
  const priceRateDisplay = document.getElementById("priceRateDisplay");
  priceRateDisplay.textContent = `${rate}/m²`;




  // This function is for the right side of calculator Adding Price
  updateValues();


  const pricePriceDisplay = document.getElementById("pricePriceDisplay");
  pricePriceDisplay.textContent = " \u20AC"+ value * rate  ;



  // Multiply the price with the floor level if StairCase is chosen
  if (selectedSecondOption === 1) {
    const floorValue = parseInt(document.getElementById("rangeFloor").textContent);

    const floorRateDisplay = document.getElementById("floorLevelDisplay_2");

    let multiperss;
  let floorRateText;

  if (floorValue === 0) {
    multiperss = 1;
    floorRateText = "x1.0"; // Display rate for floor level 0
  } else if (floorValue === 1) {
    multiperss = 1.1;
    floorRateText = "x1.1"; // Display rate for floor level 1
  } else if (floorValue === 2) {
    multiperss = 1.2;
    floorRateText = "x1.2"; // Display rate for floor level 2
  } else if (floorValue === 3) {
    multiperss = 1.3;
    floorRateText = "x1.3"; // Display rate for floor level 3
  } else if (floorValue === 4) {
    multiperss = 1.4;
    floorRateText = "x1.4"; // Display rate for floor level 4
  } else if (floorValue === 5) {
    multiperss = 1.5;
    floorRateText = "x1.5"; // Display rate for floor level 5
  } else if (floorValue === 6) {
    multiperss = 1.6;
    floorRateText = "x1.6"; // Display rate for floor level 6
  } else if (floorValue >= 7 && floorValue <= 15) {
    multiperss = 1.7 + (floorValue - 7) * 0.1;
    floorRateText = "x" + multiperss.toFixed(1); // Display calculated rate
  } else if (floorValue === -1) {
    multiperss = 1.1;
    floorRateText = "x1.1"; // Display rate for specific condition
  } else if (floorValue === -2) {
    multiperss = 1.2;
    floorRateText = "x1.2"; // Display rate for specific condition
  } else {
    multiperss = 1.0; // Default value
    floorRateText = "x1.0"; // Default rate
  }
  
    // Update the floor rate display
    floorRateDisplay.textContent = floorRateText;
  
    const floorLevelDisplay2 = document.getElementById("floorLevelDisplay_2");
    floorLevelDisplay2.textContent = floorRateText; // Update the display for floor level 2


    
  // oijoijoijoi
  console.log('price&&',price);
  console.log('price&&',multiperss);
  
    price *= multiperss;
    
  }

  
  document.getElementById("rangeDisplay_1").textContent =
    "$" + price.toFixed(2);
}

function updateValues() {
  // Get the elements using document.getElementById
  const rangeDisplayElement = document.getElementById("rangeDisplay");
  const conditionSpanElement = document.getElementById("conditionSpanCheck");
  const floorSpanElement = document.getElementById("floorSpanCheck");
  const rangeFloorElement = document.getElementById("rangeFloor");
  const areaQuantityElement = document.getElementById("AreaQuantityy");
  const areaRateElement = document.getElementById("AreaRate");
  const areaPriceElement = document.getElementById("AreaPrice");
  const subTotalElement = document.getElementById("subTotalChootaWala");


// Update the floor elements with calculated values
const floorQuantityElement = document.getElementById("floorQuantity");
const floorRateElement = document.getElementById("floorRate");



  // Get the text content of the elements
  const rangeDisplayValue = parseFloat(rangeDisplayElement.textContent);
  const conditionValue = conditionSpanElement.textContent;
  const floorValue = floorSpanElement.textContent;
  const subTotal = subTotalElement.textContent;
  const rangeFloorValue = parseFloat(rangeFloorElement.textContent);

  const floorQuantity = floorQuantityElement.textContent;
  const floorRate = floorRateElement.textContent;




  // Set the quantity value
  areaQuantityElement.textContent = rangeDisplayValue.toString();

  // Perform calculations for Surface Area
  let areaRate = "";
  let areaPrice = "";

  if (rangeDisplayValue >= 20 && rangeDisplayValue <= 29) {
    areaRate = "€24.5/ sqm";
    areaPrice = (rangeDisplayValue * 24.5).toFixed(2);
    subTotalElement.textContent = areaPrice;
  updateTotalPrice();

  } else if (rangeDisplayValue >= 30 && rangeDisplayValue <= 47) {
    areaRate = "€23/ sqm";
    areaPrice = (rangeDisplayValue * 23).toFixed(2);
    subTotalElement.textContent = areaPrice;
  updateTotalPrice();

  } else if (rangeDisplayValue >= 48 && rangeDisplayValue <= 97) {
    areaRate = "€22/ sqm";
    areaPrice = (rangeDisplayValue * 22).toFixed(2);
    subTotalElement.textContent = areaPrice;
  updateTotalPrice();

  } else if (rangeDisplayValue >= 98 && rangeDisplayValue <= 297) {
    areaRate = "€20/ sqm";
    areaPrice = (rangeDisplayValue * 20).toFixed(2);
    subTotalElement.textContent = areaPrice;
  updateTotalPrice();

  } else if (rangeDisplayValue >= 298 && rangeDisplayValue <= 300) {
    areaRate = "€19.5/ sqm";
    areaPrice = (rangeDisplayValue * 19.5).toFixed(2);
    subTotalElement.textContent = areaPrice;
  updateTotalPrice();

  }

  



// -------------------------------------------Condition Start----------------------------------------------------------

 // Calculate condition values based on the provided information
 let conditionQuantity = "";
 let conditionRate = "";
 let conditionPrice = "";

 if (conditionValue === "0") {
   conditionQuantity = "Normal";
   conditionRate = "x1.0";
   conditionPrice = (areaPrice * 1.0).toFixed(2)- areaPrice;
   subTotalElement.textContent = parseFloat(conditionPrice)+parseFloat(areaPrice);
 } else if (conditionValue === "1") {
   conditionQuantity = "Strong";
   conditionRate = "x1.5";
   conditionPrice = (areaPrice * 1.5).toFixed(2)-areaPrice;
   subTotalElement.textContent = parseFloat(conditionPrice)+parseFloat(areaPrice);
 } else if (conditionValue === "2") {
   conditionQuantity = "Extreme";
   conditionRate = "x3.4";
   conditionPrice = (areaPrice * 3.4).toFixed(2)- areaPrice;
   subTotalElement.textContent = parseFloat(conditionPrice)+parseFloat(areaPrice);
 }

 // Update the condition elements with calculated values
 const conditionQuantityElement = document.getElementById("ConditionQuantity");
 const conditionRateElement = document.getElementById("ConditionRate");
 const conditionPriceElement = document.getElementById("ConditionPrice");

 conditionQuantityElement.textContent = conditionQuantity;
 conditionRateElement.textContent = conditionRate;
 conditionPriceElement.textContent = conditionPrice;


 updateTotalPrice();


// ------------------------------------------Condition End---------------------------------------------------------------------

// ------------------------------------------Floor Start---------------------------------------------------------------------

const floorPriceElement = document.getElementById("floorPrice");
const floorPrice = floorPriceElement.textContent;


if (floorValue === "1") {
  const rangeFloorElement = document.getElementById("rangeFloor");
  const selectedFloorLevel = parseInt(rangeFloorElement.textContent);

  if (!isNaN(selectedFloorLevel)) {
    floorQuantityElement.textContent = selectedFloorLevel;

    let floorRate;
    switch (selectedFloorLevel) {
      case 1:
        floorRate = 1.1;
        break;
      case 2:
        floorRate = 1.2;
        break;
      case 3:
        floorRate = 1.3;
        break;
      case 4:
        floorRate = 1.4;
        break;
      case 5:
        floorRate = 1.5;
        break;
      case 6:
        floorRate = 1.6;
        break;
      case 7:
        floorRate = 1.7;
        break;
      case 8:
        floorRate = 1.8;
        break;
      case 9:
        floorRate = 1.9;
        break;
      case 10:
          floorRate = 2.0;
          break;
      case 11:
        floorRate = 2.1;
        break;
      case 12:
        floorRate = 2.2;
        break;
      case 13:
        floorRate = 2.3;
        break;
      case 14:
        floorRate = 2.4;
        break;
      case 15:
        floorRate = 2.5
        break;
        
      default:
        floorRate = 1.0; // Default multiplier
        break;
    }

    // Calculate floorPrice using floorRate, conditionRate, and areaPrice
const numericConditionRate = parseFloat(conditionRate.replace("x", ""));
const floorPrice = floorRate * numericConditionRate * areaPrice - numericConditionRate * areaPrice;

// Extract numeric values from strings
const areaPriceNumeric = parseFloat(areaPrice);
const conditionPriceNumeric = parseFloat(conditionPrice);
const floorPriceNumeric = parseFloat(floorPrice);

// Calculate the total price
const totalPrice = floorPriceNumeric + areaPriceNumeric + conditionPriceNumeric;

// Update the subTotalElement
subTotalElement.textContent = totalPrice.toFixed(2);

// Set the floor rate and price elements
floorRateElement.textContent = floorRate.toFixed(2);
floorPriceElement.textContent = floorPrice.toFixed(2);

updateTotalPrice();


  } else {
    // Reset floor elements if floor level is not chosen
    floorQuantityElement.textContent = "0";
    floorRateElement.textContent = "0";
    floorPriceElement.textContent = "0";


  }
} else {
  // Reset floor elements if stair case is not chosen
  floorQuantityElement.textContent = "...";
  floorRateElement.textContent = "...";
  floorPriceElement.textContent = "0";
  // subTotalElement.textContent = conditionPrice;

}



// ------------------------------------------Floor End---------------------------------------------------------------------


  // Update the elements with calculated values
  areaRateElement.textContent = areaRate;
  areaPriceElement.textContent = areaPrice;

  // Now you have the values, you can use them as needed
  // console.log("SSF Surface Area:", rangeDisplayValue);
  // console.log("SSF Condition:", conditionValue);
  // console.log(" SSF Floor:", floorValue);
  // console.log("SSF Floor Level:", rangeFloorValue);
  // console.log("Area Quantity:", rangeDisplayValue);
  // console.log("Area Rate:", areaRate);
  // console.log("Area Price:", areaPrice);
}





// Call the function to update the values




// -------------------This Function toggles disabled button to enable and viceversa ------------------------
// function toggleButtonState(button, selectedElements) {
//   console.log('selectedElements',selectedElements.length)
//   if (selectedElements.length > 0) {
//     button.disabled = false;
//   } else {
//     button.disabled = true;
//   }
// }
// --------------------------------This Function toggles disabled button to enable and viceversa-------------------------------







// ===============> This part is Do you need additonal service <===================




// ----------------------------- This is tab 1 --------------------------------------------------->

let selectedCeilingCovering = -1;
let quantityTabOne = 0;
const optionsTabOne = [
  { name: "Remove Styrofoam", price: "5.95" },
  { name: "Wood / Panels", price: "17.85" },
  { name: "Wallpaper / ingrain", price: "14.28" },
  { name: "Wallpaper/ingrain fiber (multi-layered)", price: "17.85" },
];
const selectedOptionsTabOne = [];

function selectCeilingCovering(optionId) {
  // Remove background color from all boxes
  const boxElements = document.querySelectorAll(".box");
  boxElements.forEach((box) => {
    box.classList.remove("bg-gray-100");
    box.classList.remove("selected");
  });

  // Apply background color to the selected box
  const selectedElement = document.querySelectorAll(".box")[optionId];
  selectedElement.classList.add("bg-gray-100");
  selectedElement.classList.add("selected");

  selectedCeilingCovering = optionId; // Update the selected option

  // Show the div when an option is selected
  document.getElementById("labelsDiv").style.display = "flex";

  updatePriceLabel(optionId);
}

function updatePriceLabel(optionId) {
  const priceLabel = document.getElementById("price-label");
  const selectedOption = optionsTabOne[optionId];

  const customPriceInput = document.getElementById("custom-price");
  quantityTabOne = parseInt(customPriceInput.value) || 0;
  const pricePerSquareMeter = parseFloat(selectedOption.price.replace(" €", "").replace(",", "."));
  const totalPrice = pricePerSquareMeter * quantityTabOne;

  // Create a flex container element for price and option name
  const flexContainer = document.createElement("div");
  flexContainer.classList.add("contents");

  // Create elements for price and option name
  const priceElement = document.createElement("span");
  priceElement.textContent = " " + selectedOption.price;

  const optionNameElement = document.createElement("span");
  optionNameElement.textContent = ' ( ' + selectedOption.name + ')';

  // Add classes to style the elements as needed
  priceElement.classList.add("mr-2");
  optionNameElement.classList.add("text-xs", "text-gray-500");

  // Append elements to the flex container in the desired order
  flexContainer.appendChild(priceElement);
  flexContainer.appendChild(optionNameElement);

  // Update the priceLabel with the flex container element
  priceLabel.textContent = "";
  priceLabel.appendChild(flexContainer);
}



function changeColor() {
  console.log('sc')
  const tab2 = document.getElementById("tab-2");
  tab2.classList.add("active-tab");
}

function changeColorTabThree() {
  console.log('changeColorTabThree')
  const tab3 = document.getElementById("tab-3");
  tab3.classList.add("active-tab");
}

function changeColorTabFour() {
  console.log('changeColorTabFour')
  const tab4 = document.getElementById("tab-4");
  tab4.classList.add("active-tab");
}

function changeColorTabFive() {
  console.log('changeColorTabFive')
  const tab5 = document.getElementById("tab-5");
  tab5.classList.add("active-tab");
}
function addInfoAndContinueTwo() {
  const customPriceInput = document.getElementById("custom-price");
  quantityTabOne = parseInt(customPriceInput.value) || 0;

  const selectedOption = optionsTabOne[selectedCeilingCovering];
  const pricePerSquareMeter = parseFloat(selectedOption.price.replace(" €", "").replace(",", "."));

  const optionExists = selectedOptionsTabOne.some((option) => option.optionId === selectedCeilingCovering);

  if (!optionExists) {

    const pricePerSquareMeter = parseFloat(selectedOption.price.replace(" €", "").replace(",", "."));
    const totalPrice = pricePerSquareMeter * quantityTabOne;

    const totalPriceTabOne = pricePerSquareMeter * quantityTabOne;

    const priceInfoDiv = document.createElement("div");
    priceInfoDiv.classList.add("pl-5");
    priceInfoDiv.setAttribute("data-option-id-1", selectedCeilingCovering);

    // Create and configure <p> elements for Name, Quantity, and Price
    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = selectedOption.name;
    nameParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "max-w-50", "min-w-30");

    const quantityParagraph = document.createElement("p");
    quantityParagraph.textContent = quantityTabOne;
    quantityParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");

    const priceParagraph = document.createElement("p");
    priceParagraph.textContent = "€ " + totalPriceTabOne.toFixed(2) ;
    priceParagraph.classList.add("text-xs", "text-gray-500", "mr-2", "min-w-60");

    
    const rateParagraph = document.createElement("p");
    rateParagraph.textContent = pricePerSquareMeter+"/m²";
    rateParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");

    const priceInfoContainer = document.createElement("div");
    priceInfoContainer.classList.add("flex-2");
    priceInfoContainer.appendChild(nameParagraph);
    priceInfoContainer.appendChild(quantityParagraph);
    priceInfoContainer.appendChild(rateParagraph);
    priceInfoContainer.appendChild(priceParagraph);

    priceInfoDiv.appendChild(priceInfoContainer);

    const targetContainerDiv = document.querySelector(".target-container"); // Change this selector to match tab 1
    targetContainerDiv.appendChild(priceInfoDiv);

    selectedOptionsTabOne.push({ optionId: selectedCeilingCovering, totalPrice: totalPriceTabOne });

    // Apply the tick mark to the selected option
    const selectedElement = document.getElementsByClassName("box")[selectedCeilingCovering];
    const tickElement = selectedElement.querySelector(".tick");
    if (tickElement) {
      tickElement.style.display = "inline";
    }

    console.log("Total Price: " +" € " +totalPriceTabOne.toFixed(2) );
        // Recalculate and display the total price
        calculateAndDisplayTotalPrice();
  } else {
    // If option exists, update the price in the existing paragraph
    const existingPriceInfoDiv = document.querySelector(`[data-option-id-1="${selectedCeilingCovering}"]`);

    if (existingPriceInfoDiv) {
      const existingPriceInfoContainer = existingPriceInfoDiv.querySelector(".flex-2");

      // Create and configure <p> elements for Name, Quantity, and Price
      const nameParagraph = document.createElement("p");
      nameParagraph.textContent = selectedOption.name;
      nameParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "max-w-50", "min-w-30");
  
      const quantityParagraph = document.createElement("p");
      quantityParagraph.textContent = quantityTabOne;
      quantityParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");
  
      const priceParagraph = document.createElement("p");
      const totalPrice = pricePerSquareMeter * quantityTabOne;
      priceParagraph.textContent = "€ "+totalPrice.toFixed(2) ;
      priceParagraph.classList.add("text-xs", "text-gray-500", "mr-2","min-w-60");


      
    const rateParagraph = document.createElement("p");
    rateParagraph.textContent = pricePerSquareMeter+"/m²";
    rateParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");
  
      existingPriceInfoContainer.innerHTML = ''; // Clear existing content
      existingPriceInfoContainer.appendChild(nameParagraph);
      existingPriceInfoContainer.appendChild(quantityParagraph);
      existingPriceInfoContainer.appendChild(rateParagraph);
      existingPriceInfoContainer.appendChild(priceParagraph);
  
      // Update the price in the selectedOptions array as well
      const optionIndex = selectedOptionsTabOne.findIndex((option) => option.optionId === selectedCeilingCovering);
      if (optionIndex !== -1) {
        selectedOptionsTabOne[optionIndex].totalPrice = totalPrice;
      }
  
      console.log("Updated Total Price: " + "€ " + totalPrice.toFixed(2) );
          // Recalculate and display the total price
    calculateAndDisplayTotalPrice();
    }
  }
}

function removeSelectedOptionFromFirstOne() {
  const targetContainerDiv = document.querySelector(".target-container");
  const divToRemove = targetContainerDiv.querySelector(`[data-option-id-1="${selectedCeilingCovering}"]`);

  if (divToRemove) {
    targetContainerDiv.removeChild(divToRemove);

    // Hide the tick mark on the deselected option
    const selectedElement = document.querySelectorAll(".box")[selectedCeilingCovering];
    const tickElement = selectedElement.querySelector(".tick");
    if (tickElement) {
      tickElement.style.display = "none";
    }

    const indexToRemove = selectedOptionsTabOne.findIndex((option) => option.optionId === selectedCeilingCovering);
    if (indexToRemove !== -1) {
      selectedOptionsTabOne.splice(indexToRemove, 1);
    }

    // Recalculate and display the total price
    calculateAndDisplayTotalPrice();
  }
}

function applyTicksToSelectedOptionsTabOne() {
  const allBoxes = document.getElementsByClassName("box");

  // Hide the tick on all options
  for (const box of allBoxes) {
    box.querySelector(".tick").style.display = "none";
  }

  // Show the tick on selected options in the selectedOptionsTabOne array
  for (const selectedOption of selectedOptionsTabOne) {
    const optionId = selectedOption.optionId;
    const selectedElement = document.getElementsByClassName("box")[optionId];
    const tickElement = selectedElement.querySelector(".tick");
    if (tickElement) {
      tickElement.style.display = "inline";
    }
  }
}

// Call this function to apply the tick mark to the selected options when the page loads
applyTicksToSelectedOptionsTabOne();



// <================================================Tab 1 Ended========================================================================>



// <====================================================Tab 2 Started =================================================================>

let selectedHandoverCovering = -1;
let quantityTabTwo = 0;
const optionsTabTwo = [
  { name: "Handover service to landlord", price: "250.00" },
];
const selectedOptionsTabTwo = [];

function selectHandoverCovering(optionId) {
  // Remove background color from all boxes
  const boxElements = document.getElementsByClassName("box-2");
  for (let i = 0; i < boxElements.length; i++) {
    boxElements[i].classList.remove("bg-gray-100");
    boxElements[i].classList.remove("selected");
  }

  // Apply background color to the selected box
  const selectedElement = document.getElementsByClassName("box-2")[optionId];
  selectedElement.classList.add("bg-gray-100");
  selectedElement.classList.add("selected");

  selectedHandoverCovering = optionId; // Update the selected option

  // Show the div when an option is selected
  document.getElementById("labelsDivTabTwo").style.display = "flex";

  updatePriceLabelTabTwo(optionId);
}

function updatePriceLabelTabTwo(optionId) {
  const priceLabel = document.getElementById("price-labelTabTwo");
  const selectedOption = optionsTabTwo[optionId];

  const customPriceInput = document.getElementById("custom-priceTabTwo");
  quantityTabTwo = parseInt(customPriceInput.value) || 0;
  const pricePerService = parseFloat(selectedOption.price.replace("", "").replace("", ""));
  const totalPrice = pricePerService * quantityTabTwo;

  // Create a flex container element
  const flexContainer = document.createElement("div");
  flexContainer.classList.add("contents");

  // Create elements for price, separator, total price, and option name
  const priceElement = document.createElement("span");
  priceElement.textContent = " " + selectedOption.price;

  const separatorElement = document.createElement("span");
  separatorElement.textContent = "";

  const totalPriceElement = document.createElement("span");
  totalPriceElement.textContent =   "€ "+totalPrice.toFixed(2);

  const optionNameElement = document.createElement("span");
  optionNameElement.textContent = ' ( ' + selectedOption.name + ')';

  // Add classes to style the elements as needed (tailwind classes in this case)
  priceElement.classList.add("mr-2"); // Add right margin to separate price from separator
  separatorElement.classList.add("mx-2"); // Add horizontal margin around the separator
  totalPriceElement.classList.add("mr-2"); // Add right margin to separate total price from option name

  // Append all elements to the flex container in the desired order
  flexContainer.appendChild(priceElement);
  flexContainer.appendChild(separatorElement);
  flexContainer.appendChild(totalPriceElement);
  flexContainer.appendChild(optionNameElement);

  // Update the priceLabel with the flex container element
  priceLabel.textContent = "";
  priceLabel.appendChild(flexContainer);
}

function addInfoAndContinueTwoTabTwo() {
  const customPriceInput = document.getElementById("custom-priceTabTwo");
  quantityTabTwo = parseInt(customPriceInput.value) || 0;

  const selectedOption = optionsTabTwo[selectedHandoverCovering];
  const optionExists = selectedOptionsTabTwo.some((option) => option.optionId === selectedHandoverCovering);

  if (!optionExists) {
    const pricePerService = parseFloat(selectedOption.price.replace(" €", "").replace(",", "."));
    const totalPrice = pricePerService * quantityTabTwo;

    const priceInfoDiv = document.createElement("div");
    priceInfoDiv.classList.add("pl-5");
    priceInfoDiv.setAttribute("data-option-id-2", selectedHandoverCovering);

    // Create and configure <p> elements for Name, Quantity, and Price
    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = selectedOption.name;
    nameParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "max-w-50", "min-w-30");

    const quantityParagraph = document.createElement("p");
    quantityParagraph.textContent = quantityTabTwo;
    quantityParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");

    const priceParagraph = document.createElement("p");
    const totalPriceTabTwo = pricePerService * quantityTabTwo;
    priceParagraph.textContent = "€ "+totalPriceTabTwo.toFixed(2) ;
    priceParagraph.classList.add("text-xs", "text-gray-500", "mr-2", "min-w-60");


    const rateParagraph = document.createElement("p");
    rateParagraph.textContent = pricePerService+"/m²";
    rateParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");

    const priceInfoContainer = document.createElement("div");
    priceInfoContainer.classList.add("flex-2");
    priceInfoContainer.appendChild(nameParagraph);
    priceInfoContainer.appendChild(quantityParagraph);
    priceInfoContainer.appendChild(rateParagraph);
    priceInfoContainer.appendChild(priceParagraph);

    priceInfoDiv.appendChild(priceInfoContainer);

    const targetContainerDiv = document.querySelector(".target-container"); // Change this selector to match tab 2
    targetContainerDiv.appendChild(priceInfoDiv);

    selectedOptionsTabTwo.push({ optionId: selectedHandoverCovering, totalPrice: totalPriceTabTwo });

    // Apply the tick mark to the selected option
    const selectedElement = document.getElementsByClassName("box-2")[selectedHandoverCovering];
    const tickElement = selectedElement.querySelector(".tick-2");
    if (tickElement) {
      tickElement.style.display = "inline";
    }

    console.log("Total Price: " +  " € "+totalPriceTabTwo.toFixed(2) );
      // Recalculate and display the total price
      calculateAndDisplayTotalPrice();
  } else {
    // If option exists, update the price in the existing paragraph
    const existingPriceInfoDiv = document.querySelector(`[data-option-id-2="${selectedHandoverCovering}"]`);

    if (existingPriceInfoDiv) {
      const existingPriceInfoContainer = existingPriceInfoDiv.querySelector(".flex-2");
      const pricePerService = parseFloat(selectedOption.price.replace(" €", "").replace(",", "."));

      // Create and configure <p> elements for Name, Quantity, and Price
      const nameParagraph = document.createElement("p");
      nameParagraph.textContent = selectedOption.name;
      nameParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "max-w-50", "min-w-30");
  
      const quantityParagraph = document.createElement("p");
      quantityParagraph.textContent = quantityTabTwo;
      quantityParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");
  
      const priceParagraph = document.createElement("p");
      const totalPrice = pricePerService * quantityTabTwo;
      priceParagraph.textContent = "€ "+totalPrice.toFixed(2) ;
      priceParagraph.classList.add("text-xs", "text-gray-500", "mr-2","min-w-60");

      const rateParagraph = document.createElement("p");
      rateParagraph.textContent = pricePerService+"/m²";
      rateParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");
  
      existingPriceInfoContainer.innerHTML = ''; // Clear existing content
      existingPriceInfoContainer.appendChild(nameParagraph);
      existingPriceInfoContainer.appendChild(quantityParagraph);
      existingPriceInfoContainer.appendChild(rateParagraph);    
      existingPriceInfoContainer.appendChild(priceParagraph);
  
      // Update the price in the selectedOptions array as well
      const optionIndex = selectedOptionsTabTwo.findIndex((option) => option.optionId === selectedHandoverCovering);
      if (optionIndex !== -1) {
        selectedOptionsTabTwo[optionIndex].totalPrice = totalPrice;
      }
  
      console.log("Updated Total Price: " +  " € "+ totalPrice.toFixed(2) );
      // Recalculate and display the total price
      calculateAndDisplayTotalPrice();
    }
  }
}

function removeSelectedOptionFromTabTwo() {
  const targetContainerDiv = document.querySelector(".target-container");
  const divToRemove = targetContainerDiv.querySelector(`[data-option-id-2="${selectedHandoverCovering}"]`);

  if (divToRemove) {
    targetContainerDiv.removeChild(divToRemove);

    // Hide the tick mark on the deselected option
    const selectedElement = document.getElementsByClassName("box-2")[selectedHandoverCovering];
    const tickElement = selectedElement.querySelector(".tick-2");
    if (tickElement) {
      tickElement.style.display = "none";
    }

    const indexToRemove = selectedOptionsTabTwo.findIndex((option) => option.optionId === selectedHandoverCovering);
    if (indexToRemove !== -1) {
      selectedOptionsTabTwo.splice(indexToRemove, 1);
    }
  }
  // Recalculate and display the total price
  calculateAndDisplayTotalPrice();
}

// Function to apply the tick mark to the selected options
function applyTicksToSelectedOptionsTabTwo() {
  const allBoxes = document.getElementsByClassName("box-2");

  // Hide the tick on all options
  for (const box of allBoxes) {
    box.querySelector(".tick-2").style.display = "none";
  }

  // Show the tick on selected options in the selectedOptions array
  for (const selectedOption of selectedOptionsTabTwo) {
    const optionId = selectedOption.optionId;
    const selectedElement = document.getElementsByClassName("box-2")[optionId];
    const tickElement = selectedElement.querySelector(".tick-2");
    if (tickElement) {
      tickElement.style.display = "inline";
    }
  }
}

// Call this function to apply the ticks when the page loads
applyTicksToSelectedOptionsTabTwo();

// <====================================================Tab 2 Ended  =================================================================>



// <====================================================Tab 4 Started =================================================================>

let selectedFLoorCovering = -1;
let quantityTabFour = 0;
const optionsTabFour = [
  { name: "Ground, Glued", price: "20.23" },
  { name: "Carpet / PVC loose", price: "5.95" },
  { name: "Laminate/parquet (loose)", price: "5.95" },
];
const selectedOptionsTabFour = [];

function selectFloorCovering(optionId) {
  // Remove background color from all boxes
  const boxElements = document.getElementsByClassName("box-4");
  for (let i = 0; i < boxElements.length; i++) {
    boxElements[i].classList.remove("bg-gray-100");
    boxElements[i].classList.remove("selected");
  }

  // Apply background color to the selected box
  const selectedElement = document.getElementsByClassName("box-4")[optionId];
  selectedElement.classList.add("bg-gray-100");
  selectedElement.classList.add("selected");

  selectedFLoorCovering = optionId; // Update the selected option

  // Show the div when an option is selected
  document.getElementById("labelsDivTabFour").style.display = "flex";

  updatePriceLabelTabFour(optionId);
}

function updatePriceLabelTabFour(optionId) {
  const priceLabel = document.getElementById("price-labelTabFour");
  const selectedOption = optionsTabFour[optionId];

  const customPriceInput = document.getElementById("custom-priceTabFour");
  quantityTabFour = parseInt(customPriceInput.value) || 0;
  const pricePerSquareMeter = parseFloat(selectedOption.price.replace(" €/m²", "").replace(",", "."));
  const totalPrice = pricePerSquareMeter * quantityTabFour;

  // Create a flex container element
  const flexContainer = document.createElement("div");
  flexContainer.classList.add("contents");

  // Create elements for price, separator, total price, and option name
  const priceElement = document.createElement("span");
  priceElement.textContent = " " + selectedOption.price + " /m²";

  const separatorElement = document.createElement("span");
  separatorElement.textContent = "";

  const totalPriceElement = document.createElement("span");
  totalPriceElement.textContent =  " € "+totalPrice.toFixed(2) ;

  const optionNameElement = document.createElement("span");
  optionNameElement.textContent = ' ( ' + selectedOption.name + ')';

  // Add classes to style the elements as needed (tailwind classes in this case)
  priceElement.classList.add("mr-2"); // Add right margin to separate price from separator
  separatorElement.classList.add("mx-2"); // Add horizontal margin around the separator
  totalPriceElement.classList.add("mr-2"); // Add right margin to separate total price from option name

  // Append all elements to the flex container in the desired order
  flexContainer.appendChild(priceElement);
  flexContainer.appendChild(separatorElement);
  flexContainer.appendChild(totalPriceElement);
  flexContainer.appendChild(optionNameElement);

  // Update the priceLabel with the flex container element
  priceLabel.textContent = "";
  priceLabel.appendChild(flexContainer);
}

function addInfoAndContinueTwoTabFour() {
  const customPriceInput = document.getElementById("custom-priceTabFour");
  quantityTabFour = parseInt(customPriceInput.value) || 0;

  const selectedOption = optionsTabFour[selectedFLoorCovering];
  const optionExists = selectedOptionsTabFour.some((option) => option.optionId === selectedFLoorCovering);

  if (!optionExists) {
    const pricePerSquareMeter = parseFloat(selectedOption.price.replace(" €/m²", "").replace(",", "."));
    const totalPrice = pricePerSquareMeter * quantityTabFour;

    const priceInfoDiv = document.createElement("div");
    priceInfoDiv.classList.add("pl-5");
    priceInfoDiv.setAttribute("data-option-id-4", selectedFLoorCovering);

    // Create and configure <p> elements for Name, Quantity, and Price
    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = selectedOption.name;
    nameParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "max-w-50", "min-w-30");

    const quantityParagraph = document.createElement("p");
    quantityParagraph.textContent = quantityTabFour;
    quantityParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");

    const priceParagraph = document.createElement("p");
    const pricePerSquareMeterTabFour = parseFloat(selectedOption.price.replace(" €/m²", "").replace(",", "."));
    const totalPriceTabFour = pricePerSquareMeterTabFour * quantityTabFour;
    priceParagraph.textContent = totalPriceTabFour.toFixed(2) ;
    priceParagraph.classList.add("text-xs", "text-gray-500", "mr-2", "min-w-60");

    const rateParagraph = document.createElement("p");
    rateParagraph.textContent = pricePerSquareMeter+"/m²";
    rateParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");

    const priceInfoContainer = document.createElement("div");
    priceInfoContainer.classList.add("flex-4");
    priceInfoContainer.appendChild(nameParagraph);
    priceInfoContainer.appendChild(quantityParagraph);
    priceInfoContainer.appendChild(rateParagraph);
    priceInfoContainer.appendChild(priceParagraph);

    priceInfoDiv.appendChild(priceInfoContainer);

    const targetContainerDiv = document.querySelector(".target-container"); // Change this selector to match tab 4
    targetContainerDiv.appendChild(priceInfoDiv);

    selectedOptionsTabFour.push({ optionId: selectedFLoorCovering, totalPrice: totalPriceTabFour });

    // Apply the tick mark to the selected option
    const selectedElement = document.getElementsByClassName("box-4")[selectedFLoorCovering];
    console.log('cj',selectedElement)
    const tickElement = selectedElement.querySelector(".tick-4");
    if (tickElement) {
      tickElement.style.display = "inline";
    }

    console.log("Total Price: " + " € "+ totalPriceTabFour.toFixed(2) );
    // Recalculate and display the total price
    calculateAndDisplayTotalPrice();
  } else {
    // If option exists, update the price in the existing paragraph
    const existingPriceInfoDiv = document.querySelector(`[data-option-id-4="${selectedFLoorCovering}"]`);

    if (existingPriceInfoDiv) {
      const existingPriceInfoContainer = existingPriceInfoDiv.querySelector(".flex-4");

      // Create and configure <p> elements for Name, Quantity, and Price
      const nameParagraph = document.createElement("p");
      nameParagraph.textContent = selectedOption.name;
      nameParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "max-w-50", "min-w-30");
  
      const quantityParagraph = document.createElement("p");
      quantityParagraph.textContent =  quantityTabFour;
      quantityParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");
  
      const priceParagraph = document.createElement("p");
      const pricePerSquareMeter = parseFloat(selectedOption.price.replace(" €/m²", "").replace(",", "."));
      const totalPrice = pricePerSquareMeter * quantityTabFour;
      priceParagraph.textContent = "€ "+totalPrice.toFixed(2) ;
      priceParagraph.classList.add("text-xs", "text-gray-500", "mr-2","min-w-60");

      const rateParagraph = document.createElement("p");
      rateParagraph.textContent = pricePerSquareMeter+"/m²";
      rateParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");
  
      existingPriceInfoContainer.innerHTML = ''; // Clear existing content
      existingPriceInfoContainer.appendChild(nameParagraph);
      existingPriceInfoContainer.appendChild(quantityParagraph);
      existingPriceInfoContainer.appendChild(rateParagraph);
      existingPriceInfoContainer.appendChild(priceParagraph);
  
      // Update the price in the selectedOptions array as well
      const optionIndex = selectedOptionsTabFour.findIndex((option) => option.optionId === selectedFLoorCovering);
      if (optionIndex !== -1) {
        selectedOptionsTabFour[optionIndex].totalPrice = totalPrice;
      }
  
      console.log("Updated Total Price: " + "€ "+totalPrice.toFixed(2) );
      // Recalculate and display the total price
      calculateAndDisplayTotalPrice();
    }
  }
}

function removeSelectedOptionFromTabFour() {
  const targetContainerDiv = document.querySelector(".target-container");
  const divToRemove = targetContainerDiv.querySelector(`[data-option-id-4="${selectedFLoorCovering}"]`);

  if (divToRemove) {
    targetContainerDiv.removeChild(divToRemove);

    // Hide the tick mark on the deselected option
    const selectedElement = document.getElementsByClassName("box-4")[selectedFLoorCovering];
    const tickElement = selectedElement.querySelector(".tick-4");
    if (tickElement) {
      tickElement.style.display = "none";
    }

    const indexToRemove = selectedOptionsTabFour.findIndex((option) => option.optionId === selectedFLoorCovering);
    if (indexToRemove !== -1) {
      selectedOptionsTabFour.splice(indexToRemove, 1);
    }
  }
  // Recalculate and display the total price
  calculateAndDisplayTotalPrice();
}

// Function to apply the tick mark to the selected options
function applyTicksToSelectedOptionsTabFour() {
  const allBoxes = document.getElementsByClassName("box-4");

  // Hide the tick on all options
  for (const box of allBoxes) {
    box.querySelector(".tick-4").style.display = "none";
  }

  // Show the tick on selected options in the selectedOptions array
  for (const selectedOption of selectedOptionsTabFour) {
    const optionId = selectedOption.optionId;
    const selectedElement = document.getElementsByClassName("box-4")[optionId];
    const tickElement = selectedElement.querySelector(".tick-4");
    if (tickElement) {
      tickElement.style.display = "inline";
    }
  }
}

// Call this function to apply the ticks when the page loads
applyTicksToSelectedOptionsTabFour();

// <====================================================Tab 4 Ended  =================================================================>


// <====================================================Tab 3 Started =================================================================>

let selectedWallCovering = -1;
let quantityTabThree = 0;
const optionsTabThree = [
  { name: "Wallpaper / ingrain", price: "14.28" },
  { name: "Wallpaper/ingrain fiber (multi-layered)", price: "17.85" },
  { name: "Wood / Panels", price: "17.85" },
];
const selectedOptionsTabThree = [];

function selectWallCovering(optionId) {
  // Remove background color from all boxes
  const boxElements = document.getElementsByClassName("box-3");
  for (let i = 0; i < boxElements.length; i++) {
    boxElements[i].classList.remove("bg-gray-100");
    boxElements[i].classList.remove("selected");
  }

  // Apply background color to the selected box
  const selectedElement = document.getElementsByClassName("box-3")[optionId];
  selectedElement.classList.add("bg-gray-100");
  selectedElement.classList.add("selected");

  selectedWallCovering = optionId; // Update the selected option

  // Show the div when an option is selected
  document.getElementById("labelsDivTabThree").style.display = "flex";

  updatePriceLabelTabThree(optionId);
}

function updatePriceLabelTabThree(optionId) {
  const priceLabel = document.getElementById("price-labelTabThree");
  const selectedOption = optionsTabThree[optionId];

  const customPriceInput = document.getElementById("custom-priceTabThree");
  quantityTabThree = parseInt(customPriceInput.value) || 0;
  const pricePerSquareMeter = parseFloat(selectedOption.price.replace(" €/m²", "").replace(",", "."));
  const totalPrice = pricePerSquareMeter * quantityTabThree;

  // Create a flex container element
  const flexContainer = document.createElement("div");
  flexContainer.classList.add("contents");

  // Create elements for price, separator, total price, and option name
  const priceElement = document.createElement("span");
  priceElement.textContent = " " + selectedOption.price + " /m²";

  const separatorElement = document.createElement("span");
  separatorElement.textContent = "";

  const totalPriceElement = document.createElement("span");
  totalPriceElement.textContent ="€ "+ totalPrice.toFixed(2) ;

  const optionNameElement = document.createElement("span");
  optionNameElement.textContent = ' ( ' + selectedOption.name + ')';

  // Add classes to style the elements as needed (tailwind classes in this case)
  priceElement.classList.add("mr-2"); // Add right margin to separate price from separator
  separatorElement.classList.add("mx-2"); // Add horizontal margin around the separator
  totalPriceElement.classList.add("mr-2"); // Add right margin to separate total price from option name

  // Append all elements to the flex container in the desired order
  flexContainer.appendChild(priceElement);
  flexContainer.appendChild(separatorElement);
  flexContainer.appendChild(totalPriceElement);
  flexContainer.appendChild(optionNameElement);

  // Update the priceLabel with the flex container element
  priceLabel.textContent = "";
  priceLabel.appendChild(flexContainer);
}

function addInfoAndContinueTwoTabThree() {
  const customPriceInput = document.getElementById("custom-priceTabThree");
  quantityTabThree = parseInt(customPriceInput.value) || 0;

  const selectedOption = optionsTabThree[selectedWallCovering];
  const optionExists = selectedOptionsTabThree.some((option) => option.optionId === selectedWallCovering);

  if (!optionExists) {
    const pricePerSquareMeter = parseFloat(selectedOption.price.replace(" €/m²", "").replace(",", "."));
    const totalPrice = pricePerSquareMeter * quantityTabThree;

    const priceInfoDiv = document.createElement("div");
    priceInfoDiv.classList.add("pl-5");
    priceInfoDiv.setAttribute("data-option-id-3", selectedWallCovering);

    // Create and configure <p> elements for Name, Quantity, and Price
    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = selectedOption.name;
    nameParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "max-w-50", "min-w-30");

    const quantityParagraph = document.createElement("p");
    quantityParagraph.textContent = quantityTabThree;
    quantityParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");

    const priceParagraph = document.createElement("p");
    const pricePerSquareMeterTabThree = parseFloat(selectedOption.price.replace(" €/m²", "").replace(",", "."));
    const totalPriceTabThree = pricePerSquareMeterTabThree * quantityTabThree;
    priceParagraph.textContent = "€ "+totalPriceTabThree.toFixed(2) ;
    priceParagraph.classList.add("text-xs", "text-gray-500", "mr-2", "min-w-60");


    const rateParagraph = document.createElement("p");
    rateParagraph.textContent = pricePerSquareMeter+"/m²";
    rateParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");

    const priceInfoContainer = document.createElement("div");
    priceInfoContainer.classList.add("flex-3");
    priceInfoContainer.appendChild(nameParagraph);
    priceInfoContainer.appendChild(quantityParagraph);
    priceInfoContainer.appendChild(rateParagraph);
    priceInfoContainer.appendChild(priceParagraph);

    priceInfoDiv.appendChild(priceInfoContainer);

    const targetContainerDiv = document.querySelector(".target-container"); // Change this selector to match tab 3
    targetContainerDiv.appendChild(priceInfoDiv);

    selectedOptionsTabThree.push({ optionId: selectedWallCovering, totalPrice: totalPriceTabThree });

    // Apply the tick mark to the selected option
    const selectedElement = document.getElementsByClassName("box-3")[selectedWallCovering];
    const tickElement = selectedElement.querySelector(".tick-3");
    if (tickElement) {
      tickElement.style.display = "inline";

    }

    console.log("Total Price: " + "€ "+totalPriceTabThree.toFixed(2));
    // Recalculate and display the total price
    calculateAndDisplayTotalPrice();
  } else {
    // If option exists, update the price in the existing paragraph
    const existingPriceInfoDiv = document.querySelector(`[data-option-id-3="${selectedWallCovering}"]`);

    if (existingPriceInfoDiv) {
      const existingPriceInfoContainer = existingPriceInfoDiv.querySelector(".flex-3");

      // Create and configure <p> elements for Name, Quantity, and Price
      const nameParagraph = document.createElement("p");
      nameParagraph.textContent = selectedOption.name;
      nameParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "max-w-50", "min-w-30");
  
      const quantityParagraph = document.createElement("p");
      quantityParagraph.textContent =  quantityTabThree;
      quantityParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");
  
      const priceParagraph = document.createElement("p");
      const pricePerSquareMeter = parseFloat(selectedOption.price.replace(" €/m²", "").replace(",", "."));
      const totalPrice = pricePerSquareMeter * quantityTabThree;
      priceParagraph.textContent ="€ "+totalPrice.toFixed(2) ;
      priceParagraph.classList.add("text-xs", "text-gray-500", "mr-2","min-w-60");

      const rateParagraph = document.createElement("p");
      rateParagraph.textContent = pricePerSquareMeter+"/m²";
      rateParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");
  
      existingPriceInfoContainer.innerHTML = ''; // Clear existing content
      existingPriceInfoContainer.appendChild(nameParagraph);
      existingPriceInfoContainer.appendChild(quantityParagraph);
      existingPriceInfoContainer.appendChild(rateParagraph);
      existingPriceInfoContainer.appendChild(priceParagraph);
  
      // Update the price in the selectedOptions array as well
      const optionIndex = selectedOptionsTabThree.findIndex((option) => option.optionId === selectedCeilingCovering);
      if (optionIndex !== -1) {
        selectedOptionsTabThree[optionIndex].totalPrice = totalPrice;
      }
  
      console.log("Updated Total Price: " + " € "+totalPrice.toFixed(2) );
      // Recalculate and display the total price
      calculateAndDisplayTotalPrice();
    }
  }
  calculateAndDisplayTotalPrice();

}


function removeSelectedOptionFromTabThree() {
  const targetContainerDiv = document.querySelector(".target-container");
  const divToRemove = targetContainerDiv.querySelector(`[data-option-id-3="${selectedWallCovering}"]`);

  if (divToRemove) {
    targetContainerDiv.removeChild(divToRemove);

    // Hide the tick mark on the deselected option
    const selectedElement = document.getElementsByClassName("box-3")[selectedWallCovering];
    const tickElement = selectedElement.querySelector(".tick-3");
    if (tickElement) {
      tickElement.style.display = "none";
    }

    const indexToRemove = selectedOptionsTabThree.findIndex((option) => option.optionId === selectedWallCovering);
    if (indexToRemove !== -1) {
      selectedOptionsTabThree.splice(indexToRemove, 1);
    }
  }
  // Recalculate and display the total price
  calculateAndDisplayTotalPrice();
}

// Function to apply the tick mark to the selected options
function applyTicksToSelectedOptionsTabThree() {
  const allBoxes = document.getElementsByClassName("box-3");
  console.log('allboxes',allBoxes)

  // Hide the tick on all options
  for (const box of allBoxes) {
    box.querySelector(".tick-3").style.display = "none";
  }

  // Show the tick on selected options in the selectedOptions array
  for (const selectedOption of selectedOptionsTabThree) {
    console.log('selectedOptionsTabThree',selectedOptionsTabThree)
    const optionId = selectedOption.optionId;
    const selectedElement = document.getElementsByClassName("box-3")[optionId];
    const tickElement = selectedElement.querySelector(".tick-3");
    if (tickElement) {
      tickElement.style.display = "inline";
    }
  }
}


// Call this function to apply the ticks when the page loads
applyTicksToSelectedOptionsTabThree();


// <====================================================Tab 3  Ended  =================================================================>



// <===================================================== Tab 5 Start =================================================================>

let selectedPaintWalls = -1;
let quantityTabFive = 0;
const optionsTabFive = [
  { name: "One coat (including material)", price: "14.28" },
  { name: "One coat (material is provided)", price: "17.85" },
  { name: "Two coats (including material)", price: "17.85" },
  { name: "Two coats of paint (material provided)", price: "17.85" },
];
const selectedOptionsTabFive = [];

function selectPaintWall(optionId) {
  // Remove background color from all boxes
  const boxElements = document.getElementsByClassName("box-5");
  for (let i = 0; i < boxElements.length; i++) {
    boxElements[i].classList.remove("bg-gray-100");
    boxElements[i].classList.remove("selected");
  }

  // Apply background color to the selected box
  const selectedElement = document.getElementsByClassName("box-5")[optionId];
  selectedElement.classList.add("bg-gray-100");
  selectedElement.classList.add("selected");

  selectedPaintWalls = optionId; // Update the selected option

  // Show the div when an option is selected
  document.getElementById("labelsDivTabFive").style.display = "flex";

  updatePriceLabelTabFive(optionId);
}

function updatePriceLabelTabFive(optionId) {
  const priceLabel = document.getElementById("price-labelTabFive");
  const selectedOption = optionsTabFive[optionId];

  const customPriceInput = document.getElementById("custom-priceTabFive");
  quantityTabFive = parseInt(customPriceInput.value) || 0;
  const pricePerSquareMeter = parseFloat(selectedOption.price.replace(" €/m²", "").replace(",", "."));
  const totalPrice = pricePerSquareMeter * quantityTabFive;

  // Create a flex container element
  const flexContainer = document.createElement("div");
  flexContainer.classList.add("contents");

  // Create elements for price, separator, total price, and option name
  const priceElement = document.createElement("span");
  priceElement.textContent = " " + selectedOption.price + " /m²";

  const separatorElement = document.createElement("span");
  separatorElement.textContent = "";

  const totalPriceElement = document.createElement("span");
  totalPriceElement.textContent = " € "+totalPrice.toFixed(2) ;

  const optionNameElement = document.createElement("span");
  optionNameElement.textContent = ' ( ' + selectedOption.name + ')';

  // Add classes to style the elements as needed (tailwind classes in this case)
  priceElement.classList.add("mr-2"); // Add right margin to separate price from separator
  separatorElement.classList.add("mx-2"); // Add horizontal margin around the separator
  totalPriceElement.classList.add("mr-2"); // Add right margin to separate total price from option name

  // Append all elements to the flex container in the desired order
  flexContainer.appendChild(priceElement);
  flexContainer.appendChild(separatorElement);
  flexContainer.appendChild(totalPriceElement);
  flexContainer.appendChild(optionNameElement);

  // Update the priceLabel with the flex container element
  priceLabel.textContent = "";
  priceLabel.appendChild(flexContainer);
}


function addInfoAndContinueTwoTabFive() {
  const customPriceInput = document.getElementById("custom-priceTabFive");
  quantityTabFive = parseInt(customPriceInput.value) || 0;

  const selectedOption = optionsTabFive[selectedPaintWalls];
  const optionExists = selectedOptionsTabFive.some((option) => option.optionId === selectedPaintWalls);
  console.log('optionExists',selectedPaintWalls)

  if (!optionExists) {
    const pricePerSquareMeter = parseFloat(selectedOption.price.replace(" €/m²", "").replace(",", "."));
    const totalPrice = pricePerSquareMeter * quantityTabFive;

    const priceInfoDiv = document.createElement("div");
    priceInfoDiv.classList.add("pl-5");
    priceInfoDiv.setAttribute("data-option-id-5", selectedPaintWalls);

    // Create and configure <p> elements for Name, Quantity, and Price
    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = selectedOption.name;
    nameParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "max-w-50", "min-w-30");

    const quantityParagraph = document.createElement("p");
    quantityParagraph.textContent = quantityTabFive;
    quantityParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");

    const priceParagraph = document.createElement("p");
    const pricePerSquareMeterTabFive = parseFloat(selectedOption.price.replace(" €/m²", "").replace(",", "."));
    const totalPriceTabFive = pricePerSquareMeterTabFive* quantityTabFive;
    priceParagraph.textContent ="€ "+totalPriceTabFive.toFixed(2) ;
    priceParagraph.classList.add("text-xs", "text-gray-500", "mr-2", "min-w-60");

    const rateParagraph = document.createElement("p");
    rateParagraph.textContent = pricePerSquareMeter+"/m²";
    rateParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");


    const priceInfoContainer = document.createElement("div");
    priceInfoContainer.classList.add("flex-5");//here
    priceInfoContainer.appendChild(nameParagraph);
    priceInfoContainer.appendChild(quantityParagraph);
    priceInfoContainer.appendChild(rateParagraph);
    priceInfoContainer.appendChild(priceParagraph);

    priceInfoDiv.appendChild(priceInfoContainer);

    const targetContainerDiv = document.querySelector(".target-container"); 
    targetContainerDiv.appendChild(priceInfoDiv);

    selectedOptionsTabFive.push({ optionId: selectedPaintWalls, totalPrice: totalPriceTabFive });

    // Apply the tick mark to the selected option
    const selectedElement = document.getElementsByClassName("box-5")[selectedPaintWalls];
    const tickElement = selectedElement.querySelector(".tick-5");
    if (tickElement) {
      tickElement.style.display = "inline";
    }

    console.log("Total Price: " + "€ "+totalPriceTabFive.toFixed(2) );
    // Recalculate and display the total price
    calculateAndDisplayTotalPrice();
  } else {
    // If option exists, update the price in the existing paragraph
    const existingPriceInfoDiv = document.querySelector(`[data-option-id-5="${selectedPaintWalls}"]`);

    if (existingPriceInfoDiv) {
      const existingPriceInfoContainer = existingPriceInfoDiv.querySelector(".flex-5");

      // Create and configure <p> elements for Name, Quantity, and Price
      const nameParagraph = document.createElement("p");
      nameParagraph.textContent = selectedOption.name;
      nameParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "max-w-50", "min-w-30");
  
      const quantityParagraph = document.createElement("p");
      quantityParagraph.textContent =  quantityTabFive;
      quantityParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");
  
      const priceParagraph = document.createElement("p");
      const pricePerSquareMeter = parseFloat(selectedOption.price.replace(" €/m²", "").replace(",", "."));
      const totalPrice = pricePerSquareMeter * quantityTabFive;
      priceParagraph.textContent ="€ "+totalPrice.toFixed(2) ;
      priceParagraph.classList.add("text-xs", "text-gray-500", "mr-2","min-w-60");

      const rateParagraph = document.createElement("p");
      rateParagraph.textContent = pricePerSquareMeter+"/m²";
      rateParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");
  
      existingPriceInfoContainer.innerHTML = ''; // Clear existing content
      existingPriceInfoContainer.appendChild(nameParagraph);
      existingPriceInfoContainer.appendChild(quantityParagraph);
      existingPriceInfoContainer.appendChild(rateParagraph);
      existingPriceInfoContainer.appendChild(priceParagraph);
  
      // Update the price in the selectedOptions array as well
      const optionIndex = selectedOptionsTabFive.findIndex((option) => option.optionId === selectedPaintWalls);
      if (optionIndex !== -1) {
        selectedOptionsTabFive[optionIndex].totalPrice = totalPrice;
      }
  
      console.log("Updated Total Price: " + "€ "+totalPrice.toFixed(2) );
      // Recalculate and display the total price
      calculateAndDisplayTotalPrice();
    }
  }
}

function removeSelectedOptionFromTabFive() {
  const targetContainerDiv = document.querySelector(".target-container"); // Change this selector to match Tab 5
  const divToRemove = targetContainerDiv.querySelector(`[data-option-id-5="${selectedPaintWalls}"]`);

  if (divToRemove) {
    targetContainerDiv.removeChild(divToRemove);

    const selectedElement = document.getElementsByClassName("box-5")[selectedPaintWalls];
    const tickElement = selectedElement.querySelector(".tick-5");
    if (tickElement) {
      tickElement.style.display = "none";
    }

    const indexToRemove = selectedOptionsTabFive.findIndex((option) => option.optionId === selectedPaintWalls);
    if (indexToRemove !== -1) {
      selectedOptionsTabFive.splice(indexToRemove, 1);
    }
  }
  // Recalculate and display the total price
  calculateAndDisplayTotalPrice();
}


// Function to apply the tick mark to the selected options
function applyTicksToSelectedOptionsTabFive() {
  const allBoxes = document.getElementsByClassName("box-5");

  // Hide the tick on all options
  for (const box of allBoxes) {
    box.querySelector(".tick-5").style.display = "none";
  }

  // Show the tick on selected options in the selectedOptions array
  for (const selectedOption of selectedOptionsTabFive) {
    const optionId = selectedOption.optionId;
    const selectedElement = document.getElementsByClassName("box-5")[optionId];
    const tickElement = selectedElement.querySelector(".tick-5");
    if (tickElement) {
      tickElement.style.display = "inline";
    }
  }
}

// Call this function to apply the ticks when the page loads
 applyTicksToSelectedOptionsTabFive();

// <===================================================== Tab 5 End   =================================================================>


// <===================================================== Tab 6 Start ===========================================================>

let selectedCleaningFloor = -1;
let quantityTabSix = 0;
const optionsTabSix = [
  { name: "Laminate", price: "10.00" },
  { name: "Tiles/PVC", price: "12.50" },
  { name: "Carpet", price: "8.75" },
  { name: "Parquet", price: "15.00" },
];
const selectedOptionsTabSix = [];

function selectCleaningFloor(optionId) {
  const boxElements = document.getElementsByClassName("box-6");
  for (let i = 0; i < boxElements.length; i++) {
    boxElements[i].classList.remove("bg-gray-100");
    boxElements[i].classList.remove("selected");
  }

  const selectedElement = document.getElementsByClassName("box-6")[optionId];
  selectedElement.classList.add("bg-gray-100");
  selectedElement.classList.add("selected");

  selectedCleaningFloor = optionId;

  document.getElementById("labelsDivTabSix").style.display = "flex";

  updatePriceLabelTabSix(optionId);
}

function updatePriceLabelTabSix(optionId) {
  const priceLabel = document.getElementById("price-labelTabSix");
  const selectedOption = optionsTabSix[optionId];

  const customPriceInput = document.getElementById("custom-priceTabSix");
  quantityTabSix = parseInt(customPriceInput.value) || 0;
  const pricePerSquareMeter = parseFloat(selectedOption.price.replace(" €/m²", "").replace(",", "."));
  const totalPrice = pricePerSquareMeter * quantityTabSix;
  console.log('lmkms',customPriceInput);

  const flexContainer = document.createElement("div");
  flexContainer.classList.add("contents");

  const priceElement = document.createElement("span");
  priceElement.textContent = " " + selectedOption.price + " /m²";

  const separatorElement = document.createElement("span");
  separatorElement.textContent = "";

  const totalPriceElement = document.createElement("span");
  totalPriceElement.textContent = "€ "+totalPrice.toFixed(2) ;

  const optionNameElement = document.createElement("span");
  optionNameElement.textContent = ' ( ' + selectedOption.name + ')';

  priceElement.classList.add("mr-2");
  separatorElement.classList.add("mx-2");
  totalPriceElement.classList.add("mr-2");

  flexContainer.appendChild(priceElement);
  flexContainer.appendChild(separatorElement);
  flexContainer.appendChild(totalPriceElement);
  flexContainer.appendChild(optionNameElement);

  priceLabel.textContent = "";
  priceLabel.appendChild(flexContainer);
}

function addInfoAndContinueTwoTabSix() {
  const customPriceInput = document.getElementById("custom-priceTabSix");
  quantityTabSix = parseInt(customPriceInput.value) || 0;

  const selectedOption = optionsTabSix[selectedCleaningFloor];
  const optionExists = selectedOptionsTabSix.some((option) => option.optionId === selectedCleaningFloor);

  if (!optionExists) {
    const pricePerSquareMeter = parseFloat(selectedOption.price.replace(" €/m²", "").replace(",", "."));
    const totalPrice = pricePerSquareMeter * quantityTabSix;

    const priceInfoDiv = document.createElement("div");
    priceInfoDiv.classList.add("pl-5");
    priceInfoDiv.setAttribute("data-option-id-6", selectedCleaningFloor);

    // Create and configure <p> elements for Name, Quantity, and Price
    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = selectedOption.name;
    nameParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "max-w-50", "min-w-30");

    const quantityParagraph = document.createElement("p");
    quantityParagraph.textContent = quantityTabSix;
    quantityParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");


     const rateParagraph = document.createElement("p");
      rateParagraph.textContent = pricePerSquareMeter+"/m²";
      rateParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");

    const priceParagraph = document.createElement("p");
    const pricePerSquareMeterTabSix = parseFloat(selectedOption.price.replace(" €/m²", "").replace(",", "."));
    const totalPriceTabSix = pricePerSquareMeterTabSix * quantityTabSix;
    priceParagraph.textContent = "€ "+totalPriceTabSix.toFixed(2) ;
    priceParagraph.classList.add("text-xs", "text-gray-500", "mr-2", "min-w-60");

    const priceInfoContainer = document.createElement("div");
    priceInfoContainer.classList.add("flex-6");
    priceInfoContainer.appendChild(nameParagraph);
    priceInfoContainer.appendChild(quantityParagraph);
    priceInfoContainer.appendChild(rateParagraph);
    priceInfoContainer.appendChild(priceParagraph);

    priceInfoDiv.appendChild(priceInfoContainer);

    const targetContainerDiv = document.querySelector(".target-container"); // Change this selector to match 
    targetContainerDiv.appendChild(priceInfoDiv);

    selectedOptionsTabSix.push({ optionId: selectedCleaningFloor, totalPrice: totalPriceTabSix });

    // Apply the tick mark to the selected option
    const selectedElement = document.getElementsByClassName("box-6")[selectedCleaningFloor];
    const tickElement = selectedElement.querySelector(".tick-6");
    if (tickElement) {
      tickElement.style.display = "inline";
    }

    console.log("Total Price: " + "€ "+totalPriceTabSix.toFixed(2) );
    // Recalculate and display the total price
    calculateAndDisplayTotalPrice();
    console.log(selectedOptionsTabSix)

  } else {
    // If option exists, update the price in the existing paragraph
    const existingPriceInfoDiv = document.querySelector(`[data-option-id-6="${selectedCleaningFloor}"]`);

    if (existingPriceInfoDiv) {
      const existingPriceInfoContainer = existingPriceInfoDiv.querySelector(".flex-6");
      console.log('sdc', existingPriceInfoContainer)

      // Create and configure <p> elements for Name, Quantity, and Price
      const nameParagraph = document.createElement("p");
      nameParagraph.textContent = selectedOption.name;
      nameParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "max-w-50", "min-w-30");
  
      const quantityParagraph = document.createElement("p");
      quantityParagraph.textContent =  quantityTabSix;
      quantityParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");
  
      const priceParagraph = document.createElement("p");
      const pricePerSquareMeter = parseFloat(selectedOption.price.replace(" €/m²", "").replace(",", "."));
      const totalPrice = pricePerSquareMeter * quantityTabSix;

      const rateParagraph = document.createElement("p");
      rateParagraph.textContent = pricePerSquareMeter+"/m²";
      console.log('rateParagraph',rateParagraph.textContent)
      rateParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");


      priceParagraph.textContent = "€ "+totalPrice.toFixed(2) ;
      priceParagraph.classList.add("text-xs", "text-gray-500", "mr-2","min-w-60");
  
      existingPriceInfoContainer.innerHTML = ''; // Clear existing content
      existingPriceInfoContainer.appendChild(nameParagraph);
      existingPriceInfoContainer.appendChild(quantityParagraph);
      existingPriceInfoContainer.appendChild(rateParagraph);
      existingPriceInfoContainer.appendChild(priceParagraph);
  
      // Update the price in the selectedOptions array as well
      // console.log('selectedOptions',selectedOptions);
      const optionIndex = selectedOptionsTabSix.findIndex((option) => option.optionId === selectedCleaningFloor);
      if (optionIndex !== -1) {
        // console.log('dciosc');
        selectedOptionsTabSix[optionIndex].totalPrice = totalPrice;
      }
  
      console.log("Updated Total Price: " +"€ "+totalPrice.toFixed(2) );
      // Recalculate and display the total price
      calculateAndDisplayTotalPrice();
    }
  }
}

function removeSelectedOptionFromTabSix() {
  const targetContainerDiv = document.querySelector(".target-container");
  console.log('dj',targetContainerDiv)
  const divToRemove = targetContainerDiv.querySelector(`[data-option-id-6="${selectedCleaningFloor}"]`);
  // console.log('f',divToRemove)

  if (divToRemove) {
    targetContainerDiv.removeChild(divToRemove);

    // Hide the tick mark on the deselected option
    const selectedElement = document.getElementsByClassName("box-6")[selectedCleaningFloor];
    const tickElement = selectedElement.querySelector(".tick-6");
    if (tickElement) {
      tickElement.style.display = "none";
    }


    const indexToRemove = selectedOptionsTabSix.findIndex((option) => option.optionId === selectedCleaningFloor);
    if (indexToRemove !== -1) {
      console.log('indexToRemove',indexToRemove)
      console.log('selectedOptionsTabSix',selectedOptionsTabSix)
      console.log('selectedCleaningFloor',selectedCleaningFloor)

      selectedOptionsTabSix.splice(indexToRemove, 1);
    }
  }
  // Recalculate and display the total price
  calculateAndDisplayTotalPrice();
}

// Function to apply the tick mark to the selected options
function applyTicksToSelectedOptionsTabSix() {
  const allBoxes = document.getElementsByClassName("box-6");

  for (const box of allBoxes) {
    box.querySelector(".tick-6").style.display = "none";
  }

  for (const selectedOption of selectedOptionsTabSix) {
    const optionId = selectedOption.optionId;
    const selectedElement = document.getElementsByClassName("box-6")[optionId];
    const tickElement = selectedElement.querySelector(".tick-6");
    if (tickElement) {
      tickElement.style.display = "inline";
    }
  }
}

// Call this function to apply the ticks when the page loads
applyTicksToSelectedOptionsTabSix();

// <===================================================== Tab 6 End   =================================================================>


// <===================================================== Tab 7 Start   =================================================================>


let selectedCleaningBathroom = -1;
let quantityTabSeven = 0;
const optionsTabSeven = [
  { name: "Basic cleaning bathroom : Floor", price: "4.76" },
  { name: "Wall", price: "7.14" },
  { name: "Consoles ( specify number )", price: "17.85" },
];
const selectedOptionsTabSeven = [];

function selectCleaningBathroom(optionId) {
  const boxElements = document.getElementsByClassName("box-7");
  for (let i = 0; i < boxElements.length; i++) {
    boxElements[i].classList.remove("bg-gray-100");
    boxElements[i].classList.remove("selected");
  }

  const selectedElement = document.getElementsByClassName("box-7")[optionId];
  selectedElement.classList.add("bg-gray-100");
  selectedElement.classList.add("selected");

  selectedCleaningBathroom = optionId;

  document.getElementById("labelsDivTabSeven").style.display = "flex";

  updatePriceLabelTabSeven(optionId);
}

function updatePriceLabelTabSeven(optionId) {
  const priceLabel = document.getElementById("price-labelTabSeven");
  const selectedOption = optionsTabSeven[optionId];

  const customPriceInput = document.getElementById("custom-priceTabSeven");
  quantityTabSeven = parseInt(customPriceInput.value) || 0;
  const pricePerSquareMeter = parseFloat(selectedOption.price.replace(" €/m²", "").replace(",", "."));
  const totalPrice = pricePerSquareMeter * quantityTabSeven;

  const flexContainer = document.createElement("div");
  flexContainer.classList.add("contents");

  const priceElement = document.createElement("span");
  priceElement.textContent = " " + selectedOption.price + " /m²";

  const separatorElement = document.createElement("span");
  separatorElement.textContent = "";

  const totalPriceElement = document.createElement("span");
  totalPriceElement.textContent = "€ "+totalPrice.toFixed(2) ;

  const optionNameElement = document.createElement("span");
  optionNameElement.textContent = ' ( ' + selectedOption.name + ')';

  priceElement.classList.add("mr-2");
  separatorElement.classList.add("mx-2");
  totalPriceElement.classList.add("mr-2");

  flexContainer.appendChild(priceElement);
  flexContainer.appendChild(separatorElement);
  flexContainer.appendChild(totalPriceElement);
  flexContainer.appendChild(optionNameElement);

  priceLabel.textContent = "";
  priceLabel.appendChild(flexContainer);
}

function addInfoAndContinueTwoTabSeven() {
  const customPriceInput = document.getElementById("custom-priceTabSeven");
  quantityTabSeven = parseInt(customPriceInput.value) || 0;

  const selectedOption = optionsTabSeven[selectedCleaningBathroom];
  const optionExists = selectedOptionsTabSeven.some((option) => option.optionId === selectedCleaningBathroom);
  console.log('optionExists',selectedOptionsTabSeven)

  if (!optionExists) {
    const pricePerSquareMeter = parseFloat(selectedOption.price.replace(" €/m²", "").replace(",", "."));
    const totalPrice = pricePerSquareMeter * quantityTabSeven;

    const priceInfoDiv = document.createElement("div");
    priceInfoDiv.classList.add("pl-5");
    priceInfoDiv.setAttribute("data-option-id-7", selectedCleaningBathroom);

    // Create and configure <p> elements for Name, Quantity, and Price
    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = selectedOption.name;
    nameParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "max-w-50", "min-w-30");

    const quantityParagraph = document.createElement("p");
    quantityParagraph.textContent = quantityTabSeven;
    quantityParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");


    const rateParagraph = document.createElement("p");
    rateParagraph.textContent = pricePerSquareMeter+"/m²";
    console.log('rateParagraph',rateParagraph.textContent)
    rateParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");


    const priceParagraph = document.createElement("p");
    const pricePerSquareMeterTabSeven = parseFloat(selectedOption.price.replace(" €/m²", "").replace(",", "."));
    const totalPriceTabSeven = pricePerSquareMeterTabSeven * quantityTabSeven;
    priceParagraph.textContent = "€ "+totalPriceTabSeven.toFixed(2) ;
    priceParagraph.classList.add("text-xs", "text-gray-500", "mr-2", "min-w-60");

    const priceInfoContainer = document.createElement("div");
    priceInfoContainer.classList.add("flex-7");
    priceInfoContainer.appendChild(nameParagraph);
    priceInfoContainer.appendChild(quantityParagraph);
    priceInfoContainer.appendChild(rateParagraph);
    priceInfoContainer.appendChild(priceParagraph);

    priceInfoDiv.appendChild(priceInfoContainer);

    const targetContainerDiv = document.querySelector(".target-container"); // Change this selector to match 
    targetContainerDiv.appendChild(priceInfoDiv);

    selectedOptionsTabSeven.push({ optionId: selectedCleaningBathroom, totalPrice: totalPriceTabSeven });

    // Apply the tick mark to the selected option
    const selectedElement = document.getElementsByClassName("box-7")[selectedCleaningBathroom];
    const tickElement = selectedElement.querySelector(".tick-7");
    if (tickElement) {
      tickElement.style.display = "inline";
    }

    console.log("Total Price: " + "€ "+totalPriceTabSeven.toFixed(2) );
    // Recalculate and display the total price
    calculateAndDisplayTotalPrice();
    console.log(selectedOptionsTabSeven)

  } else {
    // If option exists, update the price in the existing paragraph
    const existingPriceInfoDiv = document.querySelector(`[data-option-id-7="${selectedCleaningBathroom}"]`);

    if (existingPriceInfoDiv) {
      const existingPriceInfoContainer = existingPriceInfoDiv.querySelector(".flex-7");
      console.log('sdc', existingPriceInfoContainer)

      // Create and configure <p> elements for Name, Quantity, and Price
      const nameParagraph = document.createElement("p");
      nameParagraph.textContent = selectedOption.name;
      nameParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "max-w-50", "min-w-30");
  
      const quantityParagraph = document.createElement("p");
      quantityParagraph.textContent =  quantityTabSeven;
      quantityParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");

      
  
  
      const priceParagraph = document.createElement("p");
      const pricePerSquareMeter = parseFloat(selectedOption.price.replace(" €/m²", "").replace(",", "."));
      const totalPrice = pricePerSquareMeter * quantityTabSeven;
      priceParagraph.textContent = "€ "+totalPrice.toFixed(2) ;
      priceParagraph.classList.add("text-xs", "text-gray-500", "mr-2","min-w-60");

      const rateParagraph = document.createElement("p");
      rateParagraph.textContent = pricePerSquareMeter+"/m²";
      console.log('rateParagraph',rateParagraph.textContent)
      rateParagraph.classList.add("text-xs", "text-gray-500", "mr-4", "min-w-33");
  
      existingPriceInfoContainer.innerHTML = ''; // Clear existing content
      existingPriceInfoContainer.appendChild(nameParagraph);
      existingPriceInfoContainer.appendChild(quantityParagraph);
      existingPriceInfoContainer.appendChild(rateParagraph);
      existingPriceInfoContainer.appendChild(priceParagraph);


      // Update the price in the selectedOptions array as well
      const optionIndex = selectedOptionsTabSeven.findIndex((option) => option.optionId === selectedCleaningFloor);
      if (optionIndex !== -1) {
        console.log('vsvo')
        selectedOptionsTabSeven[optionIndex].totalPrice = totalPrice;
      }
  
      console.log("Updated Total Price: " + "€ "+totalPrice.toFixed(2) );
      // Recalculate and display the total price
      calculateAndDisplayTotalPrice();
    }

  }
}

function removeSelectedOptionFromTabSeven() {
  const targetContainerDiv = document.querySelector(".target-container");
  console.log('dj',targetContainerDiv)
  const divToRemove = targetContainerDiv.querySelector(`[data-option-id-7="${selectedCleaningBathroom}"]`);
  // console.log('f',divToRemove)

  if (divToRemove) {
    targetContainerDiv.removeChild(divToRemove);

    // Hide the tick mark on the deselected option
    const selectedElement = document.getElementsByClassName("box-7")[selectedCleaningBathroom];
    const tickElement = selectedElement.querySelector(".tick-7");
    if (tickElement) {
      tickElement.style.display = "none";
    }


    const indexToRemove = selectedOptionsTabSeven.findIndex((option) => option.optionId === selectedCleaningBathroom);
    if (indexToRemove !== -1) {
      console.log('indexToRemove',indexToRemove)
      console.log('selectedOptionsTabSeven',selectedOptionsTabSeven)
      console.log('selectedCleaningFloor',selectedCleaningBathroom)
      selectedOptionsTabSeven.splice(indexToRemove, 1);

    }
  }
  // Recalculate and display the total price
  calculateAndDisplayTotalPrice();
}

// Function to apply the tick mark to the selected options
function applyTicksToSelectedOptionsTabSeven() {
  const allBoxes = document.getElementsByClassName("box-7");

  for (const box of allBoxes) {
    box.querySelector(".tick-7").style.display = "none";
  }

  for (const selectedOption of selectedOptionsTabSeven) {
    const optionId = selectedOption.optionId;
    const selectedElement = document.getElementsByClassName("box-7")[optionId];
    const tickElement = selectedElement.querySelector(".tick-7");
    if (tickElement) {
      tickElement.style.display = "inline";
    }
  }
}

// Call this function to apply the ticks when the page loads
applyTicksToSelectedOptionsTabSeven();

// <===================================================== Tab 7 End   =================================================================>


// <------------------------- Additional Prices Start ---------------------------------------->
function calculateAndDisplayTotalPrice() {
  const priceElements = document.querySelectorAll(".text-xs.text-gray-500.mr-2.min-w-60");
  let totalPrice = 0;
  console.log('priceElements',priceElements);

  priceElements.forEach((priceElement) => {
    const priceText = priceElement.textContent.replace('€', '');
    console.log('priceText',priceText);
    const priceValue = parseFloat(priceText);
    console.log('priceValue',priceValue);
    
    if (!isNaN(priceValue)) {
      totalPrice += priceValue;
    }
  });

  console.log("Total Price: of sub", totalPrice.toFixed(2), "€");





  const additionalServicesPrices = document.getElementById("additional-services-price");
  additionalServicesPrices.textContent = totalPrice.toFixed(2);





  // Get the additional info paragraph element
  const additionalInfoParagraph = document.getElementById("additional-info");
  const additionalInfoDetails = document.querySelector(".additional-info-details");
  
  updateTotalPrice(); 


  // Update the visibility of the additional info paragraph and details
  if (totalPrice !== 0) {
    additionalInfoParagraph.style.display = "block";
    additionalInfoDetails.style.display = "flex";
  } else {
    additionalInfoParagraph.style.display = "none";
    additionalInfoDetails.style.display = "none";
  }
}

calculateAndDisplayTotalPrice();
// <------------------------- Additional Prices End ---------------------------------------->









//  ------->  Section 1  <=----------    Would You like to add additional Information

// Function to save inputs in local storage
function addInfoAndContinue() {
  // Get the input values
  var objectSize = document.getElementById('object-size').value;
  var cubicMeters = document.getElementById('cubic-meters').value;
  var distance = document.getElementById('distance').value;
  var remarks = document.getElementById('remarks').value;

  // Get the existing data from local storage
  var storedData = localStorage.getItem('data');

  // If no data exists, create a new object to store the information
  var dataObject = storedData ? JSON.parse(storedData) : {};

  // Update the additional information in the existing data object
  dataObject["Additional Information"] = {
    ...dataObject["Additional Information"],
    "Total size of the object": objectSize,
    "Cubic meters": cubicMeters,
    "Distance to vehicle/container": distance,
    "Remarks": remarks
  };

  // Convert the data object to JSON string and save it back to local storage
  localStorage.setItem('data', JSON.stringify(dataObject));
}
// Call the saveInputs function when the "Add info and continue" button is clicked
var saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', saveInputs);


// Function to save value credit in local storage
function saveValueCredit() {
  // Get the input values
  var objects = document.getElementById('objects').value;
  var valuePrice = document.getElementById('asking-price').value;
  var imageInput = document.getElementById('image-input');
  
  // Check if an image file is selected
  if (imageInput.files.length > 0) {
    var imageFile = imageInput.files[0];

    // Create a new FileReader instance
    var reader = new FileReader();

    // Set up the onload event handler to get the image path once the file is loaded
    reader.onload = function(event) {
      var imagePath = event.target.result;

      // Get the existing data from local storage
      var storedData = localStorage.getItem('data');

      // If no data exists, create a new object to store the information
      var dataObject = storedData ? JSON.parse(storedData) : {};

      // Update the value credit in the existing data object
      dataObject["Value Credit"] = {
        ...dataObject["Value Credit"],
        "Objects": objects,
        "Value Price": valuePrice,
        "ImagePath": imagePath
      };

      // Convert the data object to JSON string and save it back to local storage
      localStorage.setItem('data', JSON.stringify(dataObject));
    };

    // Read the image file as data URL
    reader.readAsDataURL(imageFile);
  } else {
    // No image file selected, handle accordingly
  }
}

// Call the saveValueCredit function when the "Add" button is clicked
var addButton = document.getElementById('add-item-button');
addButton.addEventListener('click', saveValueCredit);

// -----------> Section 1 Ended <=-------------------





// ===========> Property address and eviction date <===================== Starts

// Get references to the input fields


// Save the data to localStorage when a button is clicked or upon form submission
function saveFormData() {
const streetInput = document.getElementById('streets');
const postalCodeInput = document.getElementById('postal-code');
const locationInput = document.getElementById('location');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
  const formData = {
    'Property address': {
      streets: streetInput.value,
      postalCode: postalCodeInput.value
    },
    'Eviction date': {
      location: locationInput.value,
      date: dateInput.value,
      time: timeInput.value
    }
  };

  // Convert the formData object to a JSON string
  const formDataJson = JSON.stringify(formData);

  // Save the JSON string to localStorage
  localStorage.setItem('form-data', formDataJson);
}


// Retrieve the saved data from localStorage
function retrieveFormData() {
  // Get the JSON string from localStorage
  const formDataJson = localStorage.getItem('form-data');

  if (formDataJson) {
    // Parse the JSON string to an object
    const formData = JSON.parse(formDataJson);

    // Populate the input fields with the retrieved data
    streetInput.value = formData['Property address'].streets;
    postalCodeInput.value = formData['Property address'].postalCode;
    locationInput.value = formData['Eviction date'].location;
    dateInput.value = formData['Eviction date'].date;
    timeInput.value = formData['Eviction date'].time;
  }
}


// ===========> Property address and eviction date <===================== Ends







// ===========>Request for quotation starts<===================== Starts

function saveRequestforQuotation() {
  // Retrieve input values
  const companyInput = document.getElementById('company').value;
  const surnameInput = document.getElementById('surname').value;
  const firstNameInput = document.getElementById('firstName').value;
  const streetInput = document.getElementById('street').value;
  const zipInput = document.getElementById('zip').value;
  const placeInput = document.getElementById('place').value;
  const emailInput = document.getElementById('email').value;
  const phoneInput = document.getElementById('phone').value;
  const privacyInput = document.getElementById('privacy').checked;

  // Create an object to hold the form data
  const formData = {
    company: companyInput,
    surname: surnameInput,
    firstName: firstNameInput,
    street: streetInput,
    zip: zipInput,
    place: placeInput,
    email: emailInput,
    phone: phoneInput,
    privacy: privacyInput
  };

  // Save the form data to localStorage
  localStorage.setItem('requestForQuotation', JSON.stringify(formData));
}


// ===========>Request for quotation Ends<===================== Ends


document.addEventListener("DOMContentLoaded", function () {
  // Get references to the elements
  const newItemDiv = document.getElementById("new-item");
  const addItemButton = document.getElementById("add-item-button");

  // Add click event listener to the button
  addItemButton.addEventListener("click", function () {
    // Toggle the visibility of the new item div
    newItemDiv.classList.toggle("hidden");
  });
});

function toggleAccordion(tile) {
  // Loop through all accordion items
  var accordionItems = document.getElementsByClassName("accordion-item");
  for (var i = 0; i < accordionItems.length; i++) {
    var content = accordionItems[i].querySelector(".accordion-content");
    
    if (i === tile) {
      // Toggle the content of the clicked item
      content.style.display = content.style.display === "none" ? "block" : "none";
    } else {
      // Close the content of other items
      content.style.display = "none";
    }
  }
}


function openTab(evt, tabName, listItem) {
  var tabContent = document.getElementsByClassName("tab-content");
  var tabLinks = document.getElementsByClassName("left-tab");
  

  // Hide all tab content
  Array.from(tabContent).forEach(function (content) {
    content.style.display = "none";
  });

  const tabNames = tabName;
  // Remove the "active" class from all tab links
  Array.from(tabLinks).forEach(function (link) {
    // link.classList.remove("active-tab");
  });
  changeColor(tabNames);


  if (tabName === 'social-accounts'){changeColorTabThree();}
  if (tabName === 'reviews'){changeColorTabFour();}
  if (tabName === 'confirmation'){changeColorTabFive();}

  
  // come here
  
  // function enableTab(tabIndex) {
  //   const tabElement = document.getElementsByClassName("left-tab")[tabIndex];
  //   tabElement.classList.add("enabled");
  // }
  
  // function disableTab(tabIndex) {
  //   const tabElement = document.getElementsByClassName("left-tab")[tabIndex];
  //   tabElement.classList.remove("enabled");
  // }

  // Show the selected tab content and mark the clicked tab as active
  document.getElementById(tabName).style.display = "block";
  listItem.classList.add("active-tab");
  toggleButtonState(document.getElementById("nextButton"), document.querySelectorAll(".left-tab-tab-content.selected"));
 

}

function hideSteps() {
  var supniggaDiv = document.getElementById("accordion-content-9");
  supniggaDiv.style.display =
    supniggaDiv.style.display === "none" ? "block" : "none";
}

function toggleDiv() {
  var div = document.getElementById("myDiv");
  div.classList.toggle("hidden");
}

function toggleDivs() {
  var div = document.getElementById("thirdFlexDiv");
  div.classList.toggle("hidden");
}

function changeTab(tabId) {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-contents");

  // Remove the active class from all tabs and tab contents
  tabs.forEach((tab) => tab.classList.remove("active"));
  tabContents.forEach((content) => content.classList.remove("active"));

  // Add the active class to the clicked tab and corresponding tab content
  document.querySelector(`[data-tab="${tabId}"]`).classList.add("active");
  document.getElementById(tabId).classList.add("active");
  // document.getElementById(tabId).classList.add("active-tab");
}

// Show the default tab on page load
document.getElementById("user-info").style.display = "block";
document.getElementsByClassName("tab")[0].classList.add("active-tab");

const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});



// Get the span elements by their IDs
// const subTotalChootaWalaElement = document.getElementById("subTotalChootaWala");
// const additionalServicesPriceElement = document.getElementById("additional-services-price");




// Function to update the total price span
// Declare the elements outside the function


function updateTotalPrice() {
const subTotalChootaWalaElement = document.getElementById("subTotalChootaWala");
const additionalServicesPriceElement = document.getElementById("additional-services-price");
const priceTotalEndElement = document.getElementById("price-total-end");
  const subTotalChootaWalaValue = parseFloat(subTotalChootaWalaElement.textContent);
  const additionalServicesPriceValue = parseFloat(additionalServicesPriceElement.textContent);






  const totalPrice = subTotalChootaWalaValue + additionalServicesPriceValue;


  // Update the content of the total price span
  priceTotalEndElement.textContent = totalPrice.toFixed(2);

}

// Initial update
updateTotalPrice();

// Set up a MutationObserver to watch for changes in the content of the elements
const observer = new MutationObserver(updateTotalPrice);

// Define the options for the observer
const observerOptions = { characterData: true, childList: true, subtree: true };

// Start observing the elements
observer.observe(subTotalChootaWalaElement, observerOptions);
observer.observe(additionalServicesPriceElement, observerOptions);
// Now whenever the content of either span changes, the total price span will be updated accordingly  


// function duplicateCalculator() {
//   // Get the reference to the "view-price-calculator" div
//   const originalCalculatorDiv = document.querySelector(".view-price-calculator");

//   // Get the reference to the target container div using its unique class name
//   const targetContainerDiv = document.querySelector(".target-container");

//   // Clone the original "view-price-calculator" div
//   // const clonedCalculatorDiv = originalCalculatorDiv.cloneNode(true);

//   // Insert the cloned div into the target location
//   targetContainerDiv.appendChild(clonedCalculatorDiv);
//   console.log('this function is being called')
// }

// // Call the function to duplicate the calculator
// duplicateCalculator();


function toggleAccordionForTabTwo() {
  const accordionContent = document.getElementById("accordion-content-1");

  if (accordionContent.style.display === "none") {
      accordionContent.style.display = "block";
  } else {
      accordionContent.style.display = "none";
  }
}


function toggleAccordionForTabThree() {
  const accordionContent = document.getElementById("accordion-content-2");

  if (accordionContent.style.display === "none") {
      accordionContent.style.display = "block";
  } else {
      accordionContent.style.display = "none";
  }
}


function handleFirstDivNextClick() {
  console.log('it is working');
  // Clone the content of whole-calculator div
  const clonedContent = document.getElementById("whole-calculator").cloneNode(true);
  // Append the cloned content to secondRightDiv
  document.getElementById("secondRightDiv").appendChild(clonedContent);
  // Hide the firstDiv
  document.getElementById("firstDiv").style.display = "none";
}