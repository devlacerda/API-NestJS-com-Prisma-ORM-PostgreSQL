import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AlunoService {
  constructor(private prisma: PrismaService) {}

  async create(data: { nome: string; email: string; classeDeAulaId: number }) {
    return this.prisma.aluno.create({ data });
  }

  async findAll() {
    return this.prisma.aluno.findMany({
      include: { classeDeAula: true },
    });
  }
}
