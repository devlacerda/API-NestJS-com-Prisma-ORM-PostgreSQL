import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 🔄 Limpar dados existentes (importante para evitar erro de duplicação)
  await prisma.aluno.deleteMany();
  await prisma.classeDeAula.deleteMany();

  // 🏫 Criar classes
  const matematica = await prisma.classeDeAula.create({
    data: {
      nome: 'Matemática',
      descricao: 'Turma de Matemática Avançada',
    },
  });

  const portugues = await prisma.classeDeAula.create({
    data: {
      nome: 'Português',
      descricao: 'Turma de Literatura e Gramática',
    },
  });

  const historia = await prisma.classeDeAula.create({
    data: {
      nome: 'História',
      descricao: 'Estudos históricos do Brasil e do mundo',
    },
  });

  // 👩‍🎓 Criar alunos
  await prisma.aluno.createMany({
    data: [
      // Alunos de Matemática
      {
        nome: 'João Silva',
        email: 'joao.silva1@example.com',
        classeDeAulaId: matematica.id,
      },
      {
        nome: 'Ana Costa',
        email: 'ana.costa1@example.com',
        classeDeAulaId: matematica.id,
      },
      {
        nome: 'Carlos Dias',
        email: 'carlos.dias1@example.com',
        classeDeAulaId: matematica.id,
      },

      // Alunos de Português
      {
        nome: 'Beatriz Souza',
        email: 'beatriz.souza1@example.com',
        classeDeAulaId: portugues.id,
      },
      {
        nome: 'Rafael Gomes',
        email: 'rafael.gomes1@example.com',
        classeDeAulaId: portugues.id,
      },

      // Alunos de História
      {
        nome: 'Luciana Lima',
        email: 'luciana.lima1@example.com',
        classeDeAulaId: historia.id,
      },
      {
        nome: 'Pedro Henrique',
        email: 'pedro.henrique1@example.com',
        classeDeAulaId: historia.id,
      }
    ],
  });

  console.log('✅ Seed concluída com sucesso!');
}

main()
  .catch(e => {
    console.error('❌ Erro ao executar seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
