// object syntax
var myObject = {
    property: "value",
    property2: 2
}

// Car Example:
var car = {
    make:       "Morris",
    model:      "1100",
    year:       1966,
    paintColor: "blue",
    odometer:   207293.1, // km
    fuel:       30,       // ltrs
    maxFuel:    38.6,     // ltrs
    kmPerLitre: 13.9      // kpl
  }

// Accessing Properties
// We can use the . Member operator to access properties of objects.
console.log(car.year+ " " + car.make + " " + car.model);
car.paintColor = "red"; // change colour to red
console.log("Now my " + car.make + " is " + car.paintColor);
car.odometer += 15; // add 15 to odometer reading
console.log(car.odometer);
car.fuel -= 1.07; // take 1.07ltrs off
console.log(car.fuel);

// Objects in an array 
var users = [
  {
    username: 'Rob',
    profile_image: 'https://i.pravatar.cc/600?img=11',
    age: '32',
    occupation: 'Tattoo Artist'
  },
  {
    username: 'Anna',
    profile_image: 'https://i.pravatar.cc/600?img=36',
    age: '23',
    occupation: 'Graphic Designer'
  },
  {
    username: 'Alan',
    profile_image: 'https://i.pravatar.cc/600?img=50',
    age: '52',
    occupation: 'Comedian'
  },
  {
    username: 'Andrew',
    profile_image: 'https://i.pravatar.cc/600?img=14',
    age: '45',
    occupation: 'Investment Advisor'
  },
  {
    username: 'Steve',
    profile_image: 'https://i.pravatar.cc/600?img=65',
    age: '65',
    occupation: 'Retired Kangaroo Wrangler'
  }
]

// Loop over an array of objects and output it to the DOM:

var results = document.getElementById("results");

function getUsers() {
  for (var i = 0; i < users.length; i++) {
    var user = users[i]
    results.innerHTML += `
      <div class="col-12 col-md-4 pb-5">
        <div class="card">
          <img src="${user.profile_image}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${user.username}</h5>
          <p class="card-text">${user.age}<br>${user.occupation}</p>
          <a href="#" class="btn btn-primary">View profile</a>
          </div>
        </div>                  
      </div>
    `
  }
}

getUsers();