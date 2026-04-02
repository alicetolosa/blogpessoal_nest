import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";
import { InjectRepository } from "@nestjs/typeorm";

//pasta service: regra de negocio, como os dados vão ser acessados e enviados 
@Injectable()//classe de serviço, que pode ser injetada em outras classes.
export class PostagemService {


    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>
    ){} //ingetando uma classe dentro da classe Postagem

    async findAll(): Promise<Postagem[]>{
        return await this.postagemRepository.find() //find regra que buca todos = select*from 
    }


}