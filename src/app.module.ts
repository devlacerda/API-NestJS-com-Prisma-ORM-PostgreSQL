import { Module } from '@nestjs/common';
import { ClasseModule } from './classe/classe.module';
import { AlunoModule } from './aluno/aluno.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule, ClasseModule, AlunoModule],
})
export class AppModule {}
