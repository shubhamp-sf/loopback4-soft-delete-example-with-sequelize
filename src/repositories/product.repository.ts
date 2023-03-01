import {inject} from '@loopback/core';
import {IAuthUserWithPermissions} from '@sourceloop/core';
import {SequelizeUserModifyCrudRepository} from '@sourceloop/core/sequelize';
import {DbDataSource} from '../datasources';
import {Product, ProductRelations} from '../models';

const loggedInUserData = {
  id: 1,
} as unknown as IAuthUserWithPermissions;

export class ProductRepository extends SequelizeUserModifyCrudRepository<
  Product,
  typeof Product.prototype.id,
  ProductRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Product, dataSource, () => Promise.resolve(loggedInUserData));
  }
}
