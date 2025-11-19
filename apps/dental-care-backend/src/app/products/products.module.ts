import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';

@Module({
  providers: [ProductsResolver, ProductsService],
  imports:[PrismaModule]
})
export class ProductsModule {}
