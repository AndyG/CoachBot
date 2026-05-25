import User from './User.mjs';

export default class CoachingQueue {

  private maxCapacity: number;

  // Runs when a new instance is created
  constructor(maxCapacity: number) {
    this.maxCapacity = maxCapacity;
  }

  add(user: User) {
    console.log(`adding user to queue: ${user.getName()}. queue has max size: ${this.maxCapacity}`);
  }

  // Method available to all instances
  printInfo() {
    return `CoachingQueue has maxCapacity: ${this.maxCapacity}`;
  }
}