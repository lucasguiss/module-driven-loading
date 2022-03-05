import { BaseRepository, Repository } from '@roit/roit-data-firestore';
import { Product } from './models/product';

@Repository({
  collection: 'products',
  validateModel: Product,
})
export class ProductsRepository extends BaseRepository<Product> {}
