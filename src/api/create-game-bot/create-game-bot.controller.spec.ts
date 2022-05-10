import { Test, TestingModule } from '@nestjs/testing';
import { CreateGameBotController } from './create-game-bot.controller';
import { CreateGameBotService } from './create-game-bot.service';

describe('CreateGameBotController', () => {
  let controller: CreateGameBotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateGameBotController],
      providers: [CreateGameBotService],
    }).compile();

    controller = module.get<CreateGameBotController>(CreateGameBotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
