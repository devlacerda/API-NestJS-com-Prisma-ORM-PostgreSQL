import { Module } from '@nestjs/common';
import { ClasseService } from './classe.service';
import { ClasseController } from './classe.controller';

@Module({
  providers: [ClasseService],
  controllers: [ClasseController]
})
export class ClasseModule {}
