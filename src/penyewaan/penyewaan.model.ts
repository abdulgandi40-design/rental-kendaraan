import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PelangganType {
  @Field(() => Int)
  id: number;

  @Field()
  nama: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  no_telp?: string;
}

@ObjectType()
export class KendaraanType {
  @Field(() => Int)
  id: number;

  @Field()
  merk: string;

  @Field()
  tipe: string;

  @Field({ nullable: true })
  plat?: string;
}

@ObjectType()
export class PenyewaanType {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  pelangganId: number;

  @Field(() => Int)
  kendaraanId: number;

  @Field()
  tanggal_sewa: Date;

  @Field(() => Int)
  total_biaya: number;

  @Field(() => PelangganType, { nullable: true })
  pelanggan?: PelangganType;

  @Field(() => KendaraanType, { nullable: true })
  kendaraan?: KendaraanType;
}