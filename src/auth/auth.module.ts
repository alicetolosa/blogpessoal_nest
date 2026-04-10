import { forwardRef, Module } from "@nestjs/common";
import { Bcrypt } from "./bcrypt/bcrypt";
import { UsuarioModule } from "../usuario/usuario.module";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constantes/constants";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
import { LocalStrategy } from "./strategy/local.strategy";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./strategy/jwt.strategy";

@Module({
    imports: [
        forwardRef(() => UsuarioModule),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn:"24h",}
        })
    ],
    providers: [Bcrypt, AuthService,LocalStrategy, JwtStrategy],
    controllers: [AuthController],
    exports: [Bcrypt],
})
export class AuthModule {};