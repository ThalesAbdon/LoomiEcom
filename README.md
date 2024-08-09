# LoomiEcom

## Descrição

Este é um desafio para testar minhas habilidades na construção de APIs. O objetivo é criar um sistema de gerenciamento de e-commerce simplificado utilizando nodejs com nestjs.

## Conteúdo
- [Instalação e Execução](#instalação-e-execução)
- [Postgres Admin](#postegres-admin)
- [Testes da API](#testes-da-api)
- [Features](#features)
    - 1.1 [Criar um usuario](#user)
    - 1.2 [Autenticar um usuário](#user)
    - 1.3 [Criar um Cliente](#criar)
    - 1.4 [Editar um Cliente](#editar)
    - 1.5 [Deletar um Cliente](#deletar)
    - 1.6 [Listar todos os Clientes](#listar)
    - 1.7 [Listar Clientes e filtrá-los](#listar)
    - 1.7 [Criar um Produto](#produto)
    - 1.8 [Editar um Produto](#produto)
    - 1.9 [Deletar um Produto](#deletar)
    - 2.0 [Listar todos os Produtos](#listar)
    - 2.1 [Listar Produtos e filtrá-los](#listar)
    - 2.2 [Criar um Pedido](#pedido)
    - 2.3 [Editar um Pedido](#pedido)
    - 2.4 [Deletar um Pedido](#deletar)
    - 2.5 [Listar todos os Pedidos](#listar)
    - 2.6 [Listar Pedidos e filtrá-los](#listar)
    - 2.7 [Criar um Item](#item)
    - 2.8 [Editar um Item](#item)
    - 2.9 [Deletar um Item](#deletar)
    - 3.0 [Listar todos os Items](#listar)
    - 3.1 [Listar Items e filtrá-los](#listar)
- [Arquitetura](#arquitetura)


## Instalação e Execução

# First Time
 
### 1. Clonar o Repositório

Clone o repositório do GitHub para sua máquina local:

```bash
git clone https://github.com/ThalesAbdon/LoomiEcom.git
```

### 2. Instalar Dependências
Acesse a pasta root
```
cd loomi-ecom
```
Execute o comando:
```
npm install
```
### 3. Configurar Variáveis de Ambiente
Verifique as variavéis de ambiente no arquivo
```
.env.example
```
### 4. Execute o script do Docker
```
sudo docker compose up
```
depois, dê control + C para encerrar o programa

## Depois da primeira vez, não é necessário mais utilizar o docker compose up!

### 5. Container Id
  Primeiro, vamos verificar os id dos containers
  ```
  $sudo docker ps -a
  ```
### 6. Rodar novamente
  Agora, para rodar novamente o programa, basta dar um:
  ```
  $sudo docker start id_container1 id_container2 id_container3
  ```

### 7. Parar a execução  
  Quando quiser parar o sistema, basta dar um:
   ```
  $sudo docker stop id_container1 id_container2 id_container3
  ```
 
# Postegres (DBeaver)
  ## A partir daqui, estou considerando a utilização das variavéis de ambiente que estão no arquivo: ```.env.example```.
  
  ###Sinta-se a vontade para utilizar a ferramenta de administração de banco de dados que quiser!
  ### 1. Acesso ao PGAdmin4
  No navegador e Com o projeto rodando, acesse
  ```
  http://localhost:5050/
  ```
  ### 2. Login
  Como default temos:
  ```Email: admin@admin.com``` e 
  ```Password: root```
  Basta clicar em Login

  ![Interface de login do PgAdmin4](images/Pgadmin-login.png)
  
  ### 3. Servidor
  Provavelmente, quando logar, não haverá um servidor, então clique em adicionar novo servidor

  ![Servidor ](images/add-server.png)

  ### 4. Configurando Servidor
  Na aba geral, tudo que precisa colocar o campo nome ( pode ser qualquer nome, coloquei o nome do projeto place-hub) 

    
  ![Aba General](images/general.png)


  Na aba Conexão, é necessário colocar o campo
  - Host name/address: ```localhost```
  - Username: ```root```
  - Senha: ```root```

  ![Aba conexão](images/connections.png)

  Agora, basta clicar em Salvar

  ### 5. Banco criado
  ![database](images/database.png)

## Testes da API
  Para testar, podemos usar o swagger:
  ```http://localhost:3000/api``` ou um cliente GUI (Postman, insomnia, etc).

  - O Primeiro passo é [Criar um usuario](#user)
  
  - Em seguida, precisamos fazer [a Autenticação de um usuário](#user), ou seja: logar no nosso sistema. Assim, será gerado um Bearer token e com ele poderemos ter acesso aos outros end-points. Em caso de não utilização do Bearer token em uma rota que requer autenticação, iremos receber como retorno o erro:

  ```
  {
    "message": "Forbidden resource",
    "error": "Forbidden",
    "statusCode": 403
  }
  ```
# Features
## User
  -  Gerenciamento autenticação de usuários.
  
  - Usuário pode ser do tipo cliente ou admin.
  
  - Como padrão, quando o sistema é executado pela primeira vez, já possui um usuário do tipo ADMIN.

### Criar um usuário  
  - É uma rota pública, ou seja: qualquer um pode criar um usuário.
  - Para criar um usuário do tipo CLIENTE, utilizamos uma rota POST:
   ```http://localhost:3000/users/client``` 
  - Para criar um usuário do tipo CLIENTE, utilizamos uma rota POST:
   ```http://localhost:3000/users/admin``` 
  - Apenas um usuário ADMIN pode criar um outro usuário do tipo ADMIN.
   
   Ambos end-points utilizam o seguinte json para criação de usuário:
    {
      "name": "Teste",
      "email": "teste@gmail.com",
      "password": "12345678"
    }

### Autenticar um usuário  
  - Depois da criação de uma conta usuário, é enviado um link para o email do usuário com o intuito de validar a conta.
  - Após validação da conta, um usuário poderá fazer Login no sistema.
  - Para Logar no sistema, utilizamos uma rota POST:
    ```http://localhost:3000/users/login``` 
       
   Com o seguinte json:

    {
      "email": "Teste@teste.com",
      "password": "teste123"
    }    
    
  Como retorno, teremos um bearer token:

    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXIiOnsiaWQiOjQsIm5hbWUiOiJUaGFsZXNFcnJvIn19LCJpYXQiOjE3MjEwNjE1NDAsImV4cCI6MTcyMTA2MzM0MH0.xm_J8AYInWm4DOSmFlFC6erSIkI-aVvD5Mz98ir5_LI"
    }  

###É importante lembrar que teremos que utilizar esse token para fazer requisições nos outros endpoints. Ou seja, o usuário precisa estar logado!

Também implementei end-points para:
  - Listar todos os usuários
  - Buscar usuário por id
  - Atualizar um usuário
  - Deletar um usuário

## Client
  - Um usuário do tipo Client pode criar sua conta cliente.
  
  - É Necessário estar autenticado.
  
  - O Cliente é inserido no banco de dados exclusivo para armazenar clientes.

### Criar
  - Para criar um cliente, utilizamos uma rota POST
   ```http://localhost:3000/clients``` 
   
   Com o seguinte json:

    {
      "fullName": "Teste",
      "contact": "91224345244",
      "address": "Rua Teste 360"
    }

### Editar
  - Um cliente pode editar seus dados, utilizamos uma rota PATCH
   ```http://localhost:3000/clients/:id``` 

  - É necessário colocar um id válido! 
  
  - Lembrando que os campos são opcionais, ou seja: podemos mudar apenas algum campo e não necessariamente atualizar TODOS os campos

   Com o seguinte json:

    {
      "fullName": "Teste",
      "contact": "91224345244",
      "address": "Rua Teste 360"
    }

 ## As rotas abaixo (do contexto de cliente) só utilizadas por um usuário do tipo ADMIN
### Deletar
  - Para deletar um cliente, utilizamos uma rota DELETE
   ```http://localhost:3000/cliente/:id``` 
   
  - É necessário colocar um id válido! 

### Listar
  - Essa rota é exclusiva de usuários do tipo ADMIN
  - Para listar todos os Clientes, utilizamos uma rota GET:
   ```http://localhost:3000/clients``` 
   
  - Se não tiver nenhum parametro, então o retorno será de todos os clientes!

  - Também é possível listar por parametros, por exemplo: encontrar todos os clientes que sejam de um mesmo endereço 
     ```http://localhost:3000/clients?fullName=teste``` 

### Encontrar Cliente por um id 
   - Para buscar um cliente pelo id, utilizamos uma rota GET:
   ```http://localhost:3000/clients/:id``` 
   
  - É necessário colocar um id válido! 
## Pedido
  - Um usuário do tipo ADMIN tem acesso total aos endpoints de pedido.

  - Um usuário do tipo CLIENT só tem acesso ao end point de criar e um pedido, afinal de contas: nosso cliente pode fazer um pedido.
  
  - É Necessário estar autenticado.
  
  - O Pedido é inserido no banco de dados exclusivo para armazenar pedidos.

### Criar
  - Para criar um Pedido, utilizamos uma rota POST
   ```http://localhost:3000/orders``` 
   
   Com o seguinte json:

    {
     "products": [{
        "productId": 1,
        "quantity": 1
      }]
    }

### Editar
  - Um Pedido pode ser editado(nesse caso, seria mais sobre atualizar o seu status), utilizamos uma rota PATCH
   ```http://localhost:3000/orders/:id``` 

  - É necessário colocar um id válido! 

  - Lembrando que esse endpoint possui apenas 1 campo

   Com o seguinte json:

    {
    "status": "refused"
    }

### Deletar
  - Para deletar um Pedido, utilizamos uma rota DELETE
   ```http://localhost:3000/orders/:id``` 
   
  - É necessário colocar um id válido! 

### Listar
  - Para listar todos os Pedidos, utilizamos uma rota GET:
   ```http://localhost:3000/orders``` 
   
  - Se não tiver nenhum parametro, então o retorno será de todos os pedidos!

  - Também é possível listar por parametros, por exemplo: encontrar todos os pedidos que sejam de um mesmo endereço 
     ```http://localhost:3000/orders?status=refused``` 

### Encontrar Pedido por um id 
   - Para buscar um pedido pelo id, utilizamos uma rota GET:
   ```http://localhost:3000/orders/:id``` 
   
  - É necessário colocar um id válido!   

## Item
  - Um usuário do tipo CLIENT tem acesso ao end point de criar/remover e alterar os itens do carrinho, afinal de contas: nosso cliente pode comprar o carrinho ( os itens que estão dentro dele).
  
  - É Necessário estar autenticado.
  
  - O item é inserido no banco de dados exclusivo para armazenar itens.

### Criar
  - Para criar um Item, utilizamos uma rota POST
   ```http://localhost:3000/items``` 
   
   Com o seguinte json:

    {
     "orderId": 1,
     "productId": 1,
     "quantity": 10
    }

### Editar
  - Um Item (do carrinho ) pode ser editado, utilizamos uma rota PATCH
   ```http://localhost:3000/items/:id``` 

  - É necessário colocar um id válido! 

  - Lembrando que esse endpoint possui apenas 1 campo para ser alterado: a quantidade de um item específico do carrinho

   Com o seguinte json:

    {
    "quantity": 100
    }

### Deletar
  - Para deletar um Item, utilizamos uma rota DELETE
   ```http://localhost:3000/items/:id``` 
   
  - É necessário colocar um id válido! 

### Listar
  - Para listar todos os Items, utilizamos uma rota GET:
   ```http://localhost:3000/items``` 
   
  - Se não tiver nenhum parametro, então o retorno será de todos os items!

  - Também é possível listar por parametros, por exemplo: encontrar todos os items que sejam de um mesmo pedido 
     ```http://localhost:3000/items?orderId=1``` 

### Encontrar Pedido por um id 
   - Para buscar um item pelo id, utilizamos uma rota GET:
   ```http://localhost:3000/items/:id``` 
   
  - É necessário colocar um id válido!   

## Arquitetura


