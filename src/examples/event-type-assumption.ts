/**
 * By default the "handleEvent()" method is receiving the event of type "AutomationEvent".
 * If you're 100% sure all events received by this automation will be of some more
 * specific type, you can narrow it down right there in the "handleEvent()" declaration.
 *
 * In this example there is only one type of trigger defined: "TimerTrigger". This
 * will make the automation to receive only the "TimerEvent" events. Because of that
 * it's ok to specify the event type inside "handleEvent()" method as a "TimerEvent".
 *
 * This kind of assumption greatly simplifies the automation code. Just keep it in
 * mind when modifying the automation in the future.
 */

import { Automation, TIMER_EVENT_TYPE, TimerEvent, TimerTrigger } from '@hubhazard/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicAutomation extends Automation {
  readonly name = 'Event type assumption example';

  // Declare TimerTrigger. This will make TimerEvent events to be sent to this automation.
  readonly triggers = [TimerTrigger.every(3, 'hours')];

  // Handle the timer event assuming that the event is of type `TimerEvent` instead
  // of generic `AutomationEvent`.
  async handleEvent(event: TimerEvent): Promise<void> {

    // This condition will always return "false"
    if (event.eventType !== TIMER_EVENT_TYPE) {
      throw new Error('I assumed that the event is the TimerEvent.');
    }

  }
}
