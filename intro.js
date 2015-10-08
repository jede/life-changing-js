// Basics

//// Inline
document.write('Hello World!');

//// File


// Variables

var myvar;
myvar = 5;
myvar = true;
myvar = 'hello';

document.write(myvar);

// Operators

var five = 5;
var two = 2;

var result = five + two; // => 7


// Strings

var hello = 'Hej';
var name = ' JavaScript';

document.write(hello + name);

document.write(hello.length);
document.write(hello.substring(0,3));


// Arrays

var a = new Array();
a[0] = 'Hyper';
a[1] = 'Island';
a[2] = 'codes';

document.write(a[0] + a[1] + a[2]);
document.write(a.join(' '));

a = [1, 2, 3];

// Objects

var o = new Object();
var o = {};
o['name'] = 'Johannes';
o['mode'] = 'hyper';


document.write(o['mode']);

o.name = 'Johannes';
document.write(o.name);


var o = {
  name: 'Johannes',
  mode: 'happy'
};

document.write(JSON.stringify(o));

// Functions

function sayHi() {
  document.write('Hello');
}

sayHi();

var sayHi = function (name) {
  document.write('Hello ' + name);
}

sayHi('Johannes');
sayHi('Hyper Island');


// Flow control

var a = 7;
if(a > 5) {
  alert('It works!');
}

var a = 'hyper';
if(a == 'hyper') {
  alert('It works!');
}


for(var i = 0; i < 5; i++) {
  document.write(i + '<br>')
}

// DOM Manipulation

var heading = document.getElementById('unique-heading')
heading.innerHTML = 'this is unique'
heading.style.backgroundColor = 'tomato';



var elements = document.getElementsByClassName('hyper-headings');

var heading = elements[0];
heading.innerHTML = 'found you!'

for(var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.innerHTML = 'hello ' + i
}


var heading = document.createElement('h1');
heading.innerHTML = 'This is a heading';
document.body.appendChild(heading);

// Events

heading.addEventListener('click', function(event){
  heading.style.background = 'turquoise';
})

// CSS transitions

// Hover button

var button = document.getElementById('suprise-button')
button.classList.add('make-it-pop')

button.addEventListener('click', function(event){
  button.classList.add('make-it-pop')
})


// Local storage

var button = document.getElementById('button');
var heading = document.getElementById('heading');
var textField = document.getElementById('text-field');

var greet = function (name) {
  heading.innerHTML = 'Hello ' + name + '!';  
} 

var name = localStorage.getItem('userName');
if(name != null) {
  greet(name);
  textField.value = name;
}

button.addEventListener('click', function(event){
  var name = textField.value;
  greet(name);
  localStorage.setItem('userName', name);
})










