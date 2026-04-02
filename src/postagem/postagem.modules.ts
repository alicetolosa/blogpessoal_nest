import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import { PostagemController } from "./controller/postagem.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])], // Importa o Postagem como uma entidade do TypeORM
    providers: [PostagemService], // Define o PostagemService como um provedor
    controllers: [PostagemController],//Define a postagemcontroler como contralador
    exports: [TypeOrmModule] // Exporta o TypeOrmModule
})
export class PostagemModule {}  // Exporta a classe PostagemModule