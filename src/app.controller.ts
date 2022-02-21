import { Controller, Post } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';
import { CompanyModule } from './company/company.module';
import { CompanyService } from './company/company.service';

@Controller()
export class AppController {
  constructor(private readonly lazyModuleLoader: LazyModuleLoader) {}

  @Post()
  async createCompany() {
    const moduleRef = await this.lazyModuleLoader.load(() => CompanyModule);
    const service = moduleRef.get(CompanyService);
    return service.createCompany();
  }
}
