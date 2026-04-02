import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

//entity: serva para modelar o objeto
@Entity({name: "tb_postagem"}) //Criar-atualizar uma tabela chamada postagem/ transformar a classe em uma entidade 
export class Postagem {
    
    @PrimaryGeneratedColumn() //Criar uma chave primaria e auto increment
    id!: number;

    @IsNotEmpty()//verificar se esta sendo preenchido/vazio
    @Column({length:100, nullable:false})//criar variavel titulo como coluna + vachar de caracteres
    titulo!: string;

    @IsNotEmpty()
    @Column({length:1000, nullable:false})
    texto!: string;

    @UpdateDateColumn()//coluna de data : atualizada automaticamente pelo sistema
    data!: Date;

}