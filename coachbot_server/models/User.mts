export default class User {

  private name: string;
  private id: string;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  printInfo() {
    return `Username: ${this.name} -- ID: ${this.id}`;
  }
}