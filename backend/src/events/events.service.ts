import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './model/event.entity';
import { Registration } from './model/registration.entity';
import { RegistrationDetails } from './model/registrationDetails';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
    @InjectRepository(Registration)
    private registrationsRepository: Repository<Registration>,
  ) {}

  findAll(): Promise<Event[]> {
    return this.eventsRepository.find();
  }

  findOne(id: number): Promise<Event> {
    return this.eventsRepository.findOne({ where: { id } });
  }

  async register(eventId: number, registrationDetails: RegistrationDetails) {
    const event = await this.findOne(eventId);
    return this.registrationsRepository.save({
      event: event,
      registrationDetails: registrationDetails,
    });
  }

  createEvent(createEventDto: CreateEventDto) {
    return this.eventsRepository.save(createEventDto);
  }

  getEventWithParticipants(id: number) {
    return this.eventsRepository.findOne({
      relations: { registrations: true },
      where: { id },
    });
  }

  seedSample() {
    const sampleEvent: CreateEventDto = {
      title: 'Hello World!',
      date: new Date(),
      maxParticipants: 10,
    };

    return this.eventsRepository.save(sampleEvent);
  }

  getEvents() {
    return { title: 'Hello World!', date: '01.01.2020', max: 10 };
  }
}
