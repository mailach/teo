import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './model/event';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
  ) {}

  findAll(): Promise<Event[]> {
    return this.eventsRepository.find();
  }

  seedSample() {
    const sampleEvent = {
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
