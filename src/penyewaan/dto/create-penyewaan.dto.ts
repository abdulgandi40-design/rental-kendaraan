import { IsNumber, IsDateString, Min } from 'class-validator';

export class CreatePenyewaanDto {
  @IsNumber()
  pelangganId: number;

  @IsNumber()
  kendaraanId: number;

  @IsDateString()
  tanggal_sewa: string;

  @IsNumber()
  @Min(0)
  total_biaya: number;
}