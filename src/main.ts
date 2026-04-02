import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateNested } from 'class-validator';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03:00';//configuração do horario 

  app.useGlobalPipes(new ValidationPipe()) //configuração de validação de dados de entrada

  app.enableCors(); //liceração de cors para permitir requisiçoes de outras origens / diretorio url


  await app.listen(process.env.PORT ?? 4000); //execução da aplicação nest, configuração d aporta 
}
bootstrap();
