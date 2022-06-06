import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  maxParticipants: number;
}
