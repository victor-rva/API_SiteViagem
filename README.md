# API_SiteViagem
API de Viagens construída com Node.js, utilizando o banco de dados MySQL com as tabelas: `cidades`, `clientes`, `pedidos`, `categorias`, `pacotes` e `pedidos_pacotes`. A API oferece funcionalidades relacionadas a clientes, pedidos, pacotes de viagem.

## Requisitos
Certifique-se de ter as seguintes dependências instaladas:

- Node.js
- MySQL
- Pacotes NPM: `express`, `mysql2`.

## Configuração do Banco de Dados
1. Crie o banco de dados:

    ```sql
    CREATE DATABASE site_viagem;
    USE site_viagem;
    ```

2. Execute o script SQL fornecido para criar as tabelas.

3. Insira dados de exemplo, se necessário.

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seuusuario/api-viagens.git
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente em um arquivo `.env` na raiz do projeto:

    ```env
    DB_HOST=seu_host
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_DATABASE=site_viagem
    JWT_SECRET=sua_chave_secreta
    ```

## Execução

Execute o servidor:

```bash
npm start
```

O servidor estará disponível em `http://localhost:3000`.

## Rotas e Controladoras

A API possui as seguintes rotas e controladoras:

- `GET /clientes`: Retorna todos os clientes.
- `GET /clientes/:id`: Retorna informações de um cliente específico.
- `POST /clientes`: Cria um novo cliente.
- `PUT /clientes/:id`: Atualiza as informações de um cliente.
- `DELETE /clientes/:id`: Exclui um cliente.

- `GET /pedidos`: Retorna todos os pedidos.
- `GET /pedidos/:id`: Retorna informações de um pedido específico.
- `POST /pedidos`: Cria um novo pedido.
- `PUT /pedidos/:id`: Atualiza as informações de um pedido.
- `DELETE /pedidos/:id`: Exclui um pedido.

- `GET /pacotes`: Retorna todos os pacotes de viagem.
- `GET /pacotes/:id`: Retorna informações de um pacote específico.
- `POST /pacotes`: Cria um novo pacote de viagem.
- `PUT /pacotes/:id`: Atualiza as informações de um pacote de viagem.
- `DELETE /pacotes/:id`: Exclui um pacote de viagem.

## Triggers no Banco de Dados

Duas triggers foram adicionadas ao banco de dados:

1. **decrementar_quantidade**: Após a inserção de um registro na tabela `pedidos_pacotes`, esta trigger decrementa a quantidade disponível do pacote escolhido.

2. **atualizar_quantidade**: Após uma atualização na tabela `pedidos_pacotes`, esta trigger atualiza a quantidade disponível do pacote conforme a diferença na quantidade do pedido.

Lembre-se de manter a consistência entre as funcionalidades da API e as triggers ao fazer modificações nas tabelas.

## Exemplos de Uso

Veja abaixo alguns exemplos de como usar a API:

### Cliente

#### Listar todos os clientes

```bash
curl http://localhost:3000/clientes
```

#### Criar um novo cliente

```bash
curl -X POST -H "Content-Type: application/json" -d '{"nome": "Nome do Cliente", "altura": 1.75, "nascimento": "1990-01-01", "cidade_id": 1}' http://localhost:3000/clientes
```

### Pedido

#### Listar todos os pedidos

```bash
curl http://localhost:3000/pedidos
```

#### Criar um novo pedido

```bash
curl -X POST -H "Content-Type: application/json" -d '{"horario": "2024-02-19 10:00:00", "endereco": "Rua Principal, 123", "cliente_id": 1}' http://localhost:3000/pedidos
```

### Pacote de Viagem

#### Listar todos os pacotes de viagem

```bash
curl http://localhost:3000/pacotes
```

#### Criar um novo pacote de viagem

```bash
curl -X POST -H "Content-Type: application/json" -d '{"nome": "Pacote A", "preco": 1000, "quantidade": 10, "categoria_id": 1, "data_inicio": "2024-03-01", "data_retorno": "2024-03-10", "validade": "2024-02-28", "disponivel": true}' http://localhost:3000/pacotes
```
