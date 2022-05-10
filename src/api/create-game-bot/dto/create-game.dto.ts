import { SourceType } from 'src/enum/source-type';
import { IsString } from 'class-validator';

export class CreateGameDto {
  @IsString()
  replyToken: string;
  @IsString()
  sourceId: string;
  sourceType: SourceType;
}
