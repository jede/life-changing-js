var button = document.getElementById('save-button');
var heading = document.getElementById('greeting-heading');
var nameField = document.getElementById('name-field');

button.addEventListener('click', function(event){
  var name = nameField.value;
  heading.innerHTML = 'Hello ' + name + '!';
});