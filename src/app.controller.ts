import { Body, Controller, Get, Post } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';
import { CompanyModule } from './company/company.module';
import { CompanyService } from './company/company.service';
import { Company } from './company/models/company';
import { Product } from './products/models/product';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/products.service';

@Controller()
export class AppController {
  constructor(private readonly lazyModuleLoader: LazyModuleLoader) {}

  @Post('company')
  async createCompany(@Body() payload: Company): Promise<Company[]> {
    const moduleRef = await this.lazyModuleLoader.load(() => CompanyModule);
    const service = moduleRef.get(CompanyService);
    return service.createCompany(payload);
  }

  @Get('companies')
  async findAllCompanies(): Promise<Company[]> {
    const moduleRef = await this.lazyModuleLoader.load(() => CompanyModule);
    const service = moduleRef.get(CompanyService);
    return service.findAll();
  }

  @Post('product')
  async createProduct(@Body() payload: Product): Promise<Product[]> {
    const moduleRef = await this.lazyModuleLoader.load(() => ProductsModule);
    const service = moduleRef.get(ProductsService);
    return service.createProduct(payload);
  }

  @Get('products')
  async findAllProducts(): Promise<Product[]> {
    const moduleRef = await this.lazyModuleLoader.load(() => ProductsModule);
    const service = moduleRef.get(ProductsService);
    return service.findAll();
  }
}
