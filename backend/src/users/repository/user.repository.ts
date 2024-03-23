import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from 'src/common/database/abstract.repository';
import { UserDocument } from '../entities/user.schema';

@Injectable()
export class UserRepository extends AbstractRepository<UserDocument> {
  protected readonly logger = new Logger(UserRepository.name);

  constructor(@InjectModel(UserDocument.name) useModel: Model<UserDocument>) {
    super(useModel);
  }

  async findByEmail(email: string): Promise<UserDocument> {
    return this.findOne({ email });
  }
}
