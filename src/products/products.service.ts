import { Injectable } from '@nestjs/common';
import { Product } from './models/product';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly repository: ProductsRepository) {}

  async createProduct(payload: Product): Promise<Product[]> {
    return this.repository.create(payload);
  }

  async findAll(): Promise<Product[]> {
    return this.repository.findAll();
  }
}
