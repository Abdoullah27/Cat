import Vehicle from "./module1.js";

export default class Bicycle extends Vehicle {
  constructor({ color, horn = "honk honk" }) {
    super({ color, numberOfWheels: 2, horn });
  }
}
