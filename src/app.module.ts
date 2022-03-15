import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiModule } from './api/api.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'salmonstats.cvnhaeamj7ra.ap-northeast-1.rds.amazonaws.com',
      port: 3306,
      username: 'tkgstrator',
      password: 'nagato0408',
      database: 'salmonstats',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ApiModule,
  ],
})
export class AppModule {}
