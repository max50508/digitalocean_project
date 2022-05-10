import { Client, WebhookEvent } from '@line/bot-sdk';
import { Res } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Req } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Request, Response } from 'express';
import { AppService } from './app.service';
import { client } from './config/client';
import { CreateGameDto } from './api/create-game-bot/dto/create-game.dto';
import { CreateGame } from './entities/create-game.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, // private eventEmitter: EventEmitter2,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
