/* 
car factory for block21

Write code that defines constructor function called car
that creates a new object with these properties: make, model, and year

Add a method called getDescription to the Car prototype, 
which returns a string containing information about the car.

Define the ElectricCar function as a subclass of Car.
Include an additional property called range that represents the range of the electric car in miles.

Have the ElectricCar prototype override the getDescription method of the Car prototype 
with a new implementation that includes information about the range of the electric car.

Create an instance of ElectricCar with the make "Tesla", model "Model S", year 2019, 
and range 300, and the getDescription method is called on the instance. 
The output will be a string containing the make, model, year, and range of the electric car.

*/


//constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
};

//prototype method added

Car.prototype.getDescription = function () {
    return `make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
};

//define EletricCar function as subclass of Car adding range property

function ElectricCar(make, model, year, range) {
    Car.call(this, make, model, year);
    this.range = range;
};

//ElectricCar to inherit from Car prototype

ElectricCar.prototype = Object.create(Car.prototype);

//ElectricCar prototype method will override the Car prototype method returning car descrsption and range

ElectricCar.prototype.getDescription = function() {
    const carDescription = Car.prototype.getDescription.call(this);
    return `${carDescription}, Range: ${this.range} miles`;
};

//create instance using Make:Tesla, Model:S, Year:2019, and Range:300

const Tesla = new ElectricCar("Tesla", "Model S", 2019, 300);

//console.log get Description method on new instance Tesla

console.log(Tesla.getDescription());



