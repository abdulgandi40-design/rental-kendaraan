import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { PenyewaanService } from './penyewaan.service';
import { PenyewaanType } from './penyewaan.model';

@Resolver(() => PenyewaanType)
export class PenyewaanResolver {
  constructor(private readonly penyewaanService: PenyewaanService) {}

  @Query(() => PenyewaanType, { name: 'penyewaan', nullable: true })
  async getPenyewaan(@Args('id', { type: () => Int }) id: number) {
    return this.penyewaanService.findOne(id);
  }

  @Query(() => [PenyewaanType], { name: 'semuaPenyewaan' })
  async getSemuaPenyewaan() {
    return this.penyewaanService.findAll();
  }
}