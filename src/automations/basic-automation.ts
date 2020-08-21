import { Automation, TimerTrigger } from '@hubhazard/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicAutomation extends Automation {
  // Each automation needs to have a unique name
  readonly name = 'Basic automation';

  // Register trigger that will execute this automation every 15 seconds
  readonly triggers = [TimerTrigger.every(15, 'seconds')];

  // A variable to count number of times the automation was triggered
  private counter = 0;

  // Handle the timer event
  async handleEvent(): Promise<void> {
    this.counter++;
    console.log(`Triggered the '${this.name}' ${this.counter} times.`);
  }
}
