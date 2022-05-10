import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateGameBotModule } from './api/create-game-bot/create-game-bot.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateGame } from './entities/create-game.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      // host:process.env.POSTGRES_HOST,
      // port:parseInt(<string>process.env.POSTGRES_PORT),
      // username:process.env.DATABASE_USERNAME,
      // password:process.env.POSTGRES_PASSWORD,
      // database:process.env.POSTGRES_DATABASE,
      host: process.env.DATABASE_HOST,
      port: parseInt(<string>process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      autoLoadEntities: true,
      synchronize: true,
      entities: [CreateGame],
    }),
    CreateGameBotModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
