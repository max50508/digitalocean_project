import { Module } from '@nestjs/common';
import { CreateGameBotService } from './create-game-bot.service';
import { CreateGameBotController } from './create-game-bot.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateGame } from '../../entities/create-game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CreateGame])],
  controllers: [CreateGameBotController],
  providers: [CreateGameBotService],
})
export class CreateGameBotModule {}
