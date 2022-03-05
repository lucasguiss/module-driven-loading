import { Module } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { ProductsService } from './products.service';

@Module({
  exports: [ProductsService, ProductsRepository],
  providers: [ProductsService, ProductsRepository],
})
export class ProductsModule {}
