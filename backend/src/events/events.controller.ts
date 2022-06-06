import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { EventsService } from './events.service';
import { RegistrationDetails } from './model/registrationDetails';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get('getAll')
  async getEvents() {
    return await this.eventsService.findAll();
  }

  @Get(':id')
  async getEvent(@Param('id') id: number) {
    return await this.eventsService.findOne(id);
  }

  @Get(':id/participants')
  async getEventWithParticipants(@Param('id') id: number) {
    return await this.eventsService.getEventWithParticipants(id);
  }

  @Post('create')
  async createEvent(@Body() createEventDto: CreateEventDto) {
    return await this.eventsService.createEvent(createEventDto);
  }

  @Get('sample')
  async sampleEvent() {
    return await this.eventsService.seedSample();
  }

  @Post(':eventId/register')
  async register(
    @Param('eventId') eventId: number,
    @Body() registrationDetails: RegistrationDetails,
  ) {
    return await this.eventsService.register(eventId, registrationDetails);
  }
}
