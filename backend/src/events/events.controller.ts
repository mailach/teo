import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get('getAll')
  async getEvents() {
    return await this.eventsService.findAll();
  }

  @Post('create')
  async createEvent(@Body() createEventDto: CreateEventDto) {
    return await this.eventsService.createEvent(createEventDto);
  }

  @Get('sample')
  async sampleEvent() {
    return await this.eventsService.seedSample();
  }
}
