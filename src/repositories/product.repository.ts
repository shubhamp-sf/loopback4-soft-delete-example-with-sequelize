import {inject} from '@loopback/core';
import {IUser} from 'loopback4-soft-delete';
import {SequelizeSoftCrudRepository} from 'loopback4-soft-delete/sequelize';
import {DbDataSource} from '../datasources';
import {Product, ProductRelations} from '../models';

const loggedInUserData: IUser = {
  id: 1,
};

export class ProductRepository extends SequelizeSoftCrudRepository<
  Product,
  typeof Product.prototype.id,
  ProductRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Product, dataSource, () => Promise.resolve(loggedInUserData));
  }
}
