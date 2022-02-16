import { Controller, Post } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';

@Controller()
export class AppController {


  constructor(
    private readonly lazyModuleLoader: LazyModuleLoader
  ) {}

  @Post()
  async createCompany() {
    const { CompanyModule } = await import('./company/company.module')
    const moduleRef = await this.lazyModuleLoader.load(() => CompanyModule)
    const { CompanyService } = await import('./company/company.service')
    const service = moduleRef.get(CompanyService)
    return service.createCompany()
  }

}
