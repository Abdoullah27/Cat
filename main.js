import Vehicle from "./module1.js";
import Bicycle from "./module2.js";

const vehicle = new Vehicle({
  color: "blue",
  numberOfWheels: 4,
  horn: "beep beep",
});

const honk = vehicle.getHorn();
const wheels = vehicle.getWheels();
const color = vehicle.getColor();

const biCycle = new Bicycle({ color: "red" });
const biWheels = biCycle.getWheels();
const biColor = biCycle.getColor();
const biHorn = biCycle.getHorn();

console.log(honk);
console.log(wheels);
console.log(color);

console.log(biHorn);
console.log(biWheels);
console.log(biColor);
