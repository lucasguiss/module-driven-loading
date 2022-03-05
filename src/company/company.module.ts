import { Module } from '@nestjs/common';
import { CompanyRepository } from './company.repository';
import { CompanyService } from './company.service';

@Module({
  providers: [CompanyService, CompanyRepository],
  exports: [CompanyService, CompanyRepository],
})
export class CompanyModule {}
