import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', //tipo do banco de dados
      host: 'localhost', //local do banco de daos
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_blogpessoal', //nome do banco de dados construido
      entities: [Postagem],
      synchronize: true
  })
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
