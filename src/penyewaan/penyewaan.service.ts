import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PenyewaanService {
  constructor(private prisma: PrismaService) {}

  // Menjawab Soal 3a: Mengambil detail penyewaan berdasarkan ID beserta relasi Pelanggan dan Kendaraan
  async findOne(id: number) {
    return this.prisma.penyewaan.findUnique({
      where: { id: Number(id) },
      include: {
        pelanggan: true,
        kendaraan: true,
      },
    });
  }

  // Fungsi tambahan untuk mengambil semua daftar penyewaan beserta relasinya
  async findAll() {
    return this.prisma.penyewaan.findMany({
      include: {
        pelanggan: true,
        kendaraan: true,
      },
    });
  }
}