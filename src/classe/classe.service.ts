import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ClasseService {
  constructor(private prisma: PrismaService) {}

  async create(data: { nome: string; descricao: string }) {
    return this.prisma.classeDeAula.create({ data });
  }

  async findAll() {
    return this.prisma.classeDeAula.findMany();
  }
}
