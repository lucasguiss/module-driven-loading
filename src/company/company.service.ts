import { Injectable } from '@nestjs/common';

@Injectable()
export class CompanyService {
  async createCompany(): Promise<string> {
    return 'success';
  }
}
