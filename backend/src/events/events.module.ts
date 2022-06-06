import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { Event } from './model/event.entity';
import { Registration } from './model/registration.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Event]),
    TypeOrmModule.forFeature([Registration]),
  ],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
