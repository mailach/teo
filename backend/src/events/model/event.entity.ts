import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Registration } from './registration.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  date: Date;

  @Column()
  maxParticipants: number;

  @OneToMany(() => Registration, (registration) => registration.event)
  registrations: Registration[];
}
