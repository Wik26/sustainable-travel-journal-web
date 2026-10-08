// --- Carbon Footprint Calculator ---

document.getElementById("calcBtn").addEventListener("click", function(event) { // find button, listen for click and run function
  event.preventDefault();

  let distance = document.getElementById("distance").value; // get value from input field 
  let transport = document.getElementById("transport").value;

  distance = Number(distance); // converts distance into number

  let factor = 0; // let to change variables later

  if (transport === "car"){ // decides on factor based on transport type
    factor = 0.17;
  } else if (transport === "plane"){
    factor = 0.15;
  } else if (transport === "train"){
    factor = 0.04;
  }

  const footprint = distance * factor; // calculate emissions - const when variables do not change

  document.getElementById("result").textContent = "Your Estimated CO2 Emissions Are: " + footprint.toFixed(2) + " kg";
}); // finds and updates result with emission, tofixed(2) round 2 decimal places

// Reference
// CO2 Calculator - DJ Oamen. (2025, August 16). How to Create Footprint Calculator With JavaScript, HTML, and CSS [Video]. https://www.youtube.com/watch?v=fbtyjtfmRWA
// Factors - Ritchie, H. (2023). Which form of transport has the smallest carbon footprint?. OurWorldinData. https://ourworldindata.org/travel-carbon-footprint