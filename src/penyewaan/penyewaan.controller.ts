import { Controller, Get, Param } from '@nestjs/common';
import { PenyewaanService } from './penyewaan.service';

@Controller('penyewaan')
export class PenyewaanController {
  constructor(private readonly penyewaanService: PenyewaanService) {}

  @Get()
  findAll() {
    return this.penyewaanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.penyewaanService.findOne(+id);
  }
}