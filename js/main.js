/*
  Create a function named Car with one property named `manufactured_date`
  whose value will be Date.now()
 */
function Car () {
  // Create the manufactured date property (see above)
  this.manufactured_date = Date();
  this.tires = [];
}

/*
  Create a constructor function named Make with one 
  argument that will hold the manufacturer of the Make (see below). 

  Set its prototype to a new instance of the Car function.

  Define a property `manufacturer` and assign the 
  manufacturer property to the argument value.
 */
function Make (maker) {
  this.manufacturer = maker;
}
// Set the prototype to Car
Make.prototype = new Car();

/*
  1. Create a new constructor function for the make of your favorite car.
  2. It must inherit from the general Make function.
  3. It must have one argument that will to hold the model name.
  4. The constructor must define a property to hold the model name.
 */
function Canyonero (name) {
  this.modelName = name;
}
Canyonero.prototype = new Make("Canyonero");

var Krusty = new Canyonero("Sorento");

console.log("Krusty", Krusty);
/*
    1. Create a constructor function named after your favorite car model.
    2. It must inherit from the specific make type you created in previous step.
    3. When creating the inheritance relationship, pass in the model name
       to the make constructor function
*/
function LicensePlate(num){
  this.number = num;
  this.state = "TN";
}

function Charger (plateNum) {
  this.plateNum = null;
  this.plateNum = new LicensePlate(plateNum);

}
Charger.prototype = new Canyonero("Sorento")

var mySuv = new Charger("345-KYP");
console.log("my", mySuv);


// Tires prototype chain

function Tire() {
  this.shape = "round";
}

function Manufacturer (name) {
  this.name = name;
}

Manufacturer.prototype = new Tire();

function tireType(type, name) {
  Manufacturer.call(this, name);
  this.type = type;
  this.PSI = 0;
  this.radius = 0;

}

tireType.prototype = new Manufacturer();

tireType.prototype.setPSI = function(num){
  this.PSI = num;
}

var racingTire = new tireType("racing", "TiresRUs");

console.log("racing", racingTire);


var racing1 = new tireType("racing");
var racing2 = new tireType("racing");
var snow1 = new tireType("snow");
var snow2 = new tireType("snow");

mySuv.tires.push(racing1);

// Set the prototype to appropriate model you created above and set the model name argument
// YourFavoriteModel.prototype = new YourFavoriteMake(...);

/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    1. Create three new instances of your favorite car.
    2. Create a new property on each object to hold the license plate
       number for each car.
*/