# 🚀 Blog Pessoal API

O Blog Pessoal é uma API REST completa que simula o funcionamento de um sistema de blog, permitindo criar, listar, atualizar e deletar conteúdos, além de gerenciar usuários e autenticação.

Este projeto foi desenvolvido com foco em boas práticas de backend, arquitetura organizada e segurança de aplicações, sendo uma aplicação robusta para portfólio.


### A aplicação segue a arquitetura modular do NestJS:

>📦 src
- ┣ 📂 postagem
- ┣ 📂 tema
- ┣ 📂 usuario
- ┣ 📂 auth
- ┗ 📜 app.module.ts

## ⚙️ Funcionalidades 
### 📝 Postagens (CRUD)
> - ✅ Listar todas
> - 🔍 Buscar por ID
> - 🔎 Buscar por título
> - ➕ Criar
> - ✏️ Atualizar
> - ❌ Deletar

### 🎯 Temas
- Criar temas
- Relacionar com postagens
- Organizar conteúdos

### 👤 Usuários & Autenticação
- Cadastro de usuários
- Login
- Proteção de rotas
- Segurança da aplicação

## 🗄️ Banco de Dados

Banco relacional utilizando MySQL, com modelagem baseada em DER.

🔗 Relacionamentos:
-
- Um Tema possui várias Postagens
- Um Usuário pode criar várias Postagens


## 📚 Conceitos Aplicados
>- 🌐 Protocolo HTTP
>- 🔗 API REST
>- 🗄️ Banco de dados com MySQL
>- 🔄 ORM com TypeORM
>- 🧩 Arquitetura em camadas (Controller, Service, Module)
>- 🔐 Segurança com autenticação
>- 🔄 Relacionamento entre entidades
>- 🎯 Objetivo do Projeto

Este projeto foi desenvolvido para consolidar conhecimentos em desenvolvimento backend, com foco em tecnologias modernas e boas práticas exigidas pelo mercado.

### 💡 Melhorias Futuras
📄 Documentação com **Swagger**
☁️ **Deploy** em nuvem (**Render** / Railway / AWS)
🧪 Testes automatizados

### 👩‍💻 Autora

Alice de Oliveira Tolosa

🔗 LinkedIn : https://www.linkedin.com/in/alice-oliveira81/

🔗 GitHub : https://github.com/alicetolosa