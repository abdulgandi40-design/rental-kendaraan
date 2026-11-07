import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePenyewaanDto } from './dto/create-penyewaan.dto';

@Injectable()
export class PenyewaanService {
  constructor(private prisma: PrismaService) {}

  // POST: Membuat data penyewaan baru
  async create(createPenyewaanDto: CreatePenyewaanDto) {
    return this.prisma.penyewaan.create({
      data: {
        pelangganId: createPenyewaanDto.pelangganId,
        kendaraanId: createPenyewaanDto.kendaraanId,
        tanggal_sewa: new Date(createPenyewaanDto.tanggal_sewa),
        total_biaya: createPenyewaanDto.total_biaya,
      },
    });
  }

  // GET: Mengambil semua data penyewaan
  async findAll() {
    return this.prisma.penyewaan.findMany({
      include: {
        pelanggan: true,
        kendaraan: true,
      },
    });
  }

  // GET: Mengambil satu data penyewaan beserta relasinya
  async findOne(id: number) {
    return this.prisma.penyewaan.findUnique({
      where: { id: Number(id) },
      include: {
        pelanggan: true,
        kendaraan: true,
      },
    });
  }

  // DELETE: Menghapus data penyewaan
  async remove(id: number) {
    return this.prisma.penyewaan.delete({
      where: { id: Number(id) },
    });
  }
}