// Find all fields and buttons
var button = document.getElementById('save-button');
var heading = document.getElementById('greeting-heading');
var nameField = document.getElementById('name-field');
var greetingField = document.getElementById('greeting-field');

// Function to change the title according to our greeting
var greet = function (greeting, name) {
  heading.innerHTML = greeting + ' ' + name + '!';  
} 

var settings = {}

// Read the settings data from local storage
var settingsData = localStorage.getItem('userSettings');

// If we have any saved settings data, deal with it
if(settingsData != null) {
  settings = JSON.parse(settingsData);
  
  nameField.value = settings.name;
  greetingField.value = settings.greeting;
  
  greet(settings.greeting, settings.name);
}

// Update the settings and greeting when the button is clicked
button.addEventListener('click', function(event){
  var greeting = greetingField.value;
  var name = nameField.value;
  
  greet(greeting, name);
  
  settings.greeting = greeting;
  settings.name = name;
  
  localStorage.setItem('userSettings', JSON.stringify(settings));
})