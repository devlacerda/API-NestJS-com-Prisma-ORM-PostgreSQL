# 🎓 API de Gestão de Aulas e Alunos – NestJS + Prisma + PostgreSQL

API RESTful construída com **NestJS**, **Prisma ORM** e **PostgreSQL (NeonDB)** para gerenciar Classes de Aula e Alunos. Ideal para aplicações educacionais que exigem organização e relacionamento entre entidades.

---

## 🧱 Domínios da Aplicação

### 📘 ClasseDeAula
- `nome`: nome da classe
- `descricao`: descrição da classe

### 🧑‍🎓 Aluno
- `nome`: nome do aluno
- `email`: e-mail do aluno
- `classeId`: vínculo com a classe de aula

---

## 🚀 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL (NeonDB)](https://neon.tech/)
- [TypeScript](https://www.typescriptlang.org/)

---

## ⚙️ Instalação e Configuração

### 1. Clone o repositório

```bash
git clone 
cd API-NestJS-com-Prisma-ORM-PostgreSQL
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o ambiente

Crie o arquivo `.env` e adicione sua string de conexão:

```env
DATABASE_URL="postgresql://USUARIO:SENHA@HOST/neondb?sslmode=require"
```

---

## 🛠️ Banco de Dados

### Executar Migrations

```bash
npx prisma migrate dev --name init
```

### Rodar Seed (dados iniciais)

```bash
npx prisma db seed
```

---

## ▶️ Iniciando o Servidor

```bash
npm run start:dev
```

A aplicação estará disponível em:

👉 `http://localhost:3000`

---

## 📌 Endpoints

### 📘 ClasseDeAula

- `POST /classe` – Criar nova classe
- `GET /classe` – Listar todas as classes

### 🧑‍🎓 Aluno

- `POST /aluno` – Criar novo aluno vinculado a uma classe
- `GET /aluno` – Listar alunos com o nome da classe

---

## 🧼 Resetar Base de Dados

Para reiniciar os dados durante o desenvolvimento, o seed já contém os comandos:

```ts
await prisma.aluno.deleteMany();
await prisma.classeDeAula.deleteMany();
```

Execute:

```bash
npx prisma db seed
```

---

## 📬 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma *issue* ou *pull request* com melhorias ou correções.