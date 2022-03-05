import { Injectable } from '@nestjs/common';
import { CompanyRepository } from './company.repository';
import { Company } from './models/company';

@Injectable()
export class CompanyService {
  constructor(private readonly repository: CompanyRepository) {}

  async createCompany(company: Company): Promise<Company[]> {
    return this.repository.create(company);
  }

  async findAll(): Promise<Company[]> {
    return this.repository.findAll();
  }
}
