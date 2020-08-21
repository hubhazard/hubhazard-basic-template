import { AutomationsModule, AutomationsService, TimerEventsModule } from '@hubhazard/core';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BasicAutomation } from './automations/basic-automation';

@Module({
  imports: [
    AutomationsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TimerEventsModule /* , HubitatDeviceEventsModule */,
  ],
  providers: [BasicAutomation],
})
export class AppModule {
  constructor(
    private readonly automationsService: AutomationsService,
    private readonly basicAutomation: BasicAutomation,
  ) {
    automationsService.registerAutomation(basicAutomation);
  }
}
