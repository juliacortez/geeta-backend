<p align="center">
<img src="https://i.ibb.co/h2vNyP2/Novo-Projeto-30.png" width="800px" alt="logo">
  </p>
  
  <p align="center">
  <a href="https://github.com/juliacortez/geeta-backend/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/juliacortez/movies-app?color=blue&style=for-the-badge"></a>
 </p>
 
 <h2>⚛️ﾠSobre</h2>
Projeto backend realizado durante o curso web fullstack da <a href="https://www.labenu.com.br/">Labenu</a>. API criada com a finalidade de controlar os produtos da loja de roupas online fictícia, Geeta. Utilizando esta API é possível criar um novo usuário os diferenciando por seus papéis, cliente ou administrador. As senhas cadastradas são criptografadas e então guardadas no banco de dados. Um token é gerado quando o usuário é criado e ao realizar login. Utilizando o token de administrador pode-se criar novos tamanhos, tags e produtos no banco de dados, além de deletar essas informações de acordo com o ID, que é gerado automaticamente ao se cadastrar uma nova informação. Também estão disponíveis requisições para retornar os produtos, tags e tamanhos cadastrados no banco de dados. 

<h2>🔗 Documentação</h2>
<a href="https://documenter.getpostman.com/view/17588272/UVyuTvDu">Geeta Backend</a>

<h2>🛠️ Tecnologias</h2>
<li><a href="https://nodejs.org/en/">Node.js</a> (v14.17.4)</li>
<li><a href="https://www.typescriptlang.org/">Typescript</a> (v4.6.3)</li>
<li><a href="http://expressjs.com/pt-br/">Express</a> (v4.17.3)</li>
<li><a href="https://knexjs.org/">Knex</a> (v1.0.4)</li>
<li><a href="https://www.npmjs.com/package/bcrypt">Bcryptjs</a> (v2.4.3)</li>
<li><a href="https://www.npmjs.com/package/cors">Cors</a> (v2.8.5)</li>
<li><a href="https://www.npmjs.com/package/jsonwebtoken">Jsonwebtoken</a> (v8.5.1)</li>
<li><a href="https://npm.io/package/uuid">UUID</a> (v8.3.2)</li>
<li><a href="https://www.npmjs.com/package/mysql">MySQL</a> (v2.18.1)</li>

<h2>💻 Pré-requisitos</h2>
Antes de começar você vai precisar ter instalado em sua máquina as seguintes ferramentas:
<a href="https://git-scm.com">Git</a>, <a href="https://nodejs.org.en/">Node.js</a>.
Além disto ter um editor para trabalhar com o código, para o desenvolvimento deste projeto foi utilizado o <a href="https://code.visualstudio.com/">VSCode</a>.

<h2>🚀 Rodando o projeto</h2>

```bash
# Clone este repositório
# HTTPS
$ git clone https://github.com/juliacortez/geeta-backend.git

# CLI
$ gh repo clone gh repo clone juliacortez/geeta-backend

# Acesse a pasta do projeto no terminal/cmd
$ cd geeta-backend

# Instale as dependências
$ npm install

# Execute o comando para iniciar a aplicação
$ npm run start

# O servidor iniciará na porta:3003 

# Se necessário execute o comando para criar as tabelas
$ npm run migrations
```

<h2>👩🏻‍💻 Desenvolvedora</h2>
<div><a href="https://github.com/juliacortez">
  <img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C5603AQFLn8A145Rfww/profile-displayphoto-shrink_800_800/0/1635911104301?e=1653523200&v=beta&t=E3V1eTckX1gq0-7eq5AfRaumATFbuLsufB8lHpNa4zk" width="150px" alt="Julia Cortez">
<br />
  <sub><b>Julia Cortez</sub></b></a>
  
  <br />
  Entre em contato!<br />
  <a href="https://www.linkedin.com/in/juliacortez-98/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
  <a href="mailto:juliacortez984@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
</div>
