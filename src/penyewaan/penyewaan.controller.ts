import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PenyewaanService } from './penyewaan.service';
import { CreatePenyewaanDto } from './dto/create-penyewaan.dto';

@Controller('penyewaan')
export class PenyewaanController {
  constructor(private readonly penyewaanService: PenyewaanService) {}

  // Menjalankan endpoint POST /penyewaan
  @Post()
  create(@Body() createPenyewaanDto: CreatePenyewaanDto) {
    return this.penyewaanService.create(createPenyewaanDto);
  }

  // Menjalankan endpoint GET /penyewaan
  @Get()
  findAll() {
    return this.penyewaanService.findAll();
  }

  // Menjalankan endpoint GET /penyewaan/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.penyewaanService.findOne(+id);
  }

  // Menjalankan endpoint DELETE /penyewaan/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.penyewaanService.remove(+id);
  }
}