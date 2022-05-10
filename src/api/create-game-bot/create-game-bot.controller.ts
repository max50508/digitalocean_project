import { Client } from '@line/bot-sdk';
import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateGameBotService } from './create-game-bot.service';
import { CreateGameDto } from './dto/create-game.dto';

@Controller('')
export class CreateGameBotController {
  constructor(private readonly createGameBotService: CreateGameBotService) {}

  @Post('webhook')
  async test(@Req() req: Request & { client: Client }) {
    const origin = req.body.events[0];
    console.log(origin);
    if (origin.message.type === 'image') {
      await this.createGameBotService.uploadFile(origin.message.id);
      await this.createGameBotService.downloadFile(origin);
    }
    const createGame: CreateGameDto = {
      replyToken: origin.replyToken,
      sourceType: origin.source.type,
      sourceId: origin.source.groupId,
    };
    switch (origin.message.text) {
      case '建立球局':
        await this.createGameBotService.createGame(createGame);
        break;
      case '+1':
        const joinMember = {
          userId: origin.source.userId,
          sourceId: origin.source.groupId,
        };
        await this.createGameBotService.joinMember(joinMember);
        break;
      case '-1':
        const deleteMember = {
          userId: origin.source.userId,
          sourceId: origin.source.groupId,
        };
        await this.createGameBotService.deleteMember(deleteMember);
        break;
      case '名單':
        await this.createGameBotService.memberList(
          origin.source.groupId,
          origin.replyToken,
        );
        break;
      case '結束球局':
        await this.createGameBotService.endGame(
          origin.source.groupId,
          origin.replyToken,
        );
        break;
    }
  }
}
