//Homework 5 - All the Object Notations

//Literal Notation for the pizzaRestaurant object
let pizzaRestaurant = {
  name: "Pizza Magic",
  location: "Partizanska St",
  openHours: "11 AM - 11 PM",
  garden: true,
  menu: [
    "Margherita",
    "Pepperoni",
    "Vegetarian",
    "BBQ Chicken",
    "Hawaiian",
    "Spinach & Ricotta",
    "Four Cheese",
  ],
  offerDelivery: true,
  showMenu: function () {
    console.log("Our Pizza Menu:");
    for (let pizza of this.menu) {
      console.log(pizza); // Print each pizza name from the menu
    }
  },
  // New method to check if delivery is available
  checkDeliveryAvailability: function () {
    if (this.offerDelivery) {
      console.log(
        "Delivery is available! We can bring your pizza to your door."
      );
    } else {
      console.log("Sorry, we do not offer delivery at the moment.");
    }
  },
};

console.log(pizzaRestaurant);
console.log(pizzaRestaurant.name);
console.log(pizzaRestaurant.location);
console.log(pizzaRestaurant.openHours);
pizzaRestaurant.showMenu();
pizzaRestaurant.checkDeliveryAvailability();

// Add property or method after the obejct is created
// Adding the wifiAvailable property
pizzaRestaurant.wifiAvailable = true;
// Displaying the updated object
console.log(pizzaRestaurant);

// Adding a new property
pizzaRestaurant["email"] = "contact@pizzamagic.com";
console.log(pizzaRestaurant.email);

// Object Notation for Cinema
// constructor Function with new Object()

// Create a new empty object called 'cinema' using the constructor notation
let cinema = new Object();

//Add properties to the 'cinema' object using dot notation
cinema.name = "MoviePalace";
cinema.location = "Partizanska St";
cinema.numberOfScreens = 10;
cinema.has3D = true;
cinema.isOpen = true;
cinema.capacity = 100;
cinema.currentMovies = ["The Lord of the Rings", "Barbie", "The Marvels"];

// Define a method for the 'cinema' object to check if a movie is available in 3D
cinema.is3DAvailable = function (movie) {
  if (this.has3D) {
    console.log(`${movie} is available in 3D.`);
  } else {
    console.log(`${movie} is not available in 3D.`);
  }
};

console.log(cinema);
console.log(cinema.name);
console.log(cinema.location);
console.log(cinema.currentMovies);
cinema.is3DAvailable("Barbie");

//  Create an object using Constructor Function
// Constructor function to create a 'Bakery' object
function Bakery(name, location, phone, openHours, menu , deliveryAvailable) {
  this.name = name;
  this.location = location;
  this.phone = phone;
  this.openHours = openHours;
  this.menu = menu;
  this.deliveryAvailable = deliveryAvailable;
  // Method to check if the bakery offers delivery
  this.checkDelivery = function () {
    if (this.deliveryAvailable) {
      console.log(`${this.name} offers delivery.`);
    } else {
      console.log(`${this.name} does not offer delivery.`);
    }
  };
  this.calculateSales = function(prices) {
    let totalSales = 0;
    for (let i = 0; i < this.menu.length; i++) {
        totalSales = totalSales + prices[i]; 
    }
    console.log(`Total sales for the bakery: $${totalSales}`);
};
}
let menu = ["Croissants", "Breads", "Cakes", "Brownies", "Cookies", "Specialty Treats", "Drinks"];
let prices = [3, 2, 5, 4, 3, 6, 7]; 
let myBakery = new Bakery("Baked Bliss", "Partizanska St", "123-456-7890", "7 AM - 9 PM", menu, true);
console.log(myBakery);
myBakery.checkDelivery();  
myBakery.calculateSales(prices);  