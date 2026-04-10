import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class Bcrypt{

    //metodo de criptografia que bagunça a senha 
    async criptografarSenha(senha: string): Promise<string> {

        let saltos: number = 10;                 //saltos faz essa bagunça 10x
        return await bcrypt.hash(senha, saltos); //o hash bagunça a senha

    }

    //metodo para identificar a senha 
    async compararSenhas(senhaDigitada: string, senhaBanco: string): Promise<boolean> {
        return await bcrypt.compare(senhaDigitada, senhaBanco);
    }

}