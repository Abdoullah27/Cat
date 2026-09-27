export default class Vehicle {
  constructor({ color = "blue", numberOfWheels = 4, horn = "beep beep" }) {
    this.color = color;
    this.numberOfWheels = numberOfWheels;
    this.horn = horn;
  }

  getColor() {
    return this.color;
  }

  getWheels() {
    return this.numberOfWheels;
  }
  getHorn() {
    return this.horn;
  }
}
