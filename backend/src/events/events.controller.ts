import { Controller, Get } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get('get')
  async getEvents() {
    return await this.eventsService.findAll();
  }

  @Get('sample')
  async sampleEvent() {
    return await this.eventsService.seedSample();
  }
}
