import { Controller, Post, Get, Body } from '@nestjs/common';
import { ClasseService } from './classe.service';

@Controller('classe')
export class ClasseController {
  constructor(private readonly service: ClasseService) {}

  @Post()
  create(@Body() dto: { nome: string; descricao: string }) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
