import { Injectable } from '@nestjs/common';

import { BaseRepository, Repository } from '@roit/roit-data-firestore';
import { Company } from './models/company';

@Repository({
  collection: 'company',
  validateModel: Company,
})
@Injectable()
export class CompanyRepository extends BaseRepository<Company> {}
