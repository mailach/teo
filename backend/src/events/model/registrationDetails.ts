import { ApiProperty } from '@nestjs/swagger';

export class RegistrationDetails {
  @ApiProperty()
  name: string;

  @ApiProperty()
  food: string;

  @ApiProperty()
  allergies: string;
}
