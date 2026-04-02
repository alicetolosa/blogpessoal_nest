import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
 
@Module({
    imports: [TypeOrmModule.forFeature([Postagem])], //Importa a postagem
    providers: [PostagemService], //define o postagemService como um ...
    controllers: [],
    exports: [TypeOrmModule] //exporta o typeOrmModule
})
export class PostagemModule {}