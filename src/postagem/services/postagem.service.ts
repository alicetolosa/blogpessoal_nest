import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ILike, Repository, DeleteResult } from "typeorm";
import { Postagem } from "../entities/postagem.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { TemaService } from "../../tema/services/tema.service";



@Injectable() // Decorador para indicar que essa classe é um serviço
export class PostagemService {
    /*findAllByTitulo(titulo: string): Promise<Postagem[]> {
        throw new Error("Method not implemented.");
    }*/

    constructor(
        @InjectRepository(Postagem) // Injeção de dependência, recebe o repositório de postagem
        private postagemRepository: Repository<Postagem>,// Injeção de dependência
        private temaService: TemaService
    ){}
    
  
    async findAll(): Promise<Postagem[]>{ // Promise é uma função assíncrona 
       return await this.postagemRepository.find({
            relations: { //Relação entre tema e usuario 
                tema:  true,  
                usuario: true
            }
       }); // select * from tb_postagem;
       
    }   

    async findById(id: number): Promise<Postagem> {

        const postagem = await this.postagemRepository.findOne({
            where: {
            id
            }
        });

        if (!postagem)
            throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND);
        return postagem;
    }

    async findAllByTitulo(titulo: string): Promise <Postagem[]> {
        return await this.postagemRepository.find({
            where: {
                titulo: ILike(`%${titulo}%`)
            }
        })
    }
    ///aqui
    /*async create (postagem: Postagem):  Promise <Postagem> {
        await this.temaService.findById(postagem.tema.id)
        
        return await this.postagemRepository.save(postagem);

    }*/

    async create(postagem: Postagem): Promise<Postagem> {
       
        if (postagem.tema != null) {
           
            let tema = await this.temaService.findById(postagem.tema.id)
 
            if (!tema)
                throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);
 
              return await this.postagemRepository.save(postagem);
        }else{
            throw new HttpException('Tema nao pode ser nulo!', HttpStatus.NOT_FOUND);
        }
   
    }

    ///aqui
    /*async update (postagem: Postagem): Promise<Postagem> {
        await this.findById(postagem.id)

        await this.temaService.findById(postagem.tema.id)

        return await this.postagemRepository.save(postagem)
    }*/

    async update(postagem: Postagem): Promise<Postagem> {
       
        let buscaPostagem: Postagem = await this.findById(postagem.id);
 
        if (!buscaPostagem || !postagem.id)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);
 
        if (postagem.tema){
           
            let tema = await this.temaService.findById(postagem.tema.id)
               
            if (!tema)
                throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);
               
            return await this.postagemRepository.save(postagem);
   
        }else{
            throw new HttpException('Tema nao pode ser nulo!', HttpStatus.NOT_FOUND);
        }
       
    }

    async delete(id: number): Promise<DeleteResult>{
        await this.findById(id)
        
        return await this.postagemRepository.delete(id)
    }
}