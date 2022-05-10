import { SourceType } from 'src/enum/source-type';
import { IsString } from 'class-validator';

export class GameMemberDto {
  @IsString()
  sourceId: string;
  @IsString()
  userId: string;
}
