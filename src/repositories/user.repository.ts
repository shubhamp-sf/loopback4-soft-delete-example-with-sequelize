import {inject} from '@loopback/core';
import {IUser, SoftCrudRepository} from 'loopback4-soft-delete';
import {DbDataSource} from '../datasources';
import {User, UserRelations} from '../models';

const loggedInUserData: IUser = {
  id: 1,
};

export class UserRepository extends SoftCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(User, dataSource, () => Promise.resolve(loggedInUserData));
  }
}
