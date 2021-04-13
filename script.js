// Write your JavaScript code here!
   
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
     let pilotNameInput = form.elements['pilotName'].value;
     let copilotName = document.querySelector("input[name=copilotName]");
     let fuelLevelInput = form.elements['fuelLevel'].value;
     let cargoMassInput = form.elements['cargoMass'].value;
     if (pilotNameInput === "" || copilotName.value === "" || fuelLevelInput === "" || cargoMassInput === "") {
         alert("All fields are required!");
     //  stop the form submission
     event.preventDefault();
      };
   });
 });



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
