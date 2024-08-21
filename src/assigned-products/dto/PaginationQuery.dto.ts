import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class PaginationQueryFilter {
  @ApiProperty({
    description: 'count of the items',
    example: '5',
    required: false,
  })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  take: number;

  @ApiProperty({
    description:
      'last index of the item can be put 0 for getting first n items',
    example: '5',
    required: false,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  cursor: number;
}
