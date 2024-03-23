import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from 'src/common/database/abstract.repository';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository extends AbstractRepository<User> {
  protected readonly logger = new Logger(UserRepository.name);

  constructor(@InjectModel(User.name) useModel: Model<User>) {
    super(useModel);
  }
}
