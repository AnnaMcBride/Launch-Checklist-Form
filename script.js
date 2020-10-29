// Write your JavaScript code here!
window.addEventListener("load", function() {
fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response){
            response.json().then(function(json){
               missionTarget.innerHTML = `
               <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[3].name}</li>
                  <li>Diameter: ${json[3].diameter}</li>
                  <li>Star: ${json[3].star}</li>
                  <li>Distance from Earth: ${json[3].distance}</li>
                  <li>Number of Moons: ${json[3].moons}</li>
               </ol>
               <img src="${json[3].image}">
               `
            })
         }) 
      })
 
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
     event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelNameInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassNameInput = document.querySelector("input[name=cargoMass]");
      
      if (pilotNameInput.value === '' || copilotNameInput.value === '' || fuelLevelNameInput.value === '' || cargoMassNameInput.value === '') {
         alert("All fields are required!")
  
      } 
     
      if (isNaN(fuelLevelNameInput.value) || isNaN(cargoMassNameInput.value)) {
         alert('Please enter a valid number for fuel or cargo.');
      
      }  
          let launchStatus = document.getElementById("launchStatus");
          document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready to launch`;
          document.getElementById("copilotStatus").innerHTML =`Copilot ${copilotNameInput.value} is ready to launch`;
          let fuelStatus = document.getElementById("fuelStatus");
          let cargoStatus = document.getElementById("cargoStatus");
          
          console.log(pilotNameInput.value, copilotNameInput.value, fuelLevelNameInput.value, cargoMassNameInput.value);
          

          if (fuelLevelNameInput.value <= 10000){
             faultyItems.style = ("visibility: visible")
             launchStatus.style = ("color: red");
             launchStatus.innerHTML = ("Shuttle is not ready for launch.")
             fuelStatus.innerHTML = ("Not enough fuel for your journey.")
         
          }

          if (cargoMassNameInput.value >= 10000){
             faultyItems.style = ("visibility: visible")
             launchStatus.style = ("color: red")
             launchStatus.innerHTML = ("Shuttle is not ready to launch.")
             cargoStatus.innerHTML = ("Cargo is too heavy for take off.")
             
          } 
             else if(fuelLevelNameInput.value >= 10000 && cargoMassNameInput.value <= 10000) {
             faultyItems.style = ("visibility: visible")
             launchStatus.style = ("color: green")
             launchStatus.innerHTML = ("Shuttle is ready to launch!")
             cargoStatus.innerHTML = ("Cargo mass low enough for launch")
             fuelStatus.innerHTML = ("Fuel level sufficient for take off.")
             
            } 
            
      
        //event.preventDefault();
   })
         
})

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
