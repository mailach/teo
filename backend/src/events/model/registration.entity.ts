import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Event } from './event.entity';
import { RegistrationDetails } from './registrationDetails';

@Entity()
export class Registration {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event, (event) => event.registrations)
  event: Event;

  @Column({ type: 'jsonb' })
  registrationDetails: RegistrationDetails;

  @CreateDateColumn()
  registeredAt: Date;
}
