// Write your JavaScript code here!
const pilotStatus = document.getElementById('pilotStatus');
const copilotStatus = document.getElementById('copilotStatus');
  

window.addEventListener("load", function() {
   // alert("page load?");
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      // alert("Time to see your Mission Destination!")
         response.json().then( function(json) {
            // alert("ready to utilize info");
            // console.log(response);
            const div = document.getElementById("missionTarget");
            let index = 0;
               div.innerHTML = `
                  <h2>Mission Destination</h2>
                  <ol>
                     <li>Name: ${json[index].name}</li>
                     <li>Diameter: ${json[index].diameter}</li>
                     <li>Star: ${json[index].star}</li>
                     <li>Distance from Earth: ${json[index].distance}</li>
                     <li>Number of Moons: ${json[index].moons}</li>
                  </ol>
                  <img src="${json[index].image}">
               `
               index = (index + 1) % json.length;
         });
   })
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      // alert("subit event activated");
      event.preventDefault();
   //   document.getElementById("pilotStatus").innerHTML += pilotNameInput;
     let pilotNameInput = form.elements['pilotName'].value;
     let copilotNameInput = form.elements['copilotName'].value;
     let fuelLevelInput = form.elements['fuelLevel'].value;
     let cargoMassInput = form.elements['cargoMass'].value;
     if (pilotNameInput === "" || copilotNameInput === "" || fuelLevelInput === "" || cargoMassInput === "") {
         alert("All fields are required!");
         //  stop the form submission
      };
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput} Ready`;
      document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotNameInput} Ready`;
      if (fuelLevelInput < 10000) {
         // alert(`fuel Level is ${fuelLevelInput}`);
         document.getElementById("faultyItems").style.visibility = 'visible';
         document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
         document.getElementById("launchStatus").style="color: red;"
      }
      if (cargoMassInput > 10000) {
         // alert(`cargo is ${cargoMassInput}`);
         document.getElementById("faultyItems").style.visibility = 'visible';
         document.getElementById("cargoStatus").innerHTML = `Too much cargo mass for launch`;
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
         document.getElementById("launchStatus").style="color: red;"
      }
      if (cargoMassInput <= 10000 && fuelLevelInput >= 10000) {
         document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch`;
         document.getElementById("launchStatus").style="color: green;"

      }   
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
