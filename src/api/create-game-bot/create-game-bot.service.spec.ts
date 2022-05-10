import { Test, TestingModule } from '@nestjs/testing';
import { CreateGameBotService } from './create-game-bot.service';

describe('CreateGameBotService', () => {
  let service: CreateGameBotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateGameBotService],
    }).compile();

    service = module.get<CreateGameBotService>(CreateGameBotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
