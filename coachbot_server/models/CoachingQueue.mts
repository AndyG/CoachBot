import User from './User.mjs';

/**
 * This represents an in-memory queue of users waiting for coaching.
 * 
 * NOTE:
 * Currently this queue is only designed for small numbers of users as insertion
 * contains a linear scan through the queue to prevent dupes. Eventually we should index
 * this. 
 */
export default class CoachingQueue {

  private queue: User[];
  private maxCapacity: number;

  // Runs when a new instance is created
  constructor(maxCapacity: number) {
    this.queue = [];
    this.maxCapacity = maxCapacity;
  }

  add(user: User): boolean {
    if (this.queue.length >= this.maxCapacity) {
      console.log(`could not add user: ${user.getName()} to queue (queue at capacity)`);
      return false;
    }

    const exists = this.queue.find(queueUser => queueUser.getId() === user.getId()) != null;
    if (exists) {
      console.log(`could not add user: ${user.getName()} to queue (user already in queue)`);
      return false;
    }

    this.queue.push(user);

    const remainingCapacity = this.maxCapacity - this.queue.length;
    console.log(`added user to queue: ${user.getName()}. queue has remaining capacity: ${remainingCapacity}`);
    return true;
  }

  printQueueAsJSON() {
    console.log(JSON.stringify(this.queue));
  }
}