import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaService } from './prisma.service';
import { PenyewaanController } from './penyewaan/penyewaan.controller';
import { PenyewaanService } from './penyewaan/penyewaan.service';
import { PenyewaanResolver } from './penyewaan/penyewaan.resolver';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false, // Kembali gunakan GraphiQL (Playground) bawaan
      csrfPrevention: false, // Tambahkan baris ini untuk mematikan blokir CSRF
      plugins: [ApolloServerPluginLandingPageLocalDefault() as any], // 👈 Tambahkan "as any" di bagian akhir ini
    }),
  ],
  controllers: [PenyewaanController],
  providers: [PrismaService, PenyewaanService, PenyewaanResolver],
})
export class AppModule {}