import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaService } from './prisma.service';
import { PenyewaanController } from './penyewaan/penyewaan.controller';
import { PenyewaanService } from './penyewaan/penyewaan.service';
import { PenyewaanResolver } from './penyewaan/penyewaan.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
  ],
  controllers: [PenyewaanController],
  providers: [PrismaService, PenyewaanService, PenyewaanResolver],
})
export class AppModule {}