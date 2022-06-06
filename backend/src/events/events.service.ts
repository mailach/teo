import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './model/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
  ) {}

  findAll(): Promise<Event[]> {
    return this.eventsRepository.find();
  }

  findOne(id: number): Promise<Event> {
    return this.eventsRepository.findOne({ where: { id } });
  }
  createEvent(createEventDto: CreateEventDto) {
    return this.eventsRepository.save(createEventDto);
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
